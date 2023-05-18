import React from 'react'
import CardOffer from '../CardOffer/CardOffer'
import Pagination from '../Pagination/Pagination'
import style from '../SubCategorys/style.css'
import CartProducts from '../ProductsEmployed/CartProducts'
import MenuEmployed from '../MenuEmployed/MenuEmployed'



function Products({ productItems, addToCart }) {
  return (
    <>
    <MenuEmployed/>
    <div className="flash1">
      <div className="tittleOffers">
    <h1>CARTERAS</h1>
    <p>Bienvenido a las mejores ofertas de Tienda Fox.</p>
    </div>
    <div className="pageOffersWith">
   <div className="container-page-offers">
     <CartProducts productItems={productItems} addToCart={addToCart} /> 
   </div>
   </div>
   <Pagination/>
    </div>
    </>
  )
}

export default Products