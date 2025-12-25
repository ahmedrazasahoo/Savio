<template>
  <div class="contact-page">
    <div class="container">
      <!-- Page Header -->
      <div class="page-header-section">
        <h1 class="page-main-title">Contact Us</h1>
        <p class="page-subtitle">
          Have a question or need support? We're here to help!
        </p>
      </div>

      <div class="contact-layout">
        <!-- Contact Form -->
        <div class="contact-form-section">
          <div class="form-card">
            <h2 class="form-title">Send Us a Message</h2>
            <p class="form-description">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form v-if="!formSubmitted" @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name" class="form-label">Your Name <span class="required">*</span></label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email Address <span class="required">*</span></label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div class="form-group">
                <label for="subject" class="form-label">Subject <span class="required">*</span></label>
                <select
                  id="subject"
                  v-model="formData.subject"
                  class="form-input"
                  required
                >
                  <option value="">Select a subject...</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Report a Bug</option>
                  <option value="copyright">Copyright Issue</option>
                  <option value="privacy">Privacy Concern</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message" class="form-label">Message <span class="required">*</span></label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  class="form-textarea"
                  placeholder="Please provide details about your inquiry..."
                  rows="6"
                  required
                  maxlength="1000"
                ></textarea>
                <span class="char-count">{{ formData.message.length }} / 1000</span>
              </div>

              <button
                type="submit"
                class="btn btn-primary btn-lg submit-btn"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="processing-text">
                  <span class="spinner"></span>
                  Sending...
                </span>
              </button>
            </form>

            <!-- Success Message -->
            <div v-else class="success-message">
              <div class="success-icon">✅</div>
              <h3 class="success-title">Message Sent Successfully!</h3>
              <p class="success-text">
                Thank you for contacting us. We've received your message and will respond within 24-48 hours.
              </p>
              <button @click="resetForm" class="btn btn-outline">
                Send Another Message
              </button>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="contact-info-section">
          <!-- Direct Contact -->
          <div class="info-card">
            <h3 class="info-card-title">
              <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-width="2"/>
                <polyline points="22,6 12,13 2,6" stroke-width="2"/>
              </svg>
              Email Support
            </h3>
            <p class="info-card-text">
              For direct email support, you can reach us at:
            </p>
            <a href="mailto:support@videodownloader.example.com" class="info-link">
              support@videodownloader.example.com
            </a>
            <p class="info-note">We typically respond within 24-48 hours</p>
          </div>

          <!-- Response Time -->
          <div class="info-card">
            <h3 class="info-card-title">
              <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke-width="2"/>
                <polyline points="12,6 12,12 16,14" stroke-width="2"/>
              </svg>
              Response Time
            </h3>
            <p class="info-card-text">
              We aim to respond to all inquiries within:
            </p>
            <ul class="info-list">
              <li>General inquiries: 24-48 hours</li>
              <li>Technical support: 12-24 hours</li>
              <li>Critical issues: As soon as possible</li>
            </ul>
          </div>

          <!-- FAQ Link -->
          <div class="info-card highlight-card">
            <h3 class="info-card-title">
              <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke-width="2"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke-width="2"/>
                <line x1="12" y1="17" x2="12.01" y2="17" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Before You Contact
            </h3>
            <p class="info-card-text">
              Common questions answered:
            </p>
            <ul class="info-list">
              <li>How to use the downloader</li>
              <li>Supported video platforms</li>
              <li>Available formats and quality</li>
              <li>Copyright and legal questions</li>
            </ul>
            <router-link to="/faq" class="info-link">
              Visit FAQ Page →
            </router-link>
          </div>
        </div>
      </div>

      <!-- Ad Space -->
      <div class="ad-space">Advertisement Space</div>

      <!-- Common Issues Section -->
      <section class="common-issues-section">
        <h2 class="section-title">Common Issues & Quick Solutions</h2>
        
        <div class="issues-grid">
          <div class="issue-card">
            <div class="issue-icon error-icon">❌</div>
            <h3 class="issue-title">Download Not Working</h3>
            <ul class="issue-solutions">
              <li>Verify the video URL is correct and complete</li>
              <li>Check if the video is publicly accessible</li>
              <li>Try a different format or quality option</li>
              <li>Clear your browser cache and try again</li>
            </ul>
          </div>

          <div class="issue-card">
            <div class="issue-icon warning-icon">⚠️</div>
            <h3 class="issue-title">Unsupported Platform</h3>
            <ul class="issue-solutions">
              <li>Check our supported platforms list on the home page</li>
              <li>Submit a feature request for new platform support</li>
              <li>Ensure you're using the correct video URL format</li>
            </ul>
          </div>

          <div class="issue-card">
            <div class="issue-icon slow-icon">🐌</div>
            <h3 class="issue-title">Slow Download Speed</h3>
            <ul class="issue-solutions">
              <li>Download speed depends on your internet connection</li>
              <li>Try downloading at a lower quality/smaller file size</li>
              <li>Check your internet connection stability</li>
              <li>Avoid peak usage hours for better speeds</li>
            </ul>
          </div>

          <div class="issue-card">
            <div class="issue-icon mobile-icon">📱</div>
            <h3 class="issue-title">Mobile Issues</h3>
            <ul class="issue-solutions">
              <li>Ensure you're using an updated mobile browser</li>
              <li>Some platforms may restrict mobile downloads</li>
              <li>Try switching to desktop mode in your browser</li>
              <li>Check your device storage space</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Important Notice -->
      <section class="notice-section">
        <div class="notice-box">
          <div class="notice-icon">📌</div>
          <div class="notice-content">
            <h3 class="notice-title">Important Information</h3>
            <p class="notice-text">
              For copyright-related concerns, please refer to our <router-link to="/terms" class="inline-link">Terms & Conditions</router-link> and <router-link to="/privacy" class="inline-link">Privacy Policy</router-link>. If you believe content accessed through our service infringes your copyright, please note that we do not host any video content. All downloads are performed directly from the original hosting platforms. DMCA takedown requests should be directed to the appropriate content hosting platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formSubmitted = ref(false)
const isSubmitting = ref(false)

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  isSubmitting.value = true
  
  // Simulate form submission
  setTimeout(() => {
    console.log('Form submitted:', formData)
    formSubmitted.value = true
    isSubmitting.value = false
  }, 1500)
}

const resetForm = () => {
  formData.name = ''
  formData.email = ''
  formData.subject = ''
  formData.message = ''
  formSubmitted.value = false
}
</script>

<style scoped>
.contact-page {
  padding: var(--spacing-3xl) 0;
}

.page-header-section {
  text-align: center;
  margin-bottom: var(--spacing-4xl);
}

.page-main-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Contact Layout */
.contact-layout {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-4xl);
  align-items: start;
}

/* Form Section */
.contact-form-section {
  width: 100%;
}

.form-card {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-3xl);
  padding: var(--spacing-3xl);
  box-shadow: var(--shadow-xl);
  transition: all var(--transition-smooth);
}

.form-card:hover {
  box-shadow: var(--shadow-3d), var(--shadow-purple);
  border-color: var(--accent-purple);
}

.form-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.form-description {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-2xl);
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.required {
  color: var(--error-color);
}

.char-count {
  display: block;
  margin-top: var(--spacing-xs);
  font-size: 0.875rem;
  color: var(--text-muted);
  text-align: right;
}

.submit-btn {
  width: 100%;
  margin-top: var(--spacing-md);
  position: relative;
  overflow: hidden;
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.submit-btn:hover:not(:disabled)::before {
  width: 400px;
  height: 400px;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Success Message */
.success-message {
  text-align: center;
  padding: var(--spacing-3xl) 0;
}

.success-icon {
  font-size: 5rem;
  margin-bottom: var(--spacing-lg);
  animation: bounce-in 0.6s var(--transition-bounce);
}

.success-title {
  font-size: 1.75rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-md);
}

.success-text {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-2xl);
  line-height: 1.7;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* Contact Info Section */
.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.info-card {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  transition: all var(--transition-smooth);
}

.info-card:hover {
  background: var(--glass-bg-hover);
  border-color: var(--accent-purple);
  transform: translateY(-4px);
  box-shadow: var(--shadow-purple);
}

.highlight-card {
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.1), rgba(229, 107, 170, 0.1));
  border-color: var(--accent-purple);
}

.info-card-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.title-icon {
  width: 24px;
  height: 24px;
  color: var(--accent-purple);
}

.info-card-text {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.7;
}

.info-link {
  display: inline-block;
  color: var(--accent-purple);
  font-weight: 600;
  text-decoration: none;
  margin-bottom: var(--spacing-sm);
  transition: all var(--transition-smooth);
  position: relative;
}

.info-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width var(--transition-smooth);
}

.info-link:hover {
  color: var(--accent-pink);
  transform: translateX(4px);
}

.info-link:hover::after {
  width: 100%;
}

.info-note {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-style: italic;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  padding: var(--spacing-sm) 0;
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  padding-left: var(--spacing-lg);
  position: relative;
}

.info-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--success-color);
  font-weight: 700;
  font-size: 1.1rem;
}

/* Common Issues Section */
.common-issues-section {
  padding: var(--spacing-3xl) 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: var(--spacing-3xl);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.issues-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
}

.issue-card {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  transition: all var(--transition-smooth);
}

.issue-card:hover {
  background: var(--glass-bg-hover);
  border-color: var(--accent-purple);
  transform: translateY(-8px);
  box-shadow: var(--shadow-purple);
}

.issue-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: var(--radius-2xl);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  transition: all var(--transition-smooth);
}

.issue-card:hover .issue-icon {
  transform: scale(1.1) rotate(-5deg);
  box-shadow: var(--shadow-lg);
}

.error-icon {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05));
  border-color: rgba(239, 68, 68, 0.3);
}

.warning-icon {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05));
  border-color: rgba(245, 158, 11, 0.3);
}

.slow-icon {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05));
  border-color: rgba(59, 130, 246, 0.3);
}

.mobile-icon {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05));
  border-color: rgba(16, 185, 129, 0.3);
}

.issue-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.issue-solutions {
  list-style: none;
  padding: 0;
  margin: 0;
}

.issue-solutions li {
  padding: var(--spacing-sm) 0;
  padding-left: var(--spacing-lg);
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
  position: relative;
}

.issue-solutions li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--accent-purple);
  font-weight: 700;
}

/* Notice Section */
.notice-section {
  padding: var(--spacing-3xl) 0;
}

.notice-box {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--accent-purple);
  border-left: 4px solid var(--accent-purple);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  max-width: 900px;
  margin: 0 auto;
  box-shadow: var(--shadow-purple);
  display: flex;
  gap: var(--spacing-lg);
  align-items: start;
}

.notice-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.notice-content {
  flex: 1;
}

.notice-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.notice-text {
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
}

.inline-link {
  color: var(--accent-purple);
  text-decoration: underline;
  transition: all var(--transition-smooth);
}

.inline-link:hover {
  color: var(--accent-pink);
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: var(--spacing-3xl);
  }
}

@media (max-width: 768px) {
  .page-main-title {
    font-size: 2.25rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .issues-grid {
    grid-template-columns: 1fr;
  }

  .form-card {
    padding: var(--spacing-2xl);
  }

  .notice-box {
    flex-direction: column;
    text-align: center;
  }

  .notice-icon {
    align-self: center;
  }
}

@media (max-width: 480px) {
  .contact-page {
    padding: var(--spacing-2xl) 0;
  }

  .page-header-section {
    margin-bottom: var(--spacing-2xl);
  }

  .form-card {
    padding: var(--spacing-xl);
  }
}
</style>
