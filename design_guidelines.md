# Design Guidelines - Photography Education Platform

## Design Approach
**Reference-Based Approach**: Exact replication of provided mockup designs with sage green accent color scheme, black/white foundations, and natural photography aesthetic.

## Core Design Elements

### Typography
- **Primary Font**: Clean sans-serif (Poppins or Inter recommended)
- **Headings**: Bold weight (600-700), larger sizes for page titles
- **Body Text**: Regular weight (400), readable line-height (1.6-1.8)
- **Hierarchy**: Clear distinction between page titles, section headers, card titles, and body text

### Color Palette
- **Primary Accent**: Sage green (#7A9D7E or similar from mockups)
- **Background**: White (#FFFFFF)
- **Text**: Black (#000000) for primary, gray (#6B7280) for secondary
- **Borders**: Light gray (#E5E7EB)
- **Overlay**: Semi-transparent black for image overlays

### Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Container: max-w-7xl with horizontal padding
- Section spacing: py-12 to py-24
- Card padding: p-6 to p-8
- Gap between grid items: gap-6 to gap-8

## Component Library

### Navigation
- White background with subtle shadow
- Logo on left, navigation links center/right
- Sage green accent for active states
- Sticky positioning on scroll
- Mobile: Hamburger menu

### Hero Section
- Full-width hero image with text overlay
- Dark overlay (bg-black/40) for text readability
- Centered white text with large heading
- Subtitle or description below

### Tab System (COURS, INTERVENANT, ALUMNI)
- Horizontal tabs with sage green active indicator
- Underline or background highlight for active tab
- Smooth transition between tabs
- Sticky below navigation

### Course Cards
- Horizontal layout (image left, content right) on desktop
- Vertical stack on mobile
- Images: Rounded corners (rounded-lg), aspect ratio 4:3
- Content: Title, instructor name, location icon + text, calendar icon + dates
- White background with subtle border or shadow

### Profile Pages (Intervenant & Alumni)
- **Header Banner**: Sage green background section
- **Profile Photo**: Large circular image, centered or left-aligned
- **Biography**: Multi-paragraph text with clear hierarchy
- **Image Carousel/Gallery**: 
  - Intervenant: Carousel with dot indicators below
  - Alumni: 3x3 grid of square images (aspect-ratio-square)
- Responsive grid: 3 columns desktop, 2 tablet, 1 mobile

### Statistics Section
- Bordered boxes displaying metrics
- Numbers in large, bold font
- Labels below in smaller text
- Grid layout: 3-4 columns on desktop, 2 on tablet, 1 on mobile

### About Page Components
- Hero image with title overlay
- Mission/Vision/Values: Timeline or vertical sections with icons/graphics
- Text sections: Generous line-height, max-width for readability
- Annual report section: Download button with sage green background

### Footer
- Black background (#000000)
- White text
- Multi-column layout: Contact info, links, social media
- Responsive: Stack columns on mobile

## Images
- **Education Hero**: Wide landscape photography image showing education/workshop setting
- **Course Cards**: Various photography-related images (cameras, workshops, locations)
- **Profile Photos**: Professional headshots, circular crop
- **Alumni Gallery**: Grid of photography work samples or event photos
- **About Hero**: Wide image representing the institution/mission

## Responsive Behavior
- **Desktop (lg)**: Multi-column layouts, horizontal cards, full navigation
- **Tablet (md)**: 2-column grids, reduced spacing
- **Mobile (base)**: Single column, stacked layouts, hamburger menu, reduced padding (p-4 instead of p-8)

## Interactions
- Minimal animations
- Smooth tab transitions
- Hover states on cards (subtle shadow or scale)
- Button hover: Darker shade of sage green
- No distracting scroll effects

## Key Design Principles
1. **Photography-First**: Large, high-quality images throughout
2. **Clean & Modern**: Ample whitespace, clear hierarchy
3. **Consistent Accent**: Sage green used sparingly for emphasis
4. **Mobile-Optimized**: Touch-friendly targets, readable text sizes