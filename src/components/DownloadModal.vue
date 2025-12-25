<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="show" class="modal-overlay" @click.self="closeModal">
        <div class="modal-container">
          <!-- Close Button -->
          <button @click="closeModal" class="close-button" aria-label="Close modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18" stroke-width="2" stroke-linecap="round"/>
              <line x1="6" y1="6" x2="18" y2="18" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>

          <!-- Video Preview -->
          <div v-if="videoData" class="preview-section">
            <div class="preview-thumbnail-wrapper">
              <img :src="videoData.thumbnail" :alt="videoData.title" class="thumbnail-image" />
              <div class="thumbnail-overlay">
                <svg class="play-icon" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
            <div class="preview-content">
              <h3 class="video-title">{{ videoData.title }}</h3>
              <div class="video-metadata">
                <span class="metadata-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" stroke-width="2"/>
                    <polyline points="12 6 12 12 16 14" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  {{ videoData.duration }}
                </span>
                <span class="metadata-separator">•</span>
                <span class="metadata-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="12" cy="7" r="4" stroke-width="2"/>
                  </svg>
                  {{ videoData.author }}
                </span>
              </div>
            </div>
          </div>

          <!-- Download Options -->
          <div class="options-container">
            <h4 class="section-title">Choose Download Format</h4>
            
            <!-- Video Quality Selection -->
            <div class="option-card">
              <div class="option-header">
                <div class="option-icon-wrapper video-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" stroke-width="2"/>
                    <line x1="7" y1="2" x2="7" y2="22" stroke-width="2"/>
                    <line x1="17" y1="2" x2="17" y2="22" stroke-width="2"/>
                    <line x1="2" y1="12" x2="22" y2="12" stroke-width="2"/>
                    <line x1="2" y1="7" x2="7" y2="7" stroke-width="2"/>
                    <line x1="2" y1="17" x2="7" y2="17" stroke-width="2"/>
                    <line x1="17" y1="17" x2="22" y2="17" stroke-width="2"/>
                    <line x1="17" y1="7" x2="22" y2="7" stroke-width="2"/>
                  </svg>
                </div>
                <div class="option-info">
                  <h5 class="option-title">Video with Audio</h5>
                  <p class="option-description">Download video in high quality with sound</p>
                </div>
              </div>

              <div class="quality-selector">
                <label class="quality-label">Quality & Format:</label>
                <div class="custom-select" :class="{ open: videoSelectOpen }">
                  <div class="select-trigger" @click="videoSelectOpen = !videoSelectOpen">
                    <span v-if="!selectedVideoFormat" class="select-placeholder">
                      Select video quality...
                    </span>
                    <span v-else class="select-value">
                      {{ selectedVideoFormatDisplay }}
                    </span>
                    <svg class="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="6 9 12 15 18 9" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <div class="select-dropdown" v-show="videoSelectOpen">
                    <div class="dropdown-header">Available Video Formats</div>
                    <div
                      v-for="format in videoFormats"
                      :key="format.id"
                      @click="selectVideoFormat(format)"
                      class="select-option"
                      :class="{ selected: selectedVideoFormat === format.id }"
                    >
                      <div class="option-content">
                        <div class="format-quality">{{ format.quality }}</div>
                        <div class="format-details">
                          {{ format.resolution }} • {{ format.format }} • {{ format.fileSize }}
                        </div>
                      </div>
                      <svg v-if="selectedVideoFormat === format.id" class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="20 6 9 17 4 12" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div class="option-divider">
              <span class="divider-text">OR</span>
            </div>

            <!-- Audio Only Selection -->
            <div class="option-card">
              <div class="option-header">
                <div class="option-icon-wrapper audio-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 18V5l12-2v13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="6" cy="18" r="3" stroke-width="2"/>
                    <circle cx="18" cy="16" r="3" stroke-width="2"/>
                  </svg>
                </div>
                <div class="option-info">
                  <h5 class="option-title">Audio Only</h5>
                  <p class="option-description">Extract and download audio track only</p>
                </div>
              </div>

              <div class="quality-selector">
                <label class="quality-label">Quality & Format:</label>
                <div class="custom-select" :class="{ open: audioSelectOpen }">
                  <div class="select-trigger" @click="audioSelectOpen = !audioSelectOpen">
                    <span v-if="!selectedAudioFormat" class="select-placeholder">
                      Select audio quality...
                    </span>
                    <span v-else class="select-value">
                      {{ selectedAudioFormatDisplay }}
                    </span>
                    <svg class="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="6 9 12 15 18 9" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <div class="select-dropdown" v-show="audioSelectOpen">
                    <div class="dropdown-header">Available Audio Formats</div>
                    <div
                      v-for="format in audioFormats"
                      :key="format.id"
                      @click="selectAudioFormat(format)"
                      class="select-option"
                      :class="{ selected: selectedAudioFormat === format.id }"
                    >
                      <div class="option-content">
                        <div class="format-quality">{{ format.quality }}</div>
                        <div class="format-details">
                          {{ format.bitrate }} • {{ format.format }} • {{ format.fileSize }}
                        </div>
                      </div>
                      <svg v-if="selectedAudioFormat === format.id" class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="20 6 9 17 4 12" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Format Details Summary -->
            <div v-if="selectedFormat" class="details-summary">
              <div class="summary-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" stroke-width="2"/>
                  <line x1="12" y1="16" x2="12" y2="12" stroke-width="2" stroke-linecap="round"/>
                  <line x1="12" y1="8" x2="12.01" y2="8" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <span>Download Details</span>
              </div>
              <div class="summary-grid">
                <div class="summary-item">
                  <span class="summary-label">Quality</span>
                  <span class="summary-value">{{ selectedFormat.quality }}</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">Format</span>
                  <span class="summary-value">{{ selectedFormat.format }}</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">File Size</span>
                  <span class="summary-value">{{ selectedFormat.fileSize }}</span>
                </div>
                <div v-if="selectedFormat.resolution" class="summary-item">
                  <span class="summary-label">Resolution</span>
                  <span class="summary-value">{{ selectedFormat.resolution }}</span>
                </div>
                <div v-if="selectedFormat.bitrate" class="summary-item">
                  <span class="summary-label">Bitrate</span>
                  <span class="summary-value">{{ selectedFormat.bitrate }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button @click="closeModal" class="action-btn cancel-btn">
              Cancel
            </button>
            <button
              @click="handleDownload"
              :disabled="!selectedFormat || isDownloading"
              class="action-btn download-btn"
            >
              <svg v-if="!isDownloading" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke-width="2" stroke-linecap="round"/>
                <polyline points="7 10 12 15 17 10" stroke-width="2" stroke-linecap="round"/>
                <line x1="12" y1="15" x2="12" y2="3" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span v-if="!isDownloading">Download Now</span>
              <span v-else class="loading-content">
                <span class="loading-spinner"></span>
                Downloading...
              </span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  videoData: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close', 'download'])

const selectedVideoFormat = ref('')
const selectedAudioFormat = ref('')
const videoSelectOpen = ref(false)
const audioSelectOpen = ref(false)
const isDownloading = ref(false)

const videoFormats = computed(() => props.videoData?.videoFormats || [])
const audioFormats = computed(() => props.videoData?.audioFormats || [])

const selectedVideoFormatDisplay = computed(() => {
  if (!selectedVideoFormat.value) return ''
  const format = videoFormats.value.find(f => f.id === selectedVideoFormat.value)
  return format ? `${format.quality} - ${format.resolution} (${format.format})` : ''
})

const selectedAudioFormatDisplay = computed(() => {
  if (!selectedAudioFormat.value) return ''
  const format = audioFormats.value.find(f => f.id === selectedAudioFormat.value)
  return format ? `${format.quality} - ${format.bitrate} (${format.format})` : ''
})

const selectedFormat = computed(() => {
  if (selectedVideoFormat.value) {
    return videoFormats.value.find(f => f.id === selectedVideoFormat.value)
  }
  if (selectedAudioFormat.value) {
    return audioFormats.value.find(f => f.id === selectedAudioFormat.value)
  }
  return null
})

const selectVideoFormat = (format) => {
  selectedVideoFormat.value = format.id
  selectedAudioFormat.value = ''
  videoSelectOpen.value = false
  audioSelectOpen.value = false
}

const selectAudioFormat = (format) => {
  selectedAudioFormat.value = format.id
  selectedVideoFormat.value = ''
  audioSelectOpen.value = false
  videoSelectOpen.value = false
}

const closeModal = () => {
  selectedVideoFormat.value = ''
  selectedAudioFormat.value = ''
  videoSelectOpen.value = false
  audioSelectOpen.value = false
  emit('close')
}

const handleDownload = () => {
  if (!selectedFormat.value) return
  
  isDownloading.value = true
  
  // Simulate download
  setTimeout(() => {
    emit('download', selectedFormat.value)
    isDownloading.value = false
    closeModal()
  }, 1500)
}

// Close modal on Escape key
const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.show) {
    closeModal()
  }
}

// Close dropdowns when clicking outside
const handleClickOutside = (e) => {
  if (!e.target.closest('.custom-select')) {
    videoSelectOpen.value = false
    audioSelectOpen.value = false
  }
}

// Add/remove event listeners
watch(() => props.show, (newVal) => {
  if (newVal) {
    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('click', handleClickOutside)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleKeydown)
    document.removeEventListener('click', handleClickOutside)
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 9999;
  overflow-y: auto;
}

.modal-container {
  background: var(--bg-dark-secondary);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-3xl);
  max-width: 700px;
  width: 100%;
  max-height: 95vh;
  overflow-y: auto;
  box-shadow: var(--shadow-3d), var(--glow-gradient);
  position: relative;
}

/* Close Button */
.close-button {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-smooth);
  z-index: 10;
}

.close-button svg {
  width: 20px;
  height: 20px;
}

.close-button:hover {
  background: var(--glass-bg-hover);
  color: var(--accent-purple);
  transform: rotate(90deg);
  box-shadow: var(--shadow-purple);
}

/* Video Preview */
.preview-section {
  padding: 2rem;
  padding-right: 4rem;
  background: var(--glass-bg);
  border-bottom: 1px solid var(--glass-border);
}

.preview-thumbnail-wrapper {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  margin-bottom: 1.25rem;
  box-shadow: var(--shadow-lg);
}

.thumbnail-image {
  width: 100%;
  display: block;
}

.thumbnail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-icon {
  width: 64px;
  height: 64px;
  opacity: 0.9;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5));
  transition: all var(--transition-smooth);
}

.preview-thumbnail-wrapper:hover .play-icon {
  transform: scale(1.1);
  opacity: 1;
}

.video-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.video-metadata {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  flex-wrap: wrap;
}

.metadata-item {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.metadata-item svg {
  width: 16px;
  height: 16px;
}

.metadata-separator {
  color: var(--text-muted);
}

/* Options Container */
.options-container {
  padding: 2rem;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

/* Option Card */
.option-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all var(--transition-smooth);
}

.option-card:hover {
  background: var(--glass-bg-hover);
  border-color: var(--accent-purple);
  box-shadow: var(--shadow-purple);
}

.option-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.option-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.option-icon-wrapper svg {
  width: 24px;
  height: 24px;
}

.video-icon {
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.2), rgba(124, 106, 230, 0.1));
  color: var(--accent-purple);
  border: 1px solid rgba(124, 106, 230, 0.3);
}

.audio-icon {
  background: linear-gradient(135deg, rgba(229, 107, 170, 0.2), rgba(229, 107, 170, 0.1));
  color: var(--accent-pink);
  border: 1px solid rgba(229, 107, 170, 0.3);
}

.option-info {
  flex: 1;
}

.option-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.option-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Quality Selector */
.quality-selector {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.quality-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Custom Select */
.custom-select {
  position: relative;
}

.select-trigger {
  padding: 1rem 1.25rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all var(--transition-smooth);
  user-select: none;
}

.select-trigger:hover {
  background: var(--glass-bg-hover);
  border-color: var(--accent-purple);
}

.custom-select.open .select-trigger {
  border-color: var(--accent-purple);
  background: var(--glass-bg-hover);
  box-shadow: var(--glow-purple);
}

.select-placeholder {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.select-value {
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 500;
}

.select-arrow {
  width: 20px;
  height: 20px;
  color: var(--text-secondary);
  transition: transform var(--transition-smooth);
  flex-shrink: 0;
}

.custom-select.open .select-arrow {
  transform: rotate(180deg);
  color: var(--accent-purple);
}

.select-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: var(--bg-dark-tertiary);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl), var(--glow-gradient);
  max-height: 300px;
  overflow-y: auto;
  z-index: 100;
}

.dropdown-header {
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: var(--glass-bg);
  border-bottom: 1px solid var(--glass-border);
  position: sticky;
  top: 0;
  z-index: 1;
}

.select-option {
  padding: 1rem 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all var(--transition-base);
  border-bottom: 1px solid var(--border-subtle);
}

.select-option:last-child {
  border-bottom: none;
}

.select-option:hover {
  background: var(--glass-bg);
}

.select-option.selected {
  background: var(--glass-bg-hover);
  border-left: 3px solid var(--accent-purple);
}

.option-content {
  flex: 1;
}

.format-quality {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.format-details {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.check-icon {
  width: 20px;
  height: 20px;
  color: var(--accent-purple);
  flex-shrink: 0;
}

/* Option Divider */
.option-divider {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  position: relative;
}

.option-divider::before,
.option-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--glass-border), transparent);
}

.divider-text {
  padding: 0 1rem;
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* Details Summary */
.details-summary {
  background: var(--glass-bg);
  border: 1px solid var(--accent-purple);
  border-radius: var(--radius-2xl);
  padding: 1.25rem;
  margin-top: 1.5rem;
  box-shadow: var(--shadow-purple);
}

.summary-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: var(--accent-purple);
  font-weight: 700;
  font-size: 0.95rem;
}

.summary-header svg {
  width: 18px;
  height: 18px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.summary-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.summary-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.summary-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: var(--glass-bg);
  border-top: 1px solid var(--glass-border);
  border-radius: 0 0 var(--radius-3xl) var(--radius-3xl);
}

.action-btn {
  flex: 1;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-xl);
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all var(--transition-smooth);
}

.action-btn svg {
  width: 20px;
  height: 20px;
}

.cancel-btn {
  background: var(--glass-bg);
  color: var(--text-secondary);
  border: 1px solid var(--glass-border);
}

.cancel-btn:hover {
  background: var(--glass-bg-hover);
  border-color: var(--accent-purple);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.download-btn {
  background: var(--gradient-primary);
  color: white;
  box-shadow: var(--shadow-gradient);
}

.download-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--glow-gradient);
}

.download-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.loading-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.loading-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Modal Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity var(--transition-slow);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-container,
.modal-fade-leave-active .modal-container {
  transition: transform var(--transition-bounce), opacity var(--transition-slow);
}

.modal-fade-enter-from .modal-container,
.modal-fade-leave-to .modal-container {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
}

/* Scrollbar Styling */
.select-dropdown::-webkit-scrollbar {
  width: 8px;
}

.select-dropdown::-webkit-scrollbar-track {
  background: var(--bg-dark-secondary);
  border-radius: 0 var(--radius-xl) var(--radius-xl) 0;
}

.select-dropdown::-webkit-scrollbar-thumb {
  background: var(--glass-border);
  border-radius: 4px;
}

.select-dropdown::-webkit-scrollbar-thumb:hover {
  background: var(--accent-purple);
}

.modal-container::-webkit-scrollbar {
  width: 10px;
}

.modal-container::-webkit-scrollbar-track {
  background: var(--bg-dark-secondary);
}

.modal-container::-webkit-scrollbar-thumb {
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
  border: 2px solid var(--bg-dark-secondary);
}

.modal-container::-webkit-scrollbar-thumb:hover {
  background: var(--gradient-purple-pink);
  box-shadow: var(--glow-purple);
}

/* Responsive */
@media (max-width: 640px) {
  .modal-container {
    border-radius: var(--radius-2xl);
    max-height: 98vh;
  }

  .preview-section {
    padding: 1.5rem;
    padding-right: 3.5rem;
  }

  .options-container {
    padding: 1.5rem;
  }

  .video-title {
    font-size: 1.125rem;
  }

  .option-card {
    padding: 1.25rem;
  }

  .option-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .summary-grid {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
    padding: 1.25rem 1.5rem;
  }

  .action-btn {
    width: 100%;
  }
}
</style>
