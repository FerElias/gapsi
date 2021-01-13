import React from 'react'
import Logo from './imagenes/logo.png'
import './Header.css'

export default function Header() {
  return (
  <nav className="header">
    <img className="header__logo" src={Logo}></img>
    <h4>e-commerce Gapsi</h4>
    
  </nav>
  )
}

