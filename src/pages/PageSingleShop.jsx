import React from 'react'
import CardOffer from '../components/CardOffer/CardOffer'
import SingleShop from '../components/SingleShop/SingleShop'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Pagination from '../components/Pagination/Pagination'

function PageSingleShop({productItems, addToCart}) {
  return (
    <>
    <Header/>
    <div className="flash1">
    <SingleShop/>
    
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

export default PageSingleShop