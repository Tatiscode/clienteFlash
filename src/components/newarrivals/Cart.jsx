import React,{useState,useEffect} from "react"
import Ndata from "./Ndata"
import { TodoGetApis } from "../../Apis/Apis"


const Cart = () => {
  const [product, setProduct ] = useState([])
  useEffect (()=>{
    (async()=>{
      const response = await TodoGetApis.GetProductDate();
      console.log("product",response);
      setProduct(response.data.rows);
      
    }

    )() 
  },[])
   const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });
  return (
    <>
      <div className='content gridsp product1 '>
        {product.map((val) => {
          return (
            <div className='box' >
              <div className='img'>
                <img src={val.img_product} alt='' />
              </div>
              <h4>{val.name_product} </h4>
              <span>{money.format(val.price_product)}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart
