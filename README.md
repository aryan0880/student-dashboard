# 🚀 Next-Gen Student Learning Dashboard (Achievfy)

A futuristic, highly animated, and premium education student dashboard prototype that fetches live course data from Supabase and implements high-performance, layout-shift-free interactions.

Live Demo

Deployed URL: https://student-dashboard-nu-eight.vercel.app
GitHub Repo: https://github.com/aryan0880/student-dashboard

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: Supabase
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## 🏛️ Architecture & Component Choices

### Server / Client Component Split
To maximize performance and keep page loads fast, we split the application into server-side data loaders and client-side interactive modules:

- **Server Components (RSC)**: 
  - [app/page.tsx](file:///app/page.tsx): Functions as our secure server component. It performs the direct data fetch from Supabase on the server side, ensuring that API connection details and keys are kept safe.
- **Client Components ("use client")**:
  - [components/Sidebar.tsx](file:///components/Sidebar.tsx): Manages interactive collapsible states, auto-collapse resize listeners, and page navigation highlights.
  - [components/MobileNav.tsx](file:///components/MobileNav.tsx): Renders a bottom navigation menu with glassmorphism styling on screens under `768px`.
  - [components/BentoGrid.tsx](file:///components/BentoGrid.tsx): Orchestrates parent stagger animations.
  - [components/CourseCard.tsx](file:///components/CourseCard.tsx): Controls high-performance progress bars, hover scale transitions, and custom gradient meshes.
  - [components/ActivityTile.tsx](file:///components/ActivityTile.tsx): Drives the GitHub-style contribution graph and staggered tile scaling on hover.
  - [components/HeroTile.tsx](file:///components/HeroTile.tsx): Manages the welcome text and streak counter.

### Data Fetching, Skeletons & Error Boundaries
- **Pulsing Skeletons**: Built a dedicated [app/loading.tsx](file:///app/loading.tsx) file containing full-layout skeletons that mimic the exact Bento Grid layout, utilizing Tailwind's `animate-pulse` class during data retrieval.
- **Error Handling**: Implemented a client-side [app/error.tsx](file:///app/error.tsx) error boundary that catches network or Supabase database failures gracefully and presents a fallback interface with an interactive retry button.

---

## ⚡ Animation & Performance Optimizations

### Zero Layout Shifts (RSC-friendly Composer Animations)
A key metric for evaluation is preventing repaints and layout shifts. We addressed this through Framer Motion by:
1. **Avoiding Width/Height Transitions**:
   - **Progress Bars**: Instead of animating `width` from `0%` to `X%`, we render a static `w-full` element and animate its scale using `scaleX: progress / 100` coupled with `style={{ transformOrigin: "left" }}`.
   - **Activity Charts**: The contribution cells render as static boxes, animating only `scale` and `opacity` properties.
2. **GPU-Accelerated Compositing**: All animations use `transform` (`scale`, `scaleX`, `translateY`) and `opacity`, executing on the compositor thread without triggering layout calculations or browser paint cycles.

### Staggered Entrance Animations
The tiles in the Bento Grid do not pop in abruptly. They inherit variants from [components/BentoGrid.tsx](file:///components/BentoGrid.tsx) which specifies `staggerChildren: 0.12`. Each individual [BentoItem](file:///components/BentoGrid.tsx) fades in and slides slightly up from `y: 20` using spring physics.

### Premium Hover Micro-interactions
- **Shared Layout Pill**: Sidebar options track selection state. The active indicator is a `motion.div` with `layoutId="active-pill"`. When clicked, Framer Motion automatically performs layout projection to slide the background pill to the new choice with spring physics (`stiffness: 300, damping: 20`).
- **Tile Glows**: Hovering over cards triggers a lift (`scale: 1.015`/`1.02`) accompanied by a subtle box shadow expansion (`boxShadow`) representing a glowing backdrop border, utilizing spring physics.

---

## 🎨 Premium Visual Elements

- **SVG Grain Filter**: Each course card features a blended high-frequency SVG noise texture using `<feTurbulence>` at low opacity (`0.035`), giving cards a tactile, paper-like grain.
- **Gradient Mesh**: Subtle pink, emerald, and purple mesh gradients animate gently in the background of cards to make the dark-mode aesthetic feel modern and dynamic.
- **GitHub-Style Contribution Grid**: The weekly activity card displays a 7x5 cell grid displaying activity levels (0-4) mapped to varying emerald color weights.

---

Challenges & Decisions
1. Server vs Client boundary for animations
The biggest challenge was keeping data fetching in Server Components while still using Framer Motion, which requires a browser environment. The solution was to pass all fetched data as props from the server page to the animated client leaf components. This keeps the bundle small and the data fetch fast.
2. Avoiding layout shifts in animations
The spec required zero layout shifts. The natural instinct for a progress bar is to animate width, but that triggers a browser relayout on every frame. Switching to scaleX with transform-origin: left gives the same visual result using only the GPU compositor — no relayout.
3. Dynamic icon rendering from Supabase
The icon_name field in the database is a string like "BookOpen". Lucide React exports components by name, so a dynamic import map was created to resolve these strings to actual components at render time, with a fallback for unknown names.
4. Contribution graph without a library
Rather than pulling in a chart library, the activity tile is a pure JSX grid — a 7-column CSS grid of small divs, each coloured with an opacity derived from mock activity data. This keeps the bundle lean and gives full control over the animation.

## 🔧 Local Development & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aryan0880/student-dashboard.git
   cd student-dashboard
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Environment variables**:
   - Rename `.env.example` to `.env.local`
   - Supply your own `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. **Run the development server**:
   ```bash
   npm run dev
   ```
5. **Open the browser**:
   - Navigate to `http://localhost:3000`
