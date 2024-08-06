import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link,  } from 'react-router-dom'

function Navbar() {
  
  const userName = JSON.parse(localStorage.getItem('user'))
  
  // const handlerLogout = ()=>{
  //   localStorage.removeItem("loggedIn")
  //   navigate('/login')
  // }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/'} className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'rooms'} className="nav-link" href="#">Rooms</Link>
        </li>
        <li className="nav-item">
          <Link to={'service'} className="nav-link" href="#">Service</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link " to={'Slider'}>Testimonial</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
