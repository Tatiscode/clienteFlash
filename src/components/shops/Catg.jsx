import React from "react"
import { NavLink } from "react-router-dom"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Frisby",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Shepora",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Cinema",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Exito",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Koaj",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Alkosto",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Tiendas </h1>
        </div>
        {data.map((value, index) => {
          return (
              <NavLink to='/SingleShop'>
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
              
            </div>
            </NavLink>
          )
        })}
        
      </div>
    </>
  )
}

export default Catg
