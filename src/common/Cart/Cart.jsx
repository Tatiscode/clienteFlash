import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import { ToastContainer, toast } from "react-toastify";
import { useContextShopCar } from "../../Hook/UseContextShop";
import { object } from "yup";

function Cart() {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [productShop, setproductShop] = useState([]);
  const {
    postProductCar,
    addCard,
    getProductCar,
    deleteProductCar,
    updateProductCar,
  } = useContextShopCar();

  useEffect(() => {
    (async () => {
      const response = await getProductCar();
      setProduct(response.data.rows);
    })();
  }, []);
  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  const DeleteProductCar = async (id) => {
    const response = await deleteProductCar(id);
  };

  const UpdateProductCar = async (id, amount, datas, typeDelete) => {
    const data = {
      amount,
      code: datas.id_store,
      type: typeDelete,
    };
    console.log(id, amount, datas);
    const response = await updateProductCar(id, data, datas);
    window.location.reload();
  };

  let totalBuy = addCard.reduce((a, b) => a + b.price_product, 0);
  let totalUnidades = addCard.reduce((a, b) => a + b.amount_Product, 0);

  return (
    <>
      <Header />

      <div class="h-screen bg-gray-100 pt-10">
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg md:w-2/3">
            {addCard.map((i) => (
              <>
                <div class="justify-between mb-6 relative rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <img className="w-32 rounded-md" src={i.img_producto} />
                  <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div class="mt-5 sm:mt-0">
                      <h2 class="text-lg font-bold text-gray-900">
                        {i.name_product}
                      </h2>
                      <p class="mt-1 text-xs text-gray-700">
                        {i.description_product}
                      </p>
                    </div>
                    <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div class="flex items-center border-gray-100">
                        <span
                          class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500
                         hover:text-blue-50"
                          onClick={() =>
                            UpdateProductCar(i.id_product, 1, i, "delete")
                          }
                        >
                          {" "}
                          -{" "}
                        </span>
                        <div className="h-8 w-8 border bg-white text-center text-xs outline-none ">
                          <span className="mt-2 block">{i.amount_Product}</span>
                        </div>

                        <span
                          class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          onClick={() =>
                            UpdateProductCar(i.id_product, 1, i, "add")
                          }
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div class="flex items-center space-x-4">
                        <p class="text-sm">{money.format(i.price_product)}</p>
                        <div
                          className="absolute top-2 right-3 bg-gray-100 rounded-full p-1"
                          onClick={() => DeleteProductCar(i.id_product)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 sticky top-[5rem]">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700 flex flex-col">
                {addCard.map((i) => (
                  <span>
                    {money.format(i.price_product * i.amount_Product)}
                  </span>
                ))}
              </p>
            </div>

            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">
                  {money.format(totalBuy * totalUnidades)}
                </p>
              </div>
            </div>
            <button class="pink mx-auto block">Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
