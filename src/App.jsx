
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
// import RoomDetail from './Home/RoomDetail'
import BookNow from './Home/BookNow'

import Newsletterpage from './assets/pages/Newsletterpage'
import Footer from './component/Footer'

function App() {
  
 

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Protectedroutes/>}>
     <Route path='/' element ={<Home/>}/>
     <Route path='Rooms' element ={<Roompage/>}/>
     {/* <Route path='Room/:RoomId' element={<RoomDetail  handleClick={handleClick}/>} /> */}
     <Route path='Room/:bookId'element={<BookNow/>} />
     <Route path='Service' element ={<Servicepage/>}/>
     <Route path='Slider' element ={<Sliderpage/>}/>
     <Route path='Team' element ={<Teampage/>}/>
     <Route path='Contact' element ={<Newsletterpage/>}/>
     </Route>
     </Routes>

     <Footer/>
    </>
  )
}

export default App
