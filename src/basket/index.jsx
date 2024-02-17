import React from "react";
import { useProduct } from "../components/context/ProductContext";

const Basket = () => {
  const { basketData } = useProduct();
  console.log(basketData);
  return (
    <div id="basket">
      <div className="container">
        <div style={{
            display: "flex",
            flexWrap: 'wrap',
            alignItems: "center",
            gap: '20px',
        }} className="basket">
          {basketData.map((el) => (
            <div style={{
                flexDirection: 'column',
                fontSize: '10px',
            }}>
               <img style={{ width: "200px",height: "300px" }} src={el.img} alt="" />
                <h1>{el.name}</h1>

            </div>  
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
