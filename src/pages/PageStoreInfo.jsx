import React, { useEffect, useState } from "react";
import MenuAdmin from "../components/MenuAdmin/MenuAdmin";
import { useParams, useNavigate } from "react-router-dom";
import { TodoGetApis } from "../Apis/Apis";
import DataTableStore from "../Table/DataTableStore";

function PageStoreInfo() {
  const navigate = useNavigate();
  const [store, setStores] = useState([false]);
  const [modalDelete, setModalIsDelete] = useState([]);
  const [dataColumn, setDataColumn] = useState([]);

  if (modalDelete === true) {
    let codeStore = dataColumn.id_store;
    navigate("/DeleteStore/" + codeStore);
  }

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.getStoresAdmin();
      setStores(response.data.data);
    })();
  }, []);

  return (
    <>
      <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <MenuAdmin />
      </aside>
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <h1>Tiendas</h1>
        <DataTableStore data={store} />
      </div>
    </>
  );
}

export default PageStoreInfo;
