import React from 'react'
import "./Nav.css"

export default function Nav() {
  return (


    <nav className='navbar'>

    <h1> Welcome </h1>

    
      <ul className='navbar__links'>

      <li className='navbar__items'>
      <a className='navbar__link'>
      Accueil
      </a>
      </li>

      <li className='navbar__items'>
      <a className='navbar__link'>
      Annonces
      </a>
      </li>

      <li className='navbar__items'>
      <a className='navbar__link'>
      A propos
      </a>
      </li>

      <li className='navbar__items'>
      <a className='navbar__link'>
      categories
      </a>
      </li>

      <li className='navbar__items'>
      <a className='navbar__link'>
      Upload
      </a>
      </li>

      </ul>

      <button className='navbar__burger'>
      <span className='burger-bar'></span>
      </button>
    </nav>
  )
}
