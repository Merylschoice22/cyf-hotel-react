import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import "./App.css";

const Order = props => {
  const [pizza, setPizza] = useState([]);
  const pizzaIMGLink =
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80";
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  const addPizzas = () => {
    setPizza(pizza.concat(pizzaIMGLink));
  };

  return (
    <li>
      <span className="li-text">
        {" "}
        {props.orderType}: {orders}
      </span>
      <RestaurantButton order={orderOne} pizzas={addPizzas} />
      <br />
      {pizza.map((pizzaIMG, index) => (
        <img key={index} className="pizza" src={pizzaIMG} alt="pizza" />
      ))}
    </li>
  );
};

export default Order;
