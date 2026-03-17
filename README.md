# Logistics Order Form - Frontend Assignment

A React logistics order management application with live preview, built with Vite + React.

## Features

- **Order Creation**: Complete shipment details with sender/receiver information
- **Package Management**: Add/remove multiple packages with dimensions and values
- **Live Preview**: Real-time shipment summary with calculated totals
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern UI**: Clean design with CSS Modules and professional styling

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS Modules** - Scoped styling
- **JavaScript (ES6+)** - Modern JavaScript features

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Build for Production

```bash
npm run build
```

## Deployment

### Vercel
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration and deploy



## Project Structure

```
src/
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
├── index.css              # Base styles
├── app.module.css         # Main layout styles
├── types/
│   └── logistics.js       # Utility functions
└── components/
    ├── OrderForm.jsx      # Order creation form
    ├── PackageList.jsx    # Package management
    ├── PackageItem.jsx    # Individual package
    └── ShipmentPreview.jsx # Live preview panel
```

## Requirements Fulfilled

**Functional Requirements**
- Shipment details (Order ID, Date, Delivery Type)
- Consignor/Consignee information
- Multi-package support with full CRUD operations
- Live preview with real-time updates
- Calculated totals and visual indicators

**Technical Constraints**
- React with modern JavaScript (ES6+)
- CSS Modules only (no inline styles, no CSS-in-JS)
- Clean modular component structure
- No external form libraries or UI frameworks

**UI/UX Excellence**
- Design-first approach with professional styling
- Responsive behavior across all devices
- Clean layout with thoughtful spacing and typography
- Clear separation between form and preview

## Responsive Design

- **Desktop**: Side-by-side layout with sticky preview
- **Tablet**: Balanced two-column layout
- **Mobile**: Stacked single-column layout

## Configuration Files

- `vercel.json` - Vercel deployment configuration
- `vite.config.js` - Vite build configuration
