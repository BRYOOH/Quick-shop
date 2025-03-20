import React, { useContext, useEffect, useState } from 'react'
import Item from './Item';
import { ClothingContext } from './Context/ClothingContext';

const RelatedProducts = (props) => {

  const {allProducts,getProducts} = useContext(ClothingContext);
  const {product} = props;

useEffect(()=>{
  allProducts();
},[]);
  

  return (
    <div className='h-fit flex-wrap flex md:block'>
      <div className='flex flex-col flex-wrap items-center'>
       <h2 className='text-[40px] font-bold uppercase'>Related products</h2>
      <hr className='w-[150px] h-[5px] text-bold'/>
      </div>
     
      <div className='xl:grid xl:grid-cols-4 flex justify-center flex-wrap'>
        {getProducts.map((item,i)=>{
           if(product.category === item.category){
            return <Item key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            oldPrice={item.old_price}
            newPrice={item.new_price}
            category={item.category}
            />
           }
          
        })}
      </div>
    </div>
  )
}

export default RelatedProducts