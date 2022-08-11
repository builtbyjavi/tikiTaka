import React from "react";
import { Link } from "react-router-dom";

const FeaturedItem = (props) => {
  return (
    <React.Fragment>
      <Link to="/about">
        <img src={props.img} alt="" className="img-fluid" />
        <div className="text position-relative">
          <h5 className="position-absolute bottom-0 start-50 translate-middle-x text-light">
            {props.txt}
          </h5>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default FeaturedItem;
