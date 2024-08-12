import React from 'react'
import Service from './Service'
import Rooms from './Rooms'
import Sliders from './sliders'
import Team from './team'
import Newsletter from './Newsletter'
import Carousel from './Carousel'
import BookNow from './BookNow'


function Home() {
  return (
    <div>
      <Carousel/>
      <BookNow/>
      <Rooms/>
     <Service/>
     <Sliders/>
     <Team/>
     <Newsletter/>
    </div>
  )
}

export default Home
