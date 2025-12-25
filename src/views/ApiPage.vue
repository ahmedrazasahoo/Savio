<template>
  <div class="api-page">
    <div class="container">
      <!-- Page Header -->
      <section class="page-header-section">
        <div class="header-content">
          <div class="header-icon">🚀</div>
          <h1 class="page-title">Developer API</h1>
          <p class="page-subtitle">
            Integrate our video downloader into your application with our powerful RESTful API
          </p>
        </div>
      </section>

      <!-- Quick Start -->
      <section class="quick-start-section">
        <div class="section-card">
          <h2 class="section-heading">Quick Start</h2>
          <p class="section-description">
            Get started with our API in minutes. Our backend server provides endpoints for fetching video information and download links.
          </p>
          
          <div class="code-example">
            <div class="code-header">
              <span class="code-label">Base URL</span>
              <button @click="copyToClipboard(baseUrl)" class="copy-btn">
                {{ copied.baseUrl ? '✓ Copied' : '📋 Copy' }}
              </button>
            </div>
            <pre class="code-block">{{ baseUrl }}</pre>
          </div>
        </div>
      </section>

      <!-- Authentication -->
      <section class="auth-section">
        <div class="section-card">
          <h2 class="section-heading">🔐 Authentication</h2>
          <p class="section-description">
            Currently, our API is <strong>free and open</strong> - no API keys required! 
            Perfect for getting started quickly.
          </p>
          
          <div class="info-box info-success">
            <div class="info-icon">✅</div>
            <div class="info-content">
              <h4 class="info-title">No Authentication Required</h4>
              <p class="info-text">Start making requests immediately without registration or API keys.</p>
            </div>
          </div>

          <div class="info-box info-warning">
            <div class="info-icon">⚠️</div>
            <div class="info-content">
              <h4 class="info-title">Rate Limiting</h4>
              <p class="info-text">Please be respectful and limit your requests. Excessive usage may result in temporary blocks.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- API Endpoints -->
      <section class="endpoints-section">
        <h2 class="main-heading">📡 API Endpoints</h2>

        <!-- Health Check -->
        <div class="endpoint-card">
          <div class="endpoint-header">
            <span class="http-method method-get">GET</span>
            <h3 class="endpoint-path">/api/health</h3>
          </div>
          <p class="endpoint-description">Check if the API server is running and healthy.</p>
          
          <div class="endpoint-details">
            <h4 class="details-heading">Response Example</h4>
            <div class="code-example">
              <div class="code-header">
                <span class="code-label">200 OK</span>
                <button @click="copyToClipboard(examples.health)" class="copy-btn">
                  {{ copied.health ? '✓ Copied' : '📋 Copy' }}
                </button>
              </div>
              <pre class="code-block">{{ examples.health }}</pre>
            </div>
          </div>

          <div class="try-it-section">
            <button @click="testEndpoint('health')" class="btn btn-primary" :disabled="loading.health">
              <span v-if="!loading.health">🧪 Try It</span>
              <span v-else class="loading-text"><span class="spinner"></span> Testing...</span>
            </button>
            <div v-if="results.health" class="result-box" :class="results.health.success ? 'result-success' : 'result-error'">
              <pre>{{ results.health.data }}</pre>
            </div>
          </div>
        </div>

        <!-- Get Video Info -->
        <div class="endpoint-card">
          <div class="endpoint-header">
            <span class="http-method method-get">GET</span>
            <h3 class="endpoint-path">/api/video/info</h3>
          </div>
          <p class="endpoint-description">Get detailed information about a video including available formats and qualities.</p>
          
          <div class="endpoint-details">
            <h4 class="details-heading">Query Parameters</h4>
            <div class="params-table">
              <div class="param-row">
                <div class="param-name">url</div>
                <div class="param-type">string</div>
                <div class="param-required">required</div>
                <div class="param-desc">The video URL to fetch information for</div>
              </div>
            </div>

            <h4 class="details-heading">Request Example</h4>
            <div class="code-example">
              <div class="code-header">
                <span class="code-label">cURL</span>
                <button @click="copyToClipboard(examples.videoInfoCurl)" class="copy-btn">
                  {{ copied.videoInfoCurl ? '✓ Copied' : '📋 Copy' }}
                </button>
              </div>
              <pre class="code-block">{{ examples.videoInfoCurl }}</pre>
            </div>

            <h4 class="details-heading">Response Example</h4>
            <div class="code-example">
              <div class="code-header">
                <span class="code-label">200 OK</span>
                <button @click="copyToClipboard(examples.videoInfo)" class="copy-btn">
                  {{ copied.videoInfo ? '✓ Copied' : '📋 Copy' }}
                </button>
              </div>
              <pre class="code-block">{{ examples.videoInfo }}</pre>
            </div>
          </div>

          <div class="try-it-section">
            <input 
              v-model="testVideoUrl" 
              type="text" 
              placeholder="Enter YouTube URL to test" 
              class="test-input"
            />
            <button @click="testEndpoint('videoInfo')" class="btn btn-primary" :disabled="loading.videoInfo || !testVideoUrl">
              <span v-if="!loading.videoInfo">🧪 Try It</span>
              <span v-else class="loading-text"><span class="spinner"></span> Fetching...</span>
            </button>
            <div v-if="results.videoInfo" class="result-box" :class="results.videoInfo.success ? 'result-success' : 'result-error'">
              <pre>{{ results.videoInfo.data }}</pre>
            </div>
          </div>
        </div>

        <!-- Get Supported Platforms -->
        <div class="endpoint-card">
          <div class="endpoint-header">
            <span class="http-method method-get">GET</span>
            <h3 class="endpoint-path">/api/platforms</h3>
          </div>
          <p class="endpoint-description">Get a list of all supported video platforms.</p>
          
          <div class="endpoint-details">
            <h4 class="details-heading">Response Example</h4>
            <div class="code-example">
              <div class="code-header">
                <span class="code-label">200 OK</span>
                <button @click="copyToClipboard(examples.platforms)" class="copy-btn">
                  {{ copied.platforms ? '✓ Copied' : '📋 Copy' }}
                </button>
              </div>
              <pre class="code-block">{{ examples.platforms }}</pre>
            </div>
          </div>

          <div class="try-it-section">
            <button @click="testEndpoint('platforms')" class="btn btn-primary" :disabled="loading.platforms">
              <span v-if="!loading.platforms">🧪 Try It</span>
              <span v-else class="loading-text"><span class="spinner"></span> Testing...</span>
            </button>
            <div v-if="results.platforms" class="result-box" :class="results.platforms.success ? 'result-success' : 'result-error'">
              <pre>{{ results.platforms.data }}</pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Error Responses -->
      <section class="errors-section">
        <div class="section-card">
          <h2 class="section-heading">⚠️ Error Responses</h2>
          
          <div class="error-table">
            <div class="error-row">
              <div class="error-code">400</div>
              <div class="error-name">Bad Request</div>
              <div class="error-desc">Invalid URL or missing required parameters</div>
            </div>
            <div class="error-row">
              <div class="error-code">404</div>
              <div class="error-name">Not Found</div>
              <div class="error-desc">Video not found, private, or deleted</div>
            </div>
            <div class="error-row">
              <div class="error-code">429</div>
              <div class="error-name">Too Many Requests</div>
              <div class="error-desc">Rate limit exceeded</div>
            </div>
            <div class="error-row">
              <div class="error-code">500</div>
              <div class="error-name">Internal Server Error</div>
              <div class="error-desc">Server error while processing request</div>
            </div>
          </div>

          <h4 class="details-heading">Error Response Example</h4>
          <div class="code-example">
            <pre class="code-block">{{ examples.error }}</pre>
          </div>
        </div>
      </section>

      <!-- Code Examples -->
      <section class="examples-section">
        <h2 class="main-heading">💻 Code Examples</h2>

        <div class="example-tabs">
          <button 
            v-for="lang in languages" 
            :key="lang.id"
            @click="activeLanguage = lang.id"
            class="tab-btn"
            :class="{ active: activeLanguage === lang.id }"
          >
            {{ lang.icon }} {{ lang.name }}
          </button>
        </div>

        <div class="example-content">
          <div v-show="activeLanguage === 'javascript'" class="code-example">
            <div class="code-header">
              <span class="code-label">JavaScript (Fetch API)</span>
              <button @click="copyToClipboard(codeExamples.javascript)" class="copy-btn">
                {{ copied.javascript ? '✓ Copied' : '📋 Copy' }}
              </button>
            </div>
            <pre class="code-block">{{ codeExamples.javascript }}</pre>
          </div>

          <div v-show="activeLanguage === 'python'" class="code-example">
            <div class="code-header">
              <span class="code-label">Python (requests)</span>
              <button @click="copyToClipboard(codeExamples.python)" class="copy-btn">
                {{ copied.python ? '✓ Copied' : '📋 Copy' }}
              </button>
            </div>
            <pre class="code-block">{{ codeExamples.python }}</pre>
          </div>

          <div v-show="activeLanguage === 'php'" class="code-example">
            <div class="code-header">
              <span class="code-label">PHP (cURL)</span>
              <button @click="copyToClipboard(codeExamples.php)" class="copy-btn">
                {{ copied.php ? '✓ Copied' : '📋 Copy' }}
              </button>
            </div>
            <pre class="code-block">{{ codeExamples.php }}</pre>
          </div>

          <div v-show="activeLanguage === 'nodejs'" class="code-example">
            <div class="code-header">
              <span class="code-label">Node.js (axios)</span>
              <button @click="copyToClipboard(codeExamples.nodejs)" class="copy-btn">
                {{ copied.nodejs ? '✓ Copied' : '📋 Copy' }}
              </button>
            </div>
            <pre class="code-block">{{ codeExamples.nodejs }}</pre>
          </div>
        </div>
      </section>

      <!-- Best Practices -->
      <section class="best-practices-section">
        <div class="section-card">
          <h2 class="section-heading">✨ Best Practices</h2>
          
          <div class="practices-grid">
            <div class="practice-card">
              <div class="practice-icon">🎯</div>
              <h4 class="practice-title">Cache Responses</h4>
              <p class="practice-desc">Cache video metadata to reduce API calls and improve performance.</p>
            </div>

            <div class="practice-card">
              <div class="practice-icon">⏱️</div>
              <h4 class="practice-title">Implement Timeouts</h4>
              <p class="practice-desc">Set reasonable timeouts (30-60s) for video info requests.</p>
            </div>

            <div class="practice-card">
              <div class="practice-icon">🔄</div>
              <h4 class="practice-title">Handle Errors Gracefully</h4>
              <p class="practice-desc">Always handle errors and provide fallback options to users.</p>
            </div>

            <div class="practice-card">
              <div class="practice-icon">📊</div>
              <h4 class="practice-title">Monitor Usage</h4>
              <p class="practice-desc">Track your API usage to stay within rate limits.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Support -->
      <section class="support-section">
        <div class="support-card">
          <div class="support-icon">💬</div>
          <h3 class="support-title">Need Help?</h3>
          <p class="support-desc">
            Check our documentation or contact our support team for assistance.
          </p>
          <div class="support-actions">
            <router-link to="/faq" class="btn btn-outline">View FAQ</router-link>
            <router-link to="/contact" class="btn btn-primary">Contact Support</router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const baseUrl = 'http://localhost:3001'
const testVideoUrl = ref('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
const activeLanguage = ref('javascript')

const copied = reactive({
  baseUrl: false,
  health: false,
  videoInfoCurl: false,
  videoInfo: false,
  platforms: false,
  javascript: false,
  python: false,
  php: false,
  nodejs: false
})

const loading = reactive({
  health: false,
  videoInfo: false,
  platforms: false
})

const results = reactive({
  health: null,
  videoInfo: null,
  platforms: null
})

const languages = [
  { id: 'javascript', name: 'JavaScript', icon: '🟨' },
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'php', name: 'PHP', icon: '🐘' },
  { id: 'nodejs', name: 'Node.js', icon: '🟢' }
]

const examples = {
  health: `{
  "status": "ok",
  "message": "Video downloader API is running"
}`,
  
  videoInfoCurl: `curl "http://localhost:3001/api/video/info?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ"`,
  
  videoInfo: `{
  "title": "Video Title",
  "author": "Channel Name",
  "duration": "3:45",
  "views": "1.2M",
  "uploadDate": "2024-01-15",
  "thumbnail": "https://...",
  "videoFormats": [
    {
      "id": "v1",
      "quality": "1080p",
      "format": "mp4",
      "resolution": "1920x1080",
      "fileSize": "245 MB",
      "fps": 60,
      "downloadUrl": "https://..."
    }
  ],
  "audioFormats": [...],
  "platform": "youtube"
}`,
  
  platforms: `{
  "platforms": [
    {
      "name": "YouTube",
      "supported": true,
      "icon": "▶️"
    }
  ],
  "message": "Currently supporting YouTube..."
}`,
  
  error: `{
  "error": "VIDEO_UNAVAILABLE",
  "message": "This video is not available..."
}`
}

const codeExamples = {
  javascript: `// Fetch video information
async function getVideoInfo(url) {
  const apiUrl = 'http://localhost:3001/api/video/info';
  const params = new URLSearchParams({ url });
  
  try {
    const response = await fetch(\`\${apiUrl}?\${params}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    console.log('Video info:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Usage
const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
getVideoInfo(videoUrl)
  .then(info => console.log(info))
  .catch(err => console.error(err));`,

  python: `import requests

def get_video_info(video_url):
    """Fetch video information from the API"""
    api_url = 'http://localhost:3001/api/video/info'
    params = {'url': video_url}
    
    try:
        response = requests.get(api_url, params=params, timeout=30)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        raise

# Usage
video_url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
try:
    info = get_video_info(video_url)
    print(f"Title: {info['title']}")
    print(f"Author: {info['author']}")
except Exception as e:
    print(f"Failed to fetch video info: {e}")`,

  php: `<?php

function getVideoInfo($videoUrl) {
    $apiUrl = 'http://localhost:3001/api/video/info';
    $url = $apiUrl . '?' . http_build_query(['url' => $videoUrl]);
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode !== 200) {
        throw new Exception("API request failed with status: $httpCode");
    }
    
    return json_decode($response, true);
}

// Usage
$videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
try {
    $info = getVideoInfo($videoUrl);
    echo "Title: " . $info['title'] . "\\n";
    echo "Author: " . $info['author'] . "\\n";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\\n";
}

?>`,

  nodejs: `const axios = require('axios');

async function getVideoInfo(videoUrl) {
  const apiUrl = 'http://localhost:3001/api/video/info';
  
  try {
    const response = await axios.get(apiUrl, {
      params: { url: videoUrl },
      timeout: 30000
    });
    
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with error
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // No response received
      console.error('No response from API');
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
}

// Usage
const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
getVideoInfo(videoUrl)
  .then(info => {
    console.log('Title:', info.title);
    console.log('Author:', info.author);
    console.log('Formats:', info.videoFormats.length);
  })
  .catch(err => console.error('Failed:', err.message));`
}

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    
    // Find which key was copied
    for (const key in copied) {
      if (codeExamples[key] === text || examples[key] === text || text === baseUrl) {
        copied[key] = true
        setTimeout(() => {
          copied[key] = false
        }, 2000)
        break
      }
    }
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const testEndpoint = async (endpoint) => {
  loading[endpoint] = true
  results[endpoint] = null
  
  try {
    let url = baseUrl
    
    if (endpoint === 'health') {
      url += '/api/health'
    } else if (endpoint === 'videoInfo') {
      url += `/api/video/info?url=${encodeURIComponent(testVideoUrl.value)}`
    } else if (endpoint === 'platforms') {
      url += '/api/platforms'
    }
    
    const response = await fetch(url)
    const data = await response.json()
    
    results[endpoint] = {
      success: response.ok,
      data: JSON.stringify(data, null, 2)
    }
  } catch (error) {
    results[endpoint] = {
      success: false,
      data: `Error: ${error.message}\n\nMake sure the backend server is running on ${baseUrl}`
    }
  } finally {
    loading[endpoint] = false
  }
}
</script>

<style scoped>
.api-page {
  padding: var(--spacing-2xl) 0;
  min-height: 100vh;
}

.page-header-section {
  text-align: center;
  padding: var(--spacing-3xl) 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
  border-radius: var(--radius-2xl);
  margin-bottom: var(--spacing-2xl);
}

.header-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-lg);
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-md);
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.main-heading {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xl);
  text-align: center;
}

.section-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  margin-bottom: var(--spacing-xl);
}

.section-heading {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
}

.section-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
}

.code-example {
  background: #1e1e1e;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin: var(--spacing-lg) 0;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  background: #2d2d2d;
  border-bottom: 1px solid #404040;
}

.code-label {
  color: #9cdcfe;
  font-size: 0.875rem;
  font-weight: 600;
}

.copy-btn {
  padding: 0.375rem 0.75rem;
  background: #404040;
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all var(--transition-base);
}

.copy-btn:hover {
  background: #505050;
}

.code-block {
  padding: var(--spacing-lg);
  margin: 0;
  color: #d4d4d4;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  overflow-x: auto;
}

.info-box {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) 0;
}

.info-success {
  background: #d1fae5;
  border: 1px solid #059669;
}

.info-warning {
  background: #fef3c7;
  border: 1px solid #f59e0b;
}

.info-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.info-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.info-text {
  color: var(--text-secondary);
  margin: 0;
}

.endpoint-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.endpoint-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.http-method {
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
}

.method-get {
  background: #10b981;
}

.method-post {
  background: #3b82f6;
}

.endpoint-path {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  font-family: 'Courier New', monospace;
  margin: 0;
}

.endpoint-description {
  color: var(--text-secondary);
  font-size: 1.125rem;
  margin-bottom: var(--spacing-lg);
}

.details-heading {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: var(--spacing-lg) 0 var(--spacing-md);
}

.params-table,
.error-table {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.param-row,
.error-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
}

.error-row {
  grid-template-columns: 100px 150px 1fr;
}

.param-row:last-child,
.error-row:last-child {
  border-bottom: none;
}

.param-name,
.error-code {
  font-weight: 700;
  color: var(--primary-color);
  font-family: 'Courier New', monospace;
}

.param-type {
  color: var(--text-secondary);
  font-style: italic;
}

.param-required {
  color: #dc2626;
  font-weight: 600;
  font-size: 0.875rem;
}

.param-desc,
.error-desc {
  color: var(--text-secondary);
}

.error-name {
  font-weight: 600;
  color: var(--text-primary);
}

.try-it-section {
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--border-color);
}

.test-input {
  width: 100%;
  padding: var(--spacing-md);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 1rem;
  margin-bottom: var(--spacing-md);
  transition: all var(--transition-base);
}

.test-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.result-box {
  margin-top: var(--spacing-md);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

.result-success {
  background: #ecfdf5;
  border-color: #10b981;
}

.result-error {
  background: #fef2f2;
  border-color: #dc2626;
}

.result-box pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  white-space: pre-wrap;
  word-break: break-word;
}

.example-tabs {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  border-bottom: 2px solid var(--border-color);
  overflow-x: auto;
}

.tab-btn {
  padding: var(--spacing-md) var(--spacing-xl);
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
  white-space: nowrap;
  margin-bottom: -2px;
}

.tab-btn:hover {
  color: var(--text-primary);
  background: var(--bg-secondary);
}

.tab-btn.active {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}

.practices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.practice-card {
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.practice-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

.practice-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.practice-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.practice-desc {
  color: var(--text-secondary);
  margin: 0;
}

.support-card {
  text-align: center;
  padding: var(--spacing-3xl);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: var(--radius-lg);
}

.support-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-lg);
}

.support-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.support-desc {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
}

.support-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .param-row,
  .error-row {
    grid-template-columns: 1fr;
  }

  .practices-grid {
    grid-template-columns: 1fr;
  }
}
</style>
