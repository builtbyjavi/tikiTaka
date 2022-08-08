import React from "react";
import "./ShoeSlide.css";

const ShoeSlide = (props) => {
  return (
    <React.Fragment>
      <div className="slide-text text-center py-5">
        <h2>Be Creative.</h2>
        <h4 className="fw-light">bring your ideas to life.</h4>
      </div>
      <div className="vw-100 p-5 slide-wrapper">
        <img src={props.bottomImg} className="bottom-image" />
        <img src={props.topImg} className="top-image" />
      </div>
    </React.Fragment>
  );
};

export default ShoeSlide;
