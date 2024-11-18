import React from 'react'
import RelatedProducts from '../Components/RelatedProducts'
import ProductDisplay from '../Components/ProductDisplay'
import { allProducts } from '../Components/data/allProducts'
import { useParams } from 'react-router-dom'

const Product = () => {

  const {productId} = useParams();
  const product = allProducts.find((e)=>
    e.id === productId
  ); 

  return (
    <div className=''>
      <ProductDisplay product={product}/>
      <RelatedProducts product={product}/>
    </div>
  )
}

export default Product