import React, { useState, useEffect } from "react";

import "../flashDeals/style.css";
import { TodoGetApis } from "../../Apis/Apis";
import { ToastContainer, toast } from "react-toastify";
import { useContextShopCar } from "../../Hook/UseContextShop";
import { NavLink, useNavigate } from "react-router-dom";

function DiscountCard() {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [productShop, setproductShop] = useState([]);
  const navigate = useNavigate();

  const { postProductCar, addCard } = useContextShopCar();

  let token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetProductDiscount();
      setProduct(response.data.data);
      console.log(response);
    })();
  }, []);

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
      };

      const response = await postProductCar(carrito);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="">
        <div className="  grid gap-4 grid-cols-4 grid-rows-3">
          {product.length > 0 ? (
            product.map((productItems) => {
              return (
                <div className="  ">
                  <div className="product border m-1 ">
                    <div className="flex justify-between p-2">
                      <p className="disponible">
                        {productItems.availability_product === "available"
                          ? "Disponible"
                          : "No Disponible"}
                      </p>
                      <p className="bg-pink-500 text-white p-1 px-2 rounded">
                        {productItems.dicount}%
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
                      <div className="price flex flex-col">
                        <div>
                          <h4 className="font-bold line-through text-red-600">
                            {money.format(productItems.price_product)}
                          </h4>
                        </div>
                        <div className="flex justify-end">
                          <h3 className="text-black font-bold">
                            {money.format(
                              (productItems.price_product *
                                productItems.dicount) /
                                100 -
                                productItems.price_product
                            )}
                          </h3>
                        </div>

                        {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                      </div>

                      <div className="flex justify-between item-center mt-4">
                        <div className="truncate ">
                          {/* <NavLink to="/CardProducts"  > */}
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
                          {/* </NavLink> */}
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
                </div>
              );
            })
          ) : (
            <h1>no hay data</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default DiscountCard;
