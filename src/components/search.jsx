import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from './data'
import { useEffect, useState } from 'react'
import Products from './products'
import { Link } from 'react-router-dom'
const search = ({setItem ,cart, setCart, item}) => {
    function handleadd(i) {
        let id = i.target.id
        console.log(id)
        let index = item.findIndex(item => {
          return item.id === id;
        })
        setCart([...cart, item[index]])
      }
    const { name } = useParams()
    const [searchedData, setSearchedData] = useState([])
    useEffect(() => {
        console.log(items)
        const filter = items.filter((e) => e.title.toLowerCase().includes(name.toLowerCase()))
        console.log(filter)
        setSearchedData(filter)
        console.log(searchedData)
        // setItem(filter)
    }, [name])


    return (<div>
        
        <div className="product-container">
        {searchedData.map((e) => {
          return <div className='itemcontainer'>
            <Link to={`/products/${e.id}`}><div className='img-box'><img className='img' src={e.imgSrc} alt={e.title} /></div></Link>
            <div className='font-bold'>{e.title}</div>
            <div className='actual-price'>{e.price + 10000}</div>
            <div>{e.price}</div>
            <button className='addtocart' id={e.id} onClick={handleadd}>Add to cart</button>
          </div>
        })}
      </div>
        <div className={searchedData.length > 0?"hide":"show"}>No search Results found </div>
        </div>
    )

}

export default search
