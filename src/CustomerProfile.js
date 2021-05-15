import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState("");
  console.log("Fetching your customer profile");
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`) //fix the link
      .then(response => response.json())
      .then(data => {
        setProfile(data);
      });
  }, [props.id]); //Is this the right dependency?

  return (
    <div>
      <h2>Customer {props.id}'s Profile</h2>
      <ul>
        <li>ID: {profile.id}</li>
        <li>EMAIL: {profile.email}</li>
        <li>VIP: {profile.vip ? "Yes" : "No"}</li>
        {/* Boolean? */}
        <li>PHONE: {profile.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
