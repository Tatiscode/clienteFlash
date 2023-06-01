import React,{useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { TodoGetApis } from "../../Apis/Apis";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Categories = () => {
  const [category, setCategory]=useState([])
  
  const [load, setLoad] = useState(false);
  useEffect(() => {
  (async () => {
    setLoad(true);
    let response = await TodoGetApis.getCategory();
    setCategory(response.data.rows);
    setLoad(false);
  })();
}, []);

  return (
    <>
     {load === false ? ( 
       <div className="category flex">
          
       <Skeleton width={95} height={25} count={1}/>
       
       
       <Skeleton width={95} height={25}count={1}/>
       
       
       <Skeleton width={95} height={25} count={1}/>
       
       
       <Skeleton width={95} height={25} count={1}/>
       
       
       <Skeleton width={95} height={25} count={1}/>
       
       
       <Skeleton width={95} height={25} count={1}/>
       
       
       <Skeleton width={95} height={25}count={1}/>
       
      
       
       </div>
       
      ) :category.length > 0 ? (
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
