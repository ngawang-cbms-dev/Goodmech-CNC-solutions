# GoodMech CNC Solutions - Website

A modern, responsive website for GoodMech CNC Solutions built with React, TypeScript, Vite, Tailwind CSS, and React Router. Showcasing precision CNC machining centers, CAD/CAM software solutions, and gauging systems.

## Setup & Configuration

### VSCode Configuration

The project includes VSCode settings for:
- TypeScript formatting and linting
- ESLint integration
- Build and dev server launch configurations

Located in `.vscode/`:
- `settings.json` - Editor and analysis settings
- `launch.json` - Debug and run configurations

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm lint
```

### Development Server

The dev server runs at:
- **Local:** `http://localhost:5173/`
- **Network:** Use `--host` flag to expose on network

Access the application in your browser and navigate through:
- **Home** - Hero section with value proposition
- **CNC Machines** - Product catalog (Cosmos VMC, Widma Grinders)
- **Software** - CAD/CAM solutions (VISI, Edgecam, WorkNC)
- **Quote** - Technical support and request form

## Technology Stack

- **Frontend Framework:** React 19.2.6
- **Build Tool:** Vite 8.0.12
- **Language:** TypeScript 6.0.2
- **Styling:** Tailwind CSS 4.3.0
- **Routing:** React Router 7.x
- **Linting:** ESLint 10.3.0 + TypeScript ESLint 8.59.2

## Routing

The app uses React Router for client-side navigation (no page reloads):

- `/` - Home page
- `/machines` - CNC machinery catalog
- `/software` - Software solutions
- `/quote` - Quote request form

All navigation uses `<Link>` components for optimal performance.

## Backend Integration (Stitch MCP)

The API key in `.env` connects to MongoDB Stitch for:
- Quote submissions
- Technical inquiries
- Backend form handling

**Note:** Stitch server endpoints should be configured in the form handlers within each page component.

## Build Output

Production builds are optimized and output to `dist/`:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js     (Main bundle ~86.5 kB gzipped)
│   ├── index-[hash].css    (Styles ~2.82 kB gzipped)
│   └── logo-[hash].svg
```

## Performance

- **Gzip bundle size:** ~86 kB (JavaScript) + 2.8 kB (CSS)
- **Modules:** 31 optimized modules
- **Loading:** <500ms on localhost (dev server is fast!)

## Development Workflow

1. **Start dev server:** `npm run dev`
2. **Make changes** in `src/` - HMR updates instantly
3. **Test routing** by clicking navigation links
4. **Build before deployment:** `npm run build`
5. **Preview production:** `npm run preview`

## Deployment

To deploy this site:

1. **Build production bundle:**
   ```bash
   npm run build
   ```

2. **Deploy `dist/` folder** to your hosting provider:
   - Netlify
   - Vercel  
   - GitHub Pages
   - Any static host

3. **Ensure environment variables** are set on the host for Stitch MCP integration

## Contributing

- Follow ESLint rules (auto-fixable with `npm run lint`)
- Use TypeScript for type safety
- Create routes in `src/pages/`
- Use Tailwind utilities for styling
- Test on mobile (use responsive design)

## License & Contact

**GoodMech CNC Solutions**  
Industrial Estate, Phagwara, Punjab - 144401, India  
Focal Point, Kapurthala, Punjab - 144601, India - munish.chopra@goodmech.in
