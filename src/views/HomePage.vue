<template>
  <div class="modern-home">
    <!-- API Status Banner -->
    <ApiStatusBanner />

    <!-- Hero Section - Clean Modern Design -->
    <section class="hero">
      <!-- Animated Background -->
      <div class="hero-background">
        <!-- Particle Canvas -->
        <canvas ref="particleCanvas" class="particle-canvas"></canvas>

        <div class="animated-gradient"></div>
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
          <div class="shape shape-5"></div>
        </div>

        <!-- Floating Platform Cards in Background -->
        <div class="floating-platforms-bg">
          <div class="platform-card-bg card-bg-1">
            <div class="platform-card-icon-bg youtube-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <div class="platform-card-name-bg">YouTube</div>
          </div>
          <div class="platform-card-bg card-bg-2">
            <div class="platform-card-icon-bg instagram-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div class="platform-card-name-bg">Instagram</div>
          </div>
          <div class="platform-card-bg card-bg-3">
            <div class="platform-card-icon-bg tiktok-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
            <div class="platform-card-name-bg">TikTok</div>
          </div>
          <div class="platform-card-bg card-bg-4">
            <div class="platform-card-icon-bg facebook-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div class="platform-card-name-bg">Facebook</div>
          </div>
          <div class="platform-card-bg card-bg-5">
            <div class="platform-card-icon-bg twitter-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div class="platform-card-name-bg">Twitter</div>
          </div>
          <div class="platform-card-bg card-bg-6">
            <div class="platform-card-icon-bg vimeo-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
              </svg>
            </div>
            <div class="platform-card-name-bg">Vimeo</div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="hero-content-wrapper">
          <div class="hero-text-content">
            <h1 class="hero-main-title">
              Download Videos from
              <span class="gradient-highlight">Any Platform</span>
            </h1>

            <p class="hero-subtitle-text">
              Fast, free, and powerful video downloader supporting 1000+ websites. Download in HD, 4K, and 8K quality with just one click.
            </p>

            <!-- Download Form -->
            <div class="hero-form-container">
              <form @submit.prevent="handleDownload" class="main-download-form">
                <div class="url-input-wrapper">
                  <svg class="url-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <input
                    v-model="videoUrl"
                    type="text"
                    class="url-input-field"
                    placeholder="Paste your video link here (YouTube, TikTok, Instagram...)"
                    required
                  />
                  <button type="submit" class="download-submit-btn" :disabled="isProcessing">
                    <span v-if="!isProcessing" class="submit-btn-text">
                      <svg class="submit-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <polyline points="7 10 12 15 17 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="12" y1="15" x2="12" y2="3" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                      Download
                    </span>
                    <span v-else class="processing-state">
                      <span class="spinner"></span>
                      Processing...
                    </span>
                  </button>
                </div>
              </form>

              <div class="hero-features-list">
                <div class="hero-feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>No registration needed</span>
                </div>
                <div class="hero-feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Unlimited downloads</span>
                </div>
                <div class="hero-feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>100% secure & private</span>
                </div>
              </div>
            </div>

            <!-- Platform Logos -->
           
          </div>
        </div>
      </div>

      <!-- Download Modal -->
      <DownloadModal
        :show="showModal"
        :video-data="videoResults"
        @close="closeModal"
        @download="handleModalDownload"
      />
    </section>

    <!-- Partner Logos Slider -->
    <PartnerLogosSlider />

    <!-- Supported Platforms Section -->
    <section class="section platforms-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">1000+ Supported Platforms</h2>
          <p class="section-description">
            Download videos from all major social media and video platforms
          </p>
        </div>

        <div class="platforms-container">
          <div v-for="platform in platforms" :key="platform.name" class="platform-item">
            <div class="platform-icon-wrapper" :style="{ background: platform.gradient }">
              <img v-if="platform.logo" :src="platform.logo" :alt="platform.name" class="platform-logo" />
              <span v-else class="platform-emoji">{{ platform.icon }}</span>
            </div>
            <h3 class="platform-title">{{ platform.name }}</h3>
            <p class="platform-text">{{ platform.description }}</p>
            <div v-if="platform.badge" class="platform-badge">{{ platform.badge }}</div>
          </div>
        </div>

        <div class="more-platforms">
          <p class="more-text">And many more: Dailymotion, Soundcloud, Streamable, Likee, Kwai, Snapchat, Reddit, LinkedIn, Pinterest, Tumblr, Imgur, Mixcloud, Bandcamp, and 1000+ other sites!</p>
        </div>
      </div>
    </section>

    <!-- Ad Space -->
    <div class="container">
      <div class="ad-space">Advertisement Space</div>
    </div>

    <!-- Features Section -->
    <section class="section features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Our Downloader?</h2>
        </div>

        <div class="features-container">
          <div v-for="feature in features" :key="feature.title" class="feature-item">
            <div class="feature-icon-wrapper">
              <!-- Speed Icon -->
              <svg v-if="feature.icon === 'speed'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <!-- Free Icon -->
              <svg v-else-if="feature.icon === 'free'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <!-- Security Icon -->
              <svg v-else-if="feature.icon === 'security'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <!-- Devices Icon -->
              <svg v-else-if="feature.icon === 'devices'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke-width="2"/>
                <path d="M12 18h.01" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <!-- Formats Icon -->
              <svg v-else-if="feature.icon === 'formats'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14 2 14 8 20 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="12" y1="18" x2="12" y2="12" stroke-width="2" stroke-linecap="round"/>
                <line x1="9" y1="15" x2="15" y2="15" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <!-- Instant Icon -->
              <svg v-else-if="feature.icon === 'instant'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke-width="2"/>
                <polyline points="12 6 12 12 16 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <!-- Batch Icon -->
              <svg v-else-if="feature.icon === 'batch'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="7.5 4.21 12 6.81 16.5 4.21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="7.5 19.79 7.5 14.6 3 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="21 12 16.5 14.6 16.5 19.79" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="12" y1="22.08" x2="12" y2="12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <!-- Subtitles Icon -->
              <svg v-else-if="feature.icon === 'subtitles'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke-width="2"/>
                <path d="M7 15h4M15 15h2M7 11h2M13 11h4" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <!-- Global Icon -->
              <svg v-else-if="feature.icon === 'global'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke-width="2"/>
                <line x1="2" y1="12" x2="22" y2="12" stroke-width="2"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="feature-heading">{{ feature.title }}</h3>
            <p class="feature-text">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ad Space -->
    <div class="container">
      <div class="ad-space">Advertisement Space</div>
    </div>

    <!-- How It Works Section -->
    <section class="section steps-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How It Works</h2>
          <p class="section-description">
            Download videos in 3 simple steps
          </p>
        </div>

        <div class="steps-container">
          <div v-for="(step, index) in steps" :key="index" class="step-item">
            <div class="step-header">
              <div class="step-badge">{{ index + 1 }}</div>
              <h3 class="step-heading">{{ step.title }}</h3>
            </div>
            <p class="step-text">{{ step.description }}</p>
            <div v-if="index < steps.length - 1" class="step-connector"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Browser Extension Section -->
    <section class="section extension-section">
      <div class="container">
        <div class="extension-card">
          <div class="extension-content">
            <div class="extension-icon">🔌</div>
            <h2 class="extension-title">Browser Extension Available</h2>
            <p class="extension-description">
              Install our browser extension for one-click downloads directly from video pages. Available for Chrome, Firefox, Edge, and Opera.
            </p>
            <div class="extension-buttons">
              <button class="btn btn-primary">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Install Extension
              </button>
              <button class="btn btn-outline">Learn More</button>
            </div>
          </div>
          <div class="extension-image">
            <div class="browser-mockup">
              <div class="browser-bar">
                <div class="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="browser-content">
                <div class="extension-preview">Extension Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>

        <div class="faq-container">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="faq-item"
            :class="{ active: activeFaq === index }"
            @click="toggleFaq(index)"
          >
            <div class="faq-question">
              <h3 class="faq-question-text">{{ faq.question }}</h3>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="6 9 12 15 18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="faq-answer">
              <p class="faq-answer-text">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Disclaimer Section -->
    <section class="section disclaimer-section">
      <div class="container">
        <div class="disclaimer-card">
          <div class="disclaimer-icon">⚠️</div>
          <h3 class="disclaimer-heading">Important Disclaimer</h3>
          <p class="disclaimer-content">
            This tool is provided for personal use only. Users are solely responsible for ensuring that their use of downloaded content complies with applicable copyright laws and platform terms of service. We do not host, store, or distribute any video content. All downloads are performed directly from the original sources. Please respect content creators and their intellectual property rights.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import DownloadModal from '../components/DownloadModal.vue'
import PartnerLogosSlider from '../components/PartnerLogosSlider.vue'
import ApiStatusBanner from '../components/ApiStatusBanner.vue'
import { fetchVideoData, downloadVideo } from '../store/api.js'

const router = useRouter()
const videoUrl = ref('')
const isProcessing = ref(false)
const showModal = ref(false)
const videoResults = ref(null)
const activeFaq = ref(null)
const particleCanvas = ref(null)
const errorMessage = ref('')
let animationFrameId = null

const platforms = [
  {
    name: 'YouTube',
    icon: '📺',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/youtube.svg',
    gradient: 'linear-gradient(135deg, #ff0000 0%, #ff6b6b 100%)',
    description: 'Download videos, shorts, and playlists in 4K/8K quality'
  },
  {
    name: 'TikTok',
    icon: '🎵',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg',
    gradient: 'linear-gradient(135deg, #00f2ea 0%, #ff0050 100%)',
    description: 'Download videos without watermark in HD quality',
    badge: 'No Watermark'
  },
  {
    name: 'Instagram',
    icon: '📸',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg',
    gradient: 'linear-gradient(135deg, #e4405f 0%, #fcaf45 100%)',
    description: 'Save videos, reels, stories, and IGTV content'
  },
  {
    name: 'Facebook',
    icon: '👥',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg',
    gradient: 'linear-gradient(135deg, #1877f2 0%, #42a5f5 100%)',
    description: 'Download videos from posts, stories, and watch'
  },
  {
    name: 'Twitter/X',
    icon: '🐦',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg',
    gradient: 'linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%)',
    description: 'Save videos and GIFs from tweets in high quality'
  },
  {
    name: 'Vimeo',
    icon: '🎬',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vimeo.svg',
    gradient: 'linear-gradient(135deg, #1ab7ea 0%, #0088cc 100%)',
    description: 'Download professional videos in original quality'
  },
  {
    name: 'Twitch',
    icon: '🎮',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twitch.svg',
    gradient: 'linear-gradient(135deg, #9146ff 0%, #772ce8 100%)',
    description: 'Save live streams, clips, and VODs'
  },
  {
    name: 'Dailymotion',
    icon: '▶️',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dailymotion.svg',
    gradient: 'linear-gradient(135deg, #0066dc 0%, #00aaff 100%)',
    description: 'Download videos in multiple quality options'
  },
  {
    name: 'Reddit',
    icon: '🤖',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/reddit.svg',
    gradient: 'linear-gradient(135deg, #ff4500 0%, #ff6a33 100%)',
    description: 'Save videos from posts and comments'
  }
]

const steps = [
  {
    title: 'Copy Video URL',
    description: 'Go to your favorite platform and copy the video link you want to download'
  },
  {
    title: 'Paste URL',
    description: 'Paste the copied link into the input field above and click the Download button'
  },
  {
    title: 'Download Video',
    description: 'Choose your preferred format and quality, then download the video to your device'
  }
]

const features = [
  {
    icon: 'speed',
    title: 'Lightning Fast',
    description: 'Quick processing and download speeds for all supported platforms'
  },
  {
    icon: 'free',
    title: 'Free Forever',
    description: 'No hidden fees, no subscriptions. Completely free to use'
  },
  {
    icon: 'security',
    title: 'Privacy Protected',
    description: 'We don\'t store your data or downloaded videos. Your privacy matters'
  },
  {
    icon: 'devices',
    title: 'Mobile Friendly',
    description: 'Works perfectly on all devices - desktop, tablet, and mobile'
  },
  {
    icon: 'formats',
    title: 'Multiple Formats',
    description: 'Download in MP4, WebM, MP3, M4A, and more formats'
  },
  {
    icon: 'instant',
    title: 'No Registration',
    description: 'Start downloading immediately without creating an account'
  },
  {
    icon: 'batch',
    title: 'Batch Downloads',
    description: 'Download multiple videos or entire playlists at once'
  },
  {
    icon: 'subtitles',
    title: 'Subtitle Support',
    description: 'Download subtitles and captions in multiple languages'
  },
  {
    icon: 'global',
    title: '1000+ Sites',
    description: 'Support for all major platforms and over 1000 websites'
  }
]

const faqs = [
  {
    question: 'Is this service really free?',
    answer: 'Yes! Our video downloader is 100% free with no hidden costs. You can download unlimited videos without any subscriptions or fees.'
  },
  {
    question: 'Do I need to install any software?',
    answer: 'No installation required! Our online downloader works directly in your browser. However, we also offer a browser extension for more convenience.'
  },
  {
    question: 'What video quality can I download?',
    answer: 'You can download videos in various qualities from 144p to 4K/8K, depending on the source video. We support HD, Full HD, 2K, and 4K resolutions.'
  },
  {
    question: 'Can I download TikTok videos without watermark?',
    answer: 'Yes! Our downloader supports TikTok video downloads without the watermark, giving you clean videos for personal use.'
  },
  {
    question: 'Is it legal to download videos?',
    answer: 'Downloading videos is legal for personal use only. You must have permission from the content creator and comply with platform terms of service and copyright laws.'
  },
  {
    question: 'Can I download private videos?',
    answer: 'No, we can only download publicly available videos. Private or restricted videos cannot be accessed or downloaded.'
  },
  {
    question: 'Do you store downloaded videos?',
    answer: 'No, we do not store any videos on our servers. All downloads happen directly from the source platform to your device.'
  },
  {
    question: 'Can I download entire playlists?',
    answer: 'Yes! Our batch download feature allows you to download multiple videos or entire playlists at once for supported platforms.'
  }
]

const handleDownload = async () => {
  if (!videoUrl.value.trim()) return

  isProcessing.value = true
  errorMessage.value = ''

  try {
    // Fetch video data from API
    const data = await fetchVideoData(videoUrl.value.trim())

    videoResults.value = data
    showModal.value = true

    // Show warning if in demo mode
    if (data.demoMode) {
      setTimeout(() => {
        alert('⚠️ Demo Mode Active\n\nYou\'re seeing sample data because the API key is not configured.\n\nTo enable real video downloads:\n\n1. Visit RapidAPI.com\n2. Subscribe to one of these APIs:\n   • Social Media Video Downloader\n   • All in One Video Downloader\n3. Get your API key\n4. Add RAPIDAPI_KEY to your environment variables\n\nFor now, you can explore the interface with demo data.')
      }, 500)
    }
  } catch (error) {
    isProcessing.value = false

    // Handle different error types
    let message = 'An error occurred while fetching video data.'

    if (error.message === 'INVALID_URL') {
      message = '❌ Invalid URL\n\nPlease enter a valid video URL.'
    } else if (error.message === 'UNSUPPORTED_PLATFORM') {
      message = '❌ Unsupported Platform\n\nThis platform is not yet supported. We currently support:\n• YouTube\n• TikTok\n• Instagram\n• Facebook\n• Twitter/X\n• Vimeo\n• And more...'
    } else if (error.message === 'ALL_PROVIDERS_FAILED') {
      message = '❌ Unable to Fetch Video\n\nAll API providers failed to fetch this video. Please try:\n• Check if the URL is correct\n• Make sure the video is public\n• Try again later'
    } else if (error.message.includes('API_ERROR')) {
      message = '❌ API Error\n\nThere was an error connecting to the video service. Please try again later.'
    }

    alert(message)
    errorMessage.value = message
    return
  }

  isProcessing.value = false
}

const handleModalDownload = async (format) => {
  try {
    if (format.downloadUrl) {
      await downloadVideo(format.downloadUrl, `video_${format.quality}.${format.format.toLowerCase()}`)
    } else {
      alert('Download URL not available for this format.')
    }
  } catch (error) {
    console.error('Download error:', error)
    alert('Failed to download video. Please try again.')
  }
}

const closeModal = () => {
  showModal.value = false
}

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

// Particle animation system
let particles = []
class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 3 + 1
    this.speedX = Math.random() * 1 - 0.5
    this.speedY = Math.random() * 1 - 0.5
    this.opacity = Math.random() * 0.5 + 0.2
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > this.canvas.width) this.x = 0
    if (this.x < 0) this.x = this.canvas.width
    if (this.y > this.canvas.height) this.y = 0
    if (this.y < 0) this.y = this.canvas.height
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

const initParticles = () => {
  const canvas = particleCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight

  // Create particles
  particles = []
  const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvas))
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update and draw particles
    particles.forEach(particle => {
      particle.update()
      particle.draw(ctx)
    })

    // Connect nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 150)})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate)
  }

  animate()
}

const handleResize = () => {
  if (particleCanvas.value) {
    particleCanvas.value.width = particleCanvas.value.offsetWidth
    particleCanvas.value.height = particleCanvas.value.offsetHeight
    initParticles()
  }
}

onMounted(() => {
  initParticles()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.modern-home {
  width: 100%;
}

/* Hero Section - Premium Dark SaaS */
.hero {
  position: relative;
  padding: 8rem 0 10rem;
  overflow: hidden;
  background: transparent;
}

/* Animated Background */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

/* Particle Canvas */
.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  opacity: 0.4;
}

.animated-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at top, rgba(124, 106, 230, 0.04) 0%, transparent 50%),
              radial-gradient(ellipse at bottom right, rgba(229, 107, 170, 0.03) 0%, transparent 50%);
  opacity: 0.4;
}


.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.06;
  filter: blur(80px);
  animation: float-shape 20s ease-in-out infinite;
}

.shape-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(124, 106, 230, 0.3), transparent);
  top: -15%;
  left: -10%;
  animation-delay: 0s;
  animation-duration: 25s;
}

.shape-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(229, 107, 170, 0.3), transparent);
  top: 15%;
  right: -10%;
  animation-delay: 3s;
  animation-duration: 20s;
}

.shape-3 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(242, 140, 75, 0.25), transparent);
  bottom: -10%;
  left: 20%;
  animation-delay: 6s;
  animation-duration: 22s;
}

.shape-4 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(124, 106, 230, 0.2), transparent);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 9s;
  animation-duration: 18s;
}

.shape-5 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(229, 107, 170, 0.25), transparent);
  bottom: 5%;
  right: 10%;
  animation-delay: 12s;
  animation-duration: 24s;
}

@keyframes float-shape {
  0%, 100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  25% {
    transform: translate(50px, -40px) scale(1.15) rotate(90deg);
  }
  50% {
    transform: translate(-30px, 50px) scale(0.85) rotate(180deg);
  }
  75% {
    transform: translate(60px, 30px) scale(1.1) rotate(270deg);
  }
}

/* Floating Platform Cards in Background */
.floating-platforms-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

@media (max-width: 1024px) {
  .floating-platforms-bg {
    display: none;
  }
}

.platform-card-bg {
  position: absolute;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
  padding: 0.875rem 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  opacity: 0.5;
  animation: float-card-bg 12s ease-in-out infinite;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-smooth);
}

.platform-card-bg:hover {
  opacity: 0.8;
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.12);
}

.platform-card-icon-bg {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all var(--transition-base);
}

.platform-card-icon-bg svg {
  width: 16px;
  height: 16px;
  transition: all var(--transition-base);
}

/* Platform-specific icon colors */
.youtube-icon {
  background: linear-gradient(135deg, #ff0000 0%, #ff4444 100%);
  color: white;
}

.instagram-icon {
  background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
  color: white;
}

.tiktok-icon {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  color: white;
}

.facebook-icon {
  background: linear-gradient(135deg, #1877f2 0%, #42a5f5 100%);
  color: white;
}

.twitter-icon {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  color: white;
}

.vimeo-icon {
  background: linear-gradient(135deg, #1ab7ea 0%, #0088cc 100%);
  color: white;
}

.platform-card-bg:hover .platform-card-icon-bg {
  transform: scale(1.05);
}

.platform-card-name-bg {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  line-height: 1;
}

.card-bg-1 {
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.card-bg-2 {
  top: 15%;
  right: 8%;
  animation-delay: 1.5s;
}

.card-bg-3 {
  top: 45%;
  left: 3%;
  animation-delay: 3s;
}

.card-bg-4 {
  top: 50%;
  right: 10%;
  animation-delay: 4.5s;
}

.card-bg-5 {
  bottom: 25%;
  left: 12%;
  animation-delay: 6s;
}

.card-bg-6 {
  bottom: 20%;
  right: 5%;
  animation-delay: 7.5s;
}

@keyframes float-card-bg {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-15px) translateX(-8px);
  }
}

/* Hero Content */
.hero-content-wrapper {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.hero-text-content {
  animation: fade-in-up 0.8s ease-out;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-main-title {
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  letter-spacing: -0.04em;
}

.gradient-highlight {
  display: block;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.hero-subtitle-text {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Download Form */
.hero-form-container {
  margin-bottom: 3rem;
}

.main-download-form {
  margin-bottom: 2rem;
}

.url-input-wrapper {
  display: flex;
  align-items: center;
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  padding: 0.75rem;
  box-shadow: var(--glass-shadow);
  transition: all var(--transition-smooth);
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.url-input-wrapper::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: var(--gradient-primary);
  border-radius: var(--radius-2xl);
  opacity: 0;
  transition: opacity var(--transition-smooth);
  z-index: -1;
}

.url-input-wrapper:focus-within {
  background: var(--glass-bg-hover);
  box-shadow: 0 0 0 2px rgba(124, 106, 230, 0.08);
}

.url-input-wrapper:focus-within::before {
  opacity: 0;
  filter: blur(15px);
}

.url-input-icon {
  width: 24px;
  height: 24px;
  color: var(--accent-purple);
  margin: 0 1rem 0 0.5rem;
  flex-shrink: 0;
}

.url-input-field {
  flex: 1;
  padding: 1rem 0.5rem;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: var(--text-primary);
  outline: none;
  margin: 0rem 1rem;
}

.url-input-field::placeholder {
  color: var(--text-muted);
}

.download-submit-btn {
  padding: 1rem 2.5rem;
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: var(--radius-xl);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-smooth);
  box-shadow: var(--shadow-gradient);
  white-space: nowrap;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.download-submit-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
  opacity: 0;
  transition: opacity var(--transition-smooth);
}

.download-submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(124, 106, 230, 0.25);
}

.download-submit-btn:hover:not(:disabled)::before {
  opacity: 1;
}

.download-submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.download-submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-btn-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.submit-btn-icon {
  width: 18px;
  height: 18px;
}

.processing-state {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* Hero Features List */
.hero-features-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.hero-feature-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
}

.hero-feature-badge svg {
  width: 18px;
  height: 18px;
  color: var(--accent-purple);
  stroke-width: 2.5;
}

/* Supported Platforms Preview */
.supported-platforms-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  width: 100%;
}

.platforms-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 600;
  text-align: center;
}

.platform-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  width: 100%;
}

.platform-logo {
  padding: 0.5rem 1rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: all var(--transition-smooth);
}

.platform-logo:hover {
  background: var(--glass-bg-hover);
  border-color: var(--accent-purple);
  color: var(--accent-purple);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(124, 106, 230, 0.2);
}

/* Quick Download Results */
.quick-results {
  margin-top: var(--spacing-2xl);
  animation: slide-up 0.5s ease-out;
}

.results-card {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  box-shadow: 0 20px 60px -10px rgba(0, 0, 0, 0.3);
  text-align: left;
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
}

.results-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--text-muted);
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all var(--transition-base);
}

.close-btn:hover {
  background: var(--gray-200);
  color: var(--text-primary);
}

.quick-formats {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.format-section {
  width: 100%;
}

.format-section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.quick-format-list {
  display: grid;
  gap: var(--spacing-sm);
}

.quick-format-btn {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--spacing-md);
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  cursor: pointer;
  transition: all var(--transition-base);
  text-align: left;
}

.quick-format-btn:hover {
  border-color: var(--primary-color);
  background: var(--bg-primary);
  transform: translateX(4px);
}

.format-quality {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1rem;
}

.format-info {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.download-icon {
  width: 20px;
  height: 20px;
  color: var(--primary-color);
}

.view-all-btn {
  margin-top: var(--spacing-xl);
  width: 100%;
  padding: var(--spacing-md);
  background: linear-gradient(135deg, var(--primary-color), var(--accent-purple));
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
}

.view-all-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px -5px rgba(99, 102, 241, 0.5);
}

/* Section Styles */
.section {
  padding: var(--spacing-4xl) 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  letter-spacing: -0.03em;
}

.section-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Platforms Section */
.platforms-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
}

.platform-item {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--glass-border);
  text-align: center;
  transition: all var(--transition-smooth);
  position: relative;
  overflow: hidden;
}

.platform-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.1), rgba(229, 107, 170, 0.1));
  opacity: 0;
  transition: opacity var(--transition-smooth);
}

.platform-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  border-color: rgba(124, 106, 230, 0.3);
  background: var(--glass-bg-hover);
}

.platform-item:hover::before {
  opacity: 0.5;
}

.platform-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--spacing-lg);
  border-radius: var(--radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.2);
  transition: all var(--transition-base);
}

.platform-item:hover .platform-icon-wrapper {
  transform: scale(1.1) rotate(-5deg);
  box-shadow: 0 15px 40px -5px rgba(0, 0, 0, 0.3);
}

.platform-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.platform-emoji {
  display: block;
}

.platform-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.platform-text {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.platform-badge {
  margin-top: var(--spacing-sm);
  display: inline-block;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.more-platforms {
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border-radius: var(--radius-2xl);
  border: 1px dashed var(--glass-border);
}

.more-text {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

/* Steps Section */
.steps-section {
  background: transparent;
  position: relative;
}

.steps-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(124, 106, 230, 0.05), transparent 70%);
  z-index: -1;
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-3xl);
  position: relative;
}

.step-item {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: 2rem;
  position: relative;
  z-index: 1;
  transition: all var(--transition-smooth);
  overflow: hidden;
}

.step-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--gradient-primary);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform var(--transition-smooth);
}

.step-item:hover::before {
  transform: scaleY(1);
}

.step-item:hover {
  border-color: rgba(124, 106, 230, 0.3);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.step-badge {
  width: 56px;
  height: 56px;
  background: var(--gradient-primary);
  color: white;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  box-shadow: 0 4px 12px rgba(124, 106, 230, 0.25);
  transition: all var(--transition-smooth);
  position: relative;
  flex-shrink: 0;
}

.step-item:hover .step-badge {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(124, 106, 230, 0.35);
}

.step-heading {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  flex: 1;
  line-height: 1.3;
}

.step-text {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
  padding-left: 4.5rem;
}

.step-connector {
  display: none;
}

/* Features Section */
.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
}

.feature-item {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--glass-border);
  transition: all var(--transition-smooth);
  position: relative;
  text-align: center;
}

.feature-item::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: var(--radius-2xl);
  padding: 1px;
  background: var(--gradient-primary);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity var(--transition-smooth);
}

.feature-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  background: var(--glass-bg-hover);
}

.feature-item:hover::after {
  opacity: 1;
}

.feature-icon-wrapper {
  margin-bottom: var(--spacing-lg);
  display: inline-block;
  transition: all var(--transition-base);
}

.feature-icon-wrapper svg {
  width: 48px;
  height: 48px;
  color: var(--accent-purple);
  transition: all var(--transition-smooth);
  filter: drop-shadow(0 0 8px rgba(124, 106, 230, 0.3));
}

.feature-item:hover .feature-icon-wrapper {
  transform: scale(1.1) rotate(-5deg);
}

.feature-item:hover .feature-icon-wrapper svg {
  filter: drop-shadow(0 0 12px rgba(124, 106, 230, 0.5));
}

.feature-heading {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.feature-text {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

/* Browser Extension Section */
.extension-section {
  background: transparent;
  position: relative;
}

.extension-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(124, 106, 230, 0.08), transparent 70%);
  z-index: -1;
}

.extension-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-3xl);
  box-shadow: var(--glass-shadow);
}

.extension-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-lg);
}

.extension-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.extension-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-xl);
}

.extension-buttons {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.browser-mockup {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--glass-shadow);
  overflow: hidden;
}

.browser-bar {
  background: rgba(255, 255, 255, 0.02);
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-subtle);
}

.browser-dots {
  display: flex;
  gap: var(--spacing-xs);
}

.browser-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--glass-border);
}

.browser-content {
  aspect-ratio: 16/9;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.extension-preview {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
}

/* FAQ Section */
.faq-container {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  margin-bottom: var(--spacing-md);
  overflow: hidden;
  transition: all var(--transition-smooth);
}

.faq-item:hover {
  border-color: var(--accent-purple);
  box-shadow: var(--shadow-purple);
  background: var(--glass-bg-hover);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xl);
  cursor: pointer;
  user-select: none;
}

.faq-question-text {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.faq-icon {
  width: 24px;
  height: 24px;
  color: var(--text-muted);
  transition: transform var(--transition-base);
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow);
}

.faq-item.active .faq-answer {
  max-height: 500px;
}

.faq-answer-text {
  padding: 0 var(--spacing-xl) var(--spacing-xl);
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

/* Disclaimer Section */
.disclaimer-card {
  max-width: 900px;
  margin: 0 auto;
  background: rgba(245, 158, 11, 0.08);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-left-width: 4px;
  padding: var(--spacing-2xl);
  border-radius: var(--radius-2xl);
  box-shadow: var(--glass-shadow);
  text-align: center;
}

.disclaimer-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.3));
}

.disclaimer-heading {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.disclaimer-content {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-main-title {
    font-size: 3.5rem;
  }

  .hero-subtitle-text {
    font-size: 1.125rem;
  }

  .shape {
    opacity: 0.08;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0 5rem;
  }

  .hero-main-title {
    font-size: 2.5rem;
  }

  .hero-subtitle-text {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .url-input-wrapper {
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem;
  }

  .url-input-icon {
    display: none;
  }

  .url-input-field {
    padding: 0.75rem;
    width: 100%;
    text-align: center;
  }

  .download-submit-btn {
    width: 100%;
    justify-content: center;
    padding: 1rem 1.5rem;
  }

  .hero-features-list {
    gap: 1rem;
  }

  .hero-feature-badge {
    font-size: 0.85rem;
  }

  .hero-feature-badge svg {
    width: 16px;
    height: 16px;
  }

  .supported-platforms-preview {
    flex-direction: column;
    gap: 0.75rem;
  }

  .platform-logos {
    justify-content: center;
  }

  .platform-logo {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }

  .shape {
    opacity: 0.05;
  }

  .particle-canvas {
    opacity: 0.3;
  }

  .section-title {
    font-size: 2rem;
  }

  .platforms-container,
  .steps-container,
  .features-container {
    grid-template-columns: 1fr;
  }

  .extension-card {
    grid-template-columns: 1fr;
  }

  .extension-image {
    order: -1;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 3rem 0 4rem;
  }

  .hero-main-title {
    font-size: 2rem;
  }

  .hero-subtitle-text {
    font-size: 0.95rem;
  }

  .url-input-wrapper {
    padding: 0.75rem;
  }

  .download-submit-btn {
    padding: 0.875rem 1.25rem;
  }

  .hero-features-list {
    flex-direction: column;
    gap: 0.75rem;
  }

  .platform-logo {
    font-size: 0.75rem;
    padding: 0.35rem 0.7rem;
  }
}
</style>
