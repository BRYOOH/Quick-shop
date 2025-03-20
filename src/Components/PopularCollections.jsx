import React, { useContext } from 'react'
import Item from './Item'
import { ClothingContext } from './Context/ClothingContext'

const PopularCollections = () => {
  
  const {getPopular} = useContext(ClothingContext);

  return (
    <div className='p-4  h-full w-full bg-card rounded-[10px] m-5 justify-center flex flex-col '>
      <div className='flex items-center flex-col'>
      <h1 className='text-[40px] font-bold text-header'>POPULAR IN WOMEN</h1>
      <hr className='w-[50px] h-[10px] '/>
      </div>
      <div className="gap-3 p-3 grid xl:grid-cols-4 grid-cols-2">
        {getPopular.map((product,id)=>{
          return <Item key={id}
          id={product.id}
          name={product.name}
          image={product.image}
          oldPrice ={product.old_price}
          newPrice = {product.new_price}
          />
        })}
      </div>
    </div>
  )
}

export default PopularCollections