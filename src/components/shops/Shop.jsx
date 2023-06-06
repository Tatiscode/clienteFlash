import React from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./style.css";
import Pagination from "../Pagination/Pagination";

const Shop = () => {
  return (
    <>
      <section className="shop background pt-10">
        <div className="container d_flex">
          <Catg />
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex my-5 ">
                <h2 className="text-black text-bold">Te puede gustar</h2>
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
