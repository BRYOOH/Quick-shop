import React, { useContext, useEffect } from 'react'
import RelatedProducts from '../Components/RelatedProducts'
import ProductDisplay from '../Components/ProductDisplay'
import { useParams } from 'react-router-dom'

import { ClothingContext } from '../Components/Context/ClothingContext'

const Product = () => {

  const {productId} = useParams();
  console.log("Params id", productId);
  
  const {getProducts} = useContext(ClothingContext);


  let product = getProducts.find((e)=>
    e.id === Number(productId)
  ); 

  return (
    <div className=''>
      <ProductDisplay product={product}/>
      <RelatedProducts product={product}/>
    </div>
  )
}

export default Product