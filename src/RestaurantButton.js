import React from "react";

const RestaurantButton = props => {
  return (
    <button
      className="btn btn-primary"
      onClick={event => {
        props.order(event);
        props.pizzas(event);
      }}
    >
      Add
    </button>
  );
};

export default RestaurantButton;
