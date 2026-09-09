# Portfolio Customization Guide

This guide will help you customize and update your portfolio as your career progresses.

## 📝 Updating Content

All portfolio content is centralized in `src/data/portfolioData.js` for easy updates.

### Adding New Projects

```javascript
// In src/data/portfolioData.js, add to the projects array:

export const projects = [
  // ... existing projects
  {
    id: "03", // Increment number
    title: "Your New Project Name",
    description: "Clear description of what your project does and its impact.",
    technologies: ["Python", "TensorFlow", "Flask"], // List actual technologies
    github: "https://github.com/Sadhamarshi/your-repo-name",
    featured: true, // Set to true for large card, false for small
  },
];
```

**Important:** Only add projects that exist in your GitHub!

### Adding New Skills

```javascript
// Update the skills object:

export const skills = {
  "Programming & Data": ["Python", "SQL", "R"], // Add new languages
  "Libraries": ["NumPy", "Pandas", "TensorFlow"], // Add new libraries
  "AI / ML": [
    "Machine Learning",
    "Deep Learning", // Add new skill
    "Computer Vision", // Add new skill
  ],
};
```

### Adding New Experience

```javascript
// Add to the experience array:

export const experience = [
  {
    company: "Company Name, Location",
    role: "Your Job Title",
    duration: "Start Date – End Date",
    description: "Detailed description of your responsibilities and achievements. Focus on impact and specific technologies used.",
  },
  // ... previous experiences
];
```

### Adding New Certifications

```javascript
// Add to the certifications array:

export const certifications = [
  // ... existing certs
  {
    id: 8, // Increment ID
    title: "Certification Name",
    issuer: "Issuing Organization",
    date: "Completion Date",
    verifyUrl: "https://verify-link.com/your-cert", // Optional
    featured: true,
  },
];
```

### Adding New Achievements

```javascript
// Add to the achievements array:

export const achievements = [
  // ... existing achievements
  {
    title: "AWARD NAME",
    subtitle: "Event/Conference Name",
    paper: "Your paper or project title",
    award: "Award name",
    conference: "Full conference/event name",
    date: "Award date",
    certificateImage: "/certificates/your-cert-name.jpg",
  },
];
```

Don't forget to add the certificate image to `public/certificates/`!

### Updating Personal Information

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Primary Title",
  subtitle: "Specialization • Skills • Focus Areas",
  description: "Your professional summary (2-3 sentences)",
  status: "OPEN TO OPPORTUNITIES", // or "CURRENTLY EMPLOYED", etc.
  email: "your.email@domain.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourprofile/",
};
```

## 🎨 Customizing Design

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      // Main background
      dark: {
        DEFAULT: '#030202', // Change main background
        100: '#0a0909',
        200: '#121111',
      },
      
      // Accent color (buttons, highlights)
      accent: {
        DEFAULT: '#F73B0B', // Change to your preferred accent
        hover: '#ff4d1a',
        glow: 'rgba(247, 59, 11, 0.3)',
      },
      
      // Text colors
      light: {
        DEFAULT: '#E4E4E1', // Main text color
        muted: '#b8b7b5',   // Secondary text
      }
    }
  }
}
```

**Popular color schemes:**

```javascript
// Blue accent
accent: { DEFAULT: '#3B82F6', hover: '#2563EB', glow: 'rgba(59, 130, 246, 0.3)' }

// Green accent
accent: { DEFAULT: '#10B981', hover: '#059669', glow: 'rgba(16, 185, 129, 0.3)' }

// Purple accent
accent: { DEFAULT: '#8B5CF6', hover: '#7C3AED', glow: 'rgba(139, 92, 246, 0.3)' }

// Cyan accent
accent: { DEFAULT: '#06B6D4', hover: '#0891B2', glow: 'rgba(6, 182, 212, 0.3)' }
```

### Changing Fonts

Edit the Google Fonts import in `src/index.css`:

```css
/* Replace with your preferred fonts */
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@weights&display=swap');
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  display: ['Your Display Font', 'sans-serif'],
}
```

### Adjusting Spacing

In `src/index.css`, modify section padding:

```css
.section-padding {
  /* Increase/decrease padding */
  @apply py-20 md:py-28 lg:py-36; /* Larger */
  /* or */
  @apply py-12 md:py-16 lg:py-20; /* Smaller */
}
```

### Modifying Animations

In `tailwind.config.js`, adjust animation timings:

```javascript
animation: {
  'fade-in': 'fadeIn 0.8s ease-out', // Slower
  'fade-in-up': 'fadeInUp 0.8s ease-out',
  'glow': 'glow 3s ease-in-out infinite alternate', // Slower glow
}
```

## 🖼️ Adding Images

### Profile Picture (Optional)

1. Add image to `public/` folder: `profile.jpg`
2. Import in Hero component:
```jsx
<img 
  src="/profile.jpg" 
  alt="Sadhamarshi R B"
  className="w-48 h-48 rounded-full border-4 border-accent/30"
/>
```

### Project Screenshots

1. Add images to `public/projects/`
2. Update project data:
```javascript
{
  id: "01",
  title: "Project Name",
  image: "/projects/project-screenshot.jpg",
  // ... rest of data
}
```

3. Display in ProjectCard component:
```jsx
{project.image && (
  <img 
    src={project.image} 
    alt={project.title}
    className="w-full h-48 object-cover rounded-lg"
  />
)}
```

## 📱 Adding New Sections

### Creating a New Section

1. **Create component** in `src/components/`:

```jsx
// src/components/Publications.jsx
const Publications = () => {
  return (
    <section id="publications" className="section-padding bg-dark-100">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold font-display heading-gradient mb-6">
          Publications
        </h2>
        {/* Your content */}
      </div>
    </section>
  );
};

export default Publications;
```

2. **Add data** in `src/data/portfolioData.js`:

```javascript
export const publications = [
  {
    title: "Paper Title",
    journal: "Journal Name",
    date: "2026",
    link: "https://doi.org/your-paper",
  },
];
```

3. **Import in App.jsx**:

```jsx
import Publications from './components/Publications';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* ... other sections ... */}
      <Publications /> {/* Add here */}
      <Contact />
      <Footer />
    </div>
  );
}
```

4. **Add to navigation** in `src/components/Navbar.jsx`:

```javascript
const navLinks = [
  // ... existing links
  { name: 'Publications', href: '#publications' },
];
```

## 🔧 Advanced Customizations

### Adding Contact Form

Consider using:
- [Formspree](https://formspree.io/) - Easy form backend
- [Web3Forms](https://web3forms.com/) - No backend needed
- [EmailJS](https://www.emailjs.com/) - Send emails from JavaScript

Example with Web3Forms:

```jsx
// In Contact.jsx
const [formData, setFormData] = useState({ name: '', email: '', message: '' });

const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: 'YOUR_ACCESS_KEY',
      ...formData,
    }),
  });
  // Handle response
};
```

### Adding Blog Section

If you start writing technical blogs:

1. Create a `Blog.jsx` component
2. Link to external blog (Medium, Dev.to) or
3. Use Markdown files and a library like `react-markdown`

### Adding Dark/Light Mode Toggle

```jsx
// Create theme context
const [theme, setTheme] = useState('dark');

// Toggle function
const toggleTheme = () => {
  setTheme(theme === 'dark' ? 'light' : 'dark');
};

// Update HTML class
useEffect(() => {
  document.documentElement.classList.toggle('light', theme === 'light');
}, [theme]);
```

Then define light mode colors in Tailwind config.

## 📊 Adding Analytics

See `DEPLOYMENT_GUIDE.md` for Google Analytics setup.

For more detailed analytics, consider:
- [Plausible](https://plausible.io/) - Privacy-friendly
- [Umami](https://umami.is/) - Self-hosted
- [Vercel Analytics](https://vercel.com/analytics) - Built-in if using Vercel

## 🚨 Common Mistakes to Avoid

1. **Don't add fake projects** - Only add projects in your GitHub
2. **Don't use placeholder text** - Replace all content with real information
3. **Don't add broken links** - Test all URLs before committing
4. **Don't overuse animations** - Keep it subtle and professional
5. **Don't forget to optimize images** - Compress before adding
6. **Don't skip testing** - Test on mobile before deploying

## 🔄 Keeping Content Updated

**Monthly:**
- [ ] Add any new projects
- [ ] Update skills if you learned something new
- [ ] Add new certifications

**When Job Searching:**
- [ ] Update status to "OPEN TO OPPORTUNITIES"
- [ ] Highlight most relevant projects
- [ ] Add recent achievements

**When Employed:**
- [ ] Update status
- [ ] Add work experience
- [ ] Keep projects section current

## 📚 Resources

- **React Documentation:** https://react.dev
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Vite Guide:** https://vitejs.dev/guide/
- **MDN Web Docs:** https://developer.mozilla.org

## 🆘 Getting Help

If you encounter issues:

1. Check the browser console for errors
2. Review the component where the issue occurs
3. Verify data in `portfolioData.js` is correctly formatted
4. Test in development mode: `npm run dev`
5. Check GitHub Issues for the project (if repository is public)

---

**Remember:** Your portfolio is a living document. Keep it updated as you grow in your career!
