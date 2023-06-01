import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../flashDeals/style.css";
import { TodoGetApis } from "../../Apis/Apis";
import { ToastContainer, toast } from "react-toastify";
import { useContextShopCar } from "../../Hook/UseContextShop";
import { NavLink, useNavigate } from "react-router-dom";

const DCard = () => {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [productShop, setproductShop] = useState([]);
  const navigate = useNavigate();

  const { postProductCar, addCard, getProductCar } = useContextShopCar();

  let token = localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetProductDiscount();

      setProduct(response.data.data);
    })();
  }, []);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
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
        description: data.description_product,
        discount: data.dicount,
      };
      // console.log(carrito);

      const response = await postProductCar(carrito);
      // console.log(response);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="">
        <Slider {...settings}>
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
                      {productItems.dicount !== 0 ? (
                        <p className="bg-pink-500 text-white p-1 px-2 rounded">
                          {productItems.dicount}%
                        </p>
                      ) : null}
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        className=" w-[200px] bg-contain	object-cover"
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
                      <div className="price ">
                        <h4 className="font-bold line-through text-red-600">
                          {money.format(productItems.price_product)}
                        </h4>
                        <h3 className="text-black font-bold">
                          {money.format(
                            (productItems.price_product *
                              productItems.dicount) /
                              100 -
                              productItems.price_product
                          )}
                        </h3>
                      </div>
                      <div className="flex justify-between item-center mt-4">
                        <div className="truncate ">
                          <span
                            className="compra pink text-white rounded-md inline-block truncate i"
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
                </div>
              );
            })
          ) : (
            <h1>no hay data</h1>
          )}
        </Slider>
      </div>
    </>
  );
};

export default DCard;

// const settings = {
//   dots: false,
//   infinite: true,
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   autoplay: true,
// }
