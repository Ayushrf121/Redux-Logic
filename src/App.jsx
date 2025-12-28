import React from 'react'
import { fetchGif, fetchPhotos, fetchVideos } from './api/mediaApi'

import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'

export default function App() {
  
  // const getPhotos = ()=>{
  //   fetchPhotos('cat')
  // }
  // const getVideos = ()=>{
  //   fetchVideos('cat')
  // }
  // const getGif = ()=>{
  //   fetchGif('employee')
  // }
  return (
    <div className='relative min-h-screen w-full bg-linear-to-br from-gray-950 via-slate-900 to-gray-950 text-white flex flex-col'>
        <ToastContainer/>
        {/* <button onClick={getPhotos}>Get Photos</button>
        <br/>
        <br/>   
        <button onClick={getVideos}>Get Videos</button>
        <br/>
        <br/>   
        <button onClick={getGif}>Get Gif</button> */}
        {/* <Navbar/> */}
       <main className='flex-1'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/collection' element={<CollectionPage/>}/>
          </Routes>
        </main>
        
    </div>
  )
}
