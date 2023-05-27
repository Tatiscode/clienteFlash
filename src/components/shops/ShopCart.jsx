import React, { useEffect, useState } from "react";
import { TodoGetApis } from "../../Apis/Apis";
import { useNavigate, useParams } from "react-router-dom";

const ShopCart = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  let idStore = 0;

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetProductsStoresMall(code);
      setProducts(response.data.rows);
    })();
  }, []);

  return (
    <>
      <div className=" grid gap-4 grid-cols-3 grid-rows-3">
        {products.length > 0 ? (
          <>
            {products.map((productItems) => {
              return (
                <div className=" ">
                  <div className="product border m-1 ">
                    <div className="flex justify-between">
                      <p className="disponible">
                        {productItems.availability_product === "available"
                          ? "Disponible"
                          : "Agotado"}
                      </p>
                      <p>
                        {productItems.dicount !== 0
                          ? productItems.dicount + "%"
                          : null}
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
          </>
        ) : (
          <h1>No hay data</h1>
        )}
      </div>
    </>
  );
};

export default ShopCart;
