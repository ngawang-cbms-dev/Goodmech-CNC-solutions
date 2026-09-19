import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Home } from './pages/Home'
import { Machines } from './pages/Machines'
import { Software } from './pages/Software'
import { CAE } from './pages/CAE'
import { Printers } from './pages/Printers'
import { Quote } from './pages/Quote'
import { Simufact } from './pages/Simufact'
import { Solidworks } from './pages/Solidworks'
import { WorkNC } from './pages/WorkNC'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/software" element={<Software />} />
          <Route path="/cae" element={<CAE />} />
          <Route path="/printers" element={<Printers />} />
          <Route path="/quote" element={<Quote />} />
          {/* HERO products — dedicated pages, see src/data/heroProducts.ts */}
          <Route path="/simufact" element={<Simufact />} />
          <Route path="/solidworks" element={<Solidworks />} />
          <Route path="/worknc" element={<WorkNC />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
