import React,{useContext,useState,useEffect} from 'react'

import { useParams,Link } from 'react-router-dom'

import { GlobaleState } from '../../GlobaleState'

import ProductItem from '../Utils/ProductItem/ProductItem'

// import BtnRerender from '../Utils/ProductItem/BtnRerender'

function DetailProduct() {

    const params = useParams()

    const state = useContext(GlobaleState)

    const [products] = state.productsapi.products

    const [detailProduct , setDetailProduct] = useState([])

    useEffect(()=>{
        if(params.id){
            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            });
        }
    },[params.id,products])

  if(detailProduct.length === 0) return null;  

  return (
    <>
        <div className='detail'>
            <img src={detailProduct.images.url} alt='product-img' />

            <div className='box-detail'>

                <div className='row'>

                    <h2>{detailProduct.title}</h2>

                    <h6>#id: {detailProduct.product_id}</h6>

                </div>

                <span>$ {detailProduct.price}</span>

                <p>{detailProduct.description}</p>

                <p>{detailProduct.content}</p>

                <p> sold : {detailProduct.sold}</p>

                <Link to="/cart" className='cart'>
                    Buy Now
                </Link>

            </div>
        </div>
        <div>
            <h2>Related Products</h2>
            <div className='products'>
                {
                    products.map(product =>{
                        return product.category === detailProduct.category ? <ProductItem key={product._id} product={product}/> : null
                    })
                }
            </div>
        </div>
    </>

  )
}

export default DetailProduct