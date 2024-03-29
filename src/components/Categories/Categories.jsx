import React from "react";
import image from "../../img/Product Image.png";
import { FaRegHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import "./Categories.css";
import { useState } from "react";

export default function Categories() {
  const [number, setNumber] = useState(0)
  return (
    <div id="Categories">
      <div className="container">
        <div className="Categories">
          <img src={image} alt="" />
          <div className="texts">
            <div className="logo">
              <h2>
                THE BOY, THE MOLE, THE FOX <br /> AND THE HORSE <br />
                <span>by Charlie Mackesy</span>
              </h2>
              <span className="nn">
                <FaRegHeart  style={{fontSize: "27px"}}/> <CiShare2 style={{fontSize: "27px"}} />
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit, sed do <br />
              eiusmod tempor incididunt ut labore et <br />
              dolore magna aliqua.
            </p>
            <h3>$99</h3>
            <div className="btn-cunter">
              <button className="add">Add to Cart </button>
              <div className="minus">
                <button onClick={() => {
                  setNumber(number - 1)
                }} className="minus_btn">-</button>
                <h3>{number}</h3>
                <button onClick={() => {
                  setNumber(number + 1)
                }}  className="plus_btn">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
