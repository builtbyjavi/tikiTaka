import React from "react";
import { Link } from "react-router-dom";
import "./DropdownItem.css";

const DropdownItem = (props) => {
  let classes = "img-fluid";
  let thumbnail = "";
  if (props.img[0]) {
    thumbnail = props.img[0].url.replace("upload", "upload/w_100");
  } else {
    classes += " no-display";
  }
  return (
    <div className="card d-flex flex-row align-items-center border-0 bg-light">
      <Link
        to={`/products/${props.id}`}
        className="text-decoration-none text-black hover"
      >
        <img className={classes} src={thumbnail} alt={props.name} />
        <p className="d-inline px-1">{props.name}</p>
        
      </Link>
    </div>
  );
};

export default DropdownItem;
