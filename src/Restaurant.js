import React from "react";
import Order from "./Order";
import "./App.css";

const Restaurant = () => {
  const orderTypes = ["Pizzas", "Salads", "Chocolate cakes", "Drinks"];

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {orderTypes.map((orderType, index) => {
          return <Order orderType={orderType} key={index} />;
        })}
        {/* <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" /> */}
      </ul>
    </div>
  );
};

export default Restaurant;
