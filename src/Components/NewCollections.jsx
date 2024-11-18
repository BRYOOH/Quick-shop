import React from 'react'
import {newcollections}  from './data/newcollection'
import Item from './Item'

const NewCollections = () => {
  return (
    <div className='h-full w-full bg-purple-500 rounded-[10px] m-5  flex flex-col p-4 justify-center'>
      <div className='flex flex-col justify-center items-center'> 
        <h1 className='text-[40px] font-bold text-header'>NEW COLLECTIONS  </h1>
        <hr className='w-[200px] h-[3px] '/>
      </div>
     
        <div className='gap-3 p-3 grid xl:grid-cols-4 grid-cols-2 '>
        {newcollections.map((product,i)=>{
            return <Item key={i} 
            id={product.id}
            name={product.name}
            image={product.image}
            newPrice= {product.newPrice}
            oldPrice= {product.oldPrice}
            />
        })}
        </div>
    </div>
  )
}

export default NewCollections