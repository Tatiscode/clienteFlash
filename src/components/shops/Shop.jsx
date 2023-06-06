import React from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./style.css";
import Pagination from "../Pagination/Pagination";
import { useParams } from "react-router-dom";

const Shop = () => {
  const {name}=useParams()
  return (
    <>
      <section className="shop background pt-10">
        <div className="container d_flex">
          <Catg />
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left  flex flex-col f_flex my-5 ">
                <p className="text-3xl font-bold mb-3">{name}</p>
                <h2 className="text-black ">Te puede gustar</h2>
              </div>
            </div>
            <div className="product-content ">
              <ShopCart />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
