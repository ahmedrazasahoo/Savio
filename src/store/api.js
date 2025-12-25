// Video Downloader API Service - Production Ready
// Uses local/deployed backend with open-source ytdl-core

// Get API base URL from environment or use default
const getApiBaseUrl = () => {
  return import.meta.env.VITE_API_URL || 'http://localhost:3001'
}

/**
 * Detect platform from URL
 */
export const detectPlatform = (url) => {
  const patterns = {
    youtube: /(?:youtube\.com|youtu\.be)/i,
    tiktok: /tiktok\.com/i,
    instagram: /instagram\.com/i,
    facebook: /facebook\.com|fb\.watch/i,
    twitter: /twitter\.com|x\.com/i,
    vimeo: /vimeo\.com/i,
    dailymotion: /dailymotion\.com/i,
    twitch: /twitch\.tv/i,
    reddit: /reddit\.com/i
  }

  for (const [platform, pattern] of Object.entries(patterns)) {
    if (pattern.test(url)) {
      return platform
    }
  }

  return 'unknown'
}

/**
 * Validate URL
 */
export const isValidUrl = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Check if backend API is available
 */
export const checkApiHealth = async () => {
  try {
    const apiUrl = getApiBaseUrl()
    const response = await fetch(`${apiUrl}/api/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('API not available')
    }

    const data = await response.json()
    return data.status === 'ok'
  } catch (error) {
    console.error('API health check failed:', error)
    return false
  }
}

/**
 * Fetch video data from backend API
 */
export const fetchVideoData = async (url) => {
  // Validate URL
  if (!isValidUrl(url)) {
    throw new Error('Please enter a valid URL')
  }

  const platform = detectPlatform(url)

  // Currently only YouTube is supported
  if (platform !== 'youtube') {
    throw new Error(`Currently only YouTube videos are supported. ${platform.charAt(0).toUpperCase() + platform.slice(1)} support coming soon!`)
  }

  try {
    const apiUrl = getApiBaseUrl()
    const endpoint = `${apiUrl}/api/video/info?url=${encodeURIComponent(url)}`

    console.log('Fetching video data from:', endpoint)

    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      
      // Handle specific errors
      if (response.status === 404) {
        throw new Error('Video not found. It may be private, deleted, or age-restricted.')
      }
      
      if (response.status === 429) {
        throw new Error('Too many requests. Please wait a moment and try again.')
      }

      if (response.status === 400) {
        throw new Error(errorData.message || 'Invalid video URL')
      }

      throw new Error(errorData.message || 'Failed to fetch video information')
    }

    const data = await response.json()
    console.log('Video data fetched successfully:', data.title)
    
    return data

  } catch (error) {
    // Check if it's a network error (backend not running)
    if (error.message === 'Failed to fetch' || error.message.includes('ECONNREFUSED')) {
      throw new Error('Cannot connect to backend server. Please make sure the backend is running on ' + getApiBaseUrl())
    }

    // Re-throw the error with the original message
    throw error
  }
}

/**
 * Download video file
 * In production mode, this creates a link to the download endpoint
 */
export const downloadVideo = async (downloadUrl, filename = 'video.mp4') => {
  try {
    // If it's a demo URL (starts with #), show demo message
    if (downloadUrl === '#' || !downloadUrl) {
      alert('This is a demo mode. Real downloads are now available through the backend API!')
      return
    }

    // Check if it's already a direct URL from ytdl-core
    if (downloadUrl.includes('googlevideo.com')) {
      // Direct download from YouTube servers
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = filename
      link.target = '_blank'
      link.setAttribute('rel', 'noopener noreferrer')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      console.log('Download started:', filename)
    } else {
      // Fallback: use backend download endpoint
      const apiUrl = getApiBaseUrl()
      const link = document.createElement('a')
      link.href = `${apiUrl}/api/video/download?url=${encodeURIComponent(downloadUrl)}`
      link.download = filename
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

  } catch (error) {
    console.error('Download error:', error)
    throw new Error('Failed to start download. Please try again.')
  }
}

/**
 * Download subtitle file
 */
export const downloadSubtitle = async (videoUrl, language, format = 'srt') => {
  try {
    const apiUrl = getApiBaseUrl()
    const endpoint = `${apiUrl}/api/video/subtitle?url=${encodeURIComponent(videoUrl)}&lang=${language}&format=${format}`

    const response = await fetch(endpoint)
    
    if (!response.ok) {
      throw new Error('Failed to fetch subtitle')
    }

    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `subtitle_${language}.${format}`
    link.click()
    window.URL.revokeObjectURL(url)

  } catch (error) {
    console.error('Subtitle download error:', error)
    throw new Error('Failed to download subtitle')
  }
}

/**
 * Get supported platforms list
 */
export const getSupportedPlatforms = async () => {
  try {
    const apiUrl = getApiBaseUrl()
    const response = await fetch(`${apiUrl}/api/platforms`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch supported platforms')
    }

    const data = await response.json()
    return data.platforms

  } catch (error) {
    console.error('Error fetching platforms:', error)
    // Return default list if API call fails
    return [
      { name: 'YouTube', supported: true, icon: '▶️' },
      { name: 'TikTok', supported: false, icon: '🎵', note: 'Coming soon' },
      { name: 'Instagram', supported: false, icon: '📷', note: 'Coming soon' },
      { name: 'Facebook', supported: false, icon: '👥', note: 'Coming soon' },
      { name: 'Twitter/X', supported: false, icon: '🐦', note: 'Coming soon' }
    ]
  }
}

/**
 * Batch download multiple videos
 */
export const batchDownload = async (urls, onProgress) => {
  const results = {
    success: [],
    failed: []
  }

  for (let i = 0; i < urls.length; i++) {
    try {
      const videoData = await fetchVideoData(urls[i])
      
      // Download the highest quality format
      if (videoData.videoFormats && videoData.videoFormats.length > 0) {
        const format = videoData.videoFormats[0]
        await downloadVideo(format.downloadUrl, `video_${i + 1}.${format.format}`)
        results.success.push(urls[i])
      }

      // Notify progress
      if (onProgress) {
        onProgress({
          current: i + 1,
          total: urls.length,
          currentUrl: urls[i]
        })
      }

      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000))

    } catch (error) {
      console.error(`Failed to download ${urls[i]}:`, error)
      results.failed.push({ url: urls[i], error: error.message })
    }
  }

  return results
}

export default {
  fetchVideoData,
  downloadVideo,
  downloadSubtitle,
  detectPlatform,
  isValidUrl,
  getSupportedPlatforms,
  checkApiHealth,
  batchDownload
}
