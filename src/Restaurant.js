import React from "react";
import Order from "./Order";
import "./App.css";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
      </ul>
    </div>
  );
};

export default Restaurant;
