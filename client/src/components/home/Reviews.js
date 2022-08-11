import React from "react";
import ReviewSlide from "./ReviewSlide";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { GiAnubis } from "react-icons/gi";
import "./Reviews.css";

const Reviews = (props) => {
  const imageList = props.images.filter((images) =>
    images.filename.replace(/_/g, "").toLowerCase().includes("review")
  );
  return (
    <React.Fragment>
      <ReviewSlide />
      <div className="review-wrapper px-5 pt-3 pb-5">
        <div className=" d-flex flex-column justify-content-center align-items-center pb-5">
          <h4>Rated Excellent By You</h4>
          <div className="d-flex py-2">
            <BsStarFill className="me-1" />
            <BsStarFill className="me-1" />
            <BsStarFill className="me-1" />
            <BsStarFill className="me-1" />
            <BsStarHalf />
          </div>

          <p>4.4 out of 5 based on 34,947 reviews</p>
        </div>
        <div className="images position-relative">
          <div className="row">
            <div className="col-3 px-1">
              <img src={imageList[0].url} alt="" className="img-fluid" />
            </div>
            <div className="col-3  px-1">
              <img src={imageList[1].url} alt="" className="img-fluid" />
            </div>
            <div className="col-3  px-1">
              <img src={imageList[2].url} alt="" className="img-fluid" />
            </div>
            <div className="col-3  px-1">
              <img src={imageList[3].url} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="position-absolute top-50 start-50 translate-middle bg-white p-3 rounded-circle">
            <GiAnubis className="emblem text-black" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Reviews;
