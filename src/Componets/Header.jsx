import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/logoCarrito.png'

function Header() {
  return (
<div className='header-container'>


    <header>
        <Link to='/'><h1 className='Link-Tienda'>Tienda</h1></Link>
        <div className='footer-lik'>
          <button className='btn-search'>
            Search
          </button>
          <input className='inpu-Search' type="text"  placeholder='Search'/>
        
  <Link className='Link-Home'  to={'/'}>Home</Link>
        <Link className='Link-Home' to={'/blog'}>Blog</Link>
        <Link className='Link-Home' to={'/contact'}>Contact</Link>

        </div>
      
        <div className='container-icon'>
          

<Link to={'/cart'}><img src={logo} className='icon-cart' alt='logo'/></Link>
        </div>
    </header>
    </div>
  )
}

export default Header