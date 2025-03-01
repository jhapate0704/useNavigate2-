import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Componant/Navbar'
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contact'
import Products from './Page/Products'

function App() {
  

  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
     
      
    </div>
  )
}

export default App
