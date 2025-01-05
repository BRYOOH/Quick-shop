import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ShopCategory from './Pages/ShopCategory'
import Navbar from './Components/Navbar'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Footer from './Components/Footer'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

const App = () => {
  return (
    <div className='h-full w-full text-white bg-bgColor font-default'>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ladies' element={<ShopCategory category='ladies'/>}/>
        <Route path='/gents' element={<ShopCategory category='gents'/>}/>
        <Route path='/teens' element={<ShopCategory category='teens'/>}/>
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