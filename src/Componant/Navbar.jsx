import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()

  return (
    <div className='Navbar'>
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Products">Products</Link></li>
         </ul>
         <button onClick={() => navigate("/")}>Go to Home</button>

      </nav>

    </div>
  )
}
