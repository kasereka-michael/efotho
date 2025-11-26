 Efothe - Photography Education Platform

## Overview
A fully responsive photography education website for Efothe, featuring course listings, photographer profiles, alumni showcase, and organizational information. Built with React, TypeScript, and Tailwind CSS with a sage green color scheme.

## Recent Changes (November 18, 2025)
- Implemented complete website with 4 main pages: Education, About, Intervenant Profile, and Alumni Profile
- Configured sage green color scheme (#C5D5B0 region) using Tailwind CSS custom color tokens
- Set up backend API with in-memory storage for courses, intervenants, and alumni
- Added responsive navigation with mobile menu support
- Implemented data fetching with React Query and loading states
- Fixed nested anchor tag issues in navigation
- Added statistics section with real numbers on Education page
- Enhanced About page timeline with mission/vision/values descriptions

## Project Architecture

### Frontend
- **React SPA** with Wouter for routing
- **Pages**:
  - `/` - Home (redirects to Education)
  - `/education` - Main education page with tabs for Cours, Intervenant, Alumni
  - `/apropos` - About page with mission, vision, values timeline
  - `/intervenant/:id` - Individual photographer profile pages
  - `/alumni/:id` - Alumni profile pages with photo galleries
- **Components**:
  - Navigation: Sticky header with logo and menu
  - Footer: Contact information and links
  - Reusable shadcn/ui components (Card, Tabs, Button, Skeleton, etc.)

### Backend
- **Express.js** server serving both API and frontend
- **In-Memory Storage** (MemStorage) with seed data
- **API Endpoints**:
  - `GET /api/courses` - List all courses
  - `GET /api/courses/:id` - Get specific course
  - `GET /api/intervenants` - List all intervenants
  - `GET /api/intervenants/:id` - Get specific intervenant
  - `GET /api/alumni` - List all alumni
  - `GET /api/alumni/:id` - Get specific alumni

### Data Schema
- **Courses**: id, title, instructor, location, date, imageUrl, category
- **Intervenants**: id, name, title, bio, imageUrl
- **Alumni**: id, name, title, bio, imageUrl, galleryImages[]

## Design System

### Color Palette
- **Primary (Sage Green)**: HSL(88, 30%, 75%) - Used for branding, active states, and accents
- **Background**: White (#FFFFFF)
- **Text**: Black to gray scale for hierarchy
- **Borders**: Light gray (#E5E7EB)

### Typography
- **Font Family**: Poppins (weights 300, 400, 500, 600, 700)
- **Headings**: Bold (600-700), larger sizes
- **Body**: Regular (400), line-height 1.6-1.8

### Responsive Breakpoints
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (multi-column layouts, full navigation)

## User Preferences
- Language: French
- Photography-focused aesthetic with emphasis on visual content
- Clean, modern design with ample whitespace
- Mobile-first responsive approach

## Development Workflow
1. **Start Development Server**: `npm run dev` (runs on port 5000)
2. **Frontend**: Vite dev server with HMR
3. **Backend**: Express with TypeScript via tsx
4. **Assets**: Located in `attached_assets/` folder, accessible via `@assets` alias

## Key Features
- Tab-based navigation on Education page (Cours, Intervenant, Alumni)
- Course cards with location and date information
- Profile pages with large hero banners using sage green
- Photo gallery grid (3x3) for alumni profiles
- Statistics section showing program impact
- Fully responsive design adapting to all screen sizes
- Loading skeletons for better UX during data fetching

## Technologies
- React 18 with TypeScript
- Wouter for routing
- TanStack Query for data fetching
- Tailwind CSS for styling
- shadcn/ui component library
- Lucide React for icons
- Express.js backend
- Vite build tool
