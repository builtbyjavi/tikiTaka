import React from "react";
import { NavLink } from "react-router-dom";
import "./DropdownItem.css";
import { useDispatch } from "react-redux";
import { bgActions } from "../../store/ui-slice";

const DropdownItem = (props) => {
  let classes = "img-fluid";
  let thumbnail = "";
  if (props.img[0]) {
    thumbnail = props.img[0].url.replace("upload", "upload/w_100");
  } else {
    classes += " no-display";
  }

  const dispatch = useDispatch();

  const collapseDropdown = () => {
    document.getElementById("dropdown-menu").classList.remove("show");
    const dropdownClasses = document
      .querySelector(".dropdown-menu")
      .classList.contains("show");

    dispatch(bgActions.isDarkBg(dropdownClasses));
  };

  return (
    <div className="card d-flex flex-row align-items-center border-0 bg-light">
      <NavLink
        to={`/products/${props.id}`}
        className="text-decoration-none text-black hover"
        onClick={collapseDropdown}
      >
        <img className={classes} src={thumbnail} alt={props.name} />
        <p className="d-inline px-1">{props.name}</p>
      </NavLink>
    </div>
  );
};

export default DropdownItem;
