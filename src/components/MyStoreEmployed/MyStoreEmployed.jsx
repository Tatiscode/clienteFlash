import React from 'react'
import SingleShop from '../SingleShop/SingleShop'

import MenuEmployed from '../MenuEmployed/MenuEmployed'
import CartProducts from '../ProductsEmployed/CartProducts'

function MyStoreEmployed() {
  return (
    <>
        <MenuEmployed  />
      
      <div class="ml-auto mb-6 lg:w-[100%] xl:w-[80%] 2xl:w-[85%]">
        <br />
        <SingleShop />
        <div className="container-page-offers static inset-x-0 w-full">
        
          </div>
      </div>
      {/* <div className="flash">
        <MenuEmployed />

        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[100%] 2xl:w-[100%]">
          <SingleShop />
        <div className="container-page-offers static inset-x-0 w-9/12">
          <CartProducts  />
        </div>
      </div>
      </div> */}
      {/* <MenuEmployed />
      <div className="flash">
        <SingleShop />
        <p>Bienvenido a Frisby.</p>
        <div className="container-page-offers static inset-x-0 w-9/12">
          <CartProducts productItems={productItems} addToCart={addToCart} />
        </div>
      </div> */}
    </>
  );
}

export default MyStoreEmployed