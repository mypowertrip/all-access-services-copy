# All Access Services — Public Site & Ground Control Dashboard

A modern React application serving as the **public marketing website** and **Ground Control member dashboard** for All Access Services, a premier JLG equipment rental, sales, and service provider across Southern California.

## 🌐 What's Included

### Public Marketing Site
- **Home**: Hero, equipment showcase, fleet management, featured inventory, locations, testimonials
- **Rentals**: Equipment categories (scissor lifts, boom lifts, telehandlers, forklifts) with filtering, comparison, and quote cart
- **Sales**: Used equipment inventory with pricing and financing calculator
- **Service**: Repair and maintenance offerings
- **Locations**: 4 branch locations with maps, hours, contact info
- **Safety**: OSHA compliance and training documentation
- **About**: Company history, values, and call-to-action

### Ground Control Dashboard (Member Portal)
- **Fleet Management**: Real-time equipment status, maintenance tracking, utilization analytics
- **Site Networks**: Geofence-based machine grouping and monitoring
- **Digital Access Control**: Remote lockout and access management
- **Mobile App Integration**: Companion app for on-site operations
- **Dashboard Customization**: Drag-and-drop widgets, filters, export to PDF/CSV

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
git clone <repo-url>
cd <project-directory>
npm install
```

### Development
```bash
npm run dev
```
Runs on `http://localhost:5173` by default.

### Production Build
```bash
npm run build
npm run preview  # test the build locally
```

## 🔧 Configuration

### Environment Variables
The app uses the **Base44 SDK** (`@base44/sdk`) for backend operations (entities, functions, integrations). No manual env vars are required — the Base44 platform injects credentials automatically.

### Key Files
- **`lib/siteConfig.js`**: Company info, locations, contact details, pricing
- **`lib/rentalInventory.js`**: Equipment catalog with specs and pricing
- **`lib/salesInventory.js`**: Used equipment listings
- **`components/rentals/QuoteCartContext.jsx`**: Quote cart state management
- **`pages/`**: Main route pages (Home, Rentals, Sales, Service, etc.)
- **`components/`**: Reusable UI components

## 🖼️ Asset URLs — Important ⚠️

**External Image Hosts:**
- Marketing images (location cards, hero backgrounds): `https://www.allaccessservices.com/images/`
- Legacy site images: `https://www.allaccessservices.com/fckimages/`
- Base44 hosted media: `https://media.base44.com/...`

**Action Required Before Launch:**
If the legacy `allaccessservices.com` site is being decommissioned, all images must be re-hosted on a permanent CDN (e.g., `media.base44.com`, AWS S3, or similar). Run the following audit:
```bash
# Check URLs in:
grep -r "allaccessservices.com/images" src/lib/
grep -r "allaccessservices.com/fckimages" src/
grep -r "allaccessservices.com" src/pages/
```

Update failing URLs to the new CDN before deploying to production.

## 📱 Deployment

Deploy via Base44 platform dashboard. The app is a standard Vite + React project and builds to static files.

## 🛠️ Tech Stack

- **React 18** — UI framework
- **React Router v6** — Routing
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **React Query** — Data fetching & caching
- **Base44 SDK** — Backend-as-a-service (entities, functions, integrations)
- **Sonner** — Toast notifications
- **Lucide React** — Icons
- **date-fns** — Date utilities

## 📝 License

Proprietary — All Access Services, Inc.