# 🎯 Quick Start Guide

Get your video downloader running in **5 minutes**!

## ⚡ Super Quick Setup

### 1. Install Backend Dependencies

```bash
cd server
npm install
```

### 2. Start Backend Server

```bash
npm start
```

You should see:
```
✅ Video Downloader API server running on port 3001
```

### 3. Start Frontend (New Terminal)

```bash
# Go back to root directory
cd ..

# Start frontend
npm run dev
```

### 4. Open Your Browser

Go to: `http://localhost:5173`

### 5. Test It!

1. Paste a YouTube URL:
   ```
   https://www.youtube.com/watch?v=dQw4w9WgXcQ
   ```

2. Click "Download"

3. See real video information and download options!

## ✅ What's Working Now

- ✅ **Real YouTube video fetching** (no API keys needed!)
- ✅ **Multiple quality options** (4K, 1080p, 720p, etc.)
- ✅ **Audio-only downloads** (MP3/M4A)
- ✅ **Free and open-source** (no costs!)
- ✅ **Production-ready** (ready to deploy!)

## 🚫 What Changed

### Before (Not Production Ready):
- ❌ Required paid RapidAPI key
- ❌ Demo mode only
- ❌ No real downloads
- ❌ Monthly API costs

### Now (Production Ready):
- ✅ Free open-source library (@distube/ytdl-core)
- ✅ Real video fetching
- ✅ Working downloads
- ✅ Zero API costs
- ✅ Backend + Frontend architecture

## 🏗️ Architecture Overview

```
Frontend (Vue.js)  ←→  Backend (Express.js)  ←→  YouTube
    Port 5173           Port 3001                Servers
                            ↓
                     @distube/ytdl-core
                     (open-source lib)
```

## 📁 Project Structure

```
your-project/
├── src/                    # Frontend (Vue.js)
│   ├── components/
│   ├── views/
│   └── store/
│       └── api.js         # API service (updated)
│
├── server/                 # Backend (NEW!)
│   ├── index.js           # Express server
│   ├── package.json       # Backend dependencies
│   └── .env.example       # Environment config
│
├── package.json           # Frontend dependencies
└── PRODUCTION_SETUP.md    # Full deployment guide
```

## 🔧 Configuration (Optional)

### Frontend Environment Variables

Create `.env` in root:
```env
VITE_API_URL=http://localhost:3001
```

### Backend Environment Variables

Create `server/.env`:
```env
PORT=3001
```

## 🌐 Deploy to Production

**Quick Deploy Options:**

### Option 1: Railway (Easiest)
```bash
cd server
npm install -g @railway/cli
railway login
railway init
railway up
```
Get your URL and update frontend `.env.production`:
```env
VITE_API_URL=https://your-app.railway.app
```

### Option 2: Render (Free)
1. Go to [render.com](https://render.com)
2. Connect your GitHub repo
3. Deploy backend as "Web Service"
4. Deploy frontend as "Static Site"

### Full Deployment Guide

See [PRODUCTION_SETUP.md](./PRODUCTION_SETUP.md) for detailed instructions.

## 🐛 Troubleshooting

### Backend won't start?

```bash
cd server
rm -rf node_modules package-lock.json
npm install
npm start
```

### Frontend can't connect to backend?

Check:
1. Backend is running on port 3001
2. Frontend `.env` has correct API URL
3. No firewall blocking port 3001

### "Module not found" errors?

```bash
# Backend
cd server
npm install

# Frontend
cd ..
npm install
```

## 📚 Learn More

- [PRODUCTION_SETUP.md](./PRODUCTION_SETUP.md) - Full deployment guide
- [server/README.md](./server/README.md) - Backend API docs
- [@distube/ytdl-core docs](https://github.com/distubejs/ytdl-core) - Library documentation

## 🎉 Success!

If you can:
- ✅ Paste a YouTube URL
- ✅ See real video title and thumbnail
- ✅ See quality options (1080p, 720p, etc.)
- ✅ Click download and it works

**You're all set! Your system is production-ready!** 🚀

## 💡 Tips

1. **For development**: Both servers must be running (frontend + backend)
2. **For production**: Deploy backend first, then update frontend with backend URL
3. **Free hosting**: Railway, Render, and Vercel all have free tiers
4. **No API keys needed**: Everything is open-source and free!

## 🆘 Need Help?

1. Check the [PRODUCTION_SETUP.md](./PRODUCTION_SETUP.md) troubleshooting section
2. Review backend logs: Check the terminal where `npm start` is running
3. Check browser console: Press F12 in your browser
4. GitHub Issues: Post your error with logs

---

**Happy coding! 🎥✨**
