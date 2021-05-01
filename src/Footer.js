import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.addressInfo.map(info => (
        <li>{info}</li>
      ))}
    </ul>
  );
};

export default Footer;
