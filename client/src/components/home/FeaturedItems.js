import React from "react";
import "./FeaturedItems.css";
import FeaturedItem from "./FeaturedItem";

const FeaturedItems = (props) => {
  const imageList = props.images.filter((images) =>
    images.filename.replace(/_/g, "").toLowerCase().includes("bullet")
  );

  return (
    <React.Fragment>
      <div className="container-fluid px-3 py-2">
        <div className="row gx-4 featured-wrapper">
          <div className="col px-2">
            <FeaturedItem img={imageList[0].url} txt="who we are" />
          </div>
          <div className="col px-2">
            <FeaturedItem img={imageList[1].url} txt="sustainability" />
          </div>
          <div className="col px-2">
            <FeaturedItem img={imageList[2].url} txt="gifting" />
          </div>
          <div className="col px-2">
            <FeaturedItem img={imageList[3].url} txt="our stories" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedItems;
