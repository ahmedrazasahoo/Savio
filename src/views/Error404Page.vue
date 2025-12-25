<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <div class="error-animation">
          <div class="error-code">404</div>
          <div class="error-icon">🔍</div>
        </div>

        <h1 class="error-title">Page Not Found</h1>
        <p class="error-message">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div class="search-suggestion">
          <h3 class="suggestion-title">Try one of these instead:</h3>
          <div class="suggestion-links">
            <router-link to="/" class="suggestion-card">
              <div class="suggestion-icon">🏠</div>
              <div class="suggestion-content">
                <h4 class="suggestion-name">Home</h4>
                <p class="suggestion-desc">Start downloading videos</p>
              </div>
            </router-link>

            <router-link to="/supported-sites" class="suggestion-card">
              <div class="suggestion-icon">🌐</div>
              <div class="suggestion-content">
                <h4 class="suggestion-name">Supported Sites</h4>
                <p class="suggestion-desc">See what platforms we support</p>
              </div>
            </router-link>

            <router-link to="/how-to-use" class="suggestion-card">
              <div class="suggestion-icon">📖</div>
              <div class="suggestion-content">
                <h4 class="suggestion-name">How To Use</h4>
                <p class="suggestion-desc">Learn how to download videos</p>
              </div>
            </router-link>

            <router-link to="/faq" class="suggestion-card">
              <div class="suggestion-icon">❓</div>
              <div class="suggestion-content">
                <h4 class="suggestion-name">FAQ</h4>
                <p class="suggestion-desc">Get answers to common questions</p>
              </div>
            </router-link>
          </div>
        </div>

        <div class="action-buttons">
          <router-link to="/" class="btn btn-primary btn-lg">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <polyline points="9 22 9 12 15 12 15 22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Back to Home
          </router-link>
          <button @click="goBack" class="btn btn-outline btn-lg">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="15 18 9 12 15 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.error-page {
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) 0;
}

.error-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.error-animation {
  position: relative;
  margin-bottom: var(--spacing-2xl);
}

.error-code {
  font-size: 10rem;
  font-weight: 900;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  opacity: 0.3;
  user-select: none;
}

.error-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 6rem;
  animation: search 2s ease-in-out infinite;
}

@keyframes search {
  0%, 100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  25% {
    transform: translate(-50%, -50%) rotate(-10deg);
  }
  75% {
    transform: translate(-50%, -50%) rotate(10deg);
  }
}

.error-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
}

.error-message {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-2xl);
  line-height: 1.6;
}

.search-suggestion {
  margin-bottom: var(--spacing-2xl);
}

.suggestion-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xl);
}

.suggestion-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.suggestion-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-xl);
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all var(--transition-base);
}

.suggestion-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.suggestion-icon {
  font-size: 3rem;
}

.suggestion-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.suggestion-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

.action-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .error-code {
    font-size: 6rem;
  }

  .error-icon {
    font-size: 4rem;
  }

  .error-title {
    font-size: 2rem;
  }

  .error-message {
    font-size: 1.125rem;
  }

  .suggestion-links {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
  }

  .action-buttons .btn {
    width: 100%;
  }
}
</style>
