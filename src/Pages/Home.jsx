import React from 'react'
import Bio from '../Components/Bio'
import NewCollections from '../Components/NewCollections'
import Offers from '../Components/Offers'
import PopularCollections from '../Components/PopularCollections'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='w-full bg-purple-500 '>
      <Bio/>
      <NewCollections/>
      <Offers/>
      <PopularCollections/>
      <Footer/>
    </div>
  )
}

export default Home