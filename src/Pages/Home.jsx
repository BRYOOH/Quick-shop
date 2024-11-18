import React from 'react'
import Bio from '../Components/Bio'
import NewCollections from '../Components/NewCollections'
import Offers from '../Components/Offers'
import PopularCollections from '../Components/PopularCollections'


const Home = () => {
  return (
    <div className=' h-full flex flex-wrap items-center justify-center gap-5 '>
      <Bio/>
      <NewCollections/>
      <Offers/>
      <PopularCollections/>
    </div>
  )
}

export default Home