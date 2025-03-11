import { ArrowCircleRightOutlined } from '@mui/icons-material'
import React from 'react'
import banner from '../assets/banner.jpg'

const Bio = () => {
  return (
    <div
     className='flex flex-wrap md:h-[80vh] h-[200px] w-full p-4 bg-biobg xl:bg-cover bg-contain bg-no-repeat bg-center'>
        <div className='flex flex-[1] flex-wrap gap-4 items-center justify-center'>
            <h1 className='xl:text-[65px] text-[30px] text-header font-bold'>welcome shopper, check out the NEW COLLECTIONS!!</h1>
            <ArrowCircleRightOutlined fontSize='' className='text-[70px]'/>
            <button className='bg-tertiary px-6 h-[50px] py-2 rounded-[10px]'>new collection</button>
        </div>
        <div className='xl:flex hidden flex-wrap flex-[1] p-4'>
            <img src={banner} alt='' className='object-contain w-[700px]'/>
        </div>
    </div>
  )
}

export default Bio