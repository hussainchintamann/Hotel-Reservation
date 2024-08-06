import React from 'react'
import Service from './Service'
import Rooms from './Rooms'
import Sliders from './sliders'
import Team from './team'
import Newsletter from './Newsletter'
import Carousel from './Carousel'


function Home() {
  return (
    <div>
      <Carousel/>
      <Rooms/>
     <Service/>
     <Sliders/>
     <Team/>
     <Newsletter/>
    </div>
  )
}

export default Home
