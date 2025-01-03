import React from 'react'
import '../App.css'
import logo from '../Images/logo.jpeg'

function Header() {
  return (
    <header>
        <img className='logo' src={logo}  alt="instacart logo"></img>
        <button className='login-btn'>Log in</button>
        <button className='signup-btn'>Sign Up</button>
    </header>
  )
}

export default Header
