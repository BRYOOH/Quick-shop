import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.png'

const Navbar = () => {
  return (
    <div className='flex pb-3 flex-wrap bg-purple-500 p-3'>
      <div className='flex flex-[1] gap-5 items-center '>
        <img src={logo} alt='' className='w-[50px] h-[50px] object-contain rounded-[50%]'/>
        <Link to='/'
        className=' text-header font-bold underline text-[25px]'
        > QUICK SHOP</Link>
      </div>
      <div className='md:flex hidden flex-[1] uppercase gap-10 items-center justify-around text-[20px] font-medium'>
        <Link to='/ladies'>
        Ladies
        </Link>
        <Link to='/gents'>
        Gents
        </Link>
        <Link to='/teens'>
        Teens
        </Link>
      </div>
      <div className='flex flex-[1]  flex-end items-center justify-around'>
        <Link to='/cart'> 
        <img src={cart} alt="" className='w-[40px] h-[40px] object-contain rounded-[50%]'/>
        </Link>
        <button className='bg-tertiary px-6 py-4 text-white rounded-[10px]'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar