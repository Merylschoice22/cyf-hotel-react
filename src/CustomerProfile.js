import React from "react";

const CustomerProfile = props => {
  const showProfile = () => {
    console.log("Dog");
  };
  return (
    <div>
      <h1>Customer {props.id}'s Profile</h1>
      <p>{showProfile}</p>
    </div>
  );
};

export default CustomerProfile;
