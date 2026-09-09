# Portfolio Website Testing Checklist

## ✅ Responsive Design Testing

### Desktop (1440px+)
- [ ] Navbar displays horizontally with all links visible
- [ ] Hero section has large typography and proper spacing
- [ ] About section displays information cards in 2-column grid
- [ ] Skills cards display in 3-column grid
- [ ] Projects display in proper grid layout
- [ ] All sections have appropriate padding
- [ ] Certificate viewer modal centers properly

### Tablet (768px - 1024px)
- [ ] Navbar adapts with proper spacing
- [ ] Hero typography scales appropriately
- [ ] Skills grid adapts to 2 columns
- [ ] Projects stack or adapt grid
- [ ] All cards remain readable and well-spaced
- [ ] Mobile menu works if viewport is narrow enough

### Mobile (320px - 767px)
- [ ] Hamburger menu displays and functions
- [ ] Hero section stacks vertically
- [ ] All text remains readable (no overflow)
- [ ] Buttons are touch-friendly (min 44px height)
- [ ] Skills display in single column
- [ ] Projects stack vertically
- [ ] Certificate viewer is fully visible and scrollable
- [ ] No horizontal scrolling

## ✅ Navigation & Links

### Internal Navigation (Smooth Scroll)
- [ ] About link scrolls to About section
- [ ] Skills link scrolls to Skills section
- [ ] Projects link scrolls to Projects section
- [ ] Experience link scrolls to Experience section
- [ ] Achievements link scrolls to Achievements section
- [ ] Contact link scrolls to Contact section
- [ ] "Let's Connect" button scrolls to Contact
- [ ] "View My Work" button scrolls to Projects
- [ ] Logo/name link scrolls to top

### External Links
- [ ] Email: marshisadha@gmail.com (opens email client)
- [ ] GitHub: https://github.com/Sadhamarshi (opens in new tab)
- [ ] LinkedIn: https://www.linkedin.com/in/sadhamarshirb03/ (opens in new tab)
- [ ] Project 1 GitHub: https://github.com/Sadhamarshi/Retinal_Disease_Detection
- [ ] Project 2 GitHub: https://github.com/Sadhamarshi/student-examination-system
- [ ] Certificate verification: https://courses.cognitiveclass.ai/certificates/48e5e46fd1064b89a8c161528bc97bbc

### Navbar Behavior
- [ ] Navbar is transparent on hero section
- [ ] Navbar becomes solid with backdrop blur on scroll
- [ ] Mobile menu opens and closes properly
- [ ] Mobile menu closes when link is clicked
- [ ] Active link states work correctly

## ✅ Animations & Interactions

### Page Load
- [ ] Hero section fades in smoothly
- [ ] Scroll indicator animates (bounce)
- [ ] Status badge pulse animation works

### Hover Effects
- [ ] All buttons have hover states with color change
- [ ] All buttons have active state (scale down)
- [ ] Card hover effects work (lift and shadow)
- [ ] Link hover effects change color to accent
- [ ] Social icons change color on hover
- [ ] Project cards highlight on hover
- [ ] Skill tags highlight on hover

### Transitions
- [ ] All transitions are smooth (300ms duration)
- [ ] No janky animations
- [ ] Scroll behavior is smooth
- [ ] Modal open/close transitions work

## ✅ Certificate Viewer Modal

### Functionality
- [ ] Modal opens when clicking achievement card
- [ ] Modal displays certificate information
- [ ] Modal shows certificate image (if provided)
- [ ] Fallback message displays if image missing
- [ ] Close button works
- [ ] Clicking outside modal closes it
- [ ] Escape key closes modal
- [ ] Background scrolling is disabled when modal is open
- [ ] Background scrolling resumes when modal closes

### Responsive
- [ ] Modal is centered on desktop
- [ ] Modal fits screen on mobile
- [ ] Modal content is scrollable if needed
- [ ] Close button always visible

## ✅ Content Verification

### Personal Information
- [ ] Name: Sadhamarshi R B
- [ ] Title: AI & Data Science
- [ ] Subtitle: Machine Learning • Data Analytics • Artificial Intelligence
- [ ] Email: marshisadha@gmail.com
- [ ] Status: OPEN TO OPPORTUNITIES

### Education
- [ ] B.Tech - AI & Data Science, DSU, CGPA 8.30, 2026
- [ ] Class XII - R.S.K. HSS, 89%, 2021
- [ ] Class X - R.S.K. HSS, 91%, 2019

### Experience
- [ ] Gradtwin Services - Data Science Trainee
- [ ] Duration: July 2025 – October 2025
- [ ] Description is accurate and complete

### Projects
- [ ] Only 2 projects displayed (no fake projects)
- [ ] Retinal Disease Detection project
- [ ] Student Examination System project
- [ ] Both have correct GitHub links
- [ ] No EmotionWeaver, TranscriptoBot, or other projects listed

### Skills
- [ ] Programming & Data: Python, SQL
- [ ] Libraries: NumPy, Pandas, Matplotlib, Scikit-learn
- [ ] Data Visualization: Power BI
- [ ] AI/ML: 6 skills listed correctly
- [ ] Core Strengths: 5 skills listed
- [ ] No fake proficiency percentages

### Achievements
- [ ] Best Paper Award MESMT 2026
- [ ] Paper title correct
- [ ] Conference name correct
- [ ] Date: March 21–22, 2026

### Certifications
- [ ] 7 featured certifications displayed
- [ ] Prompt Engineering has verification link
- [ ] No fake verification links
- [ ] Workshop certificates in collapsible section
- [ ] 3 workshops listed

## ✅ Accessibility

### Keyboard Navigation
- [ ] Tab key navigates through all interactive elements
- [ ] Focus states are visible
- [ ] Enter key activates buttons and links
- [ ] Escape key closes modal
- [ ] No keyboard traps

### Screen Reader
- [ ] All images have alt text
- [ ] Buttons have aria-labels where needed
- [ ] Modal has proper ARIA attributes
- [ ] Heading hierarchy is correct (h1 → h2 → h3)
- [ ] Links indicate they open in new tab

### Visual
- [ ] Text has sufficient color contrast
- [ ] Focus indicators are visible
- [ ] No information conveyed by color alone
- [ ] Text is readable at all sizes

## ✅ Performance

### Loading
- [ ] Page loads quickly
- [ ] No console errors
- [ ] No console warnings (or minimal)
- [ ] Fonts load properly
- [ ] Images load or show fallback

### Interaction
- [ ] Smooth scrolling works
- [ ] No lag on hover effects
- [ ] No layout shifts
- [ ] Modal opens/closes smoothly
- [ ] Mobile menu animates smoothly

## ✅ Browser Testing

### Chrome/Edge
- [ ] All features work
- [ ] No console errors
- [ ] Smooth scrolling works

### Firefox
- [ ] All features work
- [ ] Smooth scrolling works

### Safari (if available)
- [ ] All features work
- [ ] Animations work properly

## ✅ Design Quality

### Typography
- [ ] Hierarchy is clear
- [ ] Font sizes are appropriate
- [ ] Line height is comfortable
- [ ] Letter spacing is correct
- [ ] No text overflow

### Spacing
- [ ] Sections have generous padding
- [ ] Cards have consistent spacing
- [ ] Content doesn't feel cramped
- [ ] White space is well-utilized

### Colors
- [ ] Dark theme is consistent
- [ ] Accent color used appropriately
- [ ] Text is readable on backgrounds
- [ ] Border colors are subtle
- [ ] Glow effects are subtle

### Visual Polish
- [ ] Cards have rounded corners
- [ ] Borders are subtle and elegant
- [ ] Shadows are appropriate
- [ ] No visual bugs
- [ ] Professional appearance

## 🎯 Final Checks

- [ ] No placeholder text (no "Lorem ipsum")
- [ ] No broken images
- [ ] No broken links
- [ ] No console errors
- [ ] README is complete
- [ ] Certificate folder instructions are clear
- [ ] All information is authentic
- [ ] Website feels premium and professional
- [ ] Website is ready for production

## 📝 Notes

### Known Requirements
1. User needs to add certificate image: `/public/certificates/best-paper-award.jpg`
2. All information is authentic and verified
3. Only GitHub-verified projects are displayed
4. No invented content or claims

### Tested On
- Date: _____________
- Device: _____________
- Browser: _____________
- Resolution: _____________
- Result: _____________
