import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    const guests = bookings;
    const filteredGuests = guests.filter(guest => {
      let byName = guest.firstName.toLowerCase();
      let bySurname = guest.surname.toLowerCase();
      if (byName === searchVal.toLowerCase()) {
        return byName;
      } else if (bySurname === searchVal.toLowerCase()) {
        return bySurname;
      }
      return filteredGuests;
    });
    setBookings(filteredGuests);
  };

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Fetching bookings");
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBookings(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults author="Kimberly" results={bookings} loading={loading} />
      </div>
    </div>
  );
};

export default Bookings;
