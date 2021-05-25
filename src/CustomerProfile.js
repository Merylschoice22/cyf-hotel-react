import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState("");
  console.log(`Fetching customer ${props.id}'s profile`);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => {
        setProfile(data);
      });
  }, [props.id]);

  return (
    <div>
      <h2>Customer {props.id}'s Profile</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">VIP</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{profile.id}</td>
            <td>{profile.email}</td>
            <td>{profile.vip ? "Yes" : "No"}</td>
            <td>{profile.phoneNumber}</td>
          </tr>
        </tbody>
      </table>
      {/* <ul>
        <li>ID: {profile.id}</li>
        <li>EMAIL: {profile.email}</li>
        <li>VIP: {profile.vip ? "Yes" : "No"}</li>
        <li>PHONE: {profile.phoneNumber}</li>
      </ul> */}
    </div>
  );
};

export default CustomerProfile;
