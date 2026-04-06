# Kavya Mahantesh Injineri - Developer Portfolio

A modern, clean, and professional developer portfolio website showcasing my work as a Machine Learning Engineer and Full Stack Developer.

## Features

- **Modern Dark Theme** - Professional dark design with #0f0f0f background and #3b82f6 accent
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Subtle Motion animations for enhanced user experience
- **Interactive Terminal** - Developer-style terminal interface with custom commands
- **Project Showcase** - Highlighting 9+ ML/AI and full-stack projects
- **Skills Section** - Organized technical skills by category
- **GitHub Integration** - Display of GitHub profile and repositories
- **Resume Viewer** - Embedded PDF viewer and download functionality
- **Contact Form** - Professional contact section with social links

## Technologies Used

- **React** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Motion (Framer Motion)** - Animation library
- **Lucide React** - Icon library
- **Vite** - Fast build tool

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start on `http://localhost:5173`

### Build

```bash
npm run build
```

## Project Structure

```
/src
  /app
    /components
      - Navigation.tsx      # Sticky navigation bar
      - Hero.tsx           # Hero section with CTA
      - About.tsx          # About section
      - Skills.tsx         # Technical skills
      - Projects.tsx       # Featured projects
      - Achievements.tsx   # Awards and certifications
      - GitHub.tsx         # GitHub profile section
      - Resume.tsx         # Resume viewer
      - Terminal.tsx       # Interactive terminal
      - Contact.tsx        # Contact form
      - Footer.tsx         # Footer section
    - App.tsx             # Main app component
  /styles
    - index.css           # Global styles
    - theme.css           # Theme variables
    - fonts.css           # Font imports
```

## Resume Setup

To enable resume viewing and downloading:

1. Place your resume PDF in the `/public` folder
2. Name it: `Kavya_Mahantesh_Injineri_Resume.pdf`

The resume buttons will automatically link to this file.

## Terminal Commands

The interactive terminal supports the following commands:

- `help` - Show available commands
- `about` - Display information about Kavya
- `skills` - List technical skills
- `projects` - Show project list
- `resume` - Display resume information
- `view-resume` - Navigate to resume section
- `download-resume` - Download resume PDF
- `github` - Show GitHub profile
- `linkedin` - Show LinkedIn profile
- `contact` - Display contact information
- `clear` - Clear terminal output

## Customization

### Colors

The portfolio uses a consistent color scheme:
- Background: `#0f0f0f`
- Text: `white`
- Accent: `#3b82f6`

To change colors, update the corresponding values in components.

### Content

All content is defined within the component files. Update the data arrays and text strings to customize:

- Personal information in `Hero.tsx` and `About.tsx`
- Skills in `Skills.tsx`
- Projects in `Projects.tsx`
- Achievements in `Achievements.tsx`
- Terminal commands in `Terminal.tsx`
- Contact details in `Contact.tsx`

## Contact

- **Email**: kavyainjineri@gmail.com
- **Phone**: +91 9019709952
- **Location**: Mysuru, Karnataka, India
- **GitHub**: [Kavya-M-Injineri](https://github.com/Kavya-M-Injineri)
- **LinkedIn**: [Kavya Injineri](https://linkedin.com/in/kavya-injineri-4a54532b7)

## License

© 2026 Kavya Mahantesh Injineri. All rights reserved.
