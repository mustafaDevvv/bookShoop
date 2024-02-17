import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  let API_PRODUCT = "http://localhost:3000/product";
  let API_BASKET = "http://localhost:3000/basket"

  const [data, setData] = useState([]);
  const [basketData, setBasketData] = useState([]);
  console.log(basketData);
  
  async function addProduct(newProduct) {
    await axios.post(API_PRODUCT, newProduct);
  }

  async function readProduct() {
    const { data } = await axios(API_PRODUCT);
    setData(data);
  }

  async function addBasket(newBasketItem) {
    await axios.post(API_BASKET, newBasketItem);
    const { data } = await axios(API_BASKET);
    setBasketData(data);
  }

  async function readBasket() {
    const { data } = await axios(API_BASKET);
    setBasketData(data);
  }

  let values = {
    addProduct,
    readProduct,
    data,
    addBasket,
    readBasket,
    basketData
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
