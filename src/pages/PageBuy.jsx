import React, { useEffect, useState } from "react";
import RegisterSales from "../components/FormsEmployed/RegisterSales/RegisterSales";
import DataTableBuy from "../Table/DataTableBuy";
import MenuEmployed from "../components/MenuEmployed/MenuEmployed";
import { ToastContainer, toast } from "react-toastify";
import "../components/Login/user.css";
import { TodoGetApis } from "../Apis/Apis";

function PageBuy() {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState([]);
  const [select, setSelect] = useState();
  const [dataTable, setDataTable] = useState([]);
  const [total, setTotal] = useState(0);
  const [employee, setEmployee] = useState([]);
  let suggestions = getSuggestions(select);
  const [back, setBack] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  let styles = null;

  function getSuggestions(data) {
    let options = [];
    if (data) {
      options = products.filter((product) =>
        product.name_product.toLowerCase().includes(data.toLowerCase())
      );
    }
    return options;
  }

  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };

  const handdlePago = (e) => {
    if (e.target.value !== null) {
      setSubTotal(total);
      setBack(back);
    }
  };

  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  const addTable = () => {
    let product = products.find((product) => product.id_product == select);
    if (product !== undefined) {
      if (counter !== 0) {
        let data = {
          id_product: product.id_product,
          name_product: product.name_product,
          price_product: product.price_product,
          quantity: counter,
          total: counter * product.price_product,
          dicount: product.dicount,
        };
        setTotal(total + data.total);
        setCounter(0);
        setSelect("");
        setDataTable([...dataTable, data]);
      } else {
        toast.warn("Ingrese una cantidad", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
    } else {
      toast.warn("Producto no encontrado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetProductsStore();
      const responseEmployee = await TodoGetApis.GetEmployee();
      setEmployee(responseEmployee.data.data);
      setProducts(response.data.rows);
      setSubTotal(total);
      setBack(back);
    })();
  }, []);

  return (
    <>
      <ToastContainer />
      <div>
        <aside class="ml-[-100%] fixed top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
          <MenuEmployed />
        </aside>
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] flex flex-col  justify-center items-center">
          <div className="ml-14  px-7 pt-7 flex justify-between items-center w-[1350px] ">
            <h1>VENTA PRESENCIAL</h1>
            <div className="flex mr-16 items-center">
              <p className="text-[18px]">EMPLEADO:</p>
              {employee.length > 0 ? (
                <p className="ml-1 text-[15px]">
                  {employee.map((x) => x.name_employee)}
                </p>
              ) : (
                "Anonimo"
              )}
            </div>
          </div>
          <div className="w-[1300px] ml-14 mt-4">
            <div className="flex w-full items-center">
              <div className="flex border border-gray-300 py-2 px-1 w-[500px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="gray"
                    d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3ZM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Buscar producto"
                  className="ml-2 w-full"
                  onChange={(e) => {
                    setSelect(e.target.value);
                  }}
                />
              </div>
              <label className="ml-7"> Cantidad:</label>
              <div className="ml-4">
                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                  <button
                    onClick={() => {
                      if (counter > 0) {
                        setCounter(counter - 1);
                      }
                    }}
                    data-action="decrement"
                    class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span class="m-auto text-2xl font-thin">−</span>
                  </button>
                  <div class=" none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-700  outline-none">
                    {counter}
                  </div>
                  <button
                    onClick={() => {
                      setCounter(counter + 1);
                    }}
                    data-action="increment"
                    class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span class="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              <div className="flex w-full justify-end right-0">
                <div className="flex justify-end mr-12 w-[100px]  items-center">
                  <button
                    className="pink w-[10px]"
                    onClick={() => {
                      addTable();
                    }}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
            {suggestions.length > 0 ? (
              <div>
                <select
                  value={select}
                  onChange={handleSelectChange}
                  className="border border-gray-300 py-2 px-1 w-[300px] mt-2"
                >
                  <option>Seleccione un producto</option>
                  {suggestions.map((product) => (
                    <option key={product.id_product} value={product.id_product}>
                      {product.name_product}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}
          </div>

          <div className="w-[100%]">
            <DataTableBuy data={dataTable} />
          </div>
          <div className=" ml-14  px-7 pt-7 flex  w-[1300px] justify-between items-center">
            <div className="flex items-center justify-center w-[250px] text-base">
              <p className="text-base">Total a pagar:</p>
              <p className="text-base ml-2 font-bold">
                {total !== 0 ? money.format(total) : money.format(0)}
              </p>
            </div>
            <div className="flex">
              <label className="">Pago:</label>
              <div className="border border-gray-300 h-[30px] flex justify-center p-1 ml-4">
                <input
                  type="number"
                  onChange={(e) => {
                    handdlePago(e);
                  }}
                  placeholder="Ingrese el pago"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              {subTotal - back ? (
                <>
                  <label className="text-base">Cambio:</label>
                  <p className={
                    subTotal - back > 0 ? "text-base ml-2 text-red-500 font-bold" : "text-base ml-2 text-green-500 font-bold"
                  }>
                    {money.format(back - subTotal)}
                  </p>
                </>
              ) : (
                <p className="text-base ml-2 text-green-500 font-bold">
                  {money.format(0)}
                </p>
              )}
            </div>
            <div className=" w-[180px] flex justify-end h-[50px] mr-20">
              <button className="pink">Finalizar venta</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageBuy;
