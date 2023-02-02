import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style/navbar.css'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)

  return (
    <nav className="navbar">
      <div className="container_navbar">
        <h3 className="logo">
          <Link to="/">
            <div className='logo-navbar'>LOGO</div>
          </Link>
        </h3>
        <ul
          className={Mobile ? 'nav-links-mobile' : 'nav-links'}
          onClick={() => setMobile(false)}
        >
          <Link to="/frontend">
            <li>Frontend</li>
          </Link>
          <Link to="/backend">
            <li>Backend</li>
          </Link>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
