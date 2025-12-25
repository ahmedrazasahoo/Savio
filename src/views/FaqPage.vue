<template>
  <div class="faq-page">
    <div class="page-hero">
      <div class="container">
        <h1 class="page-title">Frequently Asked Questions</h1>
        <p class="page-description">
          Find answers to common questions about our video downloader service
        </p>
      </div>
    </div>

    <div class="container">
      <div class="faq-container">
        <div class="faq-categories">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            class="category-btn"
            :class="{ active: activeCategory === category.id }"
          >
            <span class="category-icon">{{ category.icon }}</span>
            <span class="category-name">{{ category.name }}</span>
          </button>
        </div>

        <div class="faq-content">
          <div
            v-for="(faq, index) in filteredFaqs"
            :key="index"
            class="faq-item"
            :class="{ active: activeFaq === index }"
            @click="toggleFaq(index)"
          >
            <div class="faq-question">
              <h3 class="question-text">{{ faq.question }}</h3>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="6 9 12 15 18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="faq-answer">
              <p class="answer-text">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Still have questions? -->
      <div class="contact-cta">
        <div class="cta-icon">💬</div>
        <h3 class="cta-title">Still have questions?</h3>
        <p class="cta-description">
          Can't find the answer you're looking for? Our support team is here to help.
        </p>
        <router-link to="/contact" class="cta-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-width="2"/>
            <polyline points="22,6 12,13 2,6" stroke-width="2"/>
          </svg>
          Contact Support
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('general')
const activeFaq = ref(null)

const categories = [
  { id: 'general', name: 'General', icon: '❓' },
  { id: 'technical', name: 'Technical', icon: '⚙️' },
  { id: 'legal', name: 'Legal', icon: '⚖️' },
  { id: 'downloads', name: 'Downloads', icon: '📥' }
]

const faqs = [
  {
    category: 'general',
    question: 'Is this service really free?',
    answer: 'Yes! Our video downloader is 100% free with no hidden costs. You can download unlimited videos without any subscriptions or fees.'
  },
  {
    category: 'general',
    question: 'Do I need to create an account?',
    answer: 'No account required! You can start downloading videos immediately without any registration. Just paste the URL and download.'
  },
  {
    category: 'general',
    question: 'How many videos can I download?',
    answer: 'There is no limit to the number of videos you can download. Feel free to download as many videos as you need.'
  },
  {
    category: 'technical',
    question: 'Do I need to install any software?',
    answer: 'No installation required! Our online downloader works directly in your browser. However, we also offer a browser extension for more convenience.'
  },
  {
    category: 'technical',
    question: 'What video quality can I download?',
    answer: 'You can download videos in various qualities from 144p to 4K/8K, depending on the source video. We support HD, Full HD, 2K, and 4K resolutions.'
  },
  {
    category: 'technical',
    question: 'Which video formats are supported?',
    answer: 'We support multiple formats including MP4, WebM, MKV, AVI, and more. You can also download audio-only files in MP3, M4A, AAC, and OGG formats.'
  },
  {
    category: 'technical',
    question: 'Why is the download slow?',
    answer: 'Download speeds depend on several factors: your internet connection speed, the video file size, and the source server. Large 4K/8K videos naturally take longer to download.'
  },
  {
    category: 'technical',
    question: 'Can I download videos on mobile?',
    answer: 'Yes! Our service works perfectly on mobile devices including smartphones and tablets. The interface is fully responsive and mobile-friendly.'
  },
  {
    category: 'downloads',
    question: 'Can I download TikTok videos without watermark?',
    answer: 'Yes! Our downloader supports TikTok video downloads without the watermark, giving you clean videos for personal use.'
  },
  {
    category: 'downloads',
    question: 'Can I download private videos?',
    answer: 'No, we can only download publicly available videos. Private or restricted videos cannot be accessed or downloaded.'
  },
  {
    category: 'downloads',
    question: 'Can I download entire playlists?',
    answer: 'Yes! Our batch download feature allows you to download multiple videos or entire playlists at once for supported platforms.'
  },
  {
    category: 'downloads',
    question: 'Do you support subtitle downloads?',
    answer: 'Yes! You can download subtitles and captions in multiple languages in SRT, VTT, or TXT formats, depending on availability.'
  },
  {
    category: 'downloads',
    question: 'Where are my downloaded videos saved?',
    answer: 'Downloaded videos are saved to your default download folder set in your browser settings. You can change this location in your browser preferences.'
  },
  {
    category: 'legal',
    question: 'Is it legal to download videos?',
    answer: 'Downloading videos is legal for personal use only. You must have permission from the content creator and comply with platform terms of service and copyright laws.'
  },
  {
    category: 'legal',
    question: 'Do you store downloaded videos?',
    answer: 'No, we do not store any videos on our servers. All downloads happen directly from the source platform to your device. We respect your privacy.'
  },
  {
    category: 'legal',
    question: 'Can I use downloaded videos commercially?',
    answer: 'No, downloaded videos should only be used for personal purposes. Commercial use requires proper licensing and permission from the copyright holder.'
  },
  {
    category: 'legal',
    question: 'What is your privacy policy?',
    answer: 'We do not collect, store, or share your personal data or downloaded content. We only process URLs temporarily to fetch video information. Read our full Privacy Policy for details.'
  }
]

const filteredFaqs = computed(() => {
  return faqs.filter(faq => faq.category === activeCategory.value)
})

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>

<style scoped>
.faq-page {
  min-height: calc(100vh - 200px);
}

.page-hero {
  background: var(--gradient-primary);
  padding: 5rem 0 4rem;
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
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="30" r="1" fill="white" opacity="0.1"/><circle cx="80" cy="60" r="1" fill="white" opacity="0.1"/><circle cx="30" cy="80" r="1" fill="white" opacity="0.1"/></svg>');
  background-size: 100px 100px;
  animation: float 20s linear infinite;
  opacity: 0.3;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100px);
  }
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
  position: relative;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.page-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.95);
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.faq-container {
  padding: 3rem 0;
}

.faq-categories {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.faq-categories::-webkit-scrollbar {
  height: 6px;
}

.faq-categories::-webkit-scrollbar-track {
  background: var(--glass-bg);
  border-radius: var(--radius-full);
}

.faq-categories::-webkit-scrollbar-thumb {
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-full);
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-smooth);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.category-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--transition-smooth);
}

.category-btn:hover {
  border-color: var(--accent-purple);
  color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-purple);
}

.category-btn.active {
  background: var(--gradient-primary);
  border-color: transparent;
  color: white;
  box-shadow: var(--glow-gradient);
}

.category-btn.active::before {
  opacity: 1;
}

.category-icon {
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
}

.category-name {
  position: relative;
  z-index: 1;
}

.faq-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  transition: all var(--transition-smooth);
}

.faq-item:hover {
  border-color: var(--accent-purple);
  box-shadow: var(--shadow-purple);
  transform: translateY(-2px);
}

.faq-item.active {
  border-color: var(--accent-purple);
  box-shadow: var(--shadow-lg), var(--shadow-purple);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  user-select: none;
}

.question-text {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  flex: 1;
  padding-right: 1rem;
}

.faq-icon {
  width: 24px;
  height: 24px;
  color: var(--text-secondary);
  transition: transform var(--transition-smooth), color var(--transition-smooth);
  flex-shrink: 0;
}

.faq-item:hover .faq-icon {
  color: var(--accent-purple);
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
  color: var(--accent-purple);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow) ease-in-out;
}

.faq-item.active .faq-answer {
  max-height: 500px;
}

.answer-text {
  padding: 0 1.5rem 1.5rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
  font-size: 1rem;
}

.contact-cta {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-3xl);
  padding: 3.5rem 3rem;
  text-align: center;
  margin-top: 3rem;
  box-shadow: var(--shadow-xl);
  transition: all var(--transition-smooth);
}

.contact-cta:hover {
  border-color: var(--accent-purple);
  box-shadow: var(--shadow-3d), var(--shadow-gradient);
}

.cta-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: pulse 2s ease-in-out infinite;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: var(--gradient-primary);
  color: white;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 1.125rem;
  text-decoration: none;
  transition: all var(--transition-smooth);
  box-shadow: var(--shadow-gradient);
  position: relative;
  overflow: hidden;
}

.cta-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.cta-btn:hover::before {
  width: 400px;
  height: 400px;
}

.cta-btn svg {
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 1;
}

.cta-btn:hover {
  transform: translateY(-4px);
  box-shadow: var(--glow-gradient);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.25rem;
  }

  .page-description {
    font-size: 1.125rem;
  }

  .faq-categories {
    flex-wrap: wrap;
  }

  .category-btn {
    flex: 1 1 calc(50% - 0.375rem);
    min-width: 140px;
    justify-content: center;
  }

  .question-text {
    font-size: 1rem;
  }

  .contact-cta {
    padding: 2.5rem 1.5rem;
  }

  .cta-title {
    font-size: 1.75rem;
  }

  .cta-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .page-hero {
    padding: 4rem 0 3rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .category-btn {
    flex: 1 1 100%;
  }

  .faq-question {
    padding: 1.25rem;
  }

  .answer-text {
    padding: 0 1.25rem 1.25rem;
  }
}
</style>
