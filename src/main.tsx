import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Home } from './pages/Home'
import { Machines } from './pages/Machines'
import { Software } from './pages/Software'
import { Quote } from './pages/Quote'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/software" element={<Software />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
