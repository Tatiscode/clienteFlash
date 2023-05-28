import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { TodoGetApis } from "../../Apis/Apis";

const Catg = () => {
  const { code } = useParams();
  const [stores, setStores] = useState([]);
  const [bann, setBann] = useState(false)
  const [idStore, setIdStore] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    (async () => {
      let response = await TodoGetApis.GetStoresMall(code, idStore);
      setStores(response.data.data);
    })();
  }, [code]);

  // alert(idStore);

  return (
    <>
      <div className="categoryBi sticky">
        <div className="chead d_flex">
          <h1>Tiendas </h1>
        </div>
        {stores.length > 0 ? (
          <>
            {stores.map((y) => {
              return (
                <div className="flex w-[100%] items-center" onClick={()=> {
                  setIdStore(y.id_store)
                  
                }}>
                  <div className="w-[70px] ">
                    <img src={y.img_store} alt="" />
                  </div>
                  <span className="ml-4 font-bold">{y.name_store}</span>
                </div>
              );
            })}
          </>
        ) : (
          <h1>No hay tiendas</h1>
        )}
      </div>
    </>
  );
};

export default Catg;
