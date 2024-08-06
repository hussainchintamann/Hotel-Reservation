import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Navbar from './component/navbar'
import Roompage from './assets/pages/Roompage'
import Servicepage from './assets/pages/servicepage'
import Sliderpage from './assets/pages/sliderpage'
import Teampage from './assets/pages/Teampage'
import Login from './component/Login'
import Register from './component/Register'
import Protectedroutes from './assets/services/Protectedroutes'
import RoomDetail from './Home/RoomDetail'
import BookNow from './Home/BookNow'

function App() {
  
  const handleClick = (item)=>{
  console.log(item)
  }

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Protectedroutes/>}>
     <Route path='/' element ={<Home/>}/>
     <Route path='Rooms' element ={<Roompage/>}/>
     <Route path='Room/:RoomId' element={<RoomDetail  handleClick={handleClick}/>} />
     <Route path='Room/:bookId'element={<BookNow/>} />
     <Route path='Service' element ={<Servicepage/>}/>
     <Route path='Slider' element ={<Sliderpage/>}/>
     <Route path='Team' element ={<Teampage/>}/>
     </Route>
     </Routes>
    </>
  )
}

export default App
