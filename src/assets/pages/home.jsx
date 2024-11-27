import React from 'react'
import Navbar from "../components/navbar/nav"
import Firstshow from "./products/firstshow"
import Carousel from "../components/carousel"



function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      
      <Carousel/>
      <Firstshow/>
      
      {/* <Itemdetail/> */}
    </div>
  )
}

export default Home
