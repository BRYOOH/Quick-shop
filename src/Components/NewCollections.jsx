import React from 'react'
import {newcollections}  from './data/newcollection'
import Item from './Item'

const NewCollections = () => {
  return (
    <div className='xl:h-[350px] h-fit bg-purple-400 rounded-[10px] m-5  flex flex-col p-4 justify-center'>
      <div className='flex flex-col justify-center items-center'> 
        <h1 className='text-[40px] font-bold'>NEW COLLECTIONS  </h1>
        <hr className='w-[200px] h-[3px] '/>
      </div>
     
        <div className='gap-3 p-3 grid xl:grid-cols-4 grid-cols-2  mt-5'>
        {newcollections.map((product,i)=>{
            return <Item key={i} 
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