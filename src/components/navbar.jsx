import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = ({cart , items , setItems} ) => {
  return (
    <div className='navbar'>
      <Link className='logo' to="/">E-commerce</Link>
      <div className='empty'></div>
      <div className='search-container'>
      <input className='search' type="text" placeholder='search' />
      <button className='search-button'>search</button>
      </div>
       <Link className='cart' to="/cart">cart {cart.length}</Link>
       <Link className='home' to="/">home</Link>
    </div>
  )
}

export default Navbar
