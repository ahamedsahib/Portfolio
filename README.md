# Modern Portfolio Website

A stunning, modern portfolio website built with **Next.js 15**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **shadcn/ui**.

## Features

- **Modern Design**: Clean, professional design with beautiful animations
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Scrolling**: Lenis-powered buttery smooth scrolling experience
- **Cool Animations**:
  - Framer Motion for UI animations and page transitions
  - GSAP for complex, professional animations
  - Scroll-triggered animations
  - Hover effects and micro-interactions
- **Fully Responsive**: Looks great on all devices
- **Type-Safe**: Built with TypeScript
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Friendly**: Proper meta tags and semantic HTML

## Sections

1. **Hero** - Eye-catching landing with animated text and floating backgrounds
2. **About** - Introduction with features and stats
3. **Experience** - Timeline view of work history
4. **Skills** - Interactive skill cards with progress bars
5. **Projects** - Filterable project gallery
6. **Blog** - Latest articles and posts
7. **Contact** - Form with validation

## Getting Started

### Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### 1. Personal Information

**Update Your Name and Title:**
- Hero Section: `components/sections/hero.tsx`
- Footer: `components/footer.tsx`
- About Section: `components/sections/about.tsx`

**Update Contact Information:**
- Contact Section: `components/sections/contact.tsx`
- Footer: `components/footer.tsx`

### 2. Work Experience

Edit `components/sections/experience.tsx`:
```typescript
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "Start - End Date",
    description: "Brief description...",
    achievements: ["Achievement 1", "Achievement 2"],
    technologies: ["Tech1", "Tech2"],
  },
]
```

### 3. Skills

Update `components/sections/skills.tsx`:
```typescript
const skillCategories = {
  frontend: [
    { name: "React", level: 95, icon: "⚛️" },
  ],
}
```

### 4. Projects

Edit `components/sections/projects.tsx`:
```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/username/repo",
    live: "https://live-demo.com",
    featured: true,
  },
]
```

### 5. Social Links

Update social links in:
- `components/sections/hero.tsx`
- `components/footer.tsx`

### 6. Theme Colors

Edit `app/globals.css` to customize colors (lines 46-113)

### 7. SEO

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name | Frontend Developer",
  description: "Your professional description",
}
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **GSAP** - Professional animations
- **shadcn/ui** - UI components
- **Lenis** - Smooth scrolling
- **React Hook Form** - Form handling
- **Zod** - Form validation

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy to **Vercel** (recommended):
```bash
vercel deploy
```

Or deploy to Netlify, GitHub Pages, or any hosting platform.

---

Built with Next.js and modern web technologies
