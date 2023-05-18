import React from 'react'
import CardOffer from '../components/CardOffer/CardOffer'
import '../components/CardOffer/cardOffer.css'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Pagination from '../components/Pagination/Pagination'


const PageNewProduct = ({productItems, addToCart}) => {
  return (
    <>
    <Header/>
    <div className="flash1">
<div className="tittleOffers">
    <h1>Nuevos Productos</h1>
    <p>Bienvenido a nuestros nuevos productos.</p>
    </div>
    <div className="pageOffersWith">
   <div className="container-page-offers">
     <CardOffer productItems={productItems} addToCart={addToCart} /> 
   </div>
   </div>
    </div>
    <Pagination/>
    <Footer/>
    </>
  )
}

export default PageNewProduct