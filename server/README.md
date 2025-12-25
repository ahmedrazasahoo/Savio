# Video Downloader Backend API

Production-ready backend API for downloading videos using open-source libraries.

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Start the Server

```bash
# Production mode
npm start

# Development mode (with auto-reload)
npm run dev
```

The server will start on `http://localhost:3001`

## 📡 API Endpoints

### Health Check
```
GET /api/health
```

Response:
```json
{
  "status": "ok",
  "message": "Video downloader API is running"
}
```

### Get Video Information
```
GET /api/video/info?url=YOUTUBE_URL
```

Parameters:
- `url` (required): YouTube video URL

Response:
```json
{
  "title": "Video Title",
  "author": "Channel Name",
  "duration": "12:34",
  "views": "1.2M",
  "thumbnail": "https://...",
  "videoFormats": [...],
  "audioFormats": [...],
  "subtitles": [...],
  "platform": "youtube"
}
```

### Download Video
```
GET /api/video/download?url=YOUTUBE_URL&quality=highest
```

Parameters:
- `url` (required): YouTube video URL
- `quality` (optional): Video quality preference

Returns: Video file stream

### Get Supported Platforms
```
GET /api/platforms
```

Response:
```json
{
  "platforms": [
    {
      "name": "YouTube",
      "supported": true,
      "icon": "▶️"
    }
  ]
}
```

## 🛠️ Dependencies

- **express** - Web framework
- **@distube/ytdl-core** - YouTube video downloader (open-source)
- **cors** - CORS middleware

## 🌍 Environment Variables

Create a `.env` file:

```env
PORT=3001
CORS_ORIGIN=http://localhost:5173
```

## 📦 Deployment

See [PRODUCTION_SETUP.md](../PRODUCTION_SETUP.md) for detailed deployment instructions.

### Quick Deploy to Railway

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

## 🧪 Testing

Test the API:

```bash
# Health check
curl http://localhost:3001/api/health

# Get video info
curl "http://localhost:3001/api/video/info?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

## 🔒 Security

- CORS enabled for frontend communication
- Rate limiting recommended for production
- Input validation for all endpoints
- Error handling for invalid URLs

## 📄 License

MIT
