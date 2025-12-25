<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <div class="error-animation">
          <div class="error-code">500</div>
          <div class="error-icon">⚠️</div>
        </div>

        <h1 class="error-title">Internal Server Error</h1>
        <p class="error-message">
          Something went wrong on our end. Don't worry, our team has been notified and we're working on it!
        </p>

        <div class="error-details">
          <div class="detail-card">
            <div class="detail-icon">🔧</div>
            <div class="detail-content">
              <h3 class="detail-title">What happened?</h3>
              <p class="detail-text">
                Our server encountered an unexpected condition that prevented it from fulfilling your request.
                This is usually a temporary issue and should be resolved shortly.
              </p>
            </div>
          </div>

          <div class="detail-card">
            <div class="detail-icon">💡</div>
            <div class="detail-content">
              <h3 class="detail-title">What can you do?</h3>
              <ul class="detail-list">
                <li>Refresh the page and try again</li>
                <li>Wait a few minutes and retry your request</li>
                <li>Clear your browser cache and cookies</li>
                <li>Try accessing the page from a different browser</li>
                <li>Check our status page for any ongoing issues</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="status-info">
          <div class="status-box">
            <div class="status-header">
              <span class="status-label">Server Status:</span>
              <span class="status-badge" :class="statusClass">{{ serverStatus }}</span>
            </div>
            <p class="status-text">
              If the problem persists, please contact our support team with any error details.
            </p>
          </div>
        </div>

        <div class="action-buttons">
          <button @click="refreshPage" class="btn btn-primary btn-lg">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="23 4 23 10 17 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Refresh Page
          </button>
          <router-link to="/" class="btn btn-outline btn-lg">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <polyline points="9 22 9 12 15 12 15 22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Go to Homepage
          </router-link>
          <router-link to="/contact" class="btn btn-outline btn-lg">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Contact Support
          </router-link>
        </div>

        <div class="help-links">
          <p class="help-text">Need immediate assistance?</p>
          <div class="links">
            <router-link to="/faq" class="help-link">Check FAQ</router-link>
            <span class="separator">•</span>
            <a href="#" class="help-link" @click.prevent="reportIssue">Report Issue</a>
            <span class="separator">•</span>
            <router-link to="/contact" class="help-link">Contact Us</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const serverStatus = ref('Checking...')
const statusClass = computed(() => {
  if (serverStatus.value === 'Online') return 'status-online'
  if (serverStatus.value === 'Offline') return 'status-offline'
  return 'status-checking'
})

onMounted(async () => {
  // Check server health
  try {
    const response = await fetch('http://localhost:3001/api/health')
    if (response.ok) {
      serverStatus.value = 'Online'
    } else {
      serverStatus.value = 'Offline'
    }
  } catch (error) {
    serverStatus.value = 'Offline'
  }
})

const refreshPage = () => {
  window.location.reload()
}

const reportIssue = () => {
  const subject = 'Server Error Report - 500 Internal Server Error'
  const body = `Please describe what you were doing when this error occurred:\n\n\nTimestamp: ${new Date().toISOString()}\nURL: ${window.location.href}`
  window.location.href = `/contact?subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(body)}`
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
  background: linear-gradient(135deg, #ef4444, #dc2626);
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
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
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
  margin-bottom: var(--spacing-lg);
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

.detail-list {
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
  padding-left: var(--spacing-lg);
}

.detail-list li {
  margin-bottom: 0.5rem;
}

.status-info {
  margin-bottom: var(--spacing-2xl);
}

.status-box {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1));
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
}

.status-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.status-label {
  font-weight: 600;
  color: var(--text-primary);
}

.status-badge {
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 700;
}

.status-online {
  background: #d1fae5;
  color: #065f46;
}

.status-offline {
  background: #fee2e2;
  color: #991b1b;
}

.status-checking {
  background: #fef3c7;
  color: #92400e;
}

.status-text {
  color: var(--text-secondary);
  margin: 0;
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

  .detail-list {
    text-align: left;
  }

  .action-buttons {
    flex-direction: column;
  }

  .action-buttons .btn {
    width: 100%;
  }
}
</style>
