import React, { useState } from "react";
import moment from "moment";
import "./App.css";

const SearchResults = props => {
  // HIGHLIGHT ROW WHEN SELECTED
  const [selectStatus, setSelectStatus] = useState(0);
  const highlightRow = () => {
    if (selectStatus === "") {
      console.log("Highlight row");
      setSelectStatus("table-row");
    } else {
      console.log("Remove highlight");
      setSelectStatus("");
    }
  };

  // CALCULATE NIGHTS FUNCTION FOR TABLE
  const calculateNights = (firstDate, secondDate) => {
    const checkIn = moment(firstDate);
    const checkOut = moment(secondDate);
    return checkOut.diff(checkIn, "days");
  };

  //   if (props.results.length > 0) {
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
          </tr>
        </thead>
        <tbody>
          {props.results.map((customer, index) => (
            <tr key={index} className={selectStatus} onClick={highlightRow}>
              <td>{customer.id}</td>
              <td>{customer.title}</td>
              <td>{customer.firstName}</td>
              <td>{customer.surname}</td>
              <td>{customer.email}</td>
              <td>{customer.roomId}</td>
              <td>{customer.checkInDate}</td>
              <td>{customer.checkOutDate}</td>
              <td>
                {calculateNights(customer.checkInDate, customer.checkOutDate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  //   }
};

export default SearchResults;
