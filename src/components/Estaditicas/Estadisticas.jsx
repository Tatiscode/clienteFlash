import React, { useState, useEffect } from "react";
import MenuEmployed from "../MenuEmployed/MenuEmployed";
import estadisticas from "../Estaditicas/estadisticas.css";
import CardCategorys from "./CardCategorys";
import { TodoGetApis } from "../../Apis/Apis";
import DataTableCategory from "../../Table/DataTableCategory";

function Estadisticas() {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.getCategoryStore();
      setCategorys(response.data.data);
    })();
  }, []);

  console.log(categorys);

  return (
    <>
      <h1>Mis Categorias</h1>
      <MenuEmployed />
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <h1>Categorias</h1>
        
      <DataTableCategory data={categorys} />
      </div>
    </>
  );
}

export default Estadisticas;
