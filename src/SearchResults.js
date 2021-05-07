import React from "react";
import moment from "moment";

const SearchResults = props => {
  console.log(props);
  const calculateNights = (firstDate, secondDate) => {
    const checkIn = moment(Date.parse(firstDate));
    // console.log(Date.parse(firstDate));
    const checkOut = moment(Date.parse(secondDate));
    return checkOut.diff(checkIn, "day");
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
            <tr key={index}>
              {/* <th scope="row">{index}</th> */}
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
