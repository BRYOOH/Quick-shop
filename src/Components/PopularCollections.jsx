import React from 'react'
import { newcollections } from './data/newcollection'
import Item from './Item'

const PopularCollections = () => {
  return (
    <div className='p-4 h-[350px]  bg-purple-400 rounded-[10px] m-5  flex flex-col '>
      <div className='flex items-center flex-col'>
      <h1 className='text-[40px] font-bold'>OFFERS</h1>
      <hr className='w-[50px] h-[10px] '/>
      </div>
      <div className="grid xl:grid-cols-4 grid-cols-3">
        {newcollections.map((product,id)=>{
          return <Item key={id}
          name={product.name}
          image={product.image}
          oldPrice ={product.oldPrice}
          newPrice = {product.newPrice}
          />
        })}
      </div>
      
    </div>
  )
}

export default PopularCollections