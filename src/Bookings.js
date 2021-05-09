import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    const guests = FakeBookings;
    const filteredGuests = guests.filter(guest => {
      return guest.firstName === searchVal;
    });
    setBookings(filteredGuests);
  };

  const [bookings, setBookings] = useState(FakeBookings);
  // const renderBookings = () => {};

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
