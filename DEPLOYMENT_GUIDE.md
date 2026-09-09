# Portfolio Website Deployment Guide

## 📋 Pre-Deployment Checklist

Before deploying your portfolio, complete these steps:

### 1. Add Certificate Image
```bash
# Place your Best Paper Award certificate in the certificates folder
# File: public/certificates/best-paper-award.jpg
```

### 2. Test Locally
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:5174 (or the port shown)
# Test all links, navigation, and mobile responsiveness
```

### 3. Build for Production
```bash
# Create production build
npm run build

# Test production build locally
npm run preview
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel:**
- Free hosting for personal projects
- Automatic deployments from GitHub
- Global CDN
- HTTPS by default
- Zero configuration needed

**Steps:**

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: Production-ready portfolio"
git branch -M main
git remote add origin https://github.com/Sadhamarshi/Portfolio.git
git push -u origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your Portfolio repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"
   - Your site will be live at `your-portfolio.vercel.app`

3. **Custom Domain (Optional):**
   - Buy a domain (e.g., sadhamarshi.com)
   - Add it in Vercel project settings
   - Update DNS records as instructed

### Option 2: Netlify

**Steps:**

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Click "Add new site" → "Import from Git"
   - Choose your repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json:**
```json
{
  "homepage": "https://sadhamarshi.github.io/Portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
```

4. **Deploy:**
```bash
npm run deploy
```

5. **Enable GitHub Pages:**
   - Go to repository settings
   - Pages section
   - Source: gh-pages branch
   - Save

### Option 4: Self-Hosting

**Requirements:**
- Web server (Apache/Nginx)
- Domain name
- SSL certificate

**Steps:**

1. **Build:**
```bash
npm run build
```

2. **Upload dist folder contents to your web server**

3. **Configure web server:**
   - Point to the uploaded files
   - Enable HTTPS
   - Configure redirects if needed

## 🔧 Environment Configuration

### For Custom API Keys or Secrets

If you add any API integrations in the future:

1. **Create `.env` file:**
```
VITE_API_KEY=your_api_key_here
```

2. **Add to `.gitignore`:**
```
.env
.env.local
```

3. **Use in code:**
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

4. **Add to deployment platform:**
   - Vercel: Settings → Environment Variables
   - Netlify: Site settings → Environment variables

## 📊 Analytics (Optional)

### Google Analytics

1. **Get tracking ID** from Google Analytics

2. **Add to index.html** before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 Continuous Deployment

### Automatic Updates with Vercel/Netlify

Once connected to GitHub:
1. Make changes locally
2. Commit and push to GitHub
3. Site automatically rebuilds and deploys
4. Changes live in 1-2 minutes

## 📱 Post-Deployment Testing

After deployment, test:

- [ ] All links work (email, GitHub, LinkedIn)
- [ ] Projects link to correct repositories
- [ ] Certificate verification link works
- [ ] Mobile responsive design works
- [ ] All images load
- [ ] Smooth scrolling functions
- [ ] Certificate modal works
- [ ] No console errors
- [ ] HTTPS is enabled
- [ ] Site loads quickly

## 🌐 Share Your Portfolio

Once deployed, share your portfolio link:

1. **Update LinkedIn:**
   - Add portfolio URL to profile
   - Update "Featured" section

2. **Update GitHub Profile:**
   - Pin the Portfolio repository
   - Add website URL to repository
   - Update GitHub profile README

3. **Update Resume:**
   - Add portfolio link
   - Include as "Portfolio" or "Projects" section

4. **Email Signature:**
   - Add portfolio link

## 🔐 Security Best Practices

- Never commit sensitive information
- Keep dependencies updated: `npm audit`
- Use environment variables for secrets
- Enable HTTPS (automatic with Vercel/Netlify)
- Add security headers (handled by platforms)

## 📈 Monitoring & Maintenance

### Regular Updates

1. **Update Dependencies:**
```bash
npm update
npm audit fix
```

2. **Add New Projects:**
   - Edit `src/data/portfolioData.js`
   - Add to `projects` array
   - Commit and push

3. **Update Skills:**
   - Edit `src/data/portfolioData.js`
   - Modify `skills` object
   - Commit and push

4. **Add Certifications:**
   - Edit `src/data/portfolioData.js`
   - Add to `certifications` array
   - Include verification URL if available

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues
- Check build logs in platform dashboard
- Verify environment variables
- Ensure `dist` folder is generated

### Styling Issues
- Clear browser cache
- Check if Tailwind CSS is building
- Verify PostCSS configuration

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev
- **Tailwind CSS Docs:** https://tailwindcss.com

---

## Quick Deploy Command Reference

```bash
# Local Development
npm run dev

# Production Build
npm run build

# Preview Production Build
npm run preview

# Deploy to Vercel (after installing Vercel CLI)
vercel --prod

# Deploy to Netlify (after installing Netlify CLI)
netlify deploy --prod
```

---

**Your portfolio is ready for the world! 🎉**

Good luck with your job search and career in AI & Data Science!
