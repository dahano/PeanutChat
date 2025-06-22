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

# App Configuration
NODE_ENV=production
SESSION_EXPIRY=900000
REFRESH_TOKEN_EXPIRY=604800000
ALLOW_REGISTRATION=true
DEBUG_LOGGING=false
```

## Deployment Steps:

1. **Go to Railway.app** and sign in with GitHub
2. **Create New Project** → **Deploy from GitHub repo**
3. **Select your repository**: `dahano/PeanutChat`
4. **Add environment variables** from the list above
5. **Deploy!**

## Railway will automatically:
- ✅ Detect Node.js application
- ✅ Run `npm run railway:build` to build everything
- ✅ Start with `npm start`
- ✅ Provide a public URL
- ✅ Auto-redeploy on GitHub pushes

## Custom Domain (Optional):
- Go to your Railway project settings
- Add your custom domain
- Railway provides SSL automatically

## Monitoring:
- View logs in Railway dashboard
- Monitor CPU/Memory usage
- Set up alerts for downtime 