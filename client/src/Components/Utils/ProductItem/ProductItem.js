import React from 'react'

// import { Link } from 'react-router-dom'

import BtnRerender from './BtnRerender'

function ProductItem({product}) {
  return (
    <div className='product_card'>
        <img  src={product.images.url} alt='product_img'/>
        <div className='product_box'>
            <h2>
                {product.title} 
            </h2>
            <span>
                ${product.price}
            </span>
            <p>
                {product.description}
            </p>
        </div>
        
        <BtnRerender product={product}/>

    </div>
  )
}

export default ProductItem