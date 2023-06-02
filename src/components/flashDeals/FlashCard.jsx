import React, { useState,useEffect } from "react"
import Slider from "react-slick"
 import "slick-carousel/slick/slick.css"
 import "slick-carousel/slick/slick-theme.css"
 import './style.css'
 import { TodoGetApis } from "../../Apis/Apis"
 import { ToastContainer, toast } from "react-toastify";
 import { useContextShopCar } from "../../Hook/UseContextShop";
import { useNavigate } from "react-router-dom"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// const SampleNextArrow = (props) => {
//   const { onClick } = props
//   return (
//     <div className='control-btn' onClick={onClick}>
//       <button className='next'>
//       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M11.3 19.3q-.275-.275-.288-.7t.263-.7l4.9-4.9H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.275-.275-.263-.7t.288-.7q.275-.275.7-.275t.7.275l6.6 6.6q.15.125.213.313t.062.387q0 .2-.062.375t-.213.325l-6.6 6.6q-.275.275-.7.275t-.7-.275Z"/></svg>
//       </button>
//     </div>
//   )
// }

// const SamplePrevArrow = (props) => {
//   const { onClick } = props
//   return (
//     <div className='control-btn' onClick={onClick}>
//       <button className='prev'>
//       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"/></svg>
//       </button>
//     </div>
//   )
// }
const FlashCard = () => {
  const [count, setCount] = useState(0)
  const [product, setProduct ] = useState([])
  const [productShop, setProductShop] =useState([])
  const {postProductCar, addCard, getProductCar}=useContextShopCar();
  
  const [load, setLoad] = useState(false);

  const navigate = useNavigate()

  let limite = 12
  let code = 0
  let token =localStorage.getItem("token")
  useEffect (()=>{
    (async()=>{
      setLoad(true)
      const response = await TodoGetApis.GetProduct(limite, code);
      setProduct(response.data.rows);
      setLoad(false)
      
    }
    )()
  },[])
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  }
  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  const handdleCarShop = async (data) => {
    if (token === null) {
      toast.warn("Inicia sesión, para agregar al carrito!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      let carrito = {
        idProduct: data.id_product,
        nameProduct: data.name_product,
        code: data.id_store_product,
        price: data.price_product,
        amount: 1,
        img: data.img_product,
        description:data.description_product
      };

      const response = await postProductCar(carrito);
    }
  };

  return (
    <>
     <ToastContainer />
      <div className=" grid gap-4 grid-cols-4 grid-rows-3">
        {/* <Slider {...settings}> */}
        
    
        {  product.length > 0 ? (
          <>
          {product.map((productItems) => {
            return (
              <div className=" ">
                {
                  load  ? (

         
          
        
        
          <div className="product border m-1 ">
            <div className="flex justify-between p-2">
              <div className="disponible">
              <Skeleton width={80}/>
              </div>
              <div className="">
                <Skeleton width={30}/>
              </div>
            </div>
          <div className="flex justify-center items-center">
          <Skeleton width={220} height={180}/>

          </div>
          <div className="product-details p-4">
                      <div className="info">
                       <Skeleton width={100}/>
                        <Skeleton width={90}/>
                      </div>
                      <div className="div">
<Skeleton width={150}/>
                      </div>
                     
                      <div className="price">
                        
                          <Skeleton width={100}/>
                        <Skeleton width={100}/>
                       
                  
                      </div>
                      <div className="flex justify-between item-center mt-4">
                       <div className="div">
                        <Skeleton width={90} height={30}/>

                       </div>
                       <div className="div">
                        <Skeleton width={60} height={30}/>
                       </div>
                      </div>
                    </div>
          </div>
          
         
                  ):(

                <div className="product border m-1 ">
                  <div className="">
                    <p className="disponible">
                      {productItems.availability_product === "available"
                        ? "Disponible"
                        : "No Disponible"}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      className=" w-[200px] object-cover"
                      src={productItems.img_product}
                      alt=""
                    />
                  </div>
                  <div className="product-details p-4">
                    <div className="info">
                      <h3>{productItems.name_product}</h3>
                      <p>
                        {("" + productItems.amount_poduct).replace(
                          /(\d)(?=(\d\d\d)+(?!\d))/g,
                          "$1."
                        )}{" "}
                        Unidades
                      </p>
                    </div>
                    <p className="truncate">
                      {productItems.description_product}
                    </p>
                    <div className="price">
                      <h4 className="text-black font-bold">
                        {money.format(productItems.price_product)}{" "}
                      </h4>

                      {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    </div>

                    <div className="flex justify-between item-center mt-4">
                      <div className="truncate ">
                        <span
                          className="text-white compra pink text-white rounded-md inline-block truncate i"
                          onClick={() => {
                            navigate(
                              `/CardProducts/${productItems.id_product}`
                            );
                          }}
                        >
                          Comprar Ahora
                        </span>
                      </div>
                      <div className="">
                        <button className="bg-gray-100 py-1 px-3  border border-2 rounded-md"
                        onClick={()=> handdleCarShop(productItems) }>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 48 48"
                          >
                            <g fill="none" stroke="#475569" stroke-width="4">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 7h6l7 17h17.5L43 10m-22 2h12m-6-6v12m-9 6l-4 6h26"
                              />
                              <circle cx="19" cy="39" r="3" />
                              <circle cx="35" cy="39" r="3" />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                  )
                }
              </div>
            );
          })}
          {/* </Slider> */}
        </>
        ) : (
          <h1>No hay data</h1>
        )
        }
        
      </div>
    </>
  );
}

export default FlashCard
