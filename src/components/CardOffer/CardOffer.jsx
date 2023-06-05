import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../flashDeals/style.css";
import { ToastContainer, toast } from "react-toastify";
import { TodoGetApis } from "../../Apis/Apis";
import { useNavigate, useParams } from "react-router-dom";
import { useContextShopCar } from "../../Hook/UseContextShop";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardOffer = () => {
  let { code } = useParams();
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const { postProductCar, addCard } = useContextShopCar();

  let limite = 0;
  useEffect(() => {
    (async () => {
      setLoad(true)
      const response = await TodoGetApis.GetProduct(limite, code);
      setProduct(response.data.rows);
      setLoad(false)
    })();
  }, []);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  let token = localStorage.getItem("token");
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
        img: data.img_product,
        description: data.description_product,
        discount: data.dicount,
        amount: 1,
      };

      const response = await postProductCar(carrito);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="  grid gap-4 grid-cols-4 grid-rows-3">
        {/* <Slider {...settings}> */}
        {product.length > 0 ? (
          product.map((productItems) => {
            return (
              <div className=" ">
                {
                  load   === false?(
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
                        <button
                          className="bg-gray-100 py-1 px-3  border border-2 rounded-md"
                          onClick={() => handdleCarShop(productItems)}
                        >
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
          })
        ) : (
          <h1>loading</h1>
        )}

        {/* </Slider> */}
      </div>
    </>
  );
};

export default CardOffer;
