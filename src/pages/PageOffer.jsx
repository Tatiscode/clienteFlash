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
    <h1>Nuestros Productos</h1>
    </div>
    <div className="pageOffersWith1">
   
     <CardOffer productItems={productItems} addToCart={addToCart} /> 
   
   </div>
   {/* <Pagination/> */}
    </div>
    <Footer/>
    </>
  )
}

export default PageOffer