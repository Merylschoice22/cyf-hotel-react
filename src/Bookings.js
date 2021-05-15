import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    const guests = bookings;
    const filteredGuests = guests.filter(guest => {
      return guest.firstName === searchVal;
    });
    setBookings(filteredGuests);
  };

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    console.log("Fetching bookings");
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults author="Kimberly" results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
