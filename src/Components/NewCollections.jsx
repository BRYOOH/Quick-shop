import React, { useContext} from 'react'
import Item from './Item'
import { ClothingContext } from './Context/ClothingContext'

const NewCollections = () => {

  const {newCollections} =useContext(ClothingContext);

  return (
    <div className='h-full w-full bg-card rounded-[10px] m-5  flex flex-col p-4 justify-center'>
      <div className='flex flex-col justify-center items-center'> 
        <h1 className='text-[40px] font-bold text-header'>NEW COLLECTIONS  </h1>
        <hr className='w-[200px] h-[3px] '/>
      </div>
     
        <div className='gap-3 p-3 grid xl:grid-cols-4 grid-cols-2 '>
        {newCollections.map((product,i)=>{
            return <Item key={i} 
            id={product.id}
            name={product.name}
            image={product.image}
            newPrice= {product.new_price}
            oldPrice= {product.old_price}
            />
        })}
        </div>
    </div>
  )
}

export default NewCollections