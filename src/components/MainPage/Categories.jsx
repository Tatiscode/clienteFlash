import React from "react";
import { NavLink } from "react-router-dom";

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
  ];

  return (
    <>
      <div className="boxBigCategory">
        {data.length > 0 ? (
          <div className="category flex">
            {data.map((value, index) => {
              return (
                <NavLink to="/SingleCategory">
                  <div className="box f_flex" key={index}>
                    <img src={value.cateImg} alt="" />
                    <span>{value.cateName}</span>
                  </div>
                </NavLink>
              );
            })}
          </div>
        ) : (
          <h1>No hay data</h1>
        )}
      </div>
    </>
  );
};

export default Categories;
