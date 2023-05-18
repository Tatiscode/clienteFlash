import React from "react"
import Dcard from "./Dcard"
import { NavLink } from "react-router-dom"

const Discount = () => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="gray" d="M200 144h40v-40a40 40 0 1 0-40 40Zm152-40a40 40 0 0 0-80 0v40h40a40 40 0 0 0 40-40Z"/><path fill="gray" d="M80 416a64 64 0 0 0 64 64h92a4 4 0 0 0 4-4V292a4 4 0 0 0-4-4H88a8 8 0 0 0-8 8Zm160-164V144h32v108a4 4 0 0 0 4 4h140a47.93 47.93 0 0 0 16-2.75A48.09 48.09 0 0 0 464 208v-16a48 48 0 0 0-48-48h-40.54a2 2 0 0 1-1.7-3A72 72 0 0 0 256 58.82A72 72 0 0 0 138.24 141a2 2 0 0 1-1.7 3H96a48 48 0 0 0-48 48v16a48.09 48.09 0 0 0 32 45.25A47.93 47.93 0 0 0 96 256h140a4 4 0 0 0 4-4Zm32-148a40 40 0 1 1 40 40h-40Zm-74.86-39.9A40 40 0 0 1 240 104v40h-40a40 40 0 0 1-2.86-79.89ZM276 480h92a64 64 0 0 0 64-64V296a8 8 0 0 0-8-8H276a4 4 0 0 0-4 4v184a4 4 0 0 0 4 4Z"/></svg>
              <h2>Grandes Descuentos</h2>
            </div>
            <div className='container-see'>
             <NavLink to="/BigDiscount"><span>Ver Todas </span></NavLink> 
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M11.7 15.3q-.475.475-1.087.213T10 14.575v-5.15q0-.675.613-.938T11.7 8.7l2.6 2.6q.15.15.225.325T14.6 12q0 .2-.075.375t-.225.325l-2.6 2.6Z"/></svg>
            </div>

          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
