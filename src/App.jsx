import './App.css';
import NavBar from './components/Navbar';
import MyPortfolio from './MyPortfolio';
import Footer from './components/Footer';
import Plasma from './Plasma';
import PoliticaPrivacidad from './components/PrivacyPolicy';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === '/politica-privacidad'; // 👈 si estamos en esa ruta, ocultamos Navbar/Footer

  return (
    <>
      {/* Fondo animado */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundColor: 'rgb(15,18,25)',
        }}
      >
        <Plasma
          color="#ff3131"
          speed={0.6}
          direction="forward"
          scale={1.8}
          opacity={0.4}
          mouseInteractive={true}
        />
      </div>

      {/* Solo mostramos NavBar y Footer si no estamos en /politica-privacidad */}
      {!hideLayout && <NavBar />}

      <Routes>
        <Route path="/" element={<MyPortfolio />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
