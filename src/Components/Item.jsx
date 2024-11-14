import React from 'react'

const Item = (props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={props.image} alt={props.id}
      className='w-[200px] h-[200px] object-contain'
      />
      <span className='text-[16px]'>{props.name}</span>
      <p className='text-[14px] line-through'>$ {props.oldPrice}</p>
      <p className='text-[14px]'>$ {props.newPrice}</p>
    </div>
  )
}

export default Item