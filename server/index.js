import express from 'express'
import cors from 'cors'
import ytdl from '@distube/ytdl-core'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Video downloader API is running' })
})

// Get video info endpoint
app.get('/api/video/info', async (req, res) => {
  try {
    const { url } = req.query

    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' })
    }

    // Validate if it's a YouTube URL
    if (!ytdl.validateURL(url)) {
      return res.status(400).json({ 
        error: 'Invalid YouTube URL',
        message: 'Please provide a valid YouTube video URL'
      })
    }

    console.log('Fetching video info for:', url)

    // Get video info
    const info = await ytdl.getInfo(url)
    const videoDetails = info.videoDetails
    const formats = info.formats

    // Separate video and audio formats
    const videoFormats = formats
      .filter(format => format.hasVideo && format.hasAudio)
      .map((format, index) => {
        const quality = format.qualityLabel || format.quality
        const fileSize = format.contentLength 
          ? `${(parseInt(format.contentLength) / (1024 * 1024)).toFixed(2)} MB`
          : 'Unknown'

        return {
          id: `v${index}`,
          quality: quality,
          format: format.container || 'mp4',
          resolution: format.qualityLabel || `${format.width}x${format.height}`,
          fileSize: fileSize,
          fps: format.fps || 30,
          downloadUrl: format.url,
          itag: format.itag,
          mimeType: format.mimeType
        }
      })
      .sort((a, b) => {
        // Sort by quality (highest first)
        const qualityOrder = { '2160p': 5, '1440p': 4, '1080p': 3, '720p': 2, '480p': 1, '360p': 0 }
        const qualityA = Object.keys(qualityOrder).find(q => a.quality?.includes(q)) || '360p'
        const qualityB = Object.keys(qualityOrder).find(q => b.quality?.includes(q)) || '360p'
        return qualityOrder[qualityB] - qualityOrder[qualityA]
      })

    const audioFormats = formats
      .filter(format => format.hasAudio && !format.hasVideo)
      .map((format, index) => {
        const fileSize = format.contentLength 
          ? `${(parseInt(format.contentLength) / (1024 * 1024)).toFixed(2)} MB`
          : 'Unknown'

        return {
          id: `a${index}`,
          quality: format.audioBitrate ? `${format.audioBitrate} kbps` : 'High',
          format: format.container || 'mp3',
          bitrate: format.audioBitrate ? `${format.audioBitrate} kbps` : 'Unknown',
          fileSize: fileSize,
          downloadUrl: format.url,
          itag: format.itag,
          mimeType: format.mimeType
        }
      })
      .sort((a, b) => parseInt(b.bitrate) - parseInt(a.bitrate))

    // Get subtitles/captions
    const subtitles = []
    if (videoDetails.subtitles) {
      Object.entries(videoDetails.subtitles).forEach(([lang, subtitle]) => {
        subtitles.push({
          id: lang,
          language: subtitle.languageName || lang,
          flag: '🌐',
          type: 'Closed Captions',
          formats: ['SRT', 'VTT', 'TXT']
        })
      })
    }

    // Format duration from seconds to MM:SS or HH:MM:SS
    const formatDuration = (seconds) => {
      const hrs = Math.floor(seconds / 3600)
      const mins = Math.floor((seconds % 3600) / 60)
      const secs = seconds % 60
      
      if (hrs > 0) {
        return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
      }
      return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    // Format view count
    const formatViews = (count) => {
      if (count >= 1000000) {
        return `${(count / 1000000).toFixed(1)}M`
      } else if (count >= 1000) {
        return `${(count / 1000).toFixed(1)}K`
      }
      return count.toString()
    }

    // Prepare response
    const response = {
      title: videoDetails.title,
      author: videoDetails.author.name,
      duration: formatDuration(parseInt(videoDetails.lengthSeconds)),
      views: formatViews(parseInt(videoDetails.viewCount)),
      uploadDate: videoDetails.uploadDate || 'Unknown',
      thumbnail: videoDetails.thumbnails[videoDetails.thumbnails.length - 1].url,
      description: videoDetails.description,
      videoFormats: videoFormats.slice(0, 10), // Limit to top 10 formats
      audioFormats: audioFormats.slice(0, 5), // Limit to top 5 audio formats
      subtitles: subtitles,
      platform: 'youtube',
      originalUrl: url,
      demoMode: false
    }

    console.log('Video info fetched successfully:', videoDetails.title)
    res.json(response)

  } catch (error) {
    console.error('Error fetching video info:', error)
    
    // Better error handling
    if (error.message.includes('Video unavailable')) {
      return res.status(404).json({ 
        error: 'VIDEO_UNAVAILABLE',
        message: 'This video is not available. It may be private, deleted, or age-restricted.'
      })
    }
    
    if (error.message.includes('429')) {
      return res.status(429).json({ 
        error: 'RATE_LIMIT',
        message: 'Too many requests. Please try again later.'
      })
    }

    res.status(500).json({ 
      error: 'FETCH_FAILED',
      message: error.message || 'Failed to fetch video information'
    })
  }
})

// Download video endpoint (returns video stream)
app.get('/api/video/download', async (req, res) => {
  try {
    const { url, quality } = req.query

    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' })
    }

    if (!ytdl.validateURL(url)) {
      return res.status(400).json({ error: 'Invalid YouTube URL' })
    }

    console.log('Starting download for:', url, 'Quality:', quality)

    // Get video info to set proper filename
    const info = await ytdl.getInfo(url)
    const title = info.videoDetails.title.replace(/[^\w\s-]/g, '').replace(/\s+/g, '_')

    // Set headers for download
    res.setHeader('Content-Disposition', `attachment; filename="${title}.mp4"`)
    res.setHeader('Content-Type', 'video/mp4')

    // Stream video directly to response
    const videoStream = ytdl(url, {
      quality: quality || 'highest',
      filter: 'audioandvideo'
    })

    videoStream.pipe(res)

    videoStream.on('error', (error) => {
      console.error('Stream error:', error)
      if (!res.headersSent) {
        res.status(500).json({ error: 'Download failed' })
      }
    })

  } catch (error) {
    console.error('Error downloading video:', error)
    if (!res.headersSent) {
      res.status(500).json({ 
        error: 'DOWNLOAD_FAILED',
        message: error.message || 'Failed to download video'
      })
    }
  }
})

// Get supported platforms
app.get('/api/platforms', (req, res) => {
  res.json({
    platforms: [
      { name: 'YouTube', supported: true, icon: '▶️' },
      { name: 'TikTok', supported: false, icon: '🎵', note: 'Coming soon' },
      { name: 'Instagram', supported: false, icon: '📷', note: 'Coming soon' },
      { name: 'Facebook', supported: false, icon: '👥', note: 'Coming soon' },
      { name: 'Twitter/X', supported: false, icon: '🐦', note: 'Coming soon' }
    ],
    message: 'Currently supporting YouTube. More platforms coming soon!'
  })
})

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error)
  res.status(500).json({ 
    error: 'INTERNAL_ERROR',
    message: 'An unexpected error occurred'
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`✅ Video Downloader API server running on port ${PORT}`)
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`)
  console.log(`🎥 Video info: http://localhost:${PORT}/api/video/info?url=YOUTUBE_URL`)
})

export default app
