<template>
  <section class="partners-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Trusted Worldwide</span>
        <h2 class="section-title">Powering Success For</h2>
        <p class="section-subtitle">Join thousands of brands and creators who trust our platform</p>
      </div>
    </div>

    <div class="slider-wrapper">
      <!-- First Row - Moving Left to Right -->
      <div class="slider-row">
        <div class="slider-track scroll-left-to-right">
          <div v-for="(logo, index) in rowOneLogos" :key="`row1-${index}`" class="logo-item">
            <div class="logo-container">
              <img :src="logo.image" :alt="logo.name" class="logo-img" />
            </div>
          </div>
          <!-- Duplicate for seamless loop -->
          <div v-for="(logo, index) in rowOneLogos" :key="`row1-dup-${index}`" class="logo-item">
            <div class="logo-container">
              <img :src="logo.image" :alt="logo.name" class="logo-img" />
            </div>
          </div>
        </div>
      </div>

      <!-- Second Row - Moving Right to Left -->
      <div class="slider-row">
        <div class="slider-track scroll-right-to-left">
          <div v-for="(logo, index) in rowTwoLogos" :key="`row2-${index}`" class="logo-item">
            <div class="logo-container">
              <img :src="logo.image" :alt="logo.name" class="logo-img" />
            </div>
          </div>
          <!-- Duplicate for seamless loop -->
          <div v-for="(logo, index) in rowTwoLogos" :key="`row2-dup-${index}`" class="logo-item">
            <div class="logo-container">
              <img :src="logo.image" :alt="logo.name" class="logo-img" />
            </div>
          </div>
        </div>
      </div>

      <!-- Third Row - Moving Left to Right -->
      <div class="slider-row">
        <div class="slider-track scroll-left-to-right">
          <div v-for="(logo, index) in rowThreeLogos" :key="`row3-${index}`" class="logo-item">
            <div class="logo-container">
              <img :src="logo.image" :alt="logo.name" class="logo-img" />
            </div>
          </div>
          <!-- Duplicate for seamless loop -->
          <div v-for="(logo, index) in rowThreeLogos" :key="`row3-dup-${index}`" class="logo-item">
            <div class="logo-container">
              <img :src="logo.image" :alt="logo.name" class="logo-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Partner logos for each row
const rowOneLogos = [
  { name: 'YouTube', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/youtube.svg' },
  { name: 'Netflix', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/netflix.svg' },
  { name: 'Spotify', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spotify.svg' },
  { name: 'TikTok', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tiktok.svg' },
  { name: 'Instagram', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg' },
  { name: 'Facebook', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg' },
  { name: 'Twitter', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg' },
  { name: 'LinkedIn', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg' },
]

const rowTwoLogos = [
  { name: 'Twitch', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twitch.svg' },
  { name: 'Discord', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/discord.svg' },
  { name: 'Reddit', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/reddit.svg' },
  { name: 'Vimeo', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vimeo.svg' },
  { name: 'Pinterest', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pinterest.svg' },
  { name: 'Snapchat', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/snapchat.svg' },
  { name: 'Telegram', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/telegram.svg' },
  { name: 'WhatsApp', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg' },
]

const rowThreeLogos = [
  { name: 'Dailymotion', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dailymotion.svg' },
  { name: 'SoundCloud', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/soundcloud.svg' },
  { name: 'Tumblr', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tumblr.svg' },
  { name: 'Flickr', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flickr.svg' },
  { name: 'Behance', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/behance.svg' },
  { name: 'Dribbble', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dribbble.svg' },
  { name: 'Medium', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/medium.svg' },
  { name: 'GitHub', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg' },
]
</script>

<style scoped>
.partners-section {
  padding: 5rem 0 6rem;
  background: transparent;
  position: relative;
  overflow: hidden;
}

.partners-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(124, 106, 230, 0.03) 0%, transparent 70%);
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.5rem;
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.1), rgba(229, 107, 170, 0.1));
  border: 1px solid rgba(124, 106, 230, 0.3);
  border-radius: var(--radius-full);
  color: var(--accent-purple);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(124, 106, 230, 0.15);
  transition: all var(--transition-smooth);
}

.section-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(124, 106, 230, 0.25);
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Slider Wrapper */
.slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0 -2rem;
  padding: 0 2rem;
}

.slider-wrapper::before,
.slider-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  z-index: 2;
  pointer-events: none;
}

.slider-wrapper::before {
  left: 0;
  background: linear-gradient(to right, var(--bg-dark-primary) 0%, transparent 100%);
}

.slider-wrapper::after {
  right: 0;
  background: linear-gradient(to left, var(--bg-dark-primary) 0%, transparent 100%);
}

/* Slider Row */
.slider-row {
  overflow: hidden;
  padding: 1.25rem 0;
  display: flex;
  position: relative;
}

/* Slider Track */
.slider-track {
  display: flex;
  gap: 2rem;
  width: fit-content;
  will-change: transform;
}

/* Animation - Left to Right */
.scroll-left-to-right {
  animation: scroll-ltr 40s linear infinite;
}

.scroll-left-to-right:hover {
  animation-play-state: paused;
}

@keyframes scroll-ltr {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Animation - Right to Left */
.scroll-right-to-left {
  animation: scroll-rtl 40s linear infinite;
}

.scroll-right-to-left:hover {
  animation-play-state: paused;
}

@keyframes scroll-rtl {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Logo Item */
.logo-item {
  flex-shrink: 0;
  width: 220px;
  position: relative;
}

.logo-item::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: var(--gradient-primary);
  border-radius: var(--radius-xl);
  opacity: 0;
  filter: blur(20px);
  transition: opacity var(--transition-smooth);
  z-index: -1;
}

.logo-item:hover::before {
  opacity: 0.15;
}

.logo-container {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 110px;
  transition: all var(--transition-smooth);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.logo-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.08), rgba(229, 107, 170, 0.08));
  opacity: 0;
  transition: opacity var(--transition-smooth);
}

.logo-container::after {
  content: '';
  position: absolute;
  inset: -1px;
  background: var(--gradient-primary);
  border-radius: var(--radius-xl);
  opacity: 0;
  z-index: -1;
  transition: opacity var(--transition-smooth);
}

.logo-container:hover {
  transform: translateY(-6px) scale(1.05);
  border-color: rgba(124, 106, 230, 0.3);
  box-shadow: 0 8px 24px rgba(124, 106, 230, 0.15),
              0 4px 12px rgba(0, 0, 0, 0.1);
  background: var(--glass-bg-hover);
}

.logo-container:hover::before {
  opacity: 1;
}

.logo-container:hover::after {
  opacity: 0.2;
}

.logo-img {
  max-width: 100%;
  max-height: 50px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%) brightness(0) invert(0.6);
  opacity: 0.5;
  transition: all var(--transition-smooth);
  position: relative;
  z-index: 1;
}

.logo-container:hover .logo-img {
  filter: grayscale(0%) brightness(1.1) invert(0);
  opacity: 1;
  transform: scale(1.1);
}

/* Color variations for different logos */
.slider-row:nth-child(1) .logo-container:hover .logo-img {
  filter: brightness(0) saturate(100%) invert(38%) sepia(91%) saturate(2684%) hue-rotate(242deg) brightness(105%) contrast(95%);
}

.slider-row:nth-child(2) .logo-container:hover .logo-img {
  filter: brightness(0) saturate(100%) invert(43%) sepia(88%) saturate(1804%) hue-rotate(304deg) brightness(105%) contrast(90%);
}

.slider-row:nth-child(3) .logo-container:hover .logo-img {
  filter: brightness(0) saturate(100%) invert(58%) sepia(85%) saturate(2275%) hue-rotate(337deg) brightness(105%) contrast(93%);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .section-title {
    font-size: 2.5rem;
  }

  .logo-item {
    width: 190px;
  }

  .logo-container {
    padding: 1.75rem 2rem;
    min-height: 100px;
  }

  .logo-img {
    max-height: 45px;
  }
}

@media (max-width: 768px) {
  .partners-section {
    padding: 3rem 0 4rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .slider-wrapper::before,
  .slider-wrapper::after {
    width: 100px;
  }

  .slider-track {
    gap: 1.25rem;
  }

  .logo-item {
    width: 160px;
  }

  .logo-container {
    padding: 1.5rem 1.75rem;
    min-height: 90px;
  }

  .logo-img {
    max-height: 38px;
  }

  .slider-row {
    padding: 1rem 0;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }

  .logo-item {
    width: 140px;
  }

  .logo-container {
    padding: 1.25rem 1.5rem;
    min-height: 80px;
  }

  .logo-img {
    max-height: 32px;
  }

  .slider-wrapper::before,
  .slider-wrapper::after {
    width: 60px;
  }
}

/* Performance Optimizations */
@media (prefers-reduced-motion: reduce) {
  .scroll-left-to-right,
  .scroll-right-to-left {
    animation: none;
  }
  
  .logo-container:hover {
    transform: none;
  }
}

/* Smooth rendering */
.slider-track {
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
}

.logo-container {
  backface-visibility: hidden;
  transform: translateZ(0);
}


</style>
