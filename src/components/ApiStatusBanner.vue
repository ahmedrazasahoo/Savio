<template>
  <div v-if="showBanner" class="api-status-banner">
    <div class="banner-container">
      <div class="banner-content">
        <div class="banner-icon">ℹ️</div>
        <div class="banner-text">
          <strong>Demo Mode Active</strong>
          <p>You're viewing sample data. <a href="/API_SETUP_GUIDE.md" target="_blank">Configure an API key</a> to enable real video downloads.</p>
        </div>
        <button @click="closeBanner" class="banner-close" aria-label="Close banner">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showBanner = ref(false)

onMounted(() => {
  // Check if API key is configured
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY
  
  // Check if user has dismissed the banner before
  const dismissed = localStorage.getItem('apiStatusBannerDismissed')
  
  // Show banner if no API key and not dismissed
  if (!apiKey && !dismissed) {
    showBanner.value = true
  }
})

const closeBanner = () => {
  showBanner.value = false
  localStorage.setItem('apiStatusBannerDismissed', 'true')
}
</script>

<style scoped>
.api-status-banner {
  position: sticky;
  top: 72px;
  z-index: 100;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: slide-down 0.4s ease-out;
}

@keyframes slide-down {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.banner-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.banner-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) 0;
}

.banner-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.banner-text {
  flex: 1;
  color: white;
}

.banner-text strong {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.banner-text p {
  font-size: 0.875rem;
  margin: 0;
  opacity: 0.95;
}

.banner-text a {
  color: white;
  text-decoration: underline;
  font-weight: 500;
  transition: opacity var(--transition-base);
}

.banner-text a:hover {
  opacity: 0.8;
}

.banner-close {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: var(--radius-md);
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
  flex-shrink: 0;
}

.banner-close svg {
  width: 20px;
  height: 20px;
  color: white;
}

.banner-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.banner-close:active {
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .api-status-banner {
    top: 64px;
  }

  .banner-content {
    padding: var(--spacing-sm) 0;
  }

  .banner-icon {
    font-size: 1.25rem;
  }

  .banner-text strong {
    font-size: 0.9rem;
  }

  .banner-text p {
    font-size: 0.8rem;
  }
}
</style>
