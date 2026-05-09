# ⚔️ Nightfall Arena

**Nightfall Arena** is a premium, cinematic dark fantasy MOBA landing page built with the latest web technologies. It features a stunning, high-performance UI designed to immerse players in the "Eclipse Fold" world.

![Nightfall Arena Preview](https://github.com/mutlukurt/nightfall-arena/raw/main/public/images/preview.png)

## 🚀 Live Demo
[View Live Site](https://nightfall-arena.vercel.app) *(Placeholder)*

## ✨ Key Features

- **Cinematic Hero Section**: High-impact visuals with dynamic text animations and parallax-ready character depth.
- **Integrated Video Trailer**: A custom-built modal system that supports both high-quality YouTube embeds and local cinematic video files (.mov, .webm).
- **Responsive Premium Design**: Fully optimized for mobile, tablet, and desktop with a focus on dark mode aesthetics and "glassmorphism" effects.
- **High-Performance Transitions**: Smooth navbar transitions using `backdrop-blur` and optimized state management to prevent flickering.
- **Dynamic News & Heroes Sections**: Grid-based layouts showcasing game content with interactive hover states.

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Core** | [Next.js 16.2 (Bleeding Edge)](https://nextjs.org/) |
| **Framework** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4.0](https://tailwindcss.com/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Icons** | Custom SVG Components |
| **Fonts** | Google Fonts (Oswald, Inter) |
| **Video** | HTML5 Native Player + YouTube API |

## 🏗️ Architecture

- **App Router Architecture**: Leveraging the latest Next.js features for optimal routing and performance.
- **Atomic Component Design**: Highly modularized component structure (`Button`, `Navbar`, `VideoModal`, `HeroSection`) for maximum reusability.
- **Hybrid Rendering**: Strategic use of Server Components for SEO and Client Components (`"use client"`) for interactive elements like modals and scroll tracking.
- **Modern PostCSS Pipeline**: Utilizing `@tailwindcss/postcss` for a lightning-fast build process.

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mutlukurt/nightfall-arena.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎬 Video Integration

The project includes a custom video modal inspired by **Google Flow's** cinematic capabilities. It currently features a local high-quality MOBA trailer located in `public/videos/`.

---

Developed with ❤️ by [Mutlu Kurt](https://github.com/mutlukurt)
