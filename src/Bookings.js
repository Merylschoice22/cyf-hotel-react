import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    //reset bookings
    // const guests = bookings;
    const filteredGuests = fetchedBookings.filter(guest => {
      let byName = guest.firstName.toLowerCase();
      let bySurname = guest.surname.toLowerCase();
      return (
        bySurname === searchVal.toLowerCase() ||
        byName === searchVal.toLowerCase()
      );

      // return filteredGuests;
    });
    setBookings(filteredGuests);
  };

  const [bookings, setBookings] = useState([]);
  const [fetchedBookings, setFetchedBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Fetching bookings");
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBookings(data);
        setFetchedBookings(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <h2> LOADING CUSTOMER DATA . . . PLEASE WAIT</h2>
        ) : (
          <SearchResults author="Kimberly" results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
