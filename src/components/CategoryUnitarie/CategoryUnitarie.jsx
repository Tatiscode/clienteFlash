import React from 'react'
import FilterCategory from '../FilterCtegory/FilterCategory'
import CardOffer from '../CardOffer/CardOffer'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
import Pagination from '../Pagination/Pagination'

function CategoryUnitarie({productItems, addToCart}) {
  return (
    <>
    <Header/>
    <div className="flash">
    <FilterCategory/>
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

export default CategoryUnitarie