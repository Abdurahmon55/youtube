import React from 'react'
import MinNavbar from './components/MinNavbar'
import {  minNavbar } from './data/Icons'
import Navbar from './components/Navbar'
import Saidbar from './components/Saidbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './components/Product'
import Catigory from './components/Catigory'


function App() {
  return (
    <div className='container m-auto '>
      <div className='sticky z-10'>
        <Navbar/>
      </div>
      <div className='flex'>
        <Saidbar/>
        <div className='w-full flex flex-col pl-80  mt-16'>
         <div className='h-10 flex bg-white flex-wrap fixed overflow-hidden justify-between w-full items-center mb-4'> 
          {minNavbar.map((item)=>(
          <MinNavbar kay={item.id}{...item}/>
        ))}
        </div>
        <div className='mt-12'>
        < Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/catigory/:catigory' element={<Catigory/>}/>
        <Route path='/blog/:yourInfo' element={<Catigory/>}/>
        <Route path='/your/:imgBlog' element={<Catigory/>}/>
        </Routes>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App