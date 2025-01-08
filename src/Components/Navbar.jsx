import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.png'
import { ClothingContext } from './Context/ClothingContext'
import {  MenuOutlined } from '@mui/icons-material'


const Navbar = () => {
  const navigate = useNavigate();
  const {cartIncre} = useContext(ClothingContext);

  return (
    <div className='flex pb-3 gap-3 w-full md:flex-wrap justify-around bg-purple-500 p-3'>
      <div className='flex md:flex-[1] md:gap-5 items-center '>
        <img src={logo} alt='' className='w-[50px] h-[50px] object-contain rounded-[50%]'/>
        <Link to='/'
        className=' text-header font-bold italic text-[25px]'
        > QUICK SHOP</Link>
      </div>
      <div className='md:flex hidden md:flex-[1] uppercase gap-10 items-center justify-around text-[20px] font-medium'>
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
      <div className='flex md:flex-[1] items-center justify-around'>
        <button 
        onClick={()=>{navigate('/login');localStorage.removeItem("auth-token");}}
        className='bg-tertiary md:flex hidden md:px-6 px-4 py-4 text-white rounded-[10px]'>Logout</button>
        <Link to='/cart'> 
        <div className='flex justify-center '>
        <img src={cart} alt="" className='w-[40px] h-[40px] object-contain rounded-[50%]'/>
        <div className='px-2 items-center bg-red-600 rounded-[50%] h-6  w-6'>{cartIncre()}</div>
        </div>
        </Link>
        <div className='md:hidden '
        >
        <MenuOutlined fontSize='large'/>
       </div>
      </div>
    </div>
  )
}

export default Navbar