# NFS Auto - Car Import Service Website

## Project Overview
This is a full-stack React + Express application for a car import service called "NFS Auto". The website provides services for car purchasing, logistics, warranty, and registration - all under one roof. The project has been migrated from Bolt to Replit.

## Architecture
- **Frontend**: React with TypeScript, Tailwind CSS, Lucide icons
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (fully integrated)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations

## Current Status
- Project structure follows Replit full-stack template
- Server runs on port 5000 with both API and frontend served from same port
- Full database schema with cars, users, inquiries, and services tables
- Complete API routes for all database operations
- Sample data seeded for development and testing
- Frontend contains multiple sections: Header, Hero, Services, Stages, Popular Cars, etc.

## Recent Changes
- 2025-01-31: Latest comprehensive website improvements completed:
  * **AI & Personal Cabinet**: Updated messaging to present AI automation and personal cabinet as existing features, not future ones
  * **Mega Menu**: Added catalog dropdown with popular products display on hover in header navigation
  * **Stylish Pagination**: Redesigned services section pagination to be more compact and height-efficient with modern controls
  * **Custom Vehicle Icons**: Generated new stylish SVG icons for all vehicle categories (buses, cars, ATVs, boats, etc.)
  * **Expandable Characteristics**: Popular lots now show detailed specs on hover without prices, expanding card height
  * **Video Testimonials**: Updated testimonials section to include mix of video and text reviews with play buttons
  * **Integrated Action Buttons**: Embedded call-to-action buttons directly into component blocks instead of separate sections
  * **Enhanced UX**: Added hover animations, expandable content, and improved spacing throughout all sections
- Enhanced HeroSection to emphasize delivery from USA, Korea, China, and Europe
- Added emphasis on both new and used car availability  
- Converted ServicesGrid to interactive carousel with navigation controls
- Added new services for new car procurement and rare model search
- Redesigned VehicleCategoriesSection with more stylish 3D icons and gradient effects
- Implemented fully animated StagesSection with timeline, scroll-triggered animations
- All animations working smoothly with proper performance optimization
- Database integration remains fully functional with PostgreSQL

## User Preferences
- Language: Russian content (car import service targeting Russian market)
- Design: Modern, professional with blue/yellow color scheme
- Features: Car search, brand selection, testimonials, FAQ sections, car selling functionality
- Layout: Compact, mobile-friendly design with proper spacing and shrinking header on scroll
- UX Improvements: Hover-visible characteristics, reduced card heights, 2-column layouts
- Future Features: AI-powered automation, personal user cabinets, real-time transaction tracking

## Migration Progress
- [x] Installing required packages
- [x] Fixing TypeScript errors in components
- [x] Testing project functionality
- [x] Improving layout and responsive design
- [x] Integrating PostgreSQL database
- [x] Creating API routes and data models
- [x] Seeding database with sample data
- [x] Completing migration verification