import React, { useState } from "react"
import Slider from "react-slick"
 import "slick-carousel/slick/slick.css"
 import "slick-carousel/slick/slick-theme.css"
 import './style.css'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.3 19.3q-.275-.275-.288-.7t.263-.7l4.9-4.9H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.275-.275-.263-.7t.288-.7q.275-.275.7-.275t.7.275l6.6 6.6q.15.125.213.313t.062.387q0 .2-.062.375t-.213.325l-6.6 6.6q-.275.275-.7.275t-.7-.275Z"/></svg>
      </button>
    </div>
  )
}

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"/></svg>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className="header-card">
                <span className='discount'>{productItems.discount}% </span>
                  <p className="disponible">{productItems.availability}</p>
                </div>
                <div className='img'>
                  <img src={productItems.cover} alt='' />
                </div>
                <div className='product-details'>
                  <div className="info">
                  <h3>{productItems.name}</h3>
                  <p>{productItems.amount} Unidades</p>

                  </div>
                  <p>{productItems.description}</p>
                  <div className='price'>
                    <h4>${productItems.price}.000 </h4>
                    
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button className='increment' onClick={() => addToCart(productItems)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
