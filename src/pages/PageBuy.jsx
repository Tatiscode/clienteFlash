import React from "react";
import RegisterSales from "../components/FormsEmployed/RegisterSales/RegisterSales";
import DataTableBuy from "../Table/DataTableBuy";
import MenuEmployed from "../components/MenuEmployed/MenuEmployed";
import DataTableMBuysUser from "../components/MenuUser/DataTableBuysUser";
import "../components/Login/user.css";

function PageBuy() {
  return (
    <div>
      <aside class="ml-[-100%] fixed top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <MenuEmployed />
      </aside>
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] flex flex-col  justify-center items-center">
        <div className="ml-14  px-7 pt-7 flex justify-between w-[1350px] ">
          <h1>VENTA PRESENCIAL</h1>
          <div className="flex mr-16">
            <p>EMPLEADO:</p>
            <p className="ml-1">ZHARICK</p>
          </div>
        </div>
        <div className="flex p-4 w-[1300px] ml-14 items-center ">
          <div className="flex border border-gray-300 py-2 px-1 w-[300px] ">
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
            <input type="text" placeholder="Buscar producto" className="ml-2" />
          </div>
          <label className="ml-7"> Cantidad:</label>
          <div className="border border-gray-300 ml-2 w-[300px]">
            <input className="p-2  " type="text" placeholder="Cantidad" />
          </div>
          <div className="flex  w-[430px] justify-end">
            <div className="flex justify-end w-[100px]  items-center">
              <button className="pink w-[10px] ">Agregar</button>
            </div>
          </div>
        </div>

        <div className="w-[100%]">
          <DataTableBuy />
        </div>
        <div className=" ml-14  px-7 pt-7 flex  w-[1300px] justify-between items-center">
          <div className="flex items-center justify-center w-[190px] text-base">
            <p className="text-base">Total a pagar:</p>
            <p className="text-base ml-2">32.000</p>
          </div>
          <div className="flex">
            <label className="">Pago:</label>
            <div className="border border-gray-300 h-[30px] flex justify-center p-1 ml-4">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <label className="text-base">Cambio:</label>
            <p className="text-base ml-2">5000</p>
          </div>
          <div className=" w-[180px] flex justify-end h-[50px] mr-20">
            <button className="pink">Finalizar venta</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageBuy;
