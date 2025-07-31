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
- 2025-01-31: Completed comprehensive redesign based on original nfsauto.by website
- Updated Header with navigation services menu and phone number display
- Created VehicleCategoriesSection with 10 transport categories and real data
- Redesigned StagesSection with 7-step cooperation process matching original
- Added PopularLotsSection displaying car lots with VIN numbers and pricing
- Updated BrandSelector with 34 manufacturer logos from original site
- Created new HeroSection with search form and statistics
- Added AboutSection with company information and advantages
- Built ContactSection with contact form and office information  
- Enhanced ServicesGrid with image-based service cards
- Updated Footer with comprehensive navigation and call-to-action
- All components now follow original website's design and color scheme
- Maintained blue/yellow color palette consistent with nfsauto.by
- Integration with PostgreSQL database remains functional

## User Preferences
- Language: Russian content (car import service targeting Russian market)
- Design: Modern, professional with blue/yellow color scheme
- Features: Car search, brand selection, testimonials, FAQ sections
- Layout: Compact, mobile-friendly design with proper spacing

## Migration Progress
- [x] Installing required packages
- [x] Fixing TypeScript errors in components
- [x] Testing project functionality
- [x] Improving layout and responsive design
- [x] Integrating PostgreSQL database
- [x] Creating API routes and data models
- [x] Seeding database with sample data
- [x] Completing migration verification