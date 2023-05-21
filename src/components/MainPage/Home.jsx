import React from "react"
import Categories from "./Categories"
import "./Home.css"
import Slider from "./Slider" 



const Home = () => {
  return (
    <>
      <section className='home'>
        <div className=''>
        
          <Slider/>
        </div>
        <Categories />
      </section>

      

    </>
  )
}

export default Home
