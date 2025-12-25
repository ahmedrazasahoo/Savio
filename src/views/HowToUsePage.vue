<template>
  <div class="howto-page">
    <div class="page-hero">
      <div class="container">
        <h1 class="page-title">How To Use</h1>
        <p class="page-description">
          Step-by-step guides for downloading videos from different platforms
        </p>
      </div>
    </div>

    <div class="container">
      <!-- Quick Steps -->
      <section class="quick-steps">
        <h2 class="section-title">Quick Start Guide</h2>
        <div class="steps-grid">
          <div v-for="(step, index) in quickSteps" :key="index" class="step-card">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Platform Guides -->
      <section class="platform-guides">
        <h2 class="section-title">Platform-Specific Guides</h2>
        
        <div class="guides-grid">
          <div
            v-for="guide in platformGuides"
            :key="guide.platform"
            class="guide-card"
            :class="{ expanded: expandedGuide === guide.platform }"
          >
            <div class="guide-header" @click="toggleGuide(guide.platform)">
              <div class="guide-info">
                <span class="guide-icon">{{ guide.icon }}</span>
                <h3 class="guide-title">{{ guide.platform }}</h3>
              </div>
              <svg class="expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="6 9 12 15 18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            
            <div class="guide-content">
              <ol class="guide-steps">
                <li v-for="(step, index) in guide.steps" :key="index" class="guide-step">
                  {{ step }}
                </li>
              </ol>
              <div v-if="guide.note" class="guide-note">
                <strong>Note:</strong> {{ guide.note }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tips & Tricks -->
      <section class="tips-section">
        <h2 class="section-title">Tips & Tricks</h2>
        <div class="tips-grid">
          <div v-for="tip in tips" :key="tip.title" class="tip-card">
            <div class="tip-icon">{{ tip.icon }}</div>
            <h3 class="tip-title">{{ tip.title }}</h3>
            <p class="tip-description">{{ tip.description }}</p>
          </div>
        </div>
      </section>

      <!-- Troubleshooting -->
      <section class="troubleshooting">
        <h2 class="section-title">Troubleshooting</h2>
        <div class="troubleshooting-list">
          <div v-for="issue in commonIssues" :key="issue.problem" class="issue-card">
            <div class="issue-problem">
              <span class="problem-icon">⚠️</span>
              <strong>Problem:</strong> {{ issue.problem }}
            </div>
            <div class="issue-solution">
              <span class="solution-icon">✅</span>
              <strong>Solution:</strong> {{ issue.solution }}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expandedGuide = ref(null)

const quickSteps = [
  {
    title: 'Copy Video URL',
    description: 'Go to the video platform and copy the URL from the address bar or share button'
  },
  {
    title: 'Paste URL',
    description: 'Return to our site and paste the URL into the input field on the homepage'
  },
  {
    title: 'Choose Format',
    description: 'Select your preferred video quality and format from the dropdown options'
  },
  {
    title: 'Download',
    description: 'Click the download button and wait for your file to be ready'
  }
]

const platformGuides = [
  {
    platform: 'YouTube',
    icon: '📺',
    steps: [
      'Open YouTube and find the video you want to download',
      'Copy the URL from the address bar (or click Share > Copy link)',
      'Paste the URL into our downloader',
      'Select your preferred quality (4K, 1080p, 720p, etc.)',
      'Click Download and save the file'
    ],
    note: 'For age-restricted videos, you may need to be logged into YouTube first'
  },
  {
    platform: 'TikTok',
    icon: '🎵',
    steps: [
      'Open the TikTok app or website',
      'Find the video you want to download',
      'Tap the Share button',
      'Select "Copy Link"',
      'Paste the link into our downloader',
      'Choose "No Watermark" option for clean downloads',
      'Click Download'
    ],
    note: 'We automatically remove watermarks from TikTok videos'
  },
  {
    platform: 'Instagram',
    icon: '📸',
    steps: [
      'Open Instagram and navigate to the video/reel',
      'Tap the three dots (•••) in the top right',
      'Select "Copy Link"',
      'Paste the link into our downloader',
      'Select video quality',
      'Download the file'
    ],
    note: 'Works for posts, reels, IGTV, and stories'
  },
  {
    platform: 'Facebook',
    icon: '👥',
    steps: [
      'Find the Facebook video you want to download',
      'Click on the video to open it',
      'Click the three dots and select "Copy link"',
      'Paste the URL into our downloader',
      'Choose your quality preference',
      'Click Download'
    ],
    note: 'Only works with public videos'
  },
  {
    platform: 'Twitter/X',
    icon: '🐦',
    steps: [
      'Open the tweet containing the video',
      'Click the Share icon',
      'Select "Copy link to Tweet"',
      'Paste the link into our downloader',
      'Select quality and format',
      'Download'
    ],
    note: 'Also works for GIFs and video clips'
  },
  {
    platform: 'Vimeo',
    icon: '🎬',
    steps: [
      'Navigate to the Vimeo video',
      'Copy the URL from the address bar',
      'Paste into our downloader',
      'Select your preferred quality',
      'Download the video'
    ],
    note: 'Some videos may have download restrictions set by the uploader'
  }
]

const tips = [
  {
    icon: '⚡',
    title: 'Faster Downloads',
    description: 'For faster downloads, choose a lower quality option. 720p downloads much faster than 4K while still providing good quality.'
  },
  {
    icon: '💾',
    title: 'Save Storage',
    description: 'If storage is limited, download in 480p or 360p. These smaller files are perfect for mobile viewing.'
  },
  {
    icon: '🎧',
    title: 'Audio Only',
    description: 'For music videos or podcasts, download audio-only (MP3) to save space and bandwidth.'
  },
  {
    icon: '📋',
    title: 'Batch Downloads',
    description: 'Use the batch download feature to download multiple videos or entire playlists at once.'
  },
  {
    icon: '📝',
    title: 'Save Subtitles',
    description: 'Don\'t forget to download subtitles if available. Great for learning languages or accessibility.'
  },
  {
    icon: '🔄',
    title: 'Format Conversion',
    description: 'If a video doesn\'t play on your device, try downloading in a different format like MP4 or WebM.'
  }
]

const commonIssues = [
  {
    problem: 'Download button is not working',
    solution: 'Try refreshing the page and pasting the URL again. Make sure you\'re using a valid, public video URL.'
  },
  {
    problem: 'Video quality options are limited',
    solution: 'Available quality options depend on the source video. If the video was uploaded in 720p, you can\'t download it in 1080p.'
  },
  {
    problem: 'Download is very slow',
    solution: 'Large files (4K/8K) take time. Try a lower quality, check your internet connection, or download during off-peak hours.'
  },
  {
    problem: 'Error: "Video not found" or "Invalid URL"',
    solution: 'Ensure the video is public and the URL is correct. Private or deleted videos cannot be downloaded.'
  },
  {
    problem: 'Downloaded file won\'t play',
    solution: 'Try a different format or update your media player. VLC Media Player supports almost all formats.'
  },
  {
    problem: 'Can\'t download age-restricted content',
    solution: 'Some platforms require you to be logged in to verify your age before downloading restricted content.'
  }
]

const toggleGuide = (platform) => {
  expandedGuide.value = expandedGuide.value === platform ? null : platform
}
</script>

<style scoped>
.howto-page {
  min-height: calc(100vh - 200px);
}

.page-hero {
  background: var(--bg-gradient);
  background-image: var(--bg-gradient-radial);
  padding: 4rem 0 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.1) 0%, rgba(229, 107, 170, 0.1) 50%, rgba(242, 140, 75, 0.1) 100%);
  pointer-events: none;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--text-primary);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.page-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.quick-steps,
.platform-guides,
.tips-section,
.troubleshooting {
  padding: var(--spacing-3xl) 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-2xl);
  text-align: center;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
}

.step-card {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  display: flex;
  gap: var(--spacing-lg);
  transition: all var(--transition-smooth);
  position: relative;
  overflow: hidden;
}

.step-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.step-card:hover {
  border-color: var(--accent-purple);
  background: var(--glass-bg-hover);
  transform: translateY(-4px);
  box-shadow: var(--shadow-purple);
}

.step-card:hover::before {
  opacity: 1;
}

.step-number {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: var(--shadow-gradient);
  transition: transform var(--transition-smooth);
}

.step-card:hover .step-number {
  transform: scale(1.1) rotate(5deg);
}

.step-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.step-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.guides-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.guide-card {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-smooth);
}

.guide-card:hover {
  border-color: var(--accent-purple);
  background: var(--glass-bg-hover);
}

.guide-card.expanded {
  border-color: var(--accent-purple);
  box-shadow: var(--shadow-purple);
}

.guide-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg);
  cursor: pointer;
  user-select: none;
  transition: all var(--transition-base);
}

.guide-header:hover {
  background: var(--glass-bg-hover);
}

.guide-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.guide-icon {
  font-size: 2rem;
  transition: transform var(--transition-smooth);
}

.guide-card:hover .guide-icon {
  transform: scale(1.1);
}

.guide-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.expand-icon {
  width: 24px;
  height: 24px;
  color: var(--text-muted);
  transition: all var(--transition-smooth);
}

.guide-card:hover .expand-icon {
  color: var(--accent-purple);
}

.guide-card.expanded .expand-icon {
  transform: rotate(180deg);
  color: var(--accent-purple);
}

.guide-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.guide-card.expanded .guide-content {
  max-height: 1000px;
}

.guide-steps {
  padding: 0 var(--spacing-lg) var(--spacing-lg) 3rem;
  margin: 0;
  color: var(--text-secondary);
}

.guide-step {
  margin-bottom: var(--spacing-sm);
  line-height: 1.6;
}

.guide-note {
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.1), rgba(229, 107, 170, 0.1));
  border-left: 3px solid var(--accent-purple);
  padding: var(--spacing-md) var(--spacing-lg);
  margin: 0 var(--spacing-lg) var(--spacing-lg);
  color: var(--accent-purple);
  border-radius: var(--radius-md);
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.tip-card {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  text-align: center;
  transition: all var(--transition-smooth);
  position: relative;
  overflow: hidden;
}

.tip-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.tip-card:hover {
  border-color: var(--accent-purple);
  background: var(--glass-bg-hover);
  transform: translateY(-8px);
  box-shadow: var(--shadow-purple);
}

.tip-card:hover::before {
  opacity: 1;
}

.tip-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  transition: transform var(--transition-smooth);
}

.tip-card:hover .tip-icon {
  transform: scale(1.2);
}

.tip-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.tip-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.troubleshooting-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.issue-card {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all var(--transition-smooth);
}

.issue-card:hover {
  border-color: var(--accent-purple);
  background: var(--glass-bg-hover);
  transform: translateX(4px);
  box-shadow: var(--shadow-purple);
}

.issue-problem {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  color: var(--accent-orange);
  font-size: 1rem;
}

.problem-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.issue-solution {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  color: var(--accent-purple);
  font-size: 1rem;
}

.solution-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .step-card {
    flex-direction: column;
  }

  .tips-grid {
    grid-template-columns: 1fr;
  }
}
</style>
