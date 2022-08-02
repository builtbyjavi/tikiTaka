import React from "react";
import { Link } from "react-router-dom";

const DropdownItem = (props) => {
  let thumbnail = "";
  if (props.img[0]) {
    thumbnail = props.img[0].url.replace("upload", "upload/w_100");
  }
  return (
    <div className="card d-flex flex-row align-items-center">
      <img
        className="img-fluid"
        src={thumbnail}
        alt={`image of ${props.name}`}
      />
      <Link
        to={`/products/${props.id}`}
        className="text-decoration-none text-black"
      >
        {props.name}
      </Link>
    </div>
  );
};

export default DropdownItem;
