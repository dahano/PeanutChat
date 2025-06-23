# 🚂 Railway Deployment Guide

## Environment Variables to Set in Railway

Copy these environment variables to your Railway project:

### Required Variables:
```bash
# Database
MONGO_URI=mongodb+srv://ofirdahan112:UPPKhSiK2Ku3pfpl@cluster0.cxskno1.mongodb.net/LibreChat?retryWrites=true&w=majority&appName=Cluster0

# AI API Keys (Replace with your actual keys)
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here

# Security Keys (IMPORTANT: Generate new ones for production!)
CREDS_KEY=f34be427ebb29de8d88c107a71546019685ed8b241d8f2ed00c3df97ad2566f0
CREDS_IV=e2341419ec3dd3d19c13a1a87fafac47
JWT_SECRET=16f8c0ef4a5d391b26034086c628469d3f9f497f08163ab9b40137092f2909ef
JWT_REFRESH_SECRET=eaa5191f2914e30b9387fd84e254e4ba6fc51b4654968a9b0803b456a54b8418
MEILI_MASTER_KEY=eaa5191f2914e30b9387fd84e254e4ba6fc51b4654968a9b0803b456a54b8418

# Session Configuration
SESSION_EXPIRY=900000
REFRESH_TOKEN_EXPIRY=604800000

# Server Configuration
NODE_ENV=production
HOST=0.0.0.0
PORT=3080

# Config File Location (NEW - Add this!)
CONFIG_PATH=/app/librechat.yaml

# Search Configuration (disabled for basic setup)
SEARCH=false
MEILI_NO_ANALYTICS=true
```

## 🚀 Railway Deployment Steps

1. **Go to Railway.app** and sign in with GitHub
2. **Click "New Project"** → **"Deploy from GitHub repo"**
3. **Select your repository**: `dahano/PeanutChat`
4. **Add all environment variables** from the table above
5. **Railway will automatically build and deploy**

## 🔍 Troubleshooting

If you see "Config file YAML format is invalid" error:
- Make sure you added the `CONFIG_PATH=/app/librechat.yaml` environment variable
- Check that the librechat.yaml file is in your repository root
- Verify the file is properly formatted YAML

## 📱 Access Your App

Once deployed, Railway will provide a URL like:
`https://your-app-name.railway.app`

## 🎯 Next Steps

1. Visit your Railway app URL
2. Register a new account (first user becomes admin)
3. Start chatting with ChatGPT and Claude!

## 🔐 Security Notes

- The security keys provided are examples - generate your own for production
- Use the LibreChat credentials generator: https://www.librechat.ai/toolkit/creds_generator
- Keep your API keys secure and never commit them to git 