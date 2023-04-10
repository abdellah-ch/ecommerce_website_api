import {useState,useEffect} from 'react'

import axios from 'axios'

function ProductsApi() {

    const [products , setProducts] = useState([])

    const getproducts =async () => {

        const res = await axios.get ('http://localhost:5000/api/products')


        setProducts(res.data.products)
    }

    useEffect(()=>{
        getproducts();
    },[])


  return (
    {
        products: [products , setProducts] 
    }
  )
}

export default ProductsApi