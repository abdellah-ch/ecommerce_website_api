import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem({product}) {
  return (
    <div>
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
        <div className='row_btn'>
            <Link id="btn_buy">
                Buy
            </Link>
            <Link id="view" to={`detail/${product._id}`}>
                View
            </Link>
        </div>
    </div>
  )
}

export default ProductItem