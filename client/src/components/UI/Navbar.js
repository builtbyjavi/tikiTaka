import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Cart from "./Cart";
import { GiAnubis } from "react-icons/gi";
import DropdownSection from "../menu/DropdownSection";

const Navbar = () => {
  // const [isMenuActive, setIsMenuActive] = useState(false);

  // useEffect(() => {
  //   document.onclick = function(e) {
  //     if (isMenuActive) {
  //       setIsMenuActive(!isMenuActive);
  //     }
  //   }
  // }, [])

  // const menuToggleHandler = () => {
  //   setIsMenuActive(!isMenuActive);
  // }

  return (
    <React.Fragment>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid px-4">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <GiAnubis />
            <p className="m-0 ps-2">Tikitaka</p>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav me-0 mb-2 mb-lg-0 align-items-end collapse navbar-collapse">
              <li className="nav-item dropdown px-2">
                <NavLink
                  className="dropdown-toggle text-decoration-none text-black"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded='false'
                  // onClick={menuToggleHandler}
                  
                >
                  products
                </NavLink>
                <ul
                  className="dropdown-menu bg-light m-0 p-0 w-100 border-0"
                  aria-labelledby="navbarDropdown"
                >
                  <DropdownSection header="shoes" />
                  <DropdownSection header="clothing" />
                  <DropdownSection header="accessories" />
                </ul>
              </li>
              <li className="nav-item px-2">
                <NavLink
                  to="/about"
                  className="text-decoration-none text-black"
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink to="/">
                  <Cart />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
      {/* <div className={isMenuActive ? 'background' : ''}></div> */}
      <footer className="text-center">
        <p className="m-0 py-1 fw-light">
          Free Shipping on Orders $100 and More
        </p>
      </footer>
      
    </React.Fragment>
  );
};

export default Navbar;
