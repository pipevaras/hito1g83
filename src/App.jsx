import './App.css'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarPizzeria from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavbarPizzeria />
      <Home />
      <Footer />
    </>
  )
}

export default App
