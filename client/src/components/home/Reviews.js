import React from "react";
import { Link } from "react-router-dom";
import "./Reviews.css";

const Reviews = (props) => {
  return (
    <React.Fragment>
      <div className="reviews-wrapper d-flex flex-column justify-content-center align-items-center">
        <div>
          <h1>innovative design that rules the pitch</h1>
        </div>
        <div>
          <Link to="/">link</Link>
          <Link to="/">link</Link>
          <Link to="/">link</Link>
        </div>
        <div>
          <img />
          <img />
          <img />
          <img />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Reviews;
