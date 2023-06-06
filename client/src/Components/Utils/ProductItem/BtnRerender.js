import React from 'react'
import { Link } from 'react-router-dom'

function BtnRerender(product) {
  return (
    <div className='row_btn'>
            <Link id="btn_buy">
                Buy
            </Link>
            <Link id="view" to={`/Products/detail/${product.product._id}`}>
                View
            </Link>
        </div>
  )
}

export default BtnRerender