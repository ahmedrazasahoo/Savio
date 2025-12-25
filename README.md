# 🎥 Savio - Video Downloader

A **production-ready** video downloader that fetches and downloads videos from YouTube (and more platforms coming soon).

## ✨ Features

- 🎯 **Real Video Fetching** - Actual video data from YouTube (no demo mode!)
- 💯 **Free & Open Source** - No API keys or monthly costs required
- 🎨 **Multiple Quality Options** - 4K, 1080p, 720p, 480p, 360p
- 🎵 **Audio Downloads** - Extract audio as MP3/M4A
- 📝 **Subtitle Support** - Download captions in multiple formats
- 📋 **Batch Downloads** - Download multiple videos at once
- 🔄 **Video Conversion** - Convert to GIF, extract audio, trim videos
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🚀 **Production Ready** - Deploy to Railway, Render, Vercel, or your own server

## 🏗️ Architecture

```
┌─────────────────┐
│  Frontend       │  Vue.js 3 + Vite
│  Port: 5173     │  Modern, reactive UI
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Backend API    │  Express.js
│  Port: 3001     │  RESTful API
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ @distube/ytdl   │  Open-source library
│  YouTube DL     │  No API keys needed
└─────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Installation & Run

```bash
# 1. Install backend dependencies
cd server
npm install

# 2. Start backend server
npm start

# 3. In a new terminal, install frontend dependencies
cd ..
npm install

# 4. Start frontend
npm run dev
```

**Open your browser:** `http://localhost:5173`

**That's it!** 🎉 No API keys, no configuration needed!

## 📖 Full Documentation

- **[QUICK_START.md](./QUICK_START.md)** - 5-minute setup guide
- **[PRODUCTION_SETUP.md](./PRODUCTION_SETUP.md)** - Complete deployment guide
- **[server/README.md](./server/README.md)** - Backend API documentation

## 🌐 Deploy to Production

### Railway (Recommended - Free Tier)

```bash
cd server
npm install -g @railway/cli
railway login
railway init
railway up
```

### Render (Free Tier)

1. Go to [render.com](https://render.com)
2. Connect your GitHub repo
3. Deploy backend as "Web Service"
4. Deploy frontend as "Static Site"

### Vercel + Railway

- Backend → Railway
- Frontend → Vercel

See [PRODUCTION_SETUP.md](./PRODUCTION_SETUP.md) for detailed instructions.

## 🎯 Usage

1. **Paste a YouTube URL**
   ```
   https://www.youtube.com/watch?v=dQw4w9WgXcQ
   ```

2. **Select quality** - Choose from available formats

3. **Download** - Click download and enjoy!

## 📁 Project Structure

```
savio/
├── src/                      # Frontend Vue.js app
│   ├── components/           # Reusable components
│   ├── views/                # Page components
│   ├── store/                # API services
│   │   └── api.js           # Backend API integration
│   ├── router/               # Vue Router config
│   └── assets/               # Styles and static assets
│
├── server/                   # Backend Express API
│   ├── index.js             # Main server file
│   ├── package.json         # Backend dependencies
│   └── README.md            # Backend docs
│
├── public/                   # Static assets
├── package.json             # Frontend dependencies
└── vite.config.js           # Vite configuration
```

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router** - Official router
- **Vite** - Next-generation frontend tooling

### Backend
- **Express.js** - Web framework
- **@distube/ytdl-core** - YouTube downloader (open-source)
- **CORS** - Cross-origin resource sharing

## 🔒 Security

- ✅ Input validation
- ✅ CORS protection
- ✅ Rate limiting ready
- ✅ No sensitive data storage
- ✅ HTTPS in production

## 📊 Supported Platforms

| Platform | Status | Notes |
|----------|--------|-------|
| YouTube | ✅ Working | Full support |
| TikTok | 🚧 Coming Soon | In development |
| Instagram | 🚧 Coming Soon | Planned |
| Facebook | 🚧 Coming Soon | Planned |
| Twitter/X | 🚧 Coming Soon | Planned |

## 💰 Cost

**$0 per month** - Everything is free and open-source!

No API keys, no subscriptions, no hidden costs.

### Free Hosting Options:
- Railway: 500 hours/month free
- Render: 750 hours/month free
- Vercel: 100GB bandwidth free
- Netlify: 100GB bandwidth free

## 🐛 Troubleshooting

### Backend won't start?
```bash
cd server
rm -rf node_modules
npm install
npm start
```

### Frontend can't connect?
- Make sure backend is running on port 3001
- Check `.env` file has `VITE_API_URL=http://localhost:3001`

### Video not downloading?
- Check if video is available and not private
- Some videos may be age-restricted
- Try a different video URL

See [PRODUCTION_SETUP.md](./PRODUCTION_SETUP.md) for more troubleshooting.

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

MIT License - feel free to use this project however you'd like!

## 🙏 Credits

- [@distube/ytdl-core](https://github.com/distubejs/ytdl-core) - YouTube downloader library
- [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework
- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework

## 📞 Support

Having issues? Check:
1. [QUICK_START.md](./QUICK_START.md) - Basic setup
2. [PRODUCTION_SETUP.md](./PRODUCTION_SETUP.md) - Advanced setup
3. GitHub Issues - Report bugs
4. Discussions - Ask questions

## 🔮 Roadmap

- [ ] Add more platforms (TikTok, Instagram, Facebook)
- [ ] Implement video conversion (GIF, MP3)
- [ ] Add user authentication
- [ ] Create download history
- [ ] Add playlist support
- [ ] Implement video trimming
- [ ] Add quality presets
- [ ] Create mobile app

---

**Made with ❤️ using Vue.js and Express.js**

**Star ⭐ this repo if you find it helpful!**
