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
- 2025-01-31: Completed comprehensive website improvements based on user requests:
  * **Shrinking Header**: Header now shrinks to 1/3 height when scrolling to save space
  * **Super-realistic Service Images**: Updated all service images with high-quality realistic photos
  * **Enhanced Vehicle Categories**: Larger icons with reduced white space and improved styling
  * **Popular Lots Characteristics**: Added hover-visible car specs with icons (engine, mileage, fuel, color)
  * **Improved Last Orders Cards**: Reduced height with 2-column characteristics layout
  * **FAQ Section**: Redesigned as 2-column layout for better space utilization
  * **Car Selling Feature**: Added emphasis on car selling functionality alongside buying
  * **Future AI Features**: Announced upcoming AI-powered auto-filling, damage assessment, and repair consultation
  * **Personal Cabinet**: Planned extensive functionality with transaction notifications and document management
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