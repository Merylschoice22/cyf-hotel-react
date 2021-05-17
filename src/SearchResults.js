import React, { useState } from "react";
import Customer from "./Customer";
import CustomerProfile from "./CustomerProfile";
import "./App.css";

const SearchResults = props => {
  const [profileID, setProfileID] = useState("");
  const handleProfileRequest = id => {
    setProfileID(id);
  };

  // DELAY MESSAGE
  {
    /* 
   className={props.loading.toString()}
   
   <tr className={props.loading.toString()}>
            LOADING CUSTOMER DATA . . .
          </tr> 
          
          
          */
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Total nights</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {props.results.map((customer, index) => (
            <Customer
              key={index}
              customer={customer}
              handleProfileRequest={handleProfileRequest}
            />
          ))}
        </tbody>
      </table>
      {profileID && <CustomerProfile id={profileID} />}
    </div>
  );
};

export default SearchResults;
