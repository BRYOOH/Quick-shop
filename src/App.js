import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ShopCategory from './Pages/ShopCategory'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='text-white'>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ladies' element={<ShopCategory category='ladies'/>}/>
        <Route path='/gents' element={<ShopCategory category='gents'/>}/>
        <Route path='/teens' element={<ShopCategory category='teens'/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App