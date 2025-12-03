# Domain Setup Guide for HousingPlus

This guide will help you connect a custom domain to your verified-price booking platform.

---

## Prerequisites

Before you begin, you'll need:
- ✅ A registered domain name (e.g., `housingplus.com`)
- ✅ Access to your domain registrar's DNS settings
- ✅ Your application deployed on a hosting platform

---

## Step 1: Choose a Domain Name

### Recommended Domain Names:
- `housingplus.com` / `housingplus.in`
- `verifiedhomes.in`
- `trustedproperty.in`
- `reraverified.com`

### Where to Buy:
- **GoDaddy** - [godaddy.com](https://www.godaddy.com)
- **Namecheap** - [namecheap.com](https://www.namecheap.com)
- **Google Domains** - [domains.google.com](https://domains.google.com)
- **Hostinger** - [hostinger.in](https://www.hostinger.in) (India-focused)

**Cost**: ₹500-₹1,500/year for `.in` domains, ₹800-₹2,000/year for `.com`

---

## Step 2: Deploy Your Application

### Option A: Vercel (Recommended for Frontend)

**1. Install Vercel CLI:**
```bash
npm install -g vercel
```

**2. Deploy Frontend:**
```bash
cd client
vercel
```

**3. Follow prompts:**
- Link to your Vercel account
- Choose project name
- Accept default settings

**4. Get deployment URL:**
- You'll receive a URL like `housingplus.vercel.app`

**5. Add Custom Domain in Vercel:**
- Go to Vercel Dashboard → Your Project → Settings → Domains
- Add your custom domain (e.g., `housingplus.com`)
- Vercel will provide DNS records to add

### Option B: Netlify (Alternative for Frontend)

**1. Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

**2. Deploy:**
```bash
cd client
npm run build
netlify deploy --prod
```

**3. Add Custom Domain:**
- Netlify Dashboard → Domain Settings → Add custom domain
- Follow DNS configuration instructions

### Option C: Render (For Full Stack)

**1. Create account:** [render.com](https://render.com)

**2. Deploy Backend:**
- New → Web Service
- Connect GitHub repository
- Build command: `cd server && npm install`
- Start command: `cd server && npm start`
- Add environment variables from `.env`

**3. Deploy Frontend:**
- New → Static Site
- Build command: `cd client && npm run build`
- Publish directory: `client/dist`

**4. Add Custom Domain:**
- Service → Settings → Custom Domain
- Add your domain

---

## Step 3: Configure DNS Settings

### For Vercel/Netlify Deployment:

**A Record (for root domain):**
```
Type: A
Name: @
Value: [IP provided by hosting platform]
TTL: 3600
```

**CNAME Record (for www subdomain):**
```
Type: CNAME
Name: www
Value: [your-app].vercel.app (or netlify.app)
TTL: 3600
```

### Example DNS Configuration:

| Type  | Name | Value                    | TTL  |
|-------|------|--------------------------|------|
| A     | @    | 76.76.21.21             | 3600 |
| CNAME | www  | housingplus.vercel.app  | 3600 |

### Where to Add DNS Records:

**GoDaddy:**
1. Log in → My Products → Domain → DNS
2. Click "Add" to create new records

**Namecheap:**
1. Domain List → Manage → Advanced DNS
2. Add new records

**Cloudflare (Recommended for better performance):**
1. Add site to Cloudflare
2. Update nameservers at your registrar
3. Add DNS records in Cloudflare dashboard

---

## Step 4: Update Application URLs

### Update Frontend Environment Variables:

**`client/.env`:**
```env
VITE_API_URL=https://api.housingplus.com
```

### Update Backend CORS:

**`server/.env`:**
```env
CORS_ORIGIN=https://housingplus.com,https://www.housingplus.com
```

### Update Backend Code (if needed):

**`server/index.js`:**
```javascript
app.use(cors({
  origin: process.env.CORS_ORIGIN.split(',') || 'http://localhost:5173'
}));
```

---

## Step 5: SSL Certificate (HTTPS)

### Automatic SSL (Recommended):

**Vercel/Netlify:**
- SSL certificates are automatically provisioned
- No action needed - just wait 24-48 hours

**Cloudflare:**
- Free SSL included
- Enable "Full (strict)" SSL mode

### Manual SSL (if self-hosting):

**Using Let's Encrypt (Free):**
```bash
sudo apt-get install certbot
sudo certbot --nginx -d housingplus.com -d www.housingplus.com
```

---

## Step 6: Subdomain Setup (Optional)

### Common Subdomains:

**API Subdomain:**
```
Type: CNAME
Name: api
Value: [backend-deployment-url]
```

**Admin Panel:**
```
Type: CNAME
Name: admin
Value: [admin-deployment-url]
```

**Example Structure:**
- `housingplus.com` → Main website
- `api.housingplus.com` → Backend API
- `admin.housingplus.com` → Builder dashboard

---

## Step 7: Verification & Testing

### DNS Propagation Check:
1. Visit [dnschecker.org](https://dnschecker.org)
2. Enter your domain
3. Verify A and CNAME records are propagated globally

### Test Your Site:
- ✅ `http://housingplus.com` → Should redirect to HTTPS
- ✅ `https://housingplus.com` → Should load your site
- ✅ `https://www.housingplus.com` → Should work
- ✅ SSL certificate → Should show as valid

### Common Issues:

**"DNS_PROBE_FINISHED_NXDOMAIN":**
- DNS not propagated yet (wait 24-48 hours)
- Incorrect DNS records

**"Your connection is not private":**
- SSL certificate not issued yet
- Wait or check SSL configuration

**CORS errors:**
- Update `CORS_ORIGIN` in backend
- Redeploy backend

---

## Step 8: SEO & Analytics Setup

### Update Meta Tags:

**`client/index.html`:**
```html
<head>
  <title>HousingPlus - Verified Price Home Booking Platform</title>
  <meta name="description" content="Buy homes with verified prices, zero brokerage, and full transparency. Pay ₹199 to unlock real prices.">
  <link rel="canonical" href="https://housingplus.com">
</head>
```

### Add Google Analytics:
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to your site

### Submit to Google:
1. [Google Search Console](https://search.google.com/search-console)
2. Add property with your domain
3. Verify ownership
4. Submit sitemap

---

## Deployment Checklist

- [ ] Domain purchased and registered
- [ ] Frontend deployed to hosting platform
- [ ] Backend deployed to hosting platform
- [ ] DNS A record configured
- [ ] DNS CNAME record configured
- [ ] SSL certificate issued (HTTPS working)
- [ ] Environment variables updated
- [ ] CORS configured for new domain
- [ ] DNS propagation verified
- [ ] Site accessible via custom domain
- [ ] www subdomain working
- [ ] Google Analytics added
- [ ] Google Search Console verified

---

## Quick Start (Vercel + GoDaddy Example)

**1. Buy domain on GoDaddy:**
```
housingplus.com - ₹999/year
```

**2. Deploy to Vercel:**
```bash
cd client
vercel --prod
```

**3. Add domain in Vercel:**
- Dashboard → Settings → Domains → Add `housingplus.com`

**4. Update GoDaddy DNS:**
```
A Record: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

**5. Wait 24-48 hours for DNS propagation**

**6. Done!** Your site is live at `https://housingplus.com`

---

## Cost Estimate

| Item | Cost (Annual) |
|------|---------------|
| Domain (.in) | ₹500-₹1,500 |
| Vercel (Hobby) | Free |
| Render (Free tier) | Free |
| MongoDB Atlas | Free (512MB) |
| **Total** | **₹500-₹1,500/year** |

### Paid Upgrades (Optional):
- Vercel Pro: $20/month (better performance)
- Render Starter: $7/month (dedicated resources)
- Cloudflare Pro: $20/month (advanced security)

---

## Need Help?

**Common Questions:**

**Q: How long does DNS propagation take?**
A: Usually 1-24 hours, max 48 hours globally.

**Q: Can I use a free domain?**
A: Free domains (like `.tk`, `.ml`) are not recommended for business use.

**Q: Do I need a separate domain for API?**
A: Not required, but recommended for better organization (`api.housingplus.com`).

**Q: What if I already have a domain?**
A: Just skip Step 1 and proceed with DNS configuration.

---

## Next Steps

Once your domain is live:
1. Update all marketing materials with new domain
2. Set up email forwarding (e.g., `info@housingplus.com`)
3. Create social media accounts with matching handle
4. Submit to property listing directories
5. Start SEO optimization

Your verified-price booking platform will be live at your custom domain! 🚀
