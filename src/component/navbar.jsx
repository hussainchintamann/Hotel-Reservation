import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link,  } from 'react-router-dom'

function Navbar() {
  
  // const userName = JSON.parse(localStorage.getItem('user'))
  
  
  return (
    <div>
      <nav className="navbar  navbar-expand-lg bg-black fixed-top ">
  <div className="container-fluid">
    <Link className="navbar-brand text-white">HOTELIER</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2   mb-lg-0" >
        <li className="nav-item " >
          <Link to={'/'} className="nav-link active text-white" aria-current="page">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link to={'service'} className="nav-link text-white">Service</Link>
        </li>
        <li className="nav-item">
          <Link to={'rooms'} className="nav-link text-white ">Rooms</Link>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
          <li>
          <Link className=" dropdown-item " to={'Slider'}>Testimonial</Link>
        </li>
            <li><Link class="dropdown-item" to={'Team'}>Our Team</Link></li>
      
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to={'contact'}>Contact</Link>
        </li>
      </ul>
      <form class="d-flex">
        
      </form>
    </div>
  </div>
</nav>

{/* <nav className="navbar">
            <div>
                <p className="brand-name">HOTELIER</p>
            </div>
            <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">Rooms</li>
                <li 
                    className="nav-item dropdown" 
                    onMouseEnter={() => setShowDropdown(true)} 
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    Pages <span className="dropdown-arrow">▼</span>
                    {showDropdown && <DropdownMenu />}
                </li>
                <li className="nav-item">Contact</li>

            </ul>
        </nav> */}
    </div>
  )
}

export default Navbar
