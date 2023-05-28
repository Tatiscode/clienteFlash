import React,{useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { TodoGetApis } from "../../Apis/Apis";

const Categories = () => {
  const [category, setCategory]=useState([])
useEffect(() => {
  (async () => {
    let response = await TodoGetApis.getCategory();
    setCategory(response.data.rows);
  })();
}, []);

  return (
    <>
      {category.length > 0 ? (
        <div className="boxBigCategory">
          <div className="category flex">
            {category.map((items) => (
              <NavLink to="/SingleCategory">
                <div className="box f_flex">
                  {/* <img src="" alt="" /> */}
                  <span>{items.name_category}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      ) : (
        <h1>No hay categorias</h1>
      )}
    </>
  );
};

export default Categories;
