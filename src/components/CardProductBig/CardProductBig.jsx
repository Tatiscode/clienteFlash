import React from 'react'
import './cardProducts.css'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
import Counter from '../Counter/Counter'
function CardProductBig() {
  return (
    <>
    <Header/>
    <div className="boxBig">
    <div className="boxProduct">
    <div className="imgProduct">
        <img src="https://res.cloudinary.com/deoe4gcly/image/upload/v1683207720/41cwZoc9T3L._AC__zlltqf.jpg" alt="" />
        
        </div>
        <div className="infoProduct">
          <div className="nameProduct">
        <p>Mini Impresora Térmica Portátil Papel Foto Bolsillo 57 Mm Impresión Impresoras Inalámbricas Bluetooth IOS Android</p>
        </div>
        <div className="priceProduct">
        <p>COP23.312 - COP51.601</p>
          <p className="impuestos">Impuestos incluidos (Si aplica)</p>
        </div>
        <div className="amountProduct">
          <div className="infooo">
        <p>Cantidad</p>
        </div>
        <div className="buttonsBox">
       <Counter/>
        </div>
        </div>
        <div className="amount">
        <p>400 Cantidades disponibles</p>
        </div>
        <div className="buttonsBuy">
        <button className='addCar'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9q-.425 0-.713-.288T11 8V6H9q-.425 0-.713-.288T8 5q0-.425.288-.713T9 4h2V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2h2q.425 0 .713.288T16 5q0 .425-.288.713T15 6h-2v2q0 .425-.288.713T12 9ZM7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.15 0-1.738-.988T5.25 14.05L6.6 11.6L3 4H2q-.425 0-.713-.288T1 3q0-.425.288-.713T2 2h1.625q.275 0 .525.15t.375.425L8.55 11h7l3.575-6.475q.125-.25.363-.388T20 4q.575 0 .863.5t.012 1L17.3 11.95q-.275.5-.725.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16q0 .425-.288.713T18 17H7Z"/></svg>Añadir al carrito</button>
        <button className='buy'>Comprar Ahora</button>
        </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default CardProductBig