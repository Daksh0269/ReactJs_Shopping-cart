import React from 'react'
import { useState, useEffect } from 'react'
import Emptycart from './emptycart'
import App from '../App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './products'
import './cart.css'

const Cart = ({ cart, item, setCart }) => {
  return (
    <div className='big-box'>
      {cart.length === 0 && <div><Emptycart /> </div>
      }
      {cart?.map((e, eindex) => {
        return <div className='cart-container'>
          <div className="img-container"><img className='img-cart' src={e.imgSrc} alt={e.title} /></div>
          <div className='product-name'>
            <div>{e.title}</div>
            <div className='product-price'>{e.price * e.quantity}
<div className='button-container'>
              <button className='button' onClick={() => {

                if (e.quantity > 0) {
                  const daksh2 = cart.map((item, index) => {
                    return eindex === index ? { ...item, quantity: item.quantity - 1 } : item
                  })
                  setCart(daksh2)
                }
                if (e.quantity == 1) {
                  console.log("zero")
                  const handledelete = cart.filter(item => {
                    return (item.id !== e.id)



                  })
                  setCart(handledelete)
                  console.log(handledelete)
                }

              }}>-</button>
              <div className='quantity-box'>{e.quantity}</div>
              
              <button className='button' onClick={() => {
                if (e.quantity > 0) {
                  const daksh = cart.map((item, index) => {
                    return eindex === index ? { ...item, quantity: item.quantity + 1 } : item
                  })

                  setCart(daksh)
                }

              }}>+</button>
              </div></div>

          </div>



        </div>
      })}
    </div>
  )
}

export default Cart
