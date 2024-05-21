import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Products from './components/products'
import Cart from './components/Cart'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { items } from './components/data'
import Product_details from './components/product_details'
import Search from './components/search'
import Emptycart from './components/emptycart'

function App() {
  const [cart, setCart] = useState([])
  const [item, setitem] = useState([...items])

  
  return (
    <>
    <Router>
  <Navbar  cart={cart} items={items} setItems = {setitem}/>
  <Routes>
    <Route path='/' element={<Products  item={item} setItem={setitem} cart={cart} setCart={setCart}/>}></Route>
    <Route path='/cart' element={<Cart  item={item} cart={cart} setCart={setCart}/>}></Route>
   <Route path="/products/:id" element={<Product_details cart={cart} setCart={setCart}/>}></Route>
   <Route path="/search/:name" element={<Search cart={cart} setCart={setCart} item={item} setItem={setitem}/>}></Route>
   <Route path="/empty_cart" element={<Emptycart/>}></Route>
  </Routes>

  </Router>
    </>
  )
}

export default App
