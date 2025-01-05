import React from 'react'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate= useNavigate();
  
  return (
    <div className='md:p-24 p-6 w-full xl:h-full md:h-screen h-[915px] mb-4'>
      <div className='flex border md:h-[70vh] h-fit p-2 md:flex-row flex-col border-white/50 rounded-xl gap-4'>
      <div className='flex-1 bg-loginbg rounded-xl md:bg-auto bg-cover font-bold text-6xl flex items-center'>
      Welcome to QuickShop. Let's Shop
      </div>
      <div className='flex flex-col items-center gap-8 flex-1 '>
          <div className='gap-2 text-center'>
          <h1 className='uppercase md:text-6xl text-xl font-semibold text-tertiary'>LogIn</h1>
          <p className='text-2xl'>Enter your credentials below</p>
          </div>
        <div className='flex flex-col gap-3 items-center  text-black'>
          <input type="email" placeholder='Email' 
          className='px-6 py-3 rounded-2xl xl:w-[70vh] md:w-[40vh] w-[280px] outline-none'/>
          <input type="password" placeholder="Password" 
          className='px-6 py-3 rounded-2xl xl:w-[70vh] md:w-[40vh] w-[280px] outline-none'/>
        </div>
        <button onClick="" 
        className='bg-tertiary px-4 py-3 xl:w-[30vh] w-[15vh] rounded-full'>Login</button>

        <p className=''>Dont have an account? <span className='text-pink-600 underline cursor-pointer' 
        onClick={()=>navigate("/signup")}>signup here</span></p>
      </div>
      </div>
      
    </div>
  )
}

export default Login