# 🚀 Production Setup Guide - Video Downloader

This guide will help you set up and deploy your production-ready video downloader using **open-source dependencies**.

## 📋 Overview

Your video downloader now uses:
- **Frontend**: Vue.js + Vite
- **Backend**: Express.js + @distube/ytdl-core (open-source)
- **Cost**: $0 - Completely free and open-source!

## 🏗️ Architecture

```
┌─────────────┐          ┌──────────────┐          ┌──────────────┐
│   Browser   │  ───────▶│  Backend API │  ───────▶│   YouTube    │
│  (Vue.js)   │          │  (Express)   │          │   Servers    │
└─────────────┘          └──────────────┘          └──────────────┘
                              ↓
                         ytdl-core
                        (open-source)
```

## 🛠️ Local Development Setup

### Step 1: Install Backend Dependencies

```bash
cd server
npm install
```

This installs:
- `express` - Web server
- `@distube/ytdl-core` - YouTube video downloader (open-source)
- `cors` - Cross-origin resource sharing

### Step 2: Configure Environment Variables

**Frontend (.env in root directory):**
```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_URL=http://localhost:3001
```

**Backend (server/.env):**
```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=3001
```

### Step 3: Start the Backend Server

```bash
# In the server directory
cd server
npm start

# Or for development with auto-reload
npm run dev
```

You should see:
```
✅ Video Downloader API server running on port 3001
📡 Health check: http://localhost:3001/api/health
🎥 Video info: http://localhost:3001/api/video/info?url=YOUTUBE_URL
```

### Step 4: Start the Frontend

```bash
# In the root directory
npm run dev
```

Your app is now running at `http://localhost:5173` (or your configured port)

## 🧪 Testing

### Test the Backend API

1. **Health Check:**
```bash
curl http://localhost:3001/api/health
```

2. **Fetch Video Info:**
```bash
curl "http://localhost:3001/api/video/info?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

### Test the Full Application

1. Open your browser to `http://localhost:5173`
2. Paste a YouTube URL (e.g., `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
3. Click "Download"
4. You should see:
   - Real video title and thumbnail
   - Actual quality options
   - Working download links

## 🌐 Production Deployment

### Option 1: Deploy to Railway (Recommended - Free Tier)

Railway offers a generous free tier and is perfect for this use case.

**Backend Deployment:**

1. Create account at [Railway.app](https://railway.app)

2. Install Railway CLI:
```bash
npm install -g @railway/cli
```

3. Login and initialize:
```bash
railway login
cd server
railway init
```

4. Deploy:
```bash
railway up
```

5. Set environment variable:
```bash
railway variables set PORT=3001
```

6. Get your backend URL from Railway dashboard (e.g., `https://your-app.railway.app`)

**Frontend Deployment:**

1. Update `.env.production`:
```env
VITE_API_URL=https://your-backend.railway.app
```

2. Build and deploy frontend to Vercel/Netlify (see below)

### Option 2: Deploy to Vercel (Frontend) + Railway (Backend)

**Backend to Railway:**
- Follow Option 1 steps above

**Frontend to Vercel:**

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Create `.env.production`:
```env
VITE_API_URL=https://your-backend.railway.app
```

3. Deploy:
```bash
vercel --prod
```

4. Set environment variable in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://your-backend.railway.app`

### Option 3: Deploy to Render (Free Tier)

**Backend:**

1. Create account at [Render.com](https://render.com)

2. Create new Web Service

3. Connect your Git repository

4. Configure:
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Environment Variables**: 
     - `PORT`: `10000` (Render's default)

5. Deploy and get your URL (e.g., `https://your-app.onrender.com`)

**Frontend:**

1. Create new Static Site on Render

2. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Environment Variables**:
     - `VITE_API_URL`: `https://your-backend.onrender.com`

### Option 4: Self-Hosted VPS (DigitalOcean, Linode, etc.)

**Requirements:**
- Ubuntu 20.04+ or similar
- Node.js 18+
- Nginx (for reverse proxy)
- PM2 (for process management)

**Setup:**

1. SSH into your server

2. Install dependencies:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs nginx
sudo npm install -g pm2
```

3. Clone your repository:
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

4. Setup backend:
```bash
cd server
npm install
pm2 start index.js --name video-api
pm2 save
pm2 startup
```

5. Setup Nginx reverse proxy:
```bash
sudo nano /etc/nginx/sites-available/video-api
```

Add:
```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/video-api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

6. Setup SSL with Let's Encrypt:
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d api.yourdomain.com
```

7. Build and serve frontend:
```bash
cd ..
npm install
npm run build
sudo cp -r dist/* /var/www/html/
```

## 🔒 Security Best Practices

### 1. Rate Limiting

Add rate limiting to your backend to prevent abuse:

```bash
cd server
npm install express-rate-limit
```

Update `server/index.js`:
```javascript
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})

app.use('/api/', limiter)
```

### 2. CORS Configuration

Update CORS settings for production:

```javascript
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'https://yourdomain.com',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
```

### 3. Environment Variables

Never commit `.env` files! Always use:
- `.env` for local development
- Platform environment variables for production

### 4. HTTPS Only

Always use HTTPS in production:
- Railway/Render/Vercel provide this automatically
- For self-hosted, use Let's Encrypt (free SSL certificates)

## 📊 Monitoring & Maintenance

### Monitor Backend Health

Set up health check monitoring:
- UptimeRobot (free)
- BetterUptime (free tier)
- Pingdom (free tier)

Monitor: `https://your-backend.com/api/health`

### Logs

**Railway/Render:**
- View logs in dashboard

**Self-hosted with PM2:**
```bash
pm2 logs video-api
pm2 monit
```

### Updates

Keep dependencies updated:
```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Or for major updates
npm install @distube/ytdl-core@latest
```

## 🐛 Troubleshooting

### "Cannot connect to backend server"

**Check:**
1. Is backend running? `curl http://localhost:3001/api/health`
2. Is CORS configured correctly?
3. Is `VITE_API_URL` set correctly in frontend?

**Fix:**
```bash
# Backend
cd server
npm start

# Frontend
# Update .env
VITE_API_URL=http://localhost:3001

# Restart frontend
npm run dev
```

### "Video unavailable" or "429 Too Many Requests"

**Cause:** YouTube rate limiting or video restrictions

**Solutions:**
1. Wait a few minutes before trying again
2. Implement caching to reduce requests
3. Add request delays for batch downloads
4. Use rotating IP addresses (advanced)

### Downloads not working

**Check:**
1. Browser console for errors
2. Network tab for failed requests
3. Backend logs for errors

**Common fixes:**
- Clear browser cache
- Check CORS headers
- Verify video is not age-restricted or private

### "Module not found" errors

**Fix:**
```bash
# Backend
cd server
rm -rf node_modules package-lock.json
npm install

# Frontend
cd ..
rm -rf node_modules package-lock.json
npm install
```

## 📈 Scaling for High Traffic

### Caching

Implement Redis caching for video metadata:

```bash
npm install redis
```

```javascript
import redis from 'redis'

const client = redis.createClient()

app.get('/api/video/info', async (req, res) => {
  const { url } = req.query
  const cacheKey = `video:${url}`
  
  // Check cache first
  const cached = await client.get(cacheKey)
  if (cached) {
    return res.json(JSON.parse(cached))
  }
  
  // Fetch and cache
  const data = await ytdl.getInfo(url)
  await client.setEx(cacheKey, 3600, JSON.stringify(data))
  
  res.json(data)
})
```

### Load Balancing

For high traffic, use multiple backend instances:

1. Deploy multiple backend instances
2. Use a load balancer (Nginx, Cloudflare, etc.)
3. Distribute traffic across instances

### Database

Add PostgreSQL/MongoDB for:
- User management
- Download history
- Analytics
- Favorites/playlists

## 💰 Cost Estimation

### Free Tier (Suitable for small-medium traffic)

| Service | Cost | Limits |
|---------|------|--------|
| Railway | Free | 500 hours/month |
| Render | Free | 750 hours/month |
| Vercel | Free | 100GB bandwidth |
| Netlify | Free | 100GB bandwidth |

**Total:** $0/month

### Paid Tier (For higher traffic)

| Service | Cost | Features |
|---------|------|----------|
| Railway Pro | $5/mo | Unlimited hours, better resources |
| Render Starter | $7/mo | Better performance, more hours |
| DigitalOcean Droplet | $6/mo | Full control, 1GB RAM |

**Total:** $6-12/month

## 🎉 You're All Set!

Your video downloader is now:
- ✅ Production-ready
- ✅ Using open-source dependencies
- ✅ Completely free (or very cheap)
- ✅ Scalable
- ✅ Secure

## 📞 Support

If you encounter issues:
1. Check the logs (backend and frontend)
2. Review this documentation
3. Check @distube/ytdl-core issues on GitHub
4. Review Express.js documentation

## 🔮 Future Enhancements

Consider adding:
- [ ] User authentication
- [ ] Download history
- [ ] Favorite videos
- [ ] Playlist support
- [ ] More platforms (TikTok, Instagram, etc.)
- [ ] Video conversion (MP3, GIF, etc.)
- [ ] Custom quality presets
- [ ] Download queue management
- [ ] Analytics dashboard

---

**Happy downloading! 🎥**
