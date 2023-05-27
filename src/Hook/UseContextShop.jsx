import React, { useState, useContext, createContext, useReducer } from "react";
import { TodoGetApis } from "../Apis/Apis";

const shopCreateContext = createContext();
export const useContextShopCar = () => useContext(shopCreateContext);

export const UseContextShop = ({ children }) => {
  const [addCard, setAddCard] = useState([]);

  const getProductCar = async () => {
    // try {
    //     const  response = await TodoGetApis.GetCar();
    //     return response
    // } catch (error) {
    //     return error
    // }
  };

  const postProductCar = async (data) => {
    try {
      const response = await TodoGetApis.AddCarShop(data);

      return response;
    } catch (error) {
      return error;
    }
  };

  return (
    <shopCreateContext.Provider
      value={{
        postProductCar,
        addCard,
        getProductCar,
      }}
    >
      {children}
    </shopCreateContext.Provider>
  );
};
