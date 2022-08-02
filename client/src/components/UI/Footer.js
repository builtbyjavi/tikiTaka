import React from "react";
import { GiAnubis } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="container-fluid bg-dark  py-5">
        <div className="row justify-content-between text-light py-2">
          <div className="col border-end justify">
            <GiAnubis className="icon" />
            <h6>get 15% off*</h6>
            <p>when your order total is $100 or more.</p>
            <form action="">
              <div className="input-group">
                <input type="text" placeholder="Enter Email Address" />
                <span className="input-group-text">
                  <button>Sign Up</button>
                </span>
              </div>
            </form>
            <p>
              by signing up to our newsletter you are agreeing to our privacy
              policy please note: only new subscribers and customers will
              receive an email
            </p>
          </div>
          <div className="col">
            <h5>Help</h5>
            <ul className="list-group">
              <li className="list-item">
                <Link
                  className="text-decoration-none text-light"
                  to="/footer-link"
                >
                  Contact Us
                </Link>
              </li>
              <li className="list-item">
                <Link
                  className="text-decoration-none text-light"
                  to="/footer-link"
                >
                  Exchanges & Returns
                </Link>
              </li>
              <li className="list-item">
                <Link
                  className="text-decoration-none text-light"
                  to="/footer-link"
                >
                  FAQs
                </Link>
              </li>
              <li className="list-item">
                <Link
                  className="text-decoration-none text-light"
                  to="/footer-link"
                >
                  Size Chart
                </Link>
              </li>
              <li className="list-item">
                <Link
                  className="text-decoration-none text-light"
                  to="/footer-link"
                >
                  Delivery
                </Link>
              </li>
              <li className="list-item">
                <Link
                  className="text-decoration-none text-light"
                  to="/footer-link"
                >
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>About Us</h5>
            <ul className="list-group">
              <li className="list-item">
                <Link
                  className="text-decoration-none text-light"
                  to="/footer-link"
                >
                  Who We Are
                </Link>
              </li>
              <li className="list-item">
                <Link
                  className="text-decoration-none text-light"
                  to="/footer-link"
                >
                  Read Our Reviews
                </Link>
              </li>
              <li className="list-item">
                <Link
                  className="text-decoration-none text-light"
                  to="/footer-link"
                >
                  Careers
                </Link>
              </li>
              <li className="list-item">
                <Link
                  className="text-decoration-none text-light"
                  to="/footer-link"
                >
                  Offers
                </Link>
              </li>
              <li className="list-item">
                <Link
                  className="text-decoration-none text-light"
                  to="/footer-link"
                >
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row text-light text-center py-2">
          <p className="my-0">
            {" "}
            &copy; all rights reserved builtByJavi LLC 2022
          </p>
          <p>terms // privacy policy // data settings</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
