import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/logoCarrito.png'
import cart from '../image/Green_Cart_Icon_Grocery_Logo_(1)-transformed.png'
import store from '../image/sotore-transformed.png'

function Header() {
  return (
<div className='header-container'>


    <header>
        <Link to='/'><img src={store} className='Link-Tienda'></img></Link>
        <div className='Header-lik'>
          <button className='btn-search'>
            Search
          </button>
          <input className='inpu-Search' type="text"  placeholder='Search'/>
        
  <Link className='Link-Home'  to={'/'}>Home</Link>
        <Link className='Link-Home' to={'/blog'}>Blog</Link>
        <Link className='Link-Home' to={'/contact'}>Contact</Link>

        </div>
      
        <div className='container-icon'>
          

<Link to={'/cart'}><img src={cart} className='icon-cart' alt='logo'/></Link>
        </div>
    </header>
    </div>
  )
}

export default Header