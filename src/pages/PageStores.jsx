import React from 'react'
import Shop from "../components/shops/Shop"
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'



function PageStores({shopItems,addToCart}) {
  return (
    <>
   <Header/>
    <Shop shopItems={shopItems} addToCart={addToCart} />
    <Footer/>
    </>
  )
}

export default PageStores