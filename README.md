# GoodMech CNC Solutions - Website

A modern, responsive website for GoodMech CNC Solutions built with React, TypeScript, Vite, Tailwind CSS, and React Router. Showcasing precision CNC machining centers, CAD/CAM software solutions, and gauging systems.

## Setup & Configuration

### Environment Variables

The project requires Stitch MCP Server credentials for backend connectivity:

1. **Create `.env` file** in the project root:
   ```
   VITE_STITCH_API_KEY=your_api_key_here
   VITE_PROJECT_NAME=GoodMech CNC Solutions
   VITE_API_ENDPOINT=https://stitch.mongodb.com/api/client/v2.0/app
   ```

2. **Do NOT commit** `.env` to version control (already in `.gitignore`)

3. **Use `.env.example`** as a template for other developers

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

## Project Structure

```
src/
├── pages/
│   ├── Home.tsx          # Landing page with hero & core expertise
│   ├── Machines.tsx      # CNC machinery product showcase
│   ├── Software.tsx      # CAD/CAM & metrology solutions
│   └── Quote.tsx         # Quote request form
├── components/
│   ├── Header.tsx        # Navigation header with Logo
│   └── Footer.tsx        # Footer with links & contact
├── App.tsx               # Main layout with React Router
├── main.tsx              # App entry point & route definitions
├── index.css             # Global styles
└── assets/               # Images, SVGs, icons
```

## Technology Stack

- **Frontend Framework:** React 19.2.6
- **Build Tool:** Vite 8.0.12
- **Language:** TypeScript 6.0.2
- **Styling:** Tailwind CSS 4.3.0
- **Routing:** React Router 6.x
- **Linting:** ESLint 10.3.0 + TypeScript ESLint

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
Focal Point, Kapurthala, Punjab - 144601, India  
📧 sales@goodmech.com
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
