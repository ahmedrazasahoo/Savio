<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <div class="error-animation">
          <div class="error-code">402</div>
          <div class="error-icon">💳</div>
        </div>

        <h1 class="error-title">Payment Required</h1>
        <p class="error-message">
          This feature requires a premium subscription or payment to access.
        </p>

        <div class="error-details">
          <div class="detail-card">
            <div class="detail-icon">ℹ️</div>
            <div class="detail-content">
              <h3 class="detail-title">Why am I seeing this?</h3>
              <p class="detail-text">
                You've attempted to access a premium feature or exceeded the free tier limits.
                Consider upgrading to continue using advanced features.
              </p>
            </div>
          </div>
        </div>

        <div class="features-section">
          <h3 class="features-title">Premium Features Include:</h3>
          <div class="features-grid">
            <div class="feature-item">
              <span class="feature-icon">⚡</span>
              <span class="feature-text">Faster downloads</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🎬</span>
              <span class="feature-text">Higher quality options</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📦</span>
              <span class="feature-text">Batch downloads</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🎵</span>
              <span class="feature-text">Audio extraction</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🔄</span>
              <span class="feature-text">Video conversion</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🚫</span>
              <span class="feature-text">No ads</span>
            </div>
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
          <router-link to="/contact" class="btn btn-outline btn-lg">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Contact Support
          </router-link>
        </div>

        <div class="help-links">
          <p class="help-text">Need help?</p>
          <div class="links">
            <router-link to="/faq" class="help-link">View FAQ</router-link>
            <span class="separator">•</span>
            <router-link to="/about" class="help-link">Learn More</router-link>
            <span class="separator">•</span>
            <router-link to="/contact" class="help-link">Contact Us</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 402 Payment Required page
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
  max-width: 800px;
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
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translate(-50%, -50%) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-20px);
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

.error-details {
  margin-bottom: var(--spacing-2xl);
}

.detail-card {
  display: flex;
  gap: var(--spacing-lg);
  text-align: left;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.detail-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.detail-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.detail-text {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.features-section {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
}

.features-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xl);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  text-align: left;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--bg-primary);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.feature-item:hover {
  transform: translateX(8px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.feature-text {
  font-weight: 600;
  color: var(--text-primary);
}

.action-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-2xl);
}

.help-links {
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--border-color);
}

.help-text {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.links {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.help-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-base);
}

.help-link:hover {
  color: var(--accent-purple);
  text-decoration: underline;
}

.separator {
  color: var(--text-muted);
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

  .detail-card {
    flex-direction: column;
    text-align: center;
  }

  .features-grid {
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
