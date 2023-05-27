import React, { createContext, useContext, useState } from "react";

const storesProduct = createContext();

export const useContextProduct = () => useContext(storesProduct);

export const UseContestStores = ({ children }) => {
  const [productCrad, setproductCard] = useState([]);

  const getProductCard = async (id) => {
    
  };

  return <div>UseContestStores</div>;
};
