import React from "react"
import { NavLink } from "react-router-dom"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Moda",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electrodomesticos",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Vehiculos",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Hogar",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Accesorios",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Musica",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Belleza",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Mascotas",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Juguetes",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Supermercados",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Libros",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <NavLink to='/SingleCategory'>
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

export default Categories
