import React from 'react'
import { Link, NavLink } from 'react-router-dom'



const CardOffer= ({ productItems, addToCart }) => {


  return (
    <>
    
        {productItems.map((productItems) => {
          return (
      
            <div className='box'>
             
              <div className='product mtop'>
                <div className="header-card">
                <span className='discount'>{productItems.discount}% </span>
                  <p className="disponible">{productItems.availability}</p>
                </div>
                <div className='img'>
                  <Link to="/CardProduct">
                  <img src={productItems.cover} alt='' />
                  </Link>
                </div>
                <div className='product-details'>
                  <div className="info">
                    <NavLink to='/CardBig'>
                  <h3>{productItems.name}</h3>
                  </NavLink>
                  <p>{productItems.amount} Unidades</p>

                  </div>
                  <p>{productItems.description}</p>
                  <div className='price'>
                    <h4>${productItems.price}.000 </h4>
                    
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(productItems)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
            
          )
        })}
    </>
  )
}

export default CardOffer
