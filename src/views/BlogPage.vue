<template>
  <div class="blog-page">
    <div class="page-hero">
      <div class="container">
        <h1 class="page-title">Blog & News</h1>
        <p class="page-description">
          Latest updates, tutorials, and tips for video downloading
        </p>
      </div>
    </div>

    <div class="container">
      <!-- Featured Posts Slider -->
      <section class="featured-section">
        <div class="section-header">
          <h2 class="section-heading">Featured Articles</h2>
          <div class="slider-nav">
            <button class="nav-btn nav-prev" @click="slideFeaturedLeft" :disabled="!canSlideFeaturedLeft">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="nav-btn nav-next" @click="slideFeaturedRight" :disabled="!canSlideFeaturedRight">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="featured-slider-wrapper">
          <div class="featured-slider" ref="featuredSliderRef" @scroll="handleFeaturedScroll" @mouseenter="stopFeaturedAutoPlay" @mouseleave="startFeaturedAutoPlay">
            <div v-for="post in featuredPosts" :key="post.id" class="featured-card">
              <div class="featured-card-image">
                <img v-if="post.image" :src="post.image" :alt="post.title" class="featured-img" />
                <div v-else class="featured-placeholder">
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
                </div>
                <span class="featured-badge">Featured</span>
              </div>
              <div class="featured-card-content">
                <div class="featured-meta">
                  <span class="featured-category">{{ post.category }}</span>
                  <span class="featured-date">{{ formatDate(post.date) }}</span>
                </div>
                <h3 class="featured-card-title">{{ post.title }}</h3>
                <p class="featured-card-excerpt">{{ post.excerpt }}</p>
                <router-link :to="`/blog/${post.id}`" class="featured-read-btn">
                  Read Article
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Search and Filter Section -->
      <section class="search-filter-section">
        <!-- Search Bar -->
        <div class="search-bar-container">
          <div class="search-bar">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8" stroke-width="2"/>
              <path d="m21 21-4.35-4.35" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              class="search-input"
              placeholder="Search articles, tutorials, and tips..."
            />
            <button v-if="searchQuery" @click="searchQuery = ''" class="clear-search-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18" stroke-width="2" stroke-linecap="round"/>
                <line x1="6" y1="6" x2="18" y2="18" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
          <p v-if="searchQuery" class="search-results-count">
            Found {{ filteredPosts.length }} {{ filteredPosts.length === 1 ? 'article' : 'articles' }}
          </p>
        </div>

        <!-- Category Filter -->
        <div class="filters">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="filter-btn"
            :class="{ active: selectedCategory === category }"
          >
            {{ category }}
          </button>
        </div>
      </section>

      <!-- Blog Posts Grid -->
      <section class="posts-section">
        <div class="posts-grid">
          <article
            v-for="post in paginatedPosts"
            :key="post.id"
            class="blog-card"
          >
            <div class="blog-card-image">
              <img v-if="post.image" :src="post.image" :alt="post.title" class="blog-card-img" />
              <div v-else class="blog-card-placeholder">
                <svg class="card-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke-width="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5" stroke-width="2"/>
                  <polyline points="21 15 16 10 5 21" stroke-width="2"/>
                </svg>
              </div>
              <span class="blog-category-badge">{{ post.category }}</span>
            </div>
            <div class="blog-card-content">
              <div class="blog-card-header">
                <span class="blog-card-date">{{ formatDate(post.date) }}</span>
                <span class="blog-reading-time">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" stroke-width="2"/>
                    <path d="M12 6v6l4 2" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  {{ post.readingTime }} min
                </span>
              </div>
              <h3 class="blog-card-title">{{ post.title }}</h3>
              <p class="blog-card-excerpt">{{ post.excerpt }}</p>
              <router-link :to="`/blog/${post.id}`" class="blog-card-link">
                Continue Reading
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </router-link>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="pagination">
          <button 
            class="pagination-btn"
            :disabled="currentPage === 1"
            @click="goToPage(currentPage - 1)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <button
            v-for="page in totalPages"
            :key="page"
            class="pagination-number"
            :class="{ active: currentPage === page }"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>

          <button 
            class="pagination-btn"
            :disabled="currentPage === totalPages"
            @click="goToPage(currentPage + 1)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 18l6-6-6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      <!-- Newsletter Signup -->
      <section class="newsletter-section">
        <div class="newsletter-card">
          <div class="newsletter-icon">📧</div>
          <h3 class="newsletter-title">Subscribe to Our Newsletter</h3>
          <p class="newsletter-description">
            Get the latest tips, tutorials, and updates delivered to your inbox weekly.
          </p>
          <form class="newsletter-form" @submit.prevent="handleSubscribe">
            <input
              v-model="email"
              type="email"
              class="newsletter-input"
              placeholder="Enter your email address"
              required
            />
            <button type="submit" class="btn-subscribe">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { getAllBlogPosts, getFeaturedPost, categories as apiCategories } from '../store/api.js'

const selectedCategory = ref('All')
const searchQuery = ref('')
const email = ref('')
const currentPage = ref(1)
const postsPerPage = 8
const featuredSliderRef = ref(null)
const featuredScrollPosition = ref(0)
const featuredSliderInterval = ref(null)

const categories = apiCategories
const allPosts = getAllBlogPosts()

// Get featured posts (first 5 posts for the slider)
const featuredPosts = computed(() => {
  return allPosts.slice(0, 5)
})

// Reset to page 1 when filters change
watch([selectedCategory, searchQuery], () => {
  currentPage.value = 1
})

const filteredPosts = computed(() => {
  let filtered = allPosts

  // Filter by category
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(post => post.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    filtered = filtered.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    )
  }

  return filtered
})

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / postsPerPage)
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return filteredPosts.value.slice(start, end)
})

// Featured slider functionality
const canSlideFeaturedLeft = computed(() => {
  if (!featuredSliderRef.value) return false
  return featuredScrollPosition.value > 0
})

const canSlideFeaturedRight = computed(() => {
  if (!featuredSliderRef.value) return false
  const maxScroll = featuredSliderRef.value.scrollWidth - featuredSliderRef.value.clientWidth
  return featuredScrollPosition.value < maxScroll - 10
})

const slideFeaturedLeft = () => {
  if (featuredSliderRef.value) {
    const slideAmount = featuredSliderRef.value.clientWidth * 0.8
    featuredSliderRef.value.scrollBy({ left: -slideAmount, behavior: 'smooth' })
    updateFeaturedScrollPosition()
  }
}

const slideFeaturedRight = () => {
  if (featuredSliderRef.value) {
    const slideAmount = featuredSliderRef.value.clientWidth * 0.8
    featuredSliderRef.value.scrollBy({ left: slideAmount, behavior: 'smooth' })
    updateFeaturedScrollPosition()
  }
}

const updateFeaturedScrollPosition = () => {
  setTimeout(() => {
    if (featuredSliderRef.value) {
      featuredScrollPosition.value = featuredSliderRef.value.scrollLeft
    }
  }, 100)
}

const handleFeaturedScroll = () => {
  if (featuredSliderRef.value) {
    featuredScrollPosition.value = featuredSliderRef.value.scrollLeft
  }
}

// Auto-play for featured slider
const startFeaturedAutoPlay = () => {
  featuredSliderInterval.value = setInterval(() => {
    if (featuredSliderRef.value) {
      const maxScroll = featuredSliderRef.value.scrollWidth - featuredSliderRef.value.clientWidth

      if (featuredScrollPosition.value >= maxScroll - 10) {
        // Reset to start
        featuredSliderRef.value.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        // Slide to next
        const slideAmount = featuredSliderRef.value.clientWidth * 0.5
        featuredSliderRef.value.scrollBy({ left: slideAmount, behavior: 'smooth' })
      }
      updateFeaturedScrollPosition()
    }
  }, 3000) // Auto-slide every 3 seconds
}

const stopFeaturedAutoPlay = () => {
  if (featuredSliderInterval.value) {
    clearInterval(featuredSliderInterval.value)
    featuredSliderInterval.value = null
  }
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date)
}

const handleSubscribe = () => {
  alert(`Thanks for subscribing with ${email.value}!\n\nNote: This is a demo. In production, this would add your email to the newsletter list.`)
  email.value = ''
}

// Start auto-play on mount
onMounted(() => {
  startFeaturedAutoPlay()
})

onUnmounted(() => {
  stopFeaturedAutoPlay()
})
</script>

<style scoped>
.blog-page {
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-hero {
  background: var(--bg-gradient);
  background-image: var(--bg-gradient-radial);
  padding: 4rem 0 3rem;
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
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.1) 0%, rgba(229, 107, 170, 0.1) 50%, rgba(242, 140, 75, 0.1) 100%);
  pointer-events: none;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--text-primary);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.page-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

/* Featured Section */
.featured-section {
  padding: 3rem 0 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.section-heading {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.slider-nav {
  display: flex;
  gap: 0.5rem;
}

.nav-btn {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
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

.nav-btn svg {
  width: 22px;
  height: 22px;
}

.nav-btn:hover:not(:disabled) {
  border-color: var(--accent-purple);
  color: var(--accent-purple);
  background: var(--glass-bg-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-purple);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.featured-slider-wrapper {
  overflow: hidden;
  margin: 0 -2rem;
  padding: 0 2rem;
}

.featured-slider {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 1rem;
}

.featured-slider::-webkit-scrollbar {
  display: none;
}

.featured-card {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  min-width: 550px;
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 260px 1fr;
  transition: all var(--transition-smooth);
  position: relative;
}

.featured-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--transition-base);
  z-index: 1;
}

.featured-card:hover {
  border-color: var(--accent-purple);
  box-shadow: var(--shadow-purple);
  transform: translateY(-4px);
  background: var(--glass-bg-hover);
}

.featured-card:hover::before {
  opacity: 1;
}

.featured-card-image {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}

.featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.featured-card:hover .featured-img {
  transform: scale(1.1);
}

.featured-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-icon {
  width: 80px;
  height: 80px;
  color: rgba(255, 255, 255, 0.3);
  stroke-width: 1.5;
}

.featured-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  background: var(--gradient-primary);
  color: white;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.75rem;
  z-index: 1;
  box-shadow: var(--shadow-gradient);
}

.featured-card-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
}

.featured-category {
  padding: 0.375rem 0.875rem;
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.2), rgba(229, 107, 170, 0.2));
  border: 1px solid var(--accent-purple);
  color: var(--accent-purple);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
}

.featured-date {
  color: var(--text-muted);
  font-size: 0.875rem;
}

.featured-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.featured-card-excerpt {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.featured-read-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all var(--transition-smooth);
  text-decoration: none;
  align-self: flex-start;
  box-shadow: var(--shadow-gradient);
  position: relative;
  overflow: hidden;
}

.featured-read-btn svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.featured-read-btn::before {
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

.featured-read-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow-gradient);
}

.featured-read-btn:hover svg {
  transform: translateX(4px);
}

.featured-read-btn:hover::before {
  width: 300px;
  height: 300px;
}

/* Search & Filter */
.search-filter-section {
  padding: 2rem 0;
}

.search-bar-container {
  margin-bottom: 2rem;
}

.search-bar {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  padding: 0.75rem 1.25rem;
  transition: all var(--transition-smooth);
}

.search-bar:focus-within {
  border-color: var(--accent-purple);
  box-shadow: var(--shadow-purple);
  background: var(--glass-bg-hover);
}

.search-icon {
  width: 20px;
  height: 20px;
  color: var(--text-muted);
  flex-shrink: 0;
  margin-right: 0.75rem;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  color: var(--text-primary);
  background: transparent;
}

.search-input::placeholder {
  color: var(--text-muted);
}

.clear-search-btn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--glass-bg-hover);
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
  flex-shrink: 0;
}

.clear-search-btn svg {
  width: 14px;
  height: 14px;
}

.clear-search-btn:hover {
  background: var(--glass-bg-hover);
  color: var(--accent-purple);
  transform: scale(1.1);
}

.search-results-count {
  text-align: center;
  margin-top: 1rem;
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 500;
}

.filters {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-full);
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.filter-btn:hover {
  border-color: var(--accent-purple);
  color: var(--accent-purple);
  background: var(--glass-bg-hover);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: var(--gradient-primary);
  border-color: transparent;
  color: white;
  box-shadow: var(--shadow-gradient);
}

/* Blog Posts Grid */
.posts-section {
  padding: 2rem 0 3rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.blog-card {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  transition: all var(--transition-smooth);
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
}

.blog-card::before {
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

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-purple);
  border-color: var(--accent-purple);
  background: var(--glass-bg-hover);
}

.blog-card:hover::before {
  opacity: 1;
}

.blog-card-image {
  height: 220px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}

.blog-card-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.blog-card:hover .blog-card-img {
  transform: scale(1.1);
}

.blog-card-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}

.card-placeholder-icon {
  width: 60px;
  height: 60px;
  color: rgba(255, 255, 255, 0.4);
  stroke-width: 1.5;
}

.blog-category-badge {
  position: relative;
  z-index: 2;
  padding: 0.5rem 1rem;
  background: var(--gradient-primary);
  color: white;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  box-shadow: var(--shadow-gradient);
}

.blog-card-content {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.blog-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.8125rem;
  color: var(--text-muted);
}

.blog-reading-time {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.blog-reading-time svg {
  width: 14px;
  height: 14px;
}

.blog-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.8rem;
}

.blog-card-excerpt {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.blog-card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-purple);
  font-weight: 600;
  font-size: 0.95rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all var(--transition-smooth);
  text-decoration: none;
}

.blog-card-link svg {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.blog-card-link:hover {
  color: var(--accent-pink);
}

.blog-card-link:hover svg {
  transform: translateX(4px);
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.pagination-btn,
.pagination-number {
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-smooth);
  font-weight: 600;
  color: var(--text-secondary);
}

.pagination-btn svg {
  width: 20px;
  height: 20px;
}

.pagination-btn:hover:not(:disabled),
.pagination-number:hover {
  border-color: var(--accent-purple);
  color: var(--accent-purple);
  background: var(--glass-bg-hover);
  transform: translateY(-2px);
}

.pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-number.active {
  background: var(--gradient-primary);
  border-color: transparent;
  color: white;
  box-shadow: var(--shadow-gradient);
}

/* Newsletter */
.newsletter-section {
  padding: 3rem 0;
}

.newsletter-card {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  padding: 3rem;
  text-align: center;
  transition: all var(--transition-smooth);
  position: relative;
  overflow: hidden;
}

.newsletter-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.05), rgba(229, 107, 170, 0.05));
  opacity: 0;
  transition: opacity var(--transition-smooth);
}

.newsletter-card:hover {
  border-color: var(--accent-purple);
  box-shadow: var(--shadow-purple);
}

.newsletter-card:hover::before {
  opacity: 1;
}

.newsletter-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.newsletter-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
}

.newsletter-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-input {
  flex: 1;
  padding: 1rem 1.25rem;
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  color: var(--text-primary);
  border-radius: var(--radius-2xl);
  font-size: 1rem;
  transition: all var(--transition-smooth);
}

.newsletter-input::placeholder {
  color: var(--text-muted);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--accent-purple);
  box-shadow: var(--shadow-purple);
  background: var(--glass-bg-hover);
}

.btn-subscribe {
  padding: 1rem 2rem;
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: var(--radius-full);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-smooth);
  white-space: nowrap;
  box-shadow: var(--shadow-gradient);
  position: relative;
  overflow: hidden;
}

.btn-subscribe::before {
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

.btn-subscribe:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow-gradient);
}

.btn-subscribe:hover::before {
  width: 300px;
  height: 300px;
}

/* Responsive */
@media (max-width: 1400px) {
  .posts-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .featured-card {
    grid-template-columns: 1fr;
    min-width: 450px;
  }

  .featured-card-image {
    min-height: 200px;
  }

  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .featured-card {
    min-width: 90%;
  }

  .posts-grid {
    grid-template-columns: 1fr;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .pagination {
    flex-wrap: wrap;
  }
}
</style>
