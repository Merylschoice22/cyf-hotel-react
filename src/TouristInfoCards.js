import React from "react";
import "./App.css";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <div className="card">
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1589982334462-f1cead0e1519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
          alt="Glasgow city"
        />
        <div className="card-body justify-content-center d-flex">
          <a
            className="btn btn-primary"
            href="http://www.peoplemakeglasgow.com"
          >
            Visit Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1558904486-721233c31589?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
          alt="Glasgow city"
        />
        <div className="card-body justify-content-center d-flex">
          <a className="btn btn-primary" href="http://www.visitmanchester.com">
            Visit Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Glasgow city"
        />
        <div className="card-body justify-content-center d-flex">
          <a className="btn btn-primary" href="http://www.visitlondon.com">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
