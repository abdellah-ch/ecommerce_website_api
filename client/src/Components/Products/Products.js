import React, { useContext } from "react";

import { GlobaleState } from "../../GlobaleState";

import ProductItem from "../Utils/ProductItem/ProductItem";

function Products() {
  const state = useContext(GlobaleState);

  const [products] = state.productsapi.products;

  console.log(products);

  return <div className="products">{
    products.map((item)=>{
      return <ProductItem key={item._id} product={item} />
    })
  }</div>;
}

export default Products;
