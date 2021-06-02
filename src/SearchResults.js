import React, { useState } from "react";
import Customer from "./Customer";
import CustomerProfile from "./CustomerProfile";
import "./App.css";

const SearchResults = props => {
  const [profileID, setProfileID] = useState("");
  const handleProfileRequest = id => {
    setProfileID(id);
  };

  const sortIDDesc = () => {
    const sortID = props.FakeBookings.sort((a, b) => b.id - a.id);
    console.log(sortID);
    return sortID;
  };

  const sortIDAsc = () => {
    const sortID = props.FakeBookings.sort((a, b) => a.id - b.id);
    console.log(sortID);
    return sortID;
  };

  const sortSurnameAZ = () => {
    const sortSurname = props.FakeBookings.sort((a, b) => {
      const customerA = a.surname.toUpperCase();
      const customerB = b.surname.toUpperCase();
      if (customerA < customerB) {
        return -1;
      }
      if (customerA > customerB) {
        return 1;
      }
      return 0;
    });
    console.log(sortSurname);
    return sortSurname;
  };

  const sortSurnameZA = () => {
    const sortSurname = props.FakeBookings.sort((a, b) => {
      const customerA = a.surname.toUpperCase();
      const customerB = b.surname.toUpperCase();
      if (customerB < customerA) {
        return -1;
      }
      if (customerB > customerA) {
        return 1;
      }
      return 0;
    });
    console.log(sortSurname);
    return sortSurname;
  };

  const [sortBy, setSortBy] = useState(sortSurnameAZ);
  // sortIDAsc();
  // sortIDDesc();
  // sortSurnameAZ();
  // sortSurnameZA();

  // Created 4 functions - for sorting numbers and strings up and down. Works for ID, names, emails, and check in dates. Apply functions to renders will be () => {sortBy} Apply variables to functions to not repeat the code for each column clicked on.

  //Click to select active and activate functionUp. Clicking again activates functionDown

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
          {props.error ? (
            <h2>{props.error}</h2>
          ) : (
            props.results.map((customer, index) => (
              <Customer
                key={index}
                customer={customer}
                handleProfileRequest={handleProfileRequest}
              />
            ))
          )}
          {sortBy.map((
            customer,
            index //replace with input value
          ) => (
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
