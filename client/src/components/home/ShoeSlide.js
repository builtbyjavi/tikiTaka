import React from "react";
import "./ShoeSlide.css";

const ShoeSlide = (props) => {
  const topImg = props.images.filter((images) =>
    images.filename.replace(/_/g, "").toLowerCase().includes("homeslide1")
  )[0].url;
  const bottomImg = props.images.filter((images) =>
    images.filename.replace(/_/g, "").toLowerCase().includes("homeslide2")
  )[0].url;
  return (
    <React.Fragment>
      <div className="slide-text text-center py-5">
        <h2>Be Creative.</h2>
        <h4 className="fw-light">bring your ideas to life.</h4>
      </div>
      <div className="mw-100 p-5 slide-wrapper">
        <img src={bottomImg} className="bottom-image" alt="soccer shoe" />
        <img src={topImg} className="top-image" alt="soccer shoe" />
      </div>
    </React.Fragment>
  );
};

export default ShoeSlide;
