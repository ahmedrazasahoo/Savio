# API Setup Guide - Video Downloader

This guide will help you configure your video downloader to fetch real video data from supported platforms.

## 🚀 Quick Start

The application currently runs in **Demo Mode** (showing sample data) until you configure an API key.

## 📋 Prerequisites

To enable real video downloads, you'll need:

1. A RapidAPI account (free tier available)
2. An API key from one of the supported video downloader services

## 🔑 Getting Your API Key

### Step 1: Create a RapidAPI Account

1. Go to [RapidAPI](https://rapidapi.com)
2. Click "Sign Up" (free account available)
3. Complete the registration process

### Step 2: Subscribe to a Video Downloader API

Choose **ONE** of these APIs (all have free tiers):

#### Option 1: Social Media Video Downloader (Recommended)
- **URL**: https://rapidapi.com/yusufjoo2001/api/social-media-video-downloader
- **Free Tier**: 100 requests/month
- **Supports**: YouTube, TikTok, Instagram, Facebook, Twitter, and more

1. Visit the API page
2. Click "Subscribe to Test"
3. Select "Basic" (Free) plan
4. Click "Subscribe"

#### Option 2: All in One Video Downloader
- **URL**: https://rapidapi.com/apilab/api/all-in-one-download
- **Free Tier**: 50 requests/month
- **Supports**: Multiple platforms

#### Option 3: YouTube Media Downloader
- **URL**: https://rapidapi.com/kidddevs/api/youtube-media-downloader
- **Free Tier**: 100 requests/month
- **Supports**: YouTube specifically

### Step 3: Get Your API Key

1. After subscribing, go to the API's "Endpoints" tab
2. Look for **"X-RapidAPI-Key"** in the code snippets
3. Copy your API key (looks like: `abc123def456...`)

## ⚙️ Configuring Your Application

### For Development

1. Create a `.env` file in your project root:

```bash
VITE_RAPIDAPI_KEY=your_api_key_here
```

2. Update `src/store/api.js` to use the environment variable:

```javascript
const API_PROVIDERS = {
  RAPIDAPI: {
    host: 'social-media-video-downloader.p.rapidapi.com',
    key: import.meta.env.VITE_RAPIDAPI_KEY, // Changed from REPLACE_ENV.RAPIDAPI_KEY
    // ...
  }
}
```

3. Restart your development server:

```bash
npm run dev
```

### For Production

Add the environment variable to your hosting platform:

**Vercel:**
```bash
vercel env add VITE_RAPIDAPI_KEY
```

**Netlify:**
- Go to Site Settings → Environment Variables
- Add: `VITE_RAPIDAPI_KEY` = `your_key`

**Other platforms:**
- Follow your platform's documentation for adding environment variables

## 🧪 Testing the Integration

1. Start your application
2. Paste a video URL (e.g., YouTube, TikTok)
3. Click "Download"
4. You should see:
   - Real video title and thumbnail
   - Actual download options
   - No "Demo Mode" warning

## 🔍 Troubleshooting

### "API_KEY_NOT_CONFIGURED" Error
- Make sure you've added the API key to your `.env` file
- Verify the environment variable name matches exactly
- Restart your dev server after adding the key

### "API_ERROR: 429" (Too Many Requests)
- You've exceeded your free tier limit
- Wait until the next billing cycle
- Consider upgrading your plan

### "API_ERROR: 403" (Forbidden)
- Your API key is invalid
- Check if you copied the complete key
- Verify you're subscribed to the API

### "UNSUPPORTED_PLATFORM"
- The platform may not be supported by your chosen API
- Try a different API provider
- Check the API documentation for supported platforms

## 💰 Cost Considerations

### Free Tier Limits

| API | Free Requests/Month | Paid Plans Start At |
|-----|-------------------|-------------------|
| Social Media Downloader | 100 | $5/month (500 requests) |
| All in One Download | 50 | $10/month (500 requests) |
| YouTube Media Downloader | 100 | $8/month (1000 requests) |

### Usage Estimates
- **Personal use**: Free tier is usually sufficient
- **Small website**: 500-1000 requests/month
- **Medium traffic**: 5000+ requests/month

## 🛡️ Security Best Practices

1. **Never commit your API key to Git**
   ```bash
   # Add to .gitignore
   .env
   .env.local
   ```

2. **Use environment variables**
   - Never hardcode keys in source code
   - Different keys for dev/prod

3. **Monitor usage**
   - Check RapidAPI dashboard regularly
   - Set up usage alerts

4. **Rotate keys periodically**
   - Generate new keys every few months
   - Revoke old keys after rotation

## 🌐 Alternative Solutions

### Self-Hosted (Free)

If you want to avoid API costs, you can set up your own backend:

1. **yt-dlp** (Python-based)
   ```bash
   pip install yt-dlp
   ```

2. **Create a simple API wrapper**
   ```python
   from flask import Flask, request, jsonify
   import yt_dlp
   
   app = Flask(__name__)
   
   @app.route('/api/video', methods=['GET'])
   def get_video():
       url = request.args.get('url')
       ydl_opts = {'quiet': True}
       with yt_dlp.YoutubeDL(ydl_opts) as ydl:
           info = ydl.extract_info(url, download=False)
           return jsonify(info)
   ```

3. **Deploy on Heroku/Railway** (free tiers available)

### Pros/Cons

| Solution | Pros | Cons |
|----------|------|------|
| RapidAPI | Easy setup, reliable | Monthly costs |
| Self-hosted | Free, full control | Maintenance, hosting costs |

## 📞 Support

If you encounter issues:

1. Check the [RapidAPI documentation](https://docs.rapidapi.com)
2. Review the API provider's support page
3. Check browser console for detailed error messages
4. Create an issue on GitHub with error logs

## 🔄 Next Steps

Once your API is configured:

1. Test with different platforms (YouTube, TikTok, Instagram)
2. Monitor your usage on RapidAPI dashboard
3. Consider implementing rate limiting
4. Add error tracking (e.g., Sentry)
5. Set up caching to reduce API calls

---

**Need help?** Check our [FAQ](./FAQ.md) or [open an issue](https://github.com/your-repo/issues).
