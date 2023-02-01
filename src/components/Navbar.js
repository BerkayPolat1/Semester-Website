import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
    <Link to='/'>Home</Link>
    <Link to='/frontend'> Frontend </Link>
    <Link to='/Backend'> Backend </Link>
  </nav>
  )
}

export default Navbar
