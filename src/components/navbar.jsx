import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import './navbar.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = ({cart , items , setItems} ) => {
  const navigate = useNavigate();
  const [search, setsearch] = useState("")
  function searchitems(e) {
    const value = e.target.value
    if(value !=" "){console.log(e.target.value)
      setsearch(value)
      console.log(value)}
    

  }
  function handlesubmit(e) {
    e.preventDefault()
   navigate(`/search/${search}`)
  }
  return (
    <div className='navbar'>
      <Link className='logo' to="/">E-commerce</Link>
      <div className='empty1'></div>
      <div className='search-container'>
      <form  onSubmit={handlesubmit}><input value={search} onChange={searchitems} className='search' type="text" placeholder='search' /></form>
      <button onClick={handlesubmit} className='search-button'>search</button>
      </div>
      <div className='empty_container'></div>
      <div className='cart_home_container'>
      <Link className='cart' to="/cart">CART({cart.length})</Link>
       <div className='Login'><Link className='home' to="/">Login</Link></div>
      </div>
       
    </div>
  )
}

export default Navbar
