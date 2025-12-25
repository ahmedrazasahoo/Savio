<template>
  <div class="blog-details-page">
    <!-- Hero Section -->
    <div class="article-hero">
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/blog" class="breadcrumb-link">Blog</router-link>
          <span class="breadcrumb-separator">→</span>
          <span class="breadcrumb-current">{{ article.category }}</span>
        </nav>

        <div class="article-header">
          <div class="article-meta">
            <span class="article-category">{{ article.category }}</span>
            <span class="article-date">{{ formatDate(article.date) }}</span>
            <span class="reading-time">{{ article.readingTime }} min read</span>
          </div>

          <h1 class="article-title">{{ article.title }}</h1>
          
          <div class="author-info">
            <div class="author-avatar">{{ getAuthorInitials(article.author) }}</div>
            <div class="author-details">
              <div class="author-name">{{ article.author }}</div>
              <div class="author-role">Content Writer</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Image -->
    <div class="featured-image-container">
      <div class="container">
        <div class="featured-image">
          <img v-if="article.image" :src="article.image" :alt="article.title" class="article-featured-img" />
          <div v-else-if="article.videoUrl" class="video-embed">
            <iframe
              :src="getEmbedUrl(article.videoUrl)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="video-iframe"
            ></iframe>
          </div>
          <div v-else class="image-placeholder">
            <svg class="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" stroke-width="2"/>
              <line x1="7" y1="2" x2="7" y2="22" stroke-width="2"/>
              <line x1="17" y1="2" x2="17" y2="22" stroke-width="2"/>
              <line x1="2" y1="12" x2="22" y2="12" stroke-width="2"/>
              <line x1="2" y1="7" x2="7" y2="7" stroke-width="2"/>
              <line x1="2" y1="17" x2="7" y2="17" stroke-width="2"/>
              <line x1="17" y1="17" x2="22" y2="17" stroke-width="2"/>
              <line x1="17" y1="7" x2="22" y2="7" stroke-width="2"/>
            </svg>
            <p class="placeholder-text">Article Image</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Article Content -->
    <div class="container">
      <div class="content-layout">
        <!-- Main Content -->
        <article class="article-content">
        <div class="content-body">
          <p class="lead-paragraph">{{ article.excerpt }}</p>

          <h2>Introduction</h2>
          <p>
            In today's digital age, video content has become an integral part of our daily lives. 
            Whether you're a content creator, educator, or casual user, having the ability to 
            download videos can be incredibly useful for offline viewing, archiving, or creating 
            compilations.
          </p>

          <h2>Understanding the Basics</h2>
          <p>
            Before diving into the technical details, it's important to understand the fundamentals 
            of video downloading. Videos on platforms like YouTube, Facebook, and Instagram are 
            typically streamed rather than downloaded directly to your device.
          </p>

          <div class="content-highlight">
            <div class="highlight-icon">💡</div>
            <div class="highlight-content">
              <h4>Pro Tip</h4>
              <p>
                Always check the copyright and terms of service of the platform before downloading 
                videos. Respect content creators' rights and only download content for personal use.
              </p>
            </div>
          </div>

          <h2>Step-by-Step Guide</h2>
          <p>Follow these simple steps to get started:</p>

          <ol class="numbered-list">
            <li>
              <strong>Copy the video URL:</strong> Navigate to the video you want to download and 
              copy the URL from your browser's address bar.
            </li>
            <li>
              <strong>Paste the URL:</strong> Go to our downloader tool and paste the URL into the 
              input field.
            </li>
            <li>
              <strong>Select quality:</strong> Choose your preferred video quality and format from 
              the available options.
            </li>
            <li>
              <strong>Download:</strong> Click the download button and wait for the process to 
              complete.
            </li>
          </ol>

          <h2>Best Practices</h2>
          <p>
            To ensure the best experience when downloading videos, consider the following best 
            practices:
          </p>

          <ul class="bullet-list">
            <li>Choose the appropriate quality based on your needs and storage capacity</li>
            <li>Be patient with larger files - high-quality videos take longer to process</li>
            <li>Organize your downloaded videos in folders for easy access</li>
            <li>Consider using MP4 format for maximum compatibility across devices</li>
            <li>Always scan downloaded files with antivirus software</li>
          </ul>

          <div class="quote-block">
            <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
            <p class="quote-text">
              "The key to successful video downloading is choosing the right quality that balances 
              file size with visual fidelity. Don't always go for the highest quality if you don't 
              need it."
            </p>
            <div class="quote-author">— Video Download Expert</div>
          </div>

          <h2>Common Issues and Solutions</h2>
          <p>
            Sometimes you might encounter issues when downloading videos. Here are some common 
            problems and their solutions:
          </p>

          <div class="table-container">
            <table class="issues-table">
              <thead>
                <tr>
                  <th>Issue</th>
                  <th>Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Download fails to start</td>
                  <td>Check your internet connection and try again</td>
                </tr>
                <tr>
                  <td>Poor video quality</td>
                  <td>Select a higher quality option from the dropdown</td>
                </tr>
                <tr>
                  <td>Slow download speed</td>
                  <td>Try downloading during off-peak hours</td>
                </tr>
                <tr>
                  <td>File won't play</td>
                  <td>Ensure you have the correct codec installed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Conclusion</h2>
          <p>
            Downloading videos doesn't have to be complicated. With the right tools and knowledge, 
            you can easily save your favorite content for offline viewing. Remember to always 
            respect copyright laws and use downloaded content responsibly.
          </p>

          <p>
            We hope this guide has been helpful. If you have any questions or need further 
            assistance, feel free to reach out to our support team through the contact page.
          </p>
        </div>

        <!-- Article Footer -->
        <div class="article-footer">
          <div class="tags-section">
            <h4 class="tags-title">Tags:</h4>
            <div class="tags-list">
              <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>

          <div class="share-section">
            <h4 class="share-title">Share this article:</h4>
            <div class="share-buttons">
              <button class="share-btn twitter" @click="shareOn('twitter')">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </button>
              <button class="share-btn facebook" @click="shareOn('facebook')">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </button>
              <button class="share-btn linkedin" @click="shareOn('linkedin')">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </button>
              <button class="share-btn copy" @click="copyLink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/>
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke-width="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        </article>

        <!-- Sidebar -->
        <aside class="sidebar">
          <div class="sidebar-sticky">
            <div class="sidebar-header">
              <h3 class="sidebar-title">More in {{ article.category }}</h3>
              <div class="sidebar-controls">
                <button class="sidebar-nav-btn" @click="slideSidebarLeft" :disabled="!canSlideSidebarLeft">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 15l-6-6-6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <button class="sidebar-nav-btn" @click="slideSidebarRight" :disabled="!canSlideSidebarRight">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 9l6 6 6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div class="sidebar-slider-wrapper">
              <div class="sidebar-posts" ref="sidebarSliderRef" @scroll="handleSidebarScroll" @mouseenter="stopSidebarAutoPlay" @mouseleave="startSidebarAutoPlay">
                <article
                  v-for="post in sameCategoryPosts"
                  :key="post.id"
                  class="sidebar-post-card"
                  @click="navigateToPost(post.id)"
                >
                  <div class="sidebar-post-image">
                    <img v-if="post.image" :src="post.image" :alt="post.title" class="sidebar-post-img" />
                    <div v-else class="sidebar-image-placeholder">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                    </div>
                  </div>
                  <div class="sidebar-post-content">
                    <h4 class="sidebar-post-title">{{ post.title }}</h4>
                    <div class="sidebar-post-meta">
                      <span class="sidebar-post-date">{{ formatDate(post.date) }}</span>
                      <span class="sidebar-reading-time">{{ post.readingTime }} min</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <!-- Popular Tags -->
            <div class="sidebar-section">
              <h4 class="sidebar-section-title">Popular Tags</h4>
              <div class="sidebar-tags">
                <span v-for="tag in popularTags" :key="tag" class="sidebar-tag">{{ tag }}</span>
              </div>
            </div>

            <!-- Newsletter Widget -->
            <div class="sidebar-newsletter">
              <div class="sidebar-newsletter-icon">✉️</div>
              <h4 class="sidebar-newsletter-title">Stay Updated</h4>
              <p class="sidebar-newsletter-text">Get weekly tips and tutorials</p>
              <button class="sidebar-newsletter-btn" @click="scrollToNewsletter">Subscribe</button>
            </div>
          </div>
        </aside>
      </div>

      <!-- Related Posts -->
      <section class="related-posts">
        <div class="section-header">
          <h3 class="section-title">Related Articles</h3>
          <div class="slider-controls">
            <button class="slider-btn slider-prev" @click="slideLeft" :disabled="!canSlideLeft">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="slider-btn slider-next" @click="slideRight" :disabled="!canSlideRight">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="slider-wrapper">
          <div class="related-slider" ref="sliderRef" @scroll="handleScroll" @mouseenter="stopRelatedAutoPlay" @mouseleave="startRelatedAutoPlay">
            <article
              v-for="post in relatedPosts"
              :key="post.id"
              class="related-card"
              @click="navigateToPost(post.id)"
            >
              <div class="related-image">
                <img v-if="post.image" :src="post.image" :alt="post.title" class="related-post-img" />
                <div v-else class="related-image-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <span class="related-category">{{ post.category }}</span>
              </div>
              <div class="related-content">
                <h4 class="related-title">{{ post.title }}</h4>
                <p class="related-excerpt">{{ post.excerpt }}</p>
                <div class="related-meta">
                  <span class="related-date">{{ formatDate(post.date) }}</span>
                  <span class="related-reading-time">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" stroke-width="2"/>
                      <path d="M12 6v6l4 2" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    {{ post.readingTime }} min
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Newsletter CTA -->
      <section class="newsletter-cta">
        <div class="newsletter-content">
          <div class="newsletter-icon">📬</div>
          <h3 class="newsletter-title">Never Miss an Update</h3>
          <p class="newsletter-description">
            Subscribe to our newsletter for weekly tips, tutorials, and the latest news about video downloading.
          </p>
          <form class="newsletter-form" @submit.prevent="handleSubscribe">
            <input
              v-model="email"
              type="email"
              class="newsletter-input"
              placeholder="Your email address"
              required
            />
            <button type="submit" class="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getBlogPostById, getRelatedPosts, getSameCategoryPosts, popularTags } from '../store/api.js'

const router = useRouter()
const route = useRoute()
const email = ref('')
const sliderRef = ref(null)
const scrollPosition = ref(0)
const sidebarSliderRef = ref(null)
const sidebarScrollPosition = ref(0)
const relatedSliderInterval = ref(null)
const sidebarSliderInterval = ref(null)

// Get article data from API
const articleId = parseInt(route.params.id) || 1
const article = getBlogPostById(articleId) || {
  id: 1,
  title: 'Complete Guide: How to Download 4K Videos from YouTube',
  excerpt: 'Learn the best practices for downloading high-quality 4K videos from YouTube while maintaining the best quality and file size balance.',
  category: 'Tutorial',
  date: new Date('2024-01-15'),
  readingTime: 8,
  author: 'Sarah Johnson',
  tags: ['YouTube', '4K Video', 'Tutorial', 'Download Guide', 'Video Quality']
}

// Get posts from API
const sameCategoryPosts = getSameCategoryPosts(article.category, article.id, 10)
const relatedPosts = getRelatedPosts(article.id, 8)

// Related posts slider functionality
const canSlideLeft = computed(() => {
  if (!sliderRef.value) return false
  return scrollPosition.value > 0
})

const canSlideRight = computed(() => {
  if (!sliderRef.value) return false
  const maxScroll = sliderRef.value.scrollWidth - sliderRef.value.clientWidth
  return scrollPosition.value < maxScroll - 10
})

const slideLeft = () => {
  if (sliderRef.value) {
    const slideAmount = sliderRef.value.clientWidth * 0.8
    sliderRef.value.scrollBy({ left: -slideAmount, behavior: 'smooth' })
    updateScrollPosition()
  }
}

const slideRight = () => {
  if (sliderRef.value) {
    const slideAmount = sliderRef.value.clientWidth * 0.8
    sliderRef.value.scrollBy({ left: slideAmount, behavior: 'smooth' })
    updateScrollPosition()
  }
}

const updateScrollPosition = () => {
  setTimeout(() => {
    if (sliderRef.value) {
      scrollPosition.value = sliderRef.value.scrollLeft
    }
  }, 100)
}

const handleScroll = () => {
  if (sliderRef.value) {
    scrollPosition.value = sliderRef.value.scrollLeft
  }
}

// Auto-play for related posts slider
const startRelatedAutoPlay = () => {
  relatedSliderInterval.value = setInterval(() => {
    if (sliderRef.value) {
      const maxScroll = sliderRef.value.scrollWidth - sliderRef.value.clientWidth

      if (scrollPosition.value >= maxScroll - 10) {
        // Reset to start
        sliderRef.value.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        // Slide to next
        const slideAmount = sliderRef.value.clientWidth * 0.5
        sliderRef.value.scrollBy({ left: slideAmount, behavior: 'smooth' })
      }
      updateScrollPosition()
    }
  }, 3000) // Auto-slide every 3 seconds
}

const stopRelatedAutoPlay = () => {
  if (relatedSliderInterval.value) {
    clearInterval(relatedSliderInterval.value)
    relatedSliderInterval.value = null
  }
}

// Start auto-play on mount
onMounted(() => {
  startRelatedAutoPlay()
  startSidebarAutoPlay()
})

onUnmounted(() => {
  stopRelatedAutoPlay()
  stopSidebarAutoPlay()
})

// Sidebar slider functionality
const canSlideSidebarLeft = computed(() => {
  if (!sidebarSliderRef.value) return false
  return sidebarScrollPosition.value > 0
})

const canSlideSidebarRight = computed(() => {
  if (!sidebarSliderRef.value) return false
  const maxScroll = sidebarSliderRef.value.scrollHeight - sidebarSliderRef.value.clientHeight
  return sidebarScrollPosition.value < maxScroll - 10
})

const slideSidebarLeft = () => {
  if (sidebarSliderRef.value) {
    const slideAmount = 200
    sidebarSliderRef.value.scrollBy({ top: -slideAmount, behavior: 'smooth' })
    updateSidebarScrollPosition()
  }
}

const slideSidebarRight = () => {
  if (sidebarSliderRef.value) {
    const slideAmount = 200
    sidebarSliderRef.value.scrollBy({ top: slideAmount, behavior: 'smooth' })
    updateSidebarScrollPosition()
  }
}

const updateSidebarScrollPosition = () => {
  setTimeout(() => {
    if (sidebarSliderRef.value) {
      sidebarScrollPosition.value = sidebarSliderRef.value.scrollTop
    }
  }, 100)
}

const handleSidebarScroll = () => {
  if (sidebarSliderRef.value) {
    sidebarScrollPosition.value = sidebarSliderRef.value.scrollTop
  }
}

// Auto-play for sidebar slider
const startSidebarAutoPlay = () => {
  sidebarSliderInterval.value = setInterval(() => {
    if (sidebarSliderRef.value) {
      const maxScroll = sidebarSliderRef.value.scrollHeight - sidebarSliderRef.value.clientHeight

      if (sidebarScrollPosition.value >= maxScroll - 10) {
        // Reset to start
        sidebarSliderRef.value.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        // Slide to next
        const slideAmount = 150
        sidebarSliderRef.value.scrollBy({ top: slideAmount, behavior: 'smooth' })
      }
      updateSidebarScrollPosition()
    }
  }, 3000) // Auto-slide every 3 seconds
}

const stopSidebarAutoPlay = () => {
  if (sidebarSliderInterval.value) {
    clearInterval(sidebarSliderInterval.value)
    sidebarSliderInterval.value = null
  }
}

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

const getAuthorInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('')
}

const navigateToPost = (id) => {
  router.push(`/blog/${id}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const shareOn = (platform) => {
  const url = window.location.href
  const title = article.title
  
  const urls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  }
  
  if (urls[platform]) {
    window.open(urls[platform], '_blank', 'width=600,height=400')
  }
}

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href)
  alert('Link copied to clipboard!')
}

const handleSubscribe = () => {
  alert(`Thanks for subscribing with ${email.value}!\n\nNote: This is a demo. In production, this would add your email to the newsletter list.`)
  email.value = ''
}

const scrollToNewsletter = () => {
  const newsletterSection = document.querySelector('.newsletter-cta')
  if (newsletterSection) {
    newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

const getEmbedUrl = (url) => {
  if (!url) return ''

  // YouTube URL patterns
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(youtubeRegex)

  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`
  }

  // Vimeo URL pattern
  const vimeoRegex = /vimeo\.com\/(\d+)/
  const vimeoMatch = url.match(vimeoRegex)

  if (vimeoMatch && vimeoMatch[1]) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`
  }

  return url
}
</script>

<style scoped>
.blog-details-page {
  min-height: 100vh;
  background: var(--bg-dark-primary);
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Content Layout */
.content-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 4rem;
  align-items: start;
}

/* Hero Section */
.article-hero {
  background: var(--bg-gradient);
  background-image: var(--bg-gradient-radial);
  padding: 2rem 0 3rem;
  position: relative;
  overflow: hidden;
}

.article-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.1) 0%, rgba(229, 107, 170, 0.1) 50%, rgba(242, 140, 75, 0.1) 100%);
  pointer-events: none;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  position: relative;
}

.breadcrumb-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all var(--transition-base);
}

.breadcrumb-link:hover {
  color: var(--accent-purple);
}

.breadcrumb-separator {
  color: var(--text-muted);
}

.breadcrumb-current {
  color: var(--text-secondary);
}

.article-header {
  max-width: 800px;
  position: relative;
}

.article-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  position: relative;
}

.article-category {
  padding: 0.5rem 1rem;
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
  font-weight: 600;
  color: white;
  box-shadow: var(--shadow-gradient);
}

.article-date,
.reading-time {
  padding: 0.5rem 0;
  color: var(--text-secondary);
}

.article-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 2rem;
  color: var(--text-primary);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.author-avatar {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
  color: white;
  box-shadow: var(--shadow-gradient);
}

.author-name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--text-primary);
}

.author-role {
  font-size: 0.875rem;
  color: var(--text-muted);
}

/* Featured Image */
.featured-image-container {
  background: transparent;
  padding: 2rem 0;
}

.featured-image {
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--glass-border);
}

.article-featured-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.video-embed {
  width: 100%;
  height: 400px;
  position: relative;
  background: #000;
}

.video-iframe {
  width: 100%;
  height: 100%;
  display: block;
}

.image-placeholder {
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.placeholder-icon {
  width: 120px;
  height: 120px;
  color: rgba(255, 255, 255, 0.3);
  stroke-width: 1.5;
}

.placeholder-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

/* Article Content */
.article-content {
  margin: 3rem 0;
  min-width: 0;
  max-width: 800px;
}

.content-body {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 100%;
}

.lead-paragraph {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.content-body h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 3rem 0 1.5rem;
  line-height: 1.3;
}

.content-body p {
  margin-bottom: 1.5rem;
}

/* Content Highlight */
.content-highlight {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border-left: 4px solid var(--accent-purple);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  border: 1px solid var(--glass-border);
  border-left: 4px solid var(--accent-purple);
}

.highlight-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.highlight-content h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.highlight-content p {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Lists */
.numbered-list,
.bullet-list {
  margin: 2rem 0;
  padding-left: 1.5rem;
}

.numbered-list li,
.bullet-list li {
  margin-bottom: 1rem;
  padding-left: 0.75rem;
  color: var(--text-secondary);
}

.numbered-list li strong {
  color: var(--accent-purple);
}

/* Quote Block */
.quote-block {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-left: 4px solid var(--accent-purple);
  border-radius: var(--radius-lg);
  padding: 2rem;
  margin: 3rem 0;
  position: relative;
}

.quote-icon {
  width: 48px;
  height: 48px;
  color: var(--accent-purple);
  opacity: 0.2;
  margin-bottom: 1rem;
}

.quote-text {
  font-size: 1.25rem;
  font-style: italic;
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.quote-author {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-muted);
}

/* Table */
.table-container {
  overflow-x: auto;
  margin: 2rem 0;
  border-radius: var(--radius-lg);
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
}

.issues-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.issues-table thead {
  background: var(--glass-bg-hover);
}

.issues-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 700;
  color: var(--text-primary);
  border-bottom: 2px solid var(--glass-border);
}

.issues-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--glass-border);
  color: var(--text-secondary);
}

.issues-table tbody tr:last-child td {
  border-bottom: none;
}

.issues-table tbody tr:hover {
  background: var(--glass-bg-hover);
}

/* Article Footer */
.article-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--glass-border);
}

.tags-section {
  margin-bottom: 2rem;
}

.tags-title,
.share-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.tags-list {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.2), rgba(229, 107, 170, 0.2));
  border: 1px solid var(--accent-purple);
  color: var(--accent-purple);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  transition: all var(--transition-base);
}

.tag:hover {
  background: var(--gradient-purple-pink);
  color: white;
  box-shadow: var(--shadow-purple);
  cursor: pointer;
}

.share-section {
  margin-top: 2rem;
}

.share-buttons {
  display: flex;
  gap: 0.75rem;
}

.share-btn {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-smooth);
}

.share-btn svg {
  width: 20px;
  height: 20px;
}

.share-btn.twitter {
  background: linear-gradient(135deg, #1da1f2, #0d8bd9);
  color: white;
}

.share-btn.facebook {
  background: linear-gradient(135deg, #1877f2, #0c5dca);
  color: white;
}

.share-btn.linkedin {
  background: linear-gradient(135deg, #0a66c2, #084d94);
  color: white;
}

.share-btn.copy {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
}

.share-btn:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.share-btn.copy:hover {
  border-color: var(--accent-purple);
  color: var(--accent-purple);
}

/* Related Posts */
.related-posts {
  margin: 4rem 0;
  padding: 3rem 0;
  border-top: 2px solid var(--glass-border);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.slider-controls {
  display: flex;
  gap: 0.5rem;
}

.slider-btn {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-smooth);
}

.slider-btn svg {
  width: 20px;
  height: 20px;
}

.slider-btn:hover:not(:disabled) {
  border-color: var(--accent-purple);
  color: var(--accent-purple);
  background: var(--glass-bg-hover);
  transform: translateY(-2px);
}

.slider-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.slider-wrapper {
  overflow: hidden;
  margin: 0 -2rem;
  padding: 0 2rem;
}

.related-slider {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 1rem;
}

.related-slider::-webkit-scrollbar {
  display: none;
}

.related-card {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-smooth);
  min-width: 280px;
  max-width: 280px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
}

.related-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--transition-base);
  z-index: 1;
}

.related-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-purple);
  border-color: var(--accent-purple);
  background: var(--glass-bg-hover);
}

.related-card:hover::before {
  opacity: 1;
}

.related-image {
  height: 160px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
}

.related-post-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.related-card:hover .related-post-img {
  transform: scale(1.1);
}

.related-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.related-image-placeholder svg {
  width: 60px;
  height: 60px;
  color: rgba(255, 255, 255, 0.4);
}

.related-category {
  position: relative;
  z-index: 2;
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--gradient-primary);
  color: white;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  box-shadow: var(--shadow-gradient);
}

.related-content {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.related-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.6rem;
}

.related-excerpt {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.related-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.related-reading-time {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.related-reading-time svg {
  width: 14px;
  height: 14px;
}

/* Newsletter CTA */
.newsletter-cta {
  background: var(--gradient-primary);
  border-radius: var(--radius-2xl);
  padding: 3rem;
  margin: 3rem 0;
  text-align: center;
  box-shadow: var(--shadow-gradient);
  position: relative;
  overflow: hidden;
}

.newsletter-cta::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.newsletter-content {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.newsletter-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.newsletter-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.newsletter-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
}

.newsletter-input {
  flex: 1;
  padding: 1rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-2xl);
  font-size: 1rem;
  color: white;
  transition: all var(--transition-smooth);
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-input:focus {
  outline: none;
  border-color: white;
  background: rgba(255, 255, 255, 0.15);
}

.newsletter-btn {
  padding: 1rem 2rem;
  background: white;
  color: var(--accent-purple);
  border: none;
  border-radius: var(--radius-full);
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition-smooth);
  white-space: nowrap;
}

.newsletter-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

/* Sidebar */
.sidebar {
  margin-top: 3rem;
}

.sidebar-sticky {
  position: sticky;
  top: 2rem;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--glass-border);
}

.sidebar-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.sidebar-controls {
  display: flex;
  gap: 0.375rem;
}

.sidebar-nav-btn {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-smooth);
}

.sidebar-nav-btn svg {
  width: 16px;
  height: 16px;
}

.sidebar-nav-btn:hover:not(:disabled) {
  border-color: var(--accent-purple);
  color: var(--accent-purple);
  background: var(--glass-bg-hover);
}

.sidebar-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.sidebar-slider-wrapper {
  overflow: hidden;
}

/* Sidebar Posts */
.sidebar-posts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  max-height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--accent-purple) var(--glass-bg);
  padding-right: 0.5rem;
}

.sidebar-posts::-webkit-scrollbar {
  width: 6px;
}

.sidebar-posts::-webkit-scrollbar-track {
  background: var(--glass-bg);
  border-radius: var(--radius-full);
}

.sidebar-posts::-webkit-scrollbar-thumb {
  background: var(--accent-purple);
  border-radius: var(--radius-full);
}

.sidebar-posts::-webkit-scrollbar-thumb:hover {
  background: var(--accent-pink);
}

.sidebar-post-card {
  display: flex;
  gap: 1rem;
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: 1rem;
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.sidebar-post-card:hover {
  border-color: var(--accent-purple);
  box-shadow: var(--shadow-purple);
  transform: translateX(4px);
  background: var(--glass-bg-hover);
}

.sidebar-post-image {
  width: 100px;
  height: 100px;
  border-radius: 0.5rem;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.sidebar-post-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.sidebar-post-card:hover .sidebar-post-img {
  transform: scale(1.1);
}

.sidebar-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-image-placeholder svg {
  width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.4);
}

.sidebar-post-content {
  flex: 1;
  min-width: 0;
}

.sidebar-post-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.sidebar-post-meta {
  display: flex;
  gap: 0.75rem;
  font-size: 0.8125rem;
  color: var(--text-muted);
}

.sidebar-post-date,
.sidebar-reading-time {
  display: flex;
  align-items: center;
}

/* Sidebar Section */
.sidebar-section {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.sidebar-section-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.sidebar-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.sidebar-tag {
  padding: 0.375rem 0.75rem;
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.1), rgba(229, 107, 170, 0.1));
  border: 1px solid var(--accent-purple);
  color: var(--accent-purple);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.sidebar-tag:hover {
  background: var(--gradient-purple-pink);
  border-color: transparent;
  color: white;
  box-shadow: var(--shadow-purple);
}

/* Sidebar Newsletter */
.sidebar-newsletter {
  background: var(--gradient-primary);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  text-align: center;
  color: white;
  box-shadow: var(--shadow-gradient);
}

.sidebar-newsletter-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.sidebar-newsletter-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.sidebar-newsletter-text {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
}

.sidebar-newsletter-btn {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: white;
  color: var(--accent-purple);
  border: none;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.sidebar-newsletter-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Responsive */
@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    margin-top: 2rem;
  }

  .sidebar-sticky {
    position: static;
  }

  .sidebar-posts {
    max-height: none;
    overflow-y: visible;
  }

  .sidebar-controls {
    display: none;
  }
}

@media (max-width: 768px) {
  .article-title {
    font-size: 1.75rem;
  }

  .content-body {
    font-size: 1rem;
  }

  .content-body h2 {
    font-size: 1.5rem;
  }

  .lead-paragraph {
    font-size: 1.125rem;
  }

  .image-placeholder {
    height: 250px;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .related-card {
    min-width: 260px;
    max-width: 260px;
  }

  .share-buttons {
    flex-wrap: wrap;
  }
}
</style>
