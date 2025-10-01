import './App.css'
import NavBar from './components/Navbar'
import MyPortfolio from './MyPortfolio'
import Footer from './components/Footer'
import Plasma from './Plasma'

function App() {
  return (
    <>
      {/* Plasma como fondo global */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
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

      {/* Contenido principal */}
      <NavBar />
      <MyPortfolio />
      <Footer />
    </>
  )
}

export default App
