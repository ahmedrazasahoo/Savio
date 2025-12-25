<template>
  <div class="download-page">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Download Video</h1>
        <router-link to="/" class="btn btn-outline">
          ← Back to Home
        </router-link>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="loading-container">
        <div class="spinner-large"></div>
        <p class="loading-text">Analyzing video...</p>
      </div>

      <!-- Video Details -->
      <div v-else-if="videoData" class="video-details-container">
        <!-- Video Preview -->
        <div class="video-preview-section">
          <div class="video-thumbnail-wrapper">
            <img :src="videoData.thumbnail" :alt="videoData.title" class="video-thumbnail" />
            <div class="duration-badge">{{ videoData.duration }}</div>
          </div>
          
          <div class="video-info">
            <h2 class="video-title">{{ videoData.title }}</h2>
            <div class="video-meta">
              <span class="meta-item">
                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="8.5" cy="7" r="4" stroke-width="2"/>
                </svg>
                {{ videoData.author }}
              </span>
              <span class="meta-item">
                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke-width="2"/>
                  <circle cx="12" cy="12" r="3" stroke-width="2"/>
                </svg>
                {{ videoData.views }} views
              </span>
              <span class="meta-item">
                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke-width="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke-width="2" stroke-linecap="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke-width="2" stroke-linecap="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke-width="2"/>
                </svg>
                {{ videoData.uploadDate }}
              </span>
            </div>
          </div>
        </div>

        <!-- Ad Space -->
        <div class="ad-space">Advertisement Space</div>

        <!-- Download Options Tabs -->
        <div class="download-options-section">
          <div class="tabs-header">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              class="tab-btn"
              :class="{ active: activeTab === tab.id }"
            >
              {{ tab.icon }} {{ tab.label }}
            </button>
          </div>

          <!-- Single Video Download Tab -->
          <div v-show="activeTab === 'single'" class="tab-content">
            <h3 class="section-heading">Select Format & Quality</h3>
            
            <!-- Video Format Options -->
            <div class="format-category">
              <h4 class="category-title">
                <svg class="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polygon points="23 7 16 12 23 17 23 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke-width="2"/>
                </svg>
                Video Formats
              </h4>
              
              <div class="options-grid">
                <div
                  v-for="option in videoData.videoFormats"
                  :key="option.id"
                  class="format-option"
                  :class="{ selected: selectedFormat?.id === option.id }"
                  @click="selectFormat(option)"
                >
                  <div class="option-header">
                    <span class="quality-badge" :class="getQualityClass(option.quality)">
                      {{ option.quality }}
                    </span>
                    <span class="format-type">{{ option.format }}</span>
                  </div>
                  <div class="option-details">
                    <span class="detail-item">{{ option.resolution }}</span>
                    <span class="detail-separator">•</span>
                    <span class="detail-item">{{ option.fileSize }}</span>
                    <span v-if="option.fps" class="detail-separator">•</span>
                    <span v-if="option.fps" class="detail-item">{{ option.fps }} FPS</span>
                  </div>
                  <div v-if="option.badge" class="option-badge">{{ option.badge }}</div>
                </div>
              </div>
            </div>

            <!-- Audio Format Options -->
            <div class="format-category">
              <h4 class="category-title">
                <svg class="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 18V5l12-2v13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="6" cy="18" r="3" stroke-width="2"/>
                  <circle cx="18" cy="16" r="3" stroke-width="2"/>
                </svg>
                Audio Only
              </h4>
              
              <div class="options-grid">
                <div
                  v-for="option in videoData.audioFormats"
                  :key="option.id"
                  class="format-option"
                  :class="{ selected: selectedFormat?.id === option.id }"
                  @click="selectFormat(option)"
                >
                  <div class="option-header">
                    <span class="quality-badge">{{ option.quality }}</span>
                    <span class="format-type">{{ option.format }}</span>
                  </div>
                  <div class="option-details">
                    <span class="detail-item">{{ option.bitrate }}</span>
                    <span class="detail-separator">•</span>
                    <span class="detail-item">{{ option.fileSize }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Download Button -->
            <div class="download-action">
              <button
                class="btn btn-success btn-lg download-final-btn"
                :disabled="!selectedFormat || isDownloading"
                @click="startDownload"
              >
                <svg v-if="!isDownloading" class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="7 10 12 15 17 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <span v-if="!isDownloading">Download {{ selectedFormat?.quality || 'Selected' }} - {{ selectedFormat?.fileSize || '' }}</span>
                <span v-else class="processing-text">
                  <span class="spinner"></span>
                  Preparing download...
                </span>
              </button>
              
              <p v-if="selectedFormat" class="download-note">
                File: {{ selectedFormat.format }} • Size: {{ selectedFormat.fileSize }}
              </p>
            </div>
          </div>

          <!-- Subtitles Tab -->
          <div v-show="activeTab === 'subtitles'" class="tab-content">
            <h3 class="section-heading">Download Subtitles / Captions</h3>
            
            <div v-if="videoData.subtitles && videoData.subtitles.length > 0" class="subtitles-list">
              <div
                v-for="subtitle in videoData.subtitles"
                :key="subtitle.id"
                class="subtitle-item"
              >
                <div class="subtitle-info">
                  <span class="subtitle-flag">{{ subtitle.flag }}</span>
                  <div class="subtitle-details">
                    <span class="subtitle-language">{{ subtitle.language }}</span>
                    <span class="subtitle-type">{{ subtitle.type }}</span>
                  </div>
                </div>
                <div class="subtitle-formats">
                  <button
                    v-for="format in subtitle.formats"
                    :key="format"
                    @click="downloadSubtitle(subtitle, format)"
                    class="subtitle-format-btn"
                  >
                    {{ format }}
                  </button>
                </div>
              </div>
            </div>
            <div v-else class="empty-state">
              <p class="empty-text">No subtitles available for this video.</p>
            </div>
          </div>

          <!-- Batch Download Tab -->
          <div v-show="activeTab === 'batch'" class="tab-content">
            <h3 class="section-heading">Batch Download / Playlist</h3>
            
            <div class="batch-info-card">
              <div class="info-icon">📋</div>
              <div class="info-content">
                <h4 class="info-title">Batch Download Feature</h4>
                <p class="info-description">
                  Enter a playlist URL or multiple video URLs (one per line) to download multiple videos at once. 
                  All videos will be downloaded with your selected quality settings.
                </p>
              </div>
            </div>

            <div class="batch-input-section">
              <label class="batch-label">Enter URLs (one per line):</label>
              <textarea
                v-model="batchUrls"
                class="batch-textarea"
                placeholder="https://www.youtube.com/watch?v=video1&#10;https://www.youtube.com/watch?v=video2&#10;https://www.youtube.com/playlist?list=..."
                rows="8"
              ></textarea>

              <div class="batch-settings">
                <div class="setting-group">
                  <label class="setting-label">Preferred Quality:</label>
                  <select v-model="batchQuality" class="setting-select">
                    <option value="highest">Highest Available</option>
                    <option value="4k">4K (2160p)</option>
                    <option value="1080p">1080p</option>
                    <option value="720p">720p</option>
                    <option value="480p">480p</option>
                  </select>
                </div>
                
                <div class="setting-group">
                  <label class="setting-label">Format:</label>
                  <select v-model="batchFormat" class="setting-select">
                    <option value="mp4">MP4 (Video)</option>
                    <option value="webm">WebM (Video)</option>
                    <option value="mp3">MP3 (Audio Only)</option>
                  </select>
                </div>
              </div>

              <button
                @click="startBatchDownload"
                :disabled="!batchUrls.trim() || isBatchProcessing"
                class="btn btn-primary btn-lg batch-download-btn"
              >
                <svg v-if="!isBatchProcessing" class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="7 10 12 15 17 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <span v-if="!isBatchProcessing">Start Batch Download</span>
                <span v-else class="processing-text">
                  <span class="spinner"></span>
                  Processing {{ batchProgress.current }}/{{ batchProgress.total }}...
                </span>
              </button>

              <div v-if="isBatchProcessing" class="batch-progress">
                <div class="progress-bar-wrapper">
                  <div class="progress-bar" :style="{ width: batchProgressPercent + '%' }"></div>
                </div>
                <p class="progress-text">{{ batchProgress.current }} of {{ batchProgress.total }} videos processed</p>
              </div>
            </div>
          </div>

          <!-- Convert Tab -->
          <div v-show="activeTab === 'convert'" class="tab-content">
            <h3 class="section-heading">Convert Video</h3>
            
            <div class="convert-options">
              <div class="convert-card">
                <div class="convert-icon">🎬</div>
                <h4 class="convert-title">Convert to GIF</h4>
                <p class="convert-description">Convert video to animated GIF image</p>
                <button @click="convertToGif" class="btn btn-outline">Convert to GIF</button>
              </div>

              <div class="convert-card">
                <div class="convert-icon">🎵</div>
                <h4 class="convert-title">Extract Audio</h4>
                <p class="convert-description">Extract audio track as MP3/M4A</p>
                <button @click="extractAudio" class="btn btn-outline">Extract Audio</button>
              </div>

              <div class="convert-card">
                <div class="convert-icon">✂️</div>
                <h4 class="convert-title">Trim Video</h4>
                <p class="convert-description">Cut and trim video duration</p>
                <button @click="trimVideo" class="btn btn-outline">Trim Video</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Ad Space -->
        <div class="ad-space ad-space-large">Advertisement Space</div>

        <!-- Important Notice -->
        <div class="notice-box">
          <h4 class="notice-title">📌 Important Information</h4>
          <ul class="notice-list">
            <li>Downloads are for personal use only</li>
            <li>Ensure you have the right to download and use this content</li>
            <li>We do not host or store any videos on our servers</li>
            <li>Download speeds depend on your internet connection</li>
            <li>Some formats may not be available for all videos</li>
            <li>4K and 8K downloads require more bandwidth and storage space</li>
            <li>Batch downloads may take longer depending on the number of videos</li>
          </ul>
        </div>
      </div>

      <!-- Error State -->
      <div v-else class="error-container">
        <div class="error-icon">⚠️</div>
        <h2 class="error-title">Unable to Process Video</h2>
        <p class="error-message">
          We couldn't retrieve video information. Please check the URL and try again.
        </p>
        <router-link to="/" class="btn btn-primary">
          Try Another Video
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { fetchVideoData, downloadVideo } from '../store/api.js'

const route = useRoute()
const isLoading = ref(true)
const isDownloading = ref(false)
const isBatchProcessing = ref(false)
const videoData = ref(null)
const selectedFormat = ref(null)
const activeTab = ref('single')
const batchUrls = ref('')
const batchQuality = ref('1080p')
const batchFormat = ref('mp4')
const batchProgress = ref({ current: 0, total: 0 })
const errorMessage = ref('')

const tabs = [
  { id: 'single', label: 'Single Video', icon: '🎥' },
  { id: 'subtitles', label: 'Subtitles', icon: '📝' },
  { id: 'batch', label: 'Batch/Playlist', icon: '📋' },
  { id: 'convert', label: 'Convert', icon: '🔄' }
]

const batchProgressPercent = computed(() => {
  if (batchProgress.value.total === 0) return 0
  return (batchProgress.value.current / batchProgress.value.total) * 100
})

// Fetch real video data
onMounted(async () => {
  const videoUrl = route.query.url

  if (!videoUrl) {
    isLoading.value = false
    return
  }

  try {
    // Fetch video data from API
    const data = await fetchVideoData(videoUrl)
    videoData.value = data

    // Show info if in demo mode
    if (data.demoMode) {
      console.log('Running in demo mode - API key not configured')
    }
  } catch (error) {
    console.error('Error fetching video data:', error)
    errorMessage.value = error.message
  } finally {
    isLoading.value = false
  }
})

const getQualityClass = (quality) => {
  const q = quality.toLowerCase()
  if (q.includes('8k') || q.includes('4k')) return 'ultra-hd'
  if (q.includes('1440p') || q.includes('1080p')) return 'full-hd'
  if (q.includes('720p')) return 'hd'
  return 'sd'
}

const selectFormat = (format) => {
  selectedFormat.value = format
}

const startDownload = async () => {
  if (!selectedFormat.value) return

  isDownloading.value = true

  try {
    const filename = `video_${selectedFormat.value.quality}.${selectedFormat.value.format.toLowerCase()}`
    await downloadVideo(selectedFormat.value.downloadUrl, filename)
  } catch (error) {
    console.error('Download error:', error)
    alert('Failed to start download. Please try again.')
  } finally {
    isDownloading.value = false
  }
}

const downloadSubtitle = (subtitle, format) => {
  if (videoData.value?.demoMode) {
    alert(`⚠️ Demo Mode\n\nSubtitle download is not available in demo mode.\n\nConfigure an API key to enable this feature.`)
    return
  }
  alert(`Downloading ${subtitle.language} subtitles in ${format} format...\n\nNote: Subtitle download functionality requires additional API integration.`)
}

const startBatchDownload = async () => {
  const urls = batchUrls.value.split('\n').filter(url => url.trim())
  if (urls.length === 0) return

  isBatchProcessing.value = true
  batchProgress.value = { current: 0, total: urls.length }

  let successCount = 0
  let failedCount = 0

  for (const url of urls) {
    try {
      const data = await fetchVideoData(url.trim())

      // Find the format matching the selected quality
      let format = data.videoFormats.find(f =>
        f.quality.toLowerCase().includes(batchQuality.value.toLowerCase())
      )

      // Fallback to first available format
      if (!format && data.videoFormats.length > 0) {
        format = data.videoFormats[0]
      }

      if (format && format.downloadUrl) {
        await downloadVideo(format.downloadUrl, `batch_video_${batchProgress.value.current + 1}.${format.format.toLowerCase()}`)
        successCount++
      }
    } catch (error) {
      console.error(`Failed to process ${url}:`, error)
      failedCount++
    }

    batchProgress.value.current++
  }

  setTimeout(() => {
    isBatchProcessing.value = false
    alert(`Batch Download Complete!\n\n✅ Successful: ${successCount}\n❌ Failed: ${failedCount}\n\nTotal: ${batchProgress.value.total} videos`)
    batchProgress.value = { current: 0, total: 0 }
    batchUrls.value = ''
  }, 500)
}

const convertToGif = () => {
  if (videoData.value?.demoMode) {
    alert('⚠️ Demo Mode\n\nGIF conversion is not available in demo mode.\n\nThis feature requires:\n• Configured API key\n• Video conversion service integration')
    return
  }
  alert('🎬 GIF Conversion\n\nThis feature would allow you to:\n• Convert video to animated GIF\n• Customize size and duration\n• Adjust frame rate\n\nNote: Requires additional service integration.')
}

const extractAudio = () => {
  if (!selectedFormat.value) {
    alert('Please select an audio format first from the "Audio Only" section above.')
    return
  }

  if (videoData.value?.audioFormats && videoData.value.audioFormats.length > 0) {
    const audioFormat = videoData.value.audioFormats[0]
    startDownload()
  } else {
    alert('No audio formats available for this video.')
  }
}

const trimVideo = () => {
  if (videoData.value?.demoMode) {
    alert('⚠️ Demo Mode\n\nVideo trimming is not available in demo mode.\n\nThis feature requires:\n• Configured API key\n• Video editing service integration')
    return
  }
  alert('✂️ Video Trimming\n\nThis feature would allow you to:\n• Select start and end times\n• Cut specific sections\n• Preview before download\n\nNote: Requires additional service integration.')
}
</script>

<style scoped>
.download-page {
  padding: var(--spacing-2xl) 0;
  min-height: calc(100vh - 200px);
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-2xl);
}

.page-title {
  font-size: 2rem;
  color: var(--text-primary);
  margin: 0;
}

/* Loading State */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) 0;
}

.spinner-large {
  width: 64px;
  height: 64px;
  border: 6px solid var(--gray-200);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: var(--spacing-lg);
  font-size: 1.125rem;
  color: var(--text-secondary);
}

/* Video Preview */
.video-preview-section {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
}

.video-thumbnail-wrapper {
  position: relative;
  width: 100%;
  max-width: 640px;
  margin: 0 auto var(--spacing-lg);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.video-thumbnail {
  width: 100%;
  height: auto;
  display: block;
}

.duration-badge {
  position: absolute;
  bottom: var(--spacing-sm);
  right: var(--spacing-sm);
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
}

.video-info {
  text-align: center;
}

.video-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.video-meta {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.meta-icon {
  width: 18px;
  height: 18px;
}

/* Tabs */
.tabs-header {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  border-bottom: 2px solid var(--border-color);
  overflow-x: auto;
  flex-wrap: nowrap;
}

.tab-btn {
  padding: var(--spacing-md) var(--spacing-xl);
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
  white-space: nowrap;
  margin-bottom: -2px;
}

.tab-btn:hover {
  color: var(--text-primary);
  background: var(--bg-secondary);
}

.tab-btn.active {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}

.tab-content {
  animation: fade-in 0.3s ease-out;
}

/* Download Options */
.download-options-section {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.section-heading {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.format-category {
  margin-bottom: var(--spacing-2xl);
}

.category-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
}

.category-icon {
  width: 24px;
  height: 24px;
  color: var(--primary-color);
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.format-option {
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  cursor: pointer;
  transition: all var(--transition-base);
  position: relative;
}

.format-option:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.format-option.selected {
  border-color: var(--primary-color);
  background: #dbeafe;
  box-shadow: var(--shadow-md);
}

.option-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.quality-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  background: var(--gray-200);
  color: var(--text-primary);
}

.quality-badge.ultra-hd {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
}

.quality-badge.full-hd {
  background: #d1fae5;
  color: #065f46;
}

.quality-badge.hd {
  background: #dbeafe;
  color: #1e40af;
}

.quality-badge.sd {
  background: var(--gray-200);
  color: var(--text-secondary);
}

.format-type {
  font-weight: 600;
  color: var(--text-primary);
}

.option-details {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.875rem;
  color: var(--text-secondary);
  flex-wrap: wrap;
}

.detail-separator {
  color: var(--text-muted);
}

.option-badge {
  margin-top: var(--spacing-xs);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary-color);
  text-transform: uppercase;
}

/* Download Action */
.download-action {
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-2xl);
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.download-final-btn {
  min-width: 300px;
}

.download-final-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.download-note {
  margin-top: var(--spacing-md);
  font-size: 0.95rem;
  color: var(--text-secondary);
}

/* Subtitles */
.subtitles-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.subtitle-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all var(--transition-base);
}

.subtitle-item:hover {
  border-color: var(--primary-color);
  box-shadow: var(--shadow-sm);
}

.subtitle-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.subtitle-flag {
  font-size: 2rem;
}

.subtitle-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.subtitle-language {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1rem;
}

.subtitle-type {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.subtitle-formats {
  display: flex;
  gap: var(--spacing-sm);
}

.subtitle-format-btn {
  padding: 0.5rem 1rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
}

.subtitle-format-btn:hover {
  background: var(--accent-purple);
  transform: translateY(-2px);
}

/* Batch Download */
.batch-info-card {
  display: flex;
  gap: var(--spacing-lg);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.info-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.info-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.info-description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.batch-input-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.batch-label {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1rem;
}

.batch-textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-family: monospace;
  resize: vertical;
  transition: all var(--transition-base);
}

.batch-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.batch-settings {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
}

.setting-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.setting-label {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.setting-select {
  padding: var(--spacing-md);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  background: var(--bg-primary);
  cursor: pointer;
  transition: all var(--transition-base);
}

.setting-select:focus {
  outline: none;
  border-color: var(--primary-color);
}

.batch-download-btn {
  width: 100%;
}

.batch-progress {
  margin-top: var(--spacing-lg);
}

.progress-bar-wrapper {
  width: 100%;
  height: 12px;
  background: var(--gray-200);
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: var(--spacing-sm);
}

.progress-bar {
  height: 100%;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-purple));
  border-radius: 9999px;
  transition: width 0.3s ease;
}

.progress-text {
  text-align: center;
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Convert Options */
.convert-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
}

.convert-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  text-align: center;
  transition: all var(--transition-base);
}

.convert-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.convert-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.convert-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.convert-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: var(--spacing-3xl);
}

.empty-text {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Notice Box */
.notice-box {
  background: #e0f2fe;
  border: 1px solid #0284c7;
  border-left: 4px solid #0284c7;
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
}

.notice-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #0c4a6e;
  margin-bottom: var(--spacing-md);
}

.notice-list {
  margin: 0;
  padding-left: var(--spacing-xl);
  color: #0c4a6e;
}

.notice-list li {
  margin-bottom: var(--spacing-sm);
  color: #0c4a6e;
}

/* Error State */
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) 0;
  text-align: center;
}

.error-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-lg);
}

.error-title {
  font-size: 1.75rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.error-message {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 500px;
}

/* Animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }

  .tabs-header {
    gap: 0;
  }

  .tab-btn {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.875rem;
  }

  .options-grid {
    grid-template-columns: 1fr;
  }

  .download-final-btn,
  .batch-download-btn {
    min-width: 100%;
  }

  .video-meta {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .subtitle-item {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }

  .subtitle-formats {
    width: 100%;
    justify-content: stretch;
  }

  .subtitle-format-btn {
    flex: 1;
  }

  .batch-settings {
    grid-template-columns: 1fr;
  }

  .convert-options {
    grid-template-columns: 1fr;
  }
}
</style>
