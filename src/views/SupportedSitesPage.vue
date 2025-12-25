<template>
  <div class="supported-sites-page">
    <div class="page-hero">
      <div class="container">
        <h1 class="page-title">Supported Websites</h1>
        <p class="page-description">
          Download videos from 1000+ platforms. Search below to check if your favorite site is supported.
        </p>
        
        <!-- Search -->
        <div class="search-wrapper">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8" stroke-width="2"/>
            <path d="M21 21l-4.35-4.35" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            class="search-input"
            placeholder="Search for a platform..."
          />
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Popular Platforms -->
      <section class="popular-section">
        <h2 class="section-title">Most Popular Platforms</h2>
        <div class="platforms-grid">
          <div v-for="platform in filteredPopular" :key="platform.name" class="platform-card popular">
            <div class="platform-icon" :style="{ background: platform.color }">
              {{ platform.icon }}
            </div>
            <h3 class="platform-name">{{ platform.name }}</h3>
            <p class="platform-description">{{ platform.description }}</p>
            <div class="platform-features">
              <span v-for="feature in platform.features" :key="feature" class="feature-badge">
                {{ feature }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- All Supported Sites -->
      <section class="all-sites-section">
        <h2 class="section-title">All Supported Websites ({{ filteredAllSites.length }})</h2>
        
        <!-- Category Filters -->
        <div class="category-filters">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="category-btn"
            :class="{ active: selectedCategory === category }"
          >
            {{ category }}
          </button>
        </div>

        <!-- Sites List -->
        <div class="sites-list">
          <div v-for="site in filteredAllSites" :key="site.name" class="site-item">
            <span class="site-icon">{{ site.icon }}</span>
            <span class="site-name">{{ site.name }}</span>
            <span v-if="site.badge" class="site-badge">{{ site.badge }}</span>
          </div>
        </div>

        <div v-if="filteredAllSites.length === 0" class="no-results">
          <p>No platforms found matching "{{ searchQuery }}"</p>
        </div>
      </section>

      <!-- Add Site Request -->
      <section class="request-section">
        <div class="request-card">
          <h3 class="request-title">Don't see your platform?</h3>
          <p class="request-description">
            We're constantly adding support for new platforms. Let us know which site you'd like us to support next!
          </p>
          <router-link to="/contact" class="btn-primary">Request a Platform</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = ['All', 'Social Media', 'Video Streaming', 'Music', 'Other']

const popularPlatforms = [
  {
    name: 'YouTube',
    icon: '📺',
    color: 'linear-gradient(135deg, #ff0000 0%, #ff6b6b 100%)',
    description: 'Videos, shorts, playlists in 4K/8K',
    features: ['4K/8K', 'Subtitles', 'Playlists']
  },
  {
    name: 'TikTok',
    icon: '🎵',
    color: 'linear-gradient(135deg, #00f2ea 0%, #ff0050 100%)',
    description: 'Videos without watermark',
    features: ['No Watermark', 'HD Quality']
  },
  {
    name: 'Instagram',
    icon: '📸',
    color: 'linear-gradient(135deg, #e4405f 0%, #fcaf45 100%)',
    description: 'Posts, reels, stories, IGTV',
    features: ['Reels', 'Stories', 'IGTV']
  },
  {
    name: 'Facebook',
    icon: '👥',
    color: 'linear-gradient(135deg, #1877f2 0%, #42a5f5 100%)',
    description: 'Videos from posts and watch',
    features: ['HD Videos', 'Watch']
  },
  {
    name: 'Twitter/X',
    icon: '🐦',
    color: 'linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%)',
    description: 'Videos and GIFs from tweets',
    features: ['Videos', 'GIFs']
  },
  {
    name: 'Vimeo',
    icon: '🎬',
    color: 'linear-gradient(135deg, #1ab7ea 0%, #0088cc 100%)',
    description: 'Professional quality videos',
    features: ['High Quality', 'Professional']
  }
]

const allSites = [
  // Social Media
  { name: 'YouTube', icon: '📺', category: 'Social Media' },
  { name: 'TikTok', icon: '🎵', category: 'Social Media', badge: 'No Watermark' },
  { name: 'Instagram', icon: '📸', category: 'Social Media' },
  { name: 'Facebook', icon: '👥', category: 'Social Media' },
  { name: 'Twitter / X', icon: '🐦', category: 'Social Media' },
  { name: 'Snapchat', icon: '👻', category: 'Social Media' },
  { name: 'LinkedIn', icon: '💼', category: 'Social Media' },
  { name: 'Pinterest', icon: '📌', category: 'Social Media' },
  { name: 'Reddit', icon: '🤖', category: 'Social Media' },
  { name: 'Tumblr', icon: '📝', category: 'Social Media' },
  
  // Video Streaming
  { name: 'Vimeo', icon: '🎬', category: 'Video Streaming' },
  { name: 'Dailymotion', icon: '▶️', category: 'Video Streaming' },
  { name: 'Twitch', icon: '🎮', category: 'Video Streaming' },
  { name: 'Streamable', icon: '🎥', category: 'Video Streaming' },
  { name: 'Vevo', icon: '🎵', category: 'Video Streaming' },
  { name: 'Ted Talks', icon: '💡', category: 'Video Streaming' },
  { name: 'ESPN', icon: '⚽', category: 'Video Streaming' },
  { name: 'BBC', icon: '📡', category: 'Video Streaming' },
  { name: 'CNN', icon: '📰', category: 'Video Streaming' },
  
  // Music
  { name: 'SoundCloud', icon: '🎧', category: 'Music' },
  { name: 'Mixcloud', icon: '🎶', category: 'Music' },
  { name: 'Bandcamp', icon: '🎸', category: 'Music' },
  { name: 'Spotify', icon: '🎵', category: 'Music', badge: 'Limited' },
  { name: 'Apple Music', icon: '🎵', category: 'Music', badge: 'Limited' },
  
  // Other
  { name: 'Imgur', icon: '🖼️', category: 'Other' },
  { name: 'Flickr', icon: '📷', category: 'Other' },
  { name: 'Likee', icon: '✨', category: 'Other' },
  { name: 'Kwai', icon: '🌟', category: 'Other' },
  { name: '9GAG', icon: '😂', category: 'Other' },
  { name: 'Blogger', icon: '📰', category: 'Other' },
  { name: 'Medium', icon: '📖', category: 'Other' },
  { name: 'Periscope', icon: '📹', category: 'Other' },
  { name: 'Vine Archive', icon: '🍃', category: 'Other' },
  { name: 'BitChute', icon: '📺', category: 'Other' },
  { name: 'Rumble', icon: '🎬', category: 'Other' },
  { name: 'VK', icon: '🔵', category: 'Other' },
  { name: 'OK.ru', icon: '👍', category: 'Other' },
  { name: 'Bilibili', icon: '📺', category: 'Other' },
  { name: 'Douyin', icon: '🎵', category: 'Other' },
  { name: 'Kuaishou', icon: '⚡', category: 'Other' },
  { name: 'Weibo', icon: '📱', category: 'Other' },
  { name: 'LiveLeak', icon: '🌐', category: 'Other' },
  { name: 'Break', icon: '💥', category: 'Other' },
  { name: 'Metacafe', icon: '🎬', category: 'Other' },
  { name: 'Veoh', icon: '📹', category: 'Other' },
  { name: 'Ustream', icon: '📡', category: 'Other' },
  { name: 'Justin.tv Archive', icon: '📺', category: 'Other' }
]

const filteredPopular = computed(() => {
  if (!searchQuery.value) return popularPlatforms
  
  const query = searchQuery.value.toLowerCase()
  return popularPlatforms.filter(platform =>
    platform.name.toLowerCase().includes(query)
  )
})

const filteredAllSites = computed(() => {
  let sites = allSites
  
  // Filter by category
  if (selectedCategory.value !== 'All') {
    sites = sites.filter(site => site.category === selectedCategory.value)
  }
  
  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    sites = sites.filter(site =>
      site.name.toLowerCase().includes(query)
    )
  }
  
  return sites
})
</script>

<style scoped>
.supported-sites-page {
  min-height: calc(100vh - 200px);
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
  margin: 0 auto 2rem;
  position: relative;
}

.search-wrapper {
  max-width: 500px;
  margin: 0 auto;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: var(--text-muted);
  z-index: 2;
}

.search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  font-size: 1rem;
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  color: var(--text-primary);
  transition: all var(--transition-smooth);
}

.search-input::placeholder {
  color: var(--text-muted);
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-purple);
  box-shadow: var(--shadow-purple);
  background: var(--glass-bg-hover);
}

.popular-section,
.all-sites-section,
.request-section {
  padding: var(--spacing-3xl) 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-2xl);
  text-align: center;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
}

.platform-card {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  text-align: center;
  transition: all var(--transition-smooth);
  position: relative;
  overflow: hidden;
}

.platform-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.platform-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-purple);
  border-color: var(--accent-purple);
  background: var(--glass-bg-hover);
}

.platform-card:hover::before {
  opacity: 1;
}

.platform-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--spacing-lg);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-smooth);
}

.platform-card:hover .platform-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: var(--shadow-gradient);
}

.platform-name {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.platform-description {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.platform-features {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  flex-wrap: wrap;
}

.feature-badge {
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, rgba(124, 106, 230, 0.2), rgba(229, 107, 170, 0.2));
  border: 1px solid var(--accent-purple);
  color: var(--accent-purple);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  transition: all var(--transition-base);
}

.platform-card:hover .feature-badge {
  background: var(--gradient-purple-pink);
  color: white;
  box-shadow: var(--shadow-purple);
}

.category-filters {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
  flex-wrap: wrap;
  justify-content: center;
}

.category-btn {
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

.category-btn:hover {
  border-color: var(--accent-purple);
  color: var(--accent-purple);
  background: var(--glass-bg-hover);
  transform: translateY(-2px);
}

.category-btn.active {
  background: var(--gradient-primary);
  border-color: transparent;
  color: white;
  box-shadow: var(--shadow-gradient);
}

.sites-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.site-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  transition: all var(--transition-smooth);
}

.site-item:hover {
  border-color: var(--accent-purple);
  background: var(--glass-bg-hover);
  transform: translateX(8px);
  box-shadow: var(--shadow-purple);
}

.site-icon {
  font-size: 1.5rem;
  transition: transform var(--transition-smooth);
}

.site-item:hover .site-icon {
  transform: scale(1.2);
}

.site-name {
  flex: 1;
  font-weight: 600;
  color: var(--text-primary);
}

.site-badge {
  padding: 0.25rem 0.5rem;
  background: var(--gradient-purple-pink);
  color: white;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: var(--shadow-purple);
}

.no-results {
  text-align: center;
  padding: var(--spacing-3xl);
  color: var(--text-muted);
}

.request-card {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-3xl);
  text-align: center;
  transition: all var(--transition-smooth);
  position: relative;
  overflow: hidden;
}

.request-card::before {
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

.request-card:hover {
  border-color: var(--accent-purple);
  transform: translateY(-4px);
  box-shadow: var(--shadow-purple);
}

.request-card:hover::before {
  opacity: 1;
}

.request-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  position: relative;
}

.request-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-2xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: var(--gradient-primary);
  color: white;
  border-radius: var(--radius-full);
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-smooth);
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-gradient);
}

.btn-primary::before {
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

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow-gradient);
}

.btn-primary:hover::before {
  width: 400px;
  height: 400px;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .platforms-grid {
    grid-template-columns: 1fr;
  }

  .sites-list {
    grid-template-columns: 1fr;
  }

  .category-filters {
    justify-content: flex-start;
    overflow-x: auto;
  }
}
</style>
