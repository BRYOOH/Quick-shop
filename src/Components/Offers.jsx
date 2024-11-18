import React from 'react'
import offers from '../assets/offers.jpeg'
import { ArrowCircleRightOutlined} from '@mui/icons-material'
const Offers = () => {
  return (
    <div className='flex h-[500px] md:h-[300px] items-center p-6'>

        <div className='flex flex-[1] justify-center items-center'>
        <img src={offers} alt="" className='h-[600px] w-[600px] object-contain' />
        </div>

        <div className='xl:flex flex-[1] hidden items-center  justify-center gap-5'>
        <h1 className='text-[65px] font-bold '>Enjoy our Black Friday Offers!!</h1>
        <ArrowCircleRightOutlined fontSize='' className='text-[70px]'/>
        <button className='px-4 py-2 bg-tertiary rounded-[10px]'>Popular Collections</button>
        
        </div>
    </div>
  )
}

export default Offers