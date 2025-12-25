<template>
  <header class="modern-header">
    <div class="container">
      <nav class="nav-wrapper">
        <router-link to="/" class="brand-link">
          <div class="brand">
            <div class="brand-logo">
              <img src="/logo.svg" alt="VideoDownloader Logo" class="logo-image">
            </div>
            <span class="brand-name">VideoDownloader</span>
          </div>
        </router-link>

        <button class="menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <svg v-if="!mobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="3" y1="12" x2="21" y2="12" stroke-width="2" stroke-linecap="round"/>
            <line x1="3" y1="6" x2="21" y2="6" stroke-width="2" stroke-linecap="round"/>
            <line x1="3" y1="18" x2="21" y2="18" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18" stroke-width="2" stroke-linecap="round"/>
            <line x1="6" y1="6" x2="18" y2="18" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>

        <ul class="nav-menu" :class="{ 'menu-active': mobileMenuOpen }">
          <li><router-link to="/" @click="closeMobileMenu" class="nav-item">Home</router-link></li>
          <li><router-link to="/supported-sites" @click="closeMobileMenu" class="nav-item">Supported Sites</router-link></li>
          <li><router-link to="/how-to-use" @click="closeMobileMenu" class="nav-item">How To Use</router-link></li>
          <li><router-link to="/faq" @click="closeMobileMenu" class="nav-item">FAQ</router-link></li>
          <li><router-link to="/blog" @click="closeMobileMenu" class="nav-item">Blog</router-link></li>
          <li><router-link to="/contact" @click="closeMobileMenu" class="nav-item nav-item-highlight">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.modern-header {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border-bottom: 1px solid var(--border-subtle);
  padding: var(--spacing-md) 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  transition: all var(--transition-smooth);
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-link {
  text-decoration: none;
  position: relative;
}

.brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  transition: all var(--transition-base);
}

.brand:hover {
  transform: translateY(-2px);
}

.brand-logo {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-smooth);
  filter: drop-shadow(0 4px 16px rgba(124, 106, 230, 0.5));
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all var(--transition-base);
}

.brand:hover .brand-logo {
  transform: rotate(-5deg) scale(1.08);
  filter: drop-shadow(0 8px 24px rgba(124, 106, 230, 0.8));
}

.brand:hover .logo-image {
  filter: brightness(1.1);
}

.brand-name {
  font-size: 1.375rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.menu-toggle {
  display: none;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--accent-purple);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-lg);
  transition: all var(--transition-smooth);
}

.menu-toggle:hover {
  background: var(--glass-bg-hover);
  border-color: var(--accent-purple);
  box-shadow: var(--shadow-purple);
  transform: scale(1.05);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--glass-bg-hover);
  opacity: 0;
  transition: opacity var(--transition-smooth);
  border-radius: var(--radius-lg);
}

.nav-item:hover {
  color: var(--accent-purple);
  transform: translateY(-2px);
}

.nav-item:hover::before {
  opacity: 1;
}

.nav-item.router-link-active {
  color: var(--accent-purple);
  background: var(--glass-bg-hover);
  border: 1px solid var(--glass-border);
}

.nav-item-highlight {
  background: var(--gradient-primary);
  color: white !important;
  box-shadow: var(--shadow-gradient);
  position: relative;
}

.nav-item-highlight::before {
  background: rgba(255, 255, 255, 0.2);
}

.nav-item-highlight:hover {
  box-shadow: var(--glow-purple);
  transform: translateY(-3px);
}

.nav-item-highlight.router-link-active {
  box-shadow: var(--glow-gradient);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-menu {
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    right: 0;
    background: var(--glass-bg);
    backdrop-filter: var(--backdrop-blur);
    border: 1px solid var(--border-subtle);
    border-top: none;
    flex-direction: column;
    gap: 0;
    padding: var(--spacing-lg) 0;
    box-shadow: var(--glass-shadow);
    border-radius: 0 0 var(--radius-2xl) var(--radius-2xl);
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all var(--transition-slow);
  }

  .nav-menu.menu-active {
    max-height: 500px;
    opacity: 1;
  }

  .nav-menu li {
    width: 100%;
    padding: 0 var(--spacing-lg);
  }

  .nav-item {
    display: block;
    padding: var(--spacing-md) var(--spacing-lg);
    margin-bottom: var(--spacing-xs);
    text-align: center;
  }

  .nav-item-highlight {
    margin: 0 var(--spacing-lg);
  }
}
</style>
