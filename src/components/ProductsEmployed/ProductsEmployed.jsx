import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import MenuEmployed from "../MenuEmployed/MenuEmployed";
import { TodoGetApis } from "../../Apis/Apis";
import moment from "moment-with-locales-es6";
import DataTableProducts from "../../Table/DataTableProducts";
moment.locale("es");
function ProductsEmployed() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetProductsStore();

      setProduct(response.data.rows);
    })();
  }, []);
  return (
    <div className="flash">
      <MenuEmployed />
  
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <h1>Productos</h1>
        <DataTableProducts data={product}/>
       
      </div>

      
    </div>
  );
}

export default ProductsEmployed;
