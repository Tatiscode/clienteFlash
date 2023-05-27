import React from 'react'
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import DCard from '../components/discount/Dcard';
import DiscountCard from '../components/DiscountCard/DiscountCard';

function PageDiscountAll() {
  return (
    <>
      <Header />
      <div className="flash1">
        <div className="tittleOffers">
          <h1>Grandes Descuentos</h1>
        </div>
        <div className="pageOffersWith1">
          <DiscountCard  />
        </div>
        {/* <Pagination/> */}
      </div>
      <Footer />
    </>
  );
}

export default PageDiscountAll
