import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='flex flex-col items-center justify-center p-4 gap-[2px]'>
      <Link to={`/product/${props.id}`}>
      <img src={props.image} alt={props.id}
      onClick={()=>window.scrollTo(0,0)}
      className='w-[200px] h-[200px] object-contain cursor-pointer'
      />
      </Link>
      <span className='xl:text-[18px] text-[16px]'>{props.name}</span>
      <p className='xl:text-[16px] text-[14px] line-through'>${props.oldPrice}</p>
      <p className='xl:text-[16px] text-[14px]'>${props.newPrice}</p>
    </div>
  )
}

export default Item