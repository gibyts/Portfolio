import './App.css'
import NavBar from './components/Navbar'
import MyPortfolio from './MyPortfolio'
import Footer from './components/Footer'
import { useEffect, useRef } from 'react'
import Starback from 'starback'

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
new Starback(canvasRef.current, {
  type: 'dot',
  quantity: 20,
  backgroundColor: '#0f1219', // mismo color que var(--background-color)
  randomOpacity: true,
});

    }
  }, [])

  return (
    <>
      {/* Canvas global del fondo */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      ></canvas>

      {/* Contenido principal */}
      <NavBar />
      <MyPortfolio />
      <Footer />
    </>
  )
}

export default App
