import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import CartButton from "../cart/CartButton";
import { GiAnubis } from "react-icons/gi";
import DropdownSection from "../menu/DropdownSection";
import { useSelector, useDispatch } from "react-redux";
import { bgActions } from "../../store/ui-slice";
import useGetReq from "../../api/useGetReq";

const Navbar = () => {
  let baseURL = 'http://localhost:5000';
  if (process.env.NODE_ENV === "production") {
    baseURL = "https://fierce-headland-68809.herokuapp.com/";
  }
  const { loading: isImageLoading } = useGetReq(`${baseURL}/images`, "images");
  const { loading: isProductLoading } = useGetReq(
    `${baseURL}/products`,
    "products"
  );

  const isDarkBg = useSelector((state) => state.bg.darkBg);
  const dispatch = useDispatch();

  const collapseDropdown = () => {
    document.getElementById("dropdown-menu").classList.remove("show");
  };
  const collapseNav = () => {
    document
      .getElementsByClassName("navbar-toggler")
      .classList.add("collapsed");
  };

  const darkBgHandler = () => {
    const dropdownClasses = document
      .querySelector(".dropdown-menu")
      .classList.contains("show");

    dispatch(bgActions.isDarkBg(dropdownClasses));
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid px-4">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <GiAnubis />
            <p className="m-0 ps-2">Tikitaka</p>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={darkBgHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-0 align-items-end">
              <li className="nav-item dropdown px-2">
                <NavLink
                  className="text-decoration-none text-black small-nav"
                  to="/products"
                  onClick={collapseNav}
                >
                  products
                </NavLink>
                <NavLink
                  className="dropdown-toggle text-decoration-none text-black"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={darkBgHandler}
                >
                  products
                </NavLink>

                <ul className="dropdown-menu bg-light m-0 p-0 w-100 border-0">
                  <DropdownSection header="shoes" />
                  <DropdownSection header="clothing" />
                  <DropdownSection header="accessories" />
                  <NavLink
                    to="/products"
                    className="h5 align-self-end  text-secondary pb-3"
                    onClick={collapseDropdown}
                  >
                    View All
                  </NavLink>
                </ul>
              </li>

              <li className="nav-item px-2">
                <NavLink
                  to="/about"
                  className="text-decoration-none text-black"
                  onClick={collapseNav}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <CartButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isDarkBg && <div className="background"></div>}

      <footer className="text-center">
        <p className="m-0 py-1 fw-light">
          Free Shipping on Orders $100 and More
        </p>
      </footer>
    </React.Fragment>
  );
};

export default Navbar;
