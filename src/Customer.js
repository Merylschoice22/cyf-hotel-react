import React, { useState } from "react";
import moment from "moment";

const Customer = ({ customer, index, handleProfileRequest }) => {
  // CALCULATE NIGHTS FUNCTION FOR TABLE
  const calculateNights = (firstDate, secondDate) => {
    const checkIn = moment(firstDate);
    const checkOut = moment(secondDate);
    return checkOut.diff(checkIn, "days");
  };

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

  return (
    <tr className={selectStatus} onClick={highlightRow}>
      <td>{customer.id}</td>
      <td>{customer.title}</td>
      <td>{customer.firstName}</td>
      <td>{customer.surname}</td>
      <td>{customer.email}</td>
      <td>{customer.roomId}</td>
      <td>{customer.checkInDate}</td>
      <td>{customer.checkOutDate}</td>
      <td>{calculateNights(customer.checkInDate, customer.checkOutDate)}</td>
      <td>
        <button onClick={() => handleProfileRequest(customer.id)}>
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default Customer;
