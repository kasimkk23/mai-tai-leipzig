import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ClosureBanner from './components/ClosureBanner'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Karte from './pages/Karte'
import Mittagskarte from './pages/Mittagskarte'
import Reservierung from './pages/Reservierung'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import NotFound from './pages/NotFound'

function App() {
  const { pathname } = useLocation()
  const transparentAtTop = pathname === '/'

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <ClosureBanner />
      <Header transparentAtTop={transparentAtTop} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/karte" element={<Karte />} />
          <Route path="/mittagskarte" element={<Mittagskarte />} />
          <Route path="/reservierung" element={<Reservierung />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
