import React from 'react'
import { Link } from 'react-router-dom'
import { items } from './data'
import './product.css';

const products = ({ item, setItem, cart, setCart, value }) => {
  // useEffect(() => {
  //   console.log(cart)
  //   setCart([...cart])
  // }, [])

  function handleadd(i) {
    let id = i.target.id
    console.log(id)
    let index = item.findIndex(item => {
      return item.id === id;
    })
    setCart([...cart, item[index]])
  }
  function filtermobiles(product) {
    const filter = items.filter((e) => e.category === product)
    setItem(filter)
  }
  function filternone() {
    setItem(items)
  }
  function filter_instock() {
    const filter = items.filter((e) => e.instock === "yes")
    setItem(filter)
  }
  function price_50000(product_price) {
    const filter = items.filter((e) => e.price <= product_price)
    console.log(filter)
    setItem(filter)
  }
  return (
    <div>
      <div className='filter-products'>
        <button className='filter-button' onClick={filternone}>NO FILTER</button>
        <button className='filter-button' onClick={() => filtermobiles("mobiles")}>MOBILES</button>
        <button className='filter-button' onClick={() => filtermobiles("laptops")}>LAPTOPS</button>
        <button className='filter-button' onClick={() => filtermobiles("tablets")}>TABLETS</button>
        <button className='filter-button' onClick={filter_instock}>In stock</button>
        <button className='filter-button' onClick={() => price_50000(49999)}>&lt;50000</button>
        <button className='filter-button' onClick={() => price_50000(60000)}>&lt;60000</button>
      </div>
      <div className="product-container">
        {item.map((e) => {
          return <div className='itemcontainer'>
            <Link to={`/products/${e.id}`}><div className='img-box'><img className='img' src={e.imgSrc} alt={e.title} /></div></Link>
            <div className='font-bold'>{e.title}</div>
            <div className='actual-price'>{e.price + 10000}</div>
            <div>{e.price}</div>
            <button className='addtocart' id={e.id} onClick={handleadd}>Add to cart</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default products
