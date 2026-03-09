# Portfolio Website Guide

## 🎨 Design Overview

This is a modern, professional developer portfolio with a clean dark theme designed specifically for recruiters and collaborators.

### Color Scheme
- **Background**: `#0f0f0f` (Very dark gray)
- **Text**: `white`
- **Accent**: `#3b82f6` (Professional blue)
- **Secondary backgrounds**: `rgba(255, 255, 255, 0.05)` (Subtle white overlay)

### Typography
- Clean, modern sans-serif fonts
- Proper hierarchy with large headings
- Readable body text with good spacing

## 📄 Sections

### 1. Navigation (Sticky Header)
- Smooth scroll to all sections
- Mobile-responsive hamburger menu
- Logo with accent color

### 2. Hero Section
- Large headline: "Code. Data. Intelligence."
- Name and title display
- 4 CTA buttons (Projects, GitHub, View Resume, Download Resume)
- Professional portrait image
- Social media links (GitHub, LinkedIn)

### 3. About Section
- Educational background
- CGPA display
- Interests and focus areas
- Location information
- Visual cards with icons

### 4. Skills Section
- 9 organized skill categories:
  - Programming Languages
  - Frontend
  - Backend
  - Databases
  - Machine Learning
  - Generative AI
  - Cloud & DevOps
  - Core CS
  - Tools
- Hover effects on cards
- Tags for each skill

### 5. Projects Section
- 9 featured projects
- Each with title, description, and tags
- Hover animations
- Professional card layout

### 6. Achievements & Certifications
- Split layout
- Awards section
- Certifications from Coursera/IBM
- Icon-based cards

### 7. GitHub Section
- Profile card with stats
- Top repositories showcase
- Programming language breakdown with progress bars
- Link to GitHub profile

### 8. Resume Section
- Toggle to view/hide resume preview
- Download button
- Resume highlights display
- Professional card layout

### 9. Terminal Section
- Interactive command-line interface
- Custom commands:
  - `help`, `about`, `skills`, `projects`
  - `resume`, `view-resume`, `download-resume`
  - `github`, `linkedin`, `contact`, `clear`
- Command history with arrow keys
- Authentic terminal styling

### 10. Contact Section
- Contact information with icons
- Email, phone, location
- Social media links
- Contact form (ready for backend integration)
- Hover animations

### 11. Footer
- Copyright notice
- "Back to top" button
- Minimal and clean

## 🎭 Animation Features

All sections use **Motion** (Framer Motion) for:
- Fade-in animations on scroll
- Slide-in effects
- Hover state transitions
- Smooth page scrolling
- Interactive elements

## 📱 Responsive Design

- **Desktop**: Full multi-column layouts
- **Tablet**: Adjusted grid layouts
- **Mobile**: Single column, stacked sections
- Mobile navigation menu
- Optimized images and spacing

## 🛠️ Interactive Features

1. **Smooth Scroll Navigation**: Click any nav link to smoothly scroll to section
2. **Terminal Interface**: Type commands to explore content
3. **Resume Toggle**: Show/hide resume preview
4. **Hover Effects**: Cards scale and change colors on hover
5. **Mobile Menu**: Hamburger menu for small screens

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## 📝 Customization Tips

### Update Personal Information
1. Edit `Hero.tsx` for name, title, headline
2. Edit `About.tsx` for bio and education
3. Edit `Contact.tsx` for contact details

### Add Projects
Edit the `projects` array in `Projects.tsx`:
```typescript
{
  title: 'Project Name',
  description: 'Project description',
  tags: ['Tag1', 'Tag2', 'Tag3'],
}
```

### Modify Skills
Edit the `skillCategories` array in `Skills.tsx`

### Change Colors
Search and replace:
- `#0f0f0f` → Your background color
- `#3b82f6` → Your accent color

### Add Resume
Place `Kavya_Mahantesh_Injineri_Resume.pdf` in `/public` folder

## 🎯 SEO & Performance

- Fast load times with Vite
- Optimized images from Unsplash
- Semantic HTML structure
- Accessible components
- Mobile-first approach

## 📦 Key Dependencies

- **React** - UI library
- **Motion** - Animations (Framer Motion)
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **TypeScript** - Type safety

## 🌐 Deployment

Build the project:
```bash
npm run build
```

The `dist` folder is ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 💡 Pro Tips

1. **Terminal Commands**: Try the terminal! It's fully functional
2. **Smooth Scrolling**: Navigation automatically scrolls smoothly
3. **Resume**: Remember to add your actual resume PDF
4. **Customization**: All content is in component files, easy to edit
5. **Responsive**: Test on different screen sizes

## 🎨 Design Philosophy

- **Minimal**: No clutter, focus on content
- **Professional**: Clean and recruiter-friendly
- **Interactive**: Subtle animations, not flashy
- **Clear**: Good spacing and hierarchy
- **Modern**: Contemporary design trends

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
