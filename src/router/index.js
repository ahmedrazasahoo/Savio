import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
      meta: {
        title: 'Video Downloader - Download Videos from Multiple Platforms',
        description: 'Fast and free video downloader. Download videos from YouTube, Facebook, Instagram, and more in multiple formats and quality options.'
      }
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/DownloadPage.vue'),
      meta: {
        title: 'Download Video - Video Downloader',
        description: 'Choose your preferred video format and quality to download'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue'),
      meta: {
        title: 'About Us - Video Downloader',
        description: 'Learn about our video downloader tool and our commitment to fair use'
      }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyPage.vue'),
      meta: {
        title: 'Privacy Policy - Video Downloader',
        description: 'Our privacy policy and data handling practices'
      }
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsPage.vue'),
      meta: {
        title: 'Terms & Conditions - Video Downloader',
        description: 'Terms of service and user responsibilities'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactPage.vue'),
      meta: {
        title: 'Contact Us - Video Downloader',
        description: 'Get in touch with our support team'
      }
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FaqPage.vue'),
      meta: {
        title: 'FAQ - Video Downloader',
        description: 'Frequently asked questions about our video downloader'
      }
    },
    {
      path: '/how-to-use',
      name: 'how-to-use',
      component: () => import('../views/HowToUsePage.vue'),
      meta: {
        title: 'How To Use - Video Downloader',
        description: 'Step-by-step guides for downloading videos from different platforms'
      }
    },
    {
      path: '/supported-sites',
      name: 'supported-sites',
      component: () => import('../views/SupportedSitesPage.vue'),
      meta: {
        title: 'Supported Sites - Video Downloader',
        description: 'Complete list of 1000+ supported platforms for video downloads'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogPage.vue'),
      meta: {
        title: 'Blog - Video Downloader',
        description: 'Latest news, tips, and tutorials for video downloading'
      }
    },
    {
      path: '/blog/:id',
      name: 'blog-details',
      component: () => import('../views/BlogDetailsPage.vue'),
      meta: {
        title: 'Blog Article - Video Downloader',
        description: 'Read our latest article about video downloading'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update document title and meta tags
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Video Downloader'
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || '')
  }
  
  next()
})

export default router
