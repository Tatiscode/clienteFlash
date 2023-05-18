import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"
import Pagination from "../Pagination/Pagination"

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <Catg />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Te puede gustar</h2>
              </div>
              
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
             
            </div>
            <Pagination/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
