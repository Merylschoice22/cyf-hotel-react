import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  // const onSearch = (props) => {
  //   // props.search(searchInput);
  // };

  // const customerName = () => {
  //   console.log(document.getElementById("customerName").value);
  // };

  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    console.log(`Input value was: ${searchInput}`);
  };

  const handleSubmit = event => {
    props.search(searchInput);
    event.preventDefault();
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <SearchButton
              // onSearch={onSearch}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
