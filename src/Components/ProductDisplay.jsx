import React, { useContext } from 'react'
import { ClothingContext } from './Context/ClothingContext';

const ProductDisplay = (props) => {

   const {product} = props;
  console.log(product);

  const {addToCart} = useContext(ClothingContext);
  
  return (
    <div className='flex p-4   bg-purple-500 m-4 rounded-[10px] xl:flex-row h-full flex-col items-center'>
      <div className='flex flex-[1] md:gap-10 gap-2 items-center md:m-4  m-2 p-2 rounded-[10px] bg-purple-500'>
        <div className='xl:flex hidden flex-col gap-5'>
        <img src={product.image} alt="" className='h-[120px] w-[100px] rounded-[10px] object-cover ' />
        <img src={product.image} alt="" className='h-[130px] w-[100px] rounded-[10px] object-cover '/>
        <img src={product.image} alt="" className='h-[130px] w-[100px] rounded-[10px] object-cover'/>
        <img src={product.image} alt="" className='h-[140px] w-[100px] rounded-[10px] object-cover'/>
        </div>
        <img src={product.image} alt="" className='md:h-[600px] h-[300px] w-[450px] object-contain' />
      </div>
      <div 
      className='flex flex-[1] h-[90vh]  justify-around  p-2 md:m-4 gap-5 flex-col m-2 rounded-[10px]'>
        <h1 className=' text-[30px] font-extrabold uppercase text-teal-500'>{product.name}</h1> 
        <div className='flex flex-col xl:w-[75vh] sm:w-fit gap-5'>
          <h1 className='text-[20px] ' >This is a demo description for reach products information about size and color blh blah blah</h1>
        <p className='text-[20px]  font-bold'>Category : 
        <span className='text-[20px] uppercase'> {product.category} </span></p>
        <div className='text-[26px] flex justify-between w-[50vh]'>
          <p className='line-through font-extrabold text-teal-400 italic'>${product.oldPrice}</p>
          <p className='font-extrabold text-teal-400 italic'>${product.newPrice}</p>
          </div>
        </div>
        <div className='gap-10'>
        <h2 className='text-[24px] font-extrabold'>Select appropriate size</h2>
        <div className='flex gap-2'>
        <p className='border-[1px] p-[6px] w-[35px] cursor-pointer'>S</p>
        <p className='border-[1px] p-[6px] w-[35px] cursor-pointer'>M</p>
        <p className='border-[1px] p-[6px] w-[35px] cursor-pointer'>L</p>
        <p className='border-[1px] p-[6px] w-[35px] cursor-pointer'>XL</p>
        <p className='border-[1px] p-[6px] w-[40px] cursor-pointer'>XXL</p>
        </div>
        </div>
        <div className='flex flex-col justify-center gap-5 font-bold'>
        <button 
        onClick={()=>{addToCart(product.id)}}
        className='px-6 py-3 bg-tertiary rounded-[10px] w-[250px]'>Add to cart</button>
        </div>
      </div>

    </div>
  )
}

export default ProductDisplay