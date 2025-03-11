import React, { useContext } from 'react'
import promocode from '../assets/promo.avif'
import { allProducts } from './data/allProducts'
import { ClothingContext } from './Context/ClothingContext';
import { RemoveCircleOutline } from '@mui/icons-material';


const Cartitems = () => {

  const {cartItems,removeFromCart,sumCartItems} = useContext(ClothingContext);

  return (
    <div className='flex w-full xl:min-h-full min-h-[1300px] flex-col p-4 bg-bgColor  rounded-[10px] '>
    <div 
    className='grid xl:text-[18px] text-[14px]  xl:grid-cols-cart grid-cols-5 items-center p-2 xl:w-[1200px] w-full rounded-[10px]'>
        <p>Products</p>
        <p>name</p>
        <p>Price </p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='xl:w-[1200px] w-[300px] md:hidden '/>

      {allProducts.map((e,index)=>{
        if(cartItems[e.id]>0){
          return <div>
            <div
            key={index}
            className='grid xl:grid-cols-cart grid-cols-5 xl:text-[18px] gap-5 text-[14px]  p-2 xl:w-[1200px] w-full  items-center'>
            <img src={e.image} alt=""
            className='w-[100px] h-[100px] object-contain' />
            <p>{e.name}</p>
            <p>${e.newPrice}</p>
            <button className='w-[50px] h-[50px] bg-tertiary'>{cartItems[e.id]}</button>
            <p>${e.newPrice*cartItems[e.id]}</p>
            <div 
            className='cursor-pointer'
            onClick={()=>{removeFromCart(e.id)}}>
            <RemoveCircleOutline />
            </div>
            </div>
          </div>
        }
      })}

      <div className='flex items-center xl:flex-col md:flex-row flex-col justify-center h-[100vh] w-full p-4 '>
        <div className='flex flex-[1] items-center w-[350px] flex-col p-2'>

        <div className='flex w-full p-2 items-end flex-row justify-around'>
          <h1 className='text-[22px] font-bold '>Sub total</h1>
          <h2 className='text-[24px] text-green-400 font-extrabold'>${sumCartItems()}</h2>
        </div>
        <hr className='w-[400px] '/>

        <div className='flex w-full p-2 items-end flex-row justify-around'>
          <h1 className='text-[22px] '>Shipping fee</h1>
          <h2 className='text-[24px] text-green-400 font-extrabold'>free</h2>
        </div>
        <hr className='w-[400px] '/>
        
        <div className='flex w-full p-2 items-end flex-row justify-around'>
        <h1 className='text-[22px] font-bold '>Total</h1>
          <h2 className='text-[24px] text-green-400 font-extrabold'>${sumCartItems()}</h2>
        </div>
          <hr className='w-[400px]'/>
          <hr className='w-[400px]'/>

          <button 
          className='px-4 py-2 bg-tertiary m-4 rounded-[10px]'>Check out</button>
        </div>

        <div className='flex flex-[1] w-full overflow-hidden gap-4 flex-col-reverse p-2 bg-promobg rounded-[10px] object-cover'>
          <div className=''>
          <img src={promocode} alt="" className='h-[150px]  object-cover' />
          </div>
          <div className='max-w-[350px] flex gap-2'>
          <input type="text" placeholder='Enter your promo code here'  
         className='px-6 py-2 bg-purple-200 rounded-[10px] outline-none text-text'/>
         <button className='px-6 sm:px-2 py-2 bg-tertiary rounded-[10px]'>
          Enter
         </button>
          </div>
        </div>
     
      </div>
     </div>
  )
}

export default Cartitems