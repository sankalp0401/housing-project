# Deployment Guide

## Prerequisites
- Node.js installed
- Git repository set up
- Domain name (optional)

## Frontend Deployment (Vercel)

### Step 1: Prepare Frontend
```bash
cd client
npm run build
```

### Step 2: Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Set environment variable in Vercel dashboard:
   - `VITE_API_URL` = your backend URL

### Alternative: Netlify
1. Build: `npm run build`
2. Drag `dist` folder to Netlify
3. Set environment variable: `VITE_API_URL`

## Backend Deployment (Render/Railway)

### Step 1: Prepare Backend
1. Ensure `package.json` has start script
2. Create `.env` file (don't commit!)

### Step 2: Deploy to Render
1. Connect GitHub repository
2. Select `server` directory as root
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables:
   - `PORT` = 5000
   - `NODE_ENV` = production
   - `CORS_ORIGIN` = your frontend URL

### Alternative: Railway
1. Connect repository
2. Set root directory to `server`
3. Add environment variables
4. Deploy

## Database Setup (MongoDB Atlas)

### Step 1: Create Cluster
1. Sign up at mongodb.com/cloud/atlas
2. Create free cluster
3. Create database user
4. Whitelist IP (0.0.0.0/0 for all)

### Step 2: Update Backend
1. Install mongoose: `npm install mongoose`
2. Update `index.js` with MongoDB connection
3. Create models for listings, users, contacts
4. Replace in-memory arrays with database queries

### Step 3: Set Environment Variable
Add to backend:
```
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/housingplus
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify API endpoints work
- [ ] Check CORS settings
- [ ] Test contact form submission
- [ ] Verify builder can add listings
- [ ] Check mobile responsiveness
- [ ] Set up SSL certificate (HTTPS)
- [ ] Configure custom domain
- [ ] Set up monitoring (e.g., Sentry)
- [ ] Enable analytics (e.g., Google Analytics)

## Troubleshooting

### CORS Errors
- Ensure backend `CORS_ORIGIN` matches frontend URL
- Check protocol (http vs https)

### API Not Found
- Verify `VITE_API_URL` is set correctly
- Check backend is running
- Verify API routes are correct

### Build Fails
- Clear node_modules and reinstall
- Check for missing dependencies
- Verify Node version compatibility
