import React from 'react'
import CardOffer from '../components/CardOffer/CardOffer'
import '../components/CardOffer/cardOffer.css'
import Pagination from '../components/Pagination/Pagination'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'

function PageOffer({ productItems, addToCart }) {
  return (
    <>
<Header/>
    <div className="flash1">
      <div className="tittleOffers">
    <h1>OFERTAS</h1>
    <p>Bienvenido a las mejores ofertas de Exito.</p>
    </div>
    <div className="pageOffersWith">
   <div className="container-page-offers">
     <CardOffer productItems={productItems} addToCart={addToCart} /> 
   </div>
   </div>
   <Pagination/>
    </div>
    <Footer/>
    </>
  )
}

export default PageOffer