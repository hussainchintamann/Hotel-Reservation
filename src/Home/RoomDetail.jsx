import React, { useEffect, useState } from 'react'
import { roomItem } from '../component/Data/data'
import { useParams } from 'react-router-dom'

const RoomDetail = () => {
  const[RoomId]=useParams()
  const [room,setRoom]=useState([])
  useEffect(()=>{
    roomItem (`${RoomId}`)
  },[RoomId])
  
  
  return (
    
    <div>
     
      <div className="container">
        <div className="row">
            <div className=" col-lg-6 col-md-6">
              
                 <div >
                  <img src={product.img} alt="" />
                  {/* <p>{el.name}</p> */}
                 </div>
                 
               
            </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetail
