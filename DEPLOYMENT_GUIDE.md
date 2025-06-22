# 🚀 LibreChat Deployment Guide: Vercel + Database

## ⚠️ Important Database Consideration

LibreChat was originally designed to work with **MongoDB**, but Vercel functions have limitations with persistent database connections. We have two main options:

### Option 1: MongoDB Atlas (Recommended)
- Use MongoDB Atlas (cloud MongoDB)
- Easy migration from local setup
- Works well with Vercel serverless functions

### Option 2: Supabase PostgreSQL (More Complex)
- Requires significant code changes to adapt LibreChat's MongoDB schema to PostgreSQL
- Better long-term solution but needs extensive modification

**For this deployment, I recommend Option 1 (MongoDB Atlas) as it requires minimal code changes.**

---

## 📋 Deployment Steps

### Phase 1: Set Up MongoDB Atlas

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/atlas
   - Sign up/login with your GitHub account
   - Create a new project

2. **Create a Cluster**
   - Choose "Build a Database"
   - Select "M0 Sandbox" (Free tier)
   - Choose a region close to your users
   - Name your cluster (e.g., "librechat-prod")

3. **Configure Database Access**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create username/password (save these!)
   - Set role to "Atlas Admin" for now

4. **Configure Network Access**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" (0.0.0.0/0)
   - (In production, you'd want to restrict this)

5. **Get Connection String**
   - Go to "Database" in the left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password

### Phase 2: Deploy to Vercel

1. **Connect GitHub to Vercel**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "New Project"
   - Import your `dahano/PeanutChat` repository

2. **Configure Environment Variables in Vercel**
   - In the import screen, expand "Environment Variables"
   - Add these variables:

   ```
   NODE_ENV=production
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/LibreChat?retryWrites=true&w=majority
   HOST=0.0.0.0
   PORT=3080
   
   # Security Keys (generate new ones!)
   CREDS_KEY=your_generated_key_here
   CREDS_IV=your_generated_iv_here
   JWT_SECRET=your_generated_jwt_secret
   JWT_REFRESH_SECRET=your_generated_refresh_secret
   
   # AI API Keys
   OPENAI_API_KEY=your_openai_api_key
   ANTHROPIC_API_KEY=your_anthropic_api_key
   
   # Session Configuration
   SESSION_EXPIRY=900000
   REFRESH_TOKEN_EXPIRY=604800000
   
   # App Configuration
   ALLOW_REGISTRATION=true
   SEARCH=false
   DEBUG_LOGGING=false
   TITLE_CONVO=true
   TITLE_MODEL=gpt-3.5-turbo
   
   # Rate Limiting
   LIMIT_CONCURRENT_MESSAGES=true
   CONCURRENT_MESSAGE_MAX=2
   BAN_VIOLATIONS=true
   BAN_DURATION=7200000
   BAN_INTERVAL=20
   ```

3. **Generate Security Keys**
   - Visit: https://www.librechat.ai/toolkit/creds_generator
   - Generate and copy the keys to your Vercel environment variables

4. **Deploy**
   - Click "Deploy" in Vercel
   - Wait for the build to complete

### Phase 3: Post-Deployment Setup

1. **Verify Deployment**
   - Check the Vercel deployment URL
   - Ensure the app loads without errors
   - Check Vercel function logs for any issues

2. **Test Functionality**
   - Create a user account
   - Test OpenAI and Anthropic connections
   - Verify database operations work

---

## 🔧 Current Deployment Status

✅ **Completed:**
- Code pushed to GitHub: `dahano/PeanutChat`
- Vercel configuration added (`vercel.json`)
- Production config created (`librechat.production.yaml`)
- Deployment scripts added
- Package.json updated with build commands

🔄 **Next Steps:**
1. Set up MongoDB Atlas
2. Configure Vercel deployment
3. Add environment variables
4. Deploy and test

---

## 🚨 Known Issues & Limitations

1. **MeiliSearch**: Currently disabled for Vercel deployment (would need separate hosting)
2. **File Uploads**: May need additional configuration for Vercel's file system limitations
3. **WebSocket**: Real-time features might need adjustments for serverless environment

---

## 🛠️ Alternative: Railway Deployment

If Vercel proves challenging, consider **Railway** as an alternative:
- Better support for persistent connections
- Built-in database options
- Easier MongoDB integration
- Simple deployment from GitHub

Would you like me to help you set up MongoDB Atlas first, or would you prefer to explore the Railway option?

---

## 📞 Next Steps

Let me know:
1. Do you want to proceed with MongoDB Atlas + Vercel?
2. Or would you prefer to try Railway?
3. Do you have any questions about the deployment process?

I'm ready to guide you through whichever option you choose! 🚀 