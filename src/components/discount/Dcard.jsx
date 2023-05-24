import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../flashDeals/style.css";
import { TodoGetApis } from "../../Apis/Apis";


const DCard = () => {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetProduct();
      console.log(response);
      setProduct(response.data.rows);
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
}
  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  return (
    <>
      <div className="">
        <Slider {...settings}>
          {product.map((productItems) => {
            return (
              <div className="  ">
                <div className="product border m-1 ">
                  <div className="flex justify-between p-2">
                    <p className="disponible">
                      {productItems.availability_product === "available"
                        ? "Disponible"
                        : "No Disponible"}
                    </p>
                    <p className="bg-pink-500 text-white p-1 px-2 rounded"> 50%</p>
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
                        <a
                          href="/"
                          className="text-white compra pink text-white rounded-md inline-block truncate i"
                        >
                          Comprar Ahora
                        </a>
                      </div>
                      <div className="">
                        <button className="bg-gray-100 py-1 px-3  border border-2 rounded-md">
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
          })}
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
