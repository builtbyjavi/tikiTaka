import React from "react";
import { Link } from "react-router-dom";
import PreviewProduct from "./PreviewProduct";

const ShoeCarousel = () => {
  return (
    <React.Fragment>
      <div>
        <h1>innovative design that rules the pitch</h1>
      </div>
      <div>
        <Link>link</Link>
        <Link>link</Link>
        <Link>link</Link>
      </div>
      <div>
        <PreviewProduct />
        <PreviewProduct />
        <PreviewProduct />
      </div>
    </React.Fragment>
  );
};

export default ShoeCarousel;
