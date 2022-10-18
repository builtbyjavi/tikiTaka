import React from "react";
import { Link } from "react-router-dom";
import './FeaturedItem.css';

const FeaturedItem = (props) => {
  return (
    <React.Fragment>
      <div className="featured">
      <Link to="/about">
        <img src={props.img} alt="" className="img-fluid w-100" />
        <div className="text position-relative">
          <h4 className="position-absolute bottom-0 start-50 translate-middle-x text-white fw-light">
            {props.txt}
          </h4>
        </div>
      </Link>
      </div>
      
    </React.Fragment>
  );
};

export default FeaturedItem;
