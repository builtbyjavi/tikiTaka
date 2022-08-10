import React from "react";
import { Link } from "react-router-dom";
import "./Reviews.css";
import FeaturedItem from './FeaturedItem';

const FeaturedItems = (props) => {
  const imageList = props.images.filter((images) =>
      images.filename.replace(/_/g, "").toLowerCase().includes("bullet")
    );
    
  return (
    <React.Fragment>
      <div className="row mw-100 m-0 p-2">
        <div className="col-3">
        <FeaturedItem img={imageList[0].url} txt='who we are'/>
        </div>
          <div className="col-3"><FeaturedItem img={imageList[1].url} txt='sustainability'/></div>
          <div className="col-3"><FeaturedItem img={imageList[2].url} txt='gifting'/></div>
          <div className="col-3"><FeaturedItem img={imageList[3].url} txt='our stories'/></div>
          
          
          
      </div>
    </React.Fragment>
  );
};

export default FeaturedItems;
