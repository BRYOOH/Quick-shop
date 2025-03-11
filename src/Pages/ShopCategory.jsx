import React from 'react'
import { ArrowDropDown } from '@mui/icons-material'
import Item from '../Components/Item'
import { allProducts } from '../Components/data/allProducts'

const ShopCategory = (props) => {
  return (
    <div className='h-full p-4 flex flex-col flex-wrap'>
      <div className='flex items-center justify-center p-4'>
        <img src={props.banner} alt="" className='w-[1000px] h-[200px] md:h-[400px] object-contain'/>
      </div>
      <div className='flex justify-between text-[14px] p-4'>
        <h2 className='text-[18px]'>showing items 1 to 12</h2>
        <button className='px-4 py-2 bg-tertiary rounded-[10px] text-[16px]'>sort by  
          <ArrowDropDown/> </button> 
      </div>
      <div className='xl:grid grid-cols-4 flex flex-wrap bg-card items-center justify-around p-8 rounded-[10px]'>
        
      {allProducts.map((product,id)=>{
        if(product.category==props.category)
        return <Item key={id}
        id={product.id}
        image={product.image}
        name = {product.name}
        oldPrice ={product.oldPrice}
        newPrice ={product.newPrice}
        />
      })}
      </div>
    </div>
  )
}

export default ShopCategory