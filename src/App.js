import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ShopCategory from './Pages/ShopCategory'
import Navbar from './Components/Navbar'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Footer from './Components/Footer'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { twMerge } from 'tailwind-merge'
import ladiesBanner from './assets/womenBanner.jpg'
import gentsBanner from './assets/menBanner.jpg'
import teensBanner from './assets/teensBanner.jpg'

const App = () => {

  const[darkMode, setDarkMode] = useState(false);

  const toggleDark = ()=>{
    setDarkMode(!darkMode);
  };
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.classList.toggle('light', !darkMode);
  }, [darkMode]);

  return (
    <div className={twMerge('h-full w-full text-text light bg-bgColor font-default', darkMode && 'dark')}>
      
      <BrowserRouter>
      <Navbar darkMode={darkMode} toggleDark={toggleDark}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ladies' element={<ShopCategory category='ladies' banner={ladiesBanner}/>}/>
        <Route path='/gents' element={<ShopCategory category='gents' banner={gentsBanner}/>}/>
        <Route path='/teens' element={<ShopCategory category='teens' banner={teensBanner}/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App