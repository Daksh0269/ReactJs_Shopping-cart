import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Products from './components/products'
import { useEffect } from 'react'
import Cart from './components/Cart'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { items } from './components/data'
import Product_details from './components/product_details'

function App() {
  const [cart, setCart] = useState([])
  const [item, setitem] = useState([...items])

  
  return (
    <>
    <Router>
  <Navbar cart={cart} items={items} setItems = {setitem}/>
  <Routes>
    <Route path='/' element={<Products item={item} setItem={setitem} cart={cart} setCart={setCart}/>}></Route>
    <Route path='/cart' element={<Cart item={item} cart={cart} setCart={setCart}/>}></Route>
   <Route path="/products/:id" element={<Product_details cart={cart} setCart={setCart}/>}></Route>
  </Routes>

  </Router>
    </>
  )
}

export default App
