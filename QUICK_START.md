# 🚀 Quick Start Guide

Get your portfolio running in 3 minutes!

## ⚡ Step 1: View Your Portfolio (NOW)

Your development server is already running!

**Open your browser and visit:**
```
http://localhost:5174
```

You should see your portfolio website live! 🎉

---

## 📸 Step 2: Add Your Certificate (REQUIRED)

Before deploying, add your Best Paper Award certificate:

1. **Find your certificate file** (scan or take a high-quality photo)
2. **Name it:** `best-paper-award.jpg`
3. **Place it in:** `public/certificates/` folder
4. **Refresh browser** - certificate viewer will now show your award!

> **Tip:** Compress the image if it's larger than 2MB. Use tools like [TinyJPG](https://tinyjpg.com/) or [Squoosh](https://squoosh.app/)

---

## ✏️ Step 3: Update Content (OPTIONAL)

All content is in one file: `src/data/portfolioData.js`

**Common updates:**

### Change Status Badge
```javascript
status: "OPEN TO OPPORTUNITIES"  // or "AVAILABLE FOR HIRE"
```

### Add a New Project
```javascript
projects: [
  // ... existing projects
  {
    id: "03",
    title: "Your New Project",
    description: "What it does...",
    technologies: ["Python", "TensorFlow"],
    github: "https://github.com/Sadhamarshi/repo-name",
    featured: false,
  },
]
```

### Add a Skill
```javascript
"AI / ML": [
  "Machine Learning",
  "NLP",
  "Your New Skill",  // ← Add here
],
```

**Save the file** - your browser will auto-refresh!

---

## 🌐 Step 4: Deploy (When Ready)

### Fastest Way: Vercel

1. **Create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "My portfolio"
   git branch -M main
   git remote add origin https://github.com/Sadhamarshi/Portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Import Project"
   - Select your Portfolio repository
   - Click "Deploy" (Vercel auto-detects everything!)

3. **Your site is live!** 🎉
   - You'll get a URL like: `your-portfolio.vercel.app`
   - Share it on LinkedIn, resume, email signature

**Full deployment guide:** See `DEPLOYMENT_GUIDE.md`

---

## 📱 Step 5: Test on Mobile

1. **Find your local IP:**
   ```bash
   # In your terminal, press Ctrl+C to stop server
   npm run dev -- --host
   # You'll see a Network URL like: http://192.168.x.x:5174
   ```

2. **Open that URL on your phone** (same WiFi network)
3. **Test navigation, links, and certificate viewer**

---

## ✅ Pre-Launch Checklist

Before sharing your portfolio:

- [ ] Certificate image added to `public/certificates/`
- [ ] All information is accurate
- [ ] Tested on desktop browser
- [ ] Tested on mobile device
- [ ] All links work (click each one!)
- [ ] Certificate viewer opens and closes properly
- [ ] Email link opens email client
- [ ] GitHub profile link works
- [ ] LinkedIn profile link works
- [ ] Both project GitHub links work

---

## 🆘 Troubleshooting

### Server not running?
```bash
npm run dev
```

### Port already in use?
The server will automatically try another port (like 5174, 5175, etc.)

### Changes not showing?
- Save your file
- Check browser auto-refreshed
- Try manual refresh (Ctrl+R or Cmd+R)
- Check terminal for errors

### Certificate not showing?
- Verify file is named exactly: `best-paper-award.jpg`
- Check it's in: `public/certificates/`
- Image formats supported: JPG, PNG
- Try refreshing the page

### Build errors?
```bash
npm install  # Reinstall dependencies
npm run dev  # Restart server
```

---

## 📚 Need More Help?

**Documentation files:**
- `README.md` - Complete project overview
- `CUSTOMIZATION_GUIDE.md` - How to update content and design
- `DEPLOYMENT_GUIDE.md` - Detailed deployment steps
- `TESTING_CHECKLIST.md` - Comprehensive testing guide
- `PROJECT_SUMMARY.md` - Full project details

---

## 💡 Pro Tips

1. **Update regularly** - Add projects as you build them
2. **Keep it real** - Only add actual projects and skills
3. **Test on mobile** - Many recruiters browse on phones
4. **Share everywhere** - LinkedIn, resume, email signature, GitHub profile
5. **Monitor analytics** - Add Google Analytics to see visitors

---

## 🎯 What's Next?

1. ✅ Portfolio running locally
2. ✅ Add certificate image
3. ✅ Test everything works
4. 🚀 Deploy to Vercel
5. 📱 Share on LinkedIn
6. 💼 Add to resume
7. 📧 Update email signature
8. 🎉 Start getting opportunities!

---

## 🎨 Quick Customization

### Change Accent Color

Edit `tailwind.config.js`:
```javascript
accent: {
  DEFAULT: '#3B82F6',  // Change this color code
  hover: '#2563EB',    // Slightly darker version
  glow: 'rgba(59, 130, 246, 0.3)',  // Same color with transparency
}
```

Popular colors:
- Blue: `#3B82F6`
- Green: `#10B981`
- Purple: `#8B5CF6`
- Cyan: `#06B6D4`
- Pink: `#EC4899`

Save and your site updates instantly!

---

**Your portfolio is ready to impress! 🚀**

Good luck with your job search in AI & Data Science!

---

## ⌨️ Essential Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Stop server
Ctrl + C (in terminal)
```

---

**Questions?** Check the other documentation files or review the code comments.
