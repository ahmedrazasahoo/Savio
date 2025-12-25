<template>
  <footer class="modern-footer">
    <div class="container">
      <!-- Main Footer Content -->
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-brand">
          <h4 class="brand-title">VideoDownloader</h4>
          <p class="brand-description">
            Fast, free, and easy video downloader supporting 1000+ platforms. Download videos in your preferred format and quality with just one click.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Links Columns -->
        <div class="footer-links-wrapper">
          <div class="footer-column">
            <h5 class="column-title">Quick Links</h5>
            <ul class="links-list">
              <li><router-link to="/" class="footer-link">Home</router-link></li>
              <li><router-link to="/download" class="footer-link">Download</router-link></li>
              <li><router-link to="/supported-sites" class="footer-link">Supported Sites</router-link></li>
              <li><router-link to="/how-to-use" class="footer-link">How To Use</router-link></li>
              <li><router-link to="/faq" class="footer-link">FAQ</router-link></li>
            </ul>
          </div>

          <div class="footer-column">
            <h5 class="column-title">Resources</h5>
            <ul class="links-list">
              <li><router-link to="/blog" class="footer-link">Blog</router-link></li>
              <li><router-link to="/about" class="footer-link">About Us</router-link></li>
              <li><router-link to="/contact" class="footer-link">Contact</router-link></li>
            </ul>
          </div>

          <div class="footer-column">
            <h5 class="column-title">Legal</h5>
            <ul class="links-list">
              <li><router-link to="/privacy" class="footer-link">Privacy Policy</router-link></li>
              <li><router-link to="/terms" class="footer-link">Terms of Service</router-link></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="footer-disclaimer">
        <div class="disclaimer-icon">⚠️</div>
        <p class="disclaimer-text">
          <strong>Important:</strong> This tool is for personal use only. Users are responsible for ensuring their downloads comply with copyright laws and platform terms of service. We do not host, store, or distribute any video content.
        </p>
      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ currentYear }} VideoDownloader. All rights reserved.
        </p>
        <p class="tagline">
          Respect content creators and their intellectual property rights.
        </p>
      </div>
    </div>

    <!-- Decorative Top Line -->
    <div class="footer-decoration"></div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.modern-footer {
  background: linear-gradient(135deg, var(--bg-dark-primary) 0%, var(--bg-dark-secondary) 50%, var(--bg-dark-tertiary) 100%);
  color: var(--gray-300);
  padding: 4rem 0 2rem;
  margin-top: auto;
  position: relative;
  overflow: hidden;
}

.footer-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Main Grid */
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 3rem;
  align-items: start;
}

/* Brand Section */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.brand-title {
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, white, var(--gray-300));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  letter-spacing: -0.02em;
}

.brand-description {
  color: var(--gray-400);
  line-height: 1.7;
  margin: 0;
  font-size: 0.95rem;
  max-width: 480px;
}

.social-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.social-link {
  width: 42px;
  height: 42px;
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-400);
  transition: all var(--transition-base);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.social-link:hover {
  background: var(--gradient-primary);
  border-color: transparent;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(124, 106, 230, 0.3);
}

/* Links Wrapper */
.footer-links-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.column-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
  margin: 0 0 0.5rem;
  position: relative;
  display: inline-block;
  width: fit-content;
}

.column-title::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
}

.links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.footer-link {
  color: var(--gray-400);
  text-decoration: none;
  transition: all var(--transition-base);
  display: inline-block;
  position: relative;
  font-size: 0.95rem;
  width: fit-content;
}

.footer-link::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width var(--transition-base);
}

.footer-link:hover {
  color: white;
  transform: translateX(4px);
}

.footer-link:hover::before {
  width: 100%;
}

/* Disclaimer */
.footer-disclaimer {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-left: 4px solid var(--accent-purple);
  border-radius: var(--radius-lg);
  padding: 1.5rem 1.75rem;
  margin-bottom: 2.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.disclaimer-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  line-height: 1;
}

.disclaimer-text {
  font-size: 0.875rem;
  color: var(--gray-400);
  line-height: 1.6;
  margin: 0;
}

.disclaimer-text strong {
  color: var(--gray-300);
}

/* Divider */
.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-medium), transparent);
  margin: 2rem 0 1.5rem;
}

/* Bottom Bar */
.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

.copyright {
  color: var(--gray-400);
  margin: 0;
  font-weight: 500;
  font-size: 0.95rem;
}

.tagline {
  font-size: 0.875rem;
  color: var(--gray-500);
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer-links-wrapper {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .modern-footer {
    padding: 3rem 0 2rem;
  }

  .footer-grid {
    gap: 2.5rem;
  }

  .footer-links-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-brand {
    text-align: center;
    align-items: center;
  }

  .brand-description {
    max-width: 100%;
  }

  .social-links {
    justify-content: center;
  }

  .footer-column {
    text-align: center;
    align-items: center;
  }

  .column-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-link {
    width: 100%;
    text-align: center;
  }

  .footer-link::before {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-link:hover {
    transform: translateX(0) scale(1.03);
  }

  .footer-disclaimer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1.25rem;
  }

  .brand-title {
    font-size: 1.5rem;
  }

  .brand-description {
    font-size: 0.875rem;
  }

  .social-links {
    gap: 0.5rem;
  }

  .social-link {
    width: 38px;
    height: 38px;
  }

  .social-link svg {
    width: 18px;
    height: 18px;
  }

  .footer-disclaimer {
    padding: 1.25rem;
  }
}
</style>
