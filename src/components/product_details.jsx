import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { items } from './data'
import { useEffect } from 'react'
import './product_detail.css'
const product_details = ({cart , setCart}) => {
  const {id} = useParams() 
  const [product, setProduct] = useState([])
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    const filter = items.filter((i)=>i.id==id)
    console.log(filter)
    setProduct(filter[0])
    console.log(product)
    const relatedProducts = items.filter(
      (suman) => suman.category === product.category
    );
    setRelatedProducts(relatedProducts);
    

  }, [id, product.category])

  function handleadd() {
    setCart([...cart , product])
  }
  return ( <div className="product-detail-container">
    <div className="product-detail-img"><img className='img-product-detail' src={product.imgSrc} alt="" /></div>
    <div className="product-detail-info">
      <div className='product_detail_name_decription'>
      <div className="product-detail-name">{product.title}</div>
      <div className="product-description">{product.description}</div>
      </div>
      <div className='product_detail_price_container'>
      <div className="product-price-product_detail_mrp">MRP {product.price+10000}</div>
      <div className="product-price-product_detail">Discounted Price {product.price}</div> <div className='stock-box'> <div>In stock :</div> <div className={product.instock_bullian?"instock-yes":"instock-no" }> {product.instock}</div> </div> 
      <button className='product_detail_cart-button' onClick={handleadd}> Add to cart</button>
      </div>
      
    </div>
  </div>

  )
}

export default product_details