import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import NewCustomerForm from "./NewCustomerForm.js";

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
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log("Fetching bookings");
    fetch("https://cyf-react.glitch.me/")
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        }

        console.log(data);
        setBookings(data);
        setFetchedBookings(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError(error);
      });
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <h2> LOADING CUSTOMER DATA . . . PLEASE WAIT</h2>
        ) : (
          <SearchResults
            author="Kimberly"
            results={bookings}
            error={error}
            FakeBookings={FakeBookings} // replace with input values
          />
        )}
        <NewCustomerForm />
      </div>
    </div>
  );
};

export default Bookings;
