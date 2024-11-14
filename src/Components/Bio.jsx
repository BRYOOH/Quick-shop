import { ArrowCircleRightOutlined } from '@mui/icons-material'
import React from 'react'
import banner from '../assets/banner.jpeg'

const Bio = () => {
  return (
    <div className='flex flex-wrap h-[100vh] w-full p-4'>
        <div className='flex flex-[1] gap-4 items-center justify-center'>
            <h1 className='text-[65px] font-bold'>welcome quick shopper, CHECK OUT THE NEW COLLECTIONS!!</h1>
            <ArrowCircleRightOutlined fontSize='' className='text-[70px]'/>
            <button className='bg-pink-500 px-8 py-2 rounded-[10px]'>new collection</button>
        </div>
        <div className='flex flex-wrap flex-[1] p-4'>
            <img src={banner} alt='' className='object-contain w-[700px]'/>
        </div>
    </div>
  )
}

export default Bio