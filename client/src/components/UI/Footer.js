import React, { useState, useRef } from "react";
import { GiAnubis } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [didSubmit, setDidSubmit] = useState(false);
  const emailRef = useRef();

  const emailSubmitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const trimEmail = enteredEmail.trim(" ");
    const isValidEmail = trimEmail.length > 0 && trimEmail.includes("@");
    if (isValidEmail) {
      setDidSubmit(true);
    } else {
      alert("Please Enter Valid Email");
    }
  };

  return (
    <React.Fragment>
      <footer className="container-fluid bg-dark py-5">
        <div className="row text-white py-2 footer-row justify-content-between">
          <div className="col-4 border-end">
            <GiAnubis className="icon mb-2" />
            <h6 className="mb-1 fw-light">get 15% off</h6>
            <p className="mb-3 fw-light">
              when your order total is $100 or more.
            </p>
            {!didSubmit && (
              <form action="submit" className="mb-2">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="border-0 rounded-start"
                    ref={emailRef}
                  />
                  <span className="input-group-text">
                    <button onClick={emailSubmitHandler} className="border-0">
                      Sign Up
                    </button>
                  </span>
                </div>
              </form>
            )}
            {didSubmit && <p>You've Been Added to the Newsletter :) Thanks!</p>}

            <p className="fw-light">
              by signing up to our newsletter you are agreeing to our privacy
              policy please note: only new subscribers and customers will
              receive an email
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <h5>Help</h5>
            <ul className="list-group fw-light">
              <li className="list-item">
                <Link className="text-decoration-none text-white" to="/about">
                  Contact Us
                </Link>
              </li>
              <li className="list-item">
                <Link className="text-decoration-none text-white" to="/about">
                  Exchanges & Returns
                </Link>
              </li>
              <li className="list-item">
                <Link className="text-decoration-none text-white" to="/about">
                  FAQs
                </Link>
              </li>
              <li className="list-item">
                <Link className="text-decoration-none text-white" to="/about">
                  Size Chart
                </Link>
              </li>
              <li className="list-item">
                <Link className="text-decoration-none text-white" to="/about">
                  Delivery
                </Link>
              </li>
              <li className="list-item">
                <Link className="text-decoration-none text-white" to="/about">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h5>About Us</h5>
            <ul className="list-group fw-light">
              <li className="list-item">
                <Link className="text-decoration-none text-white" to="/about">
                  Who We Are
                </Link>
              </li>
              <li className="list-item">
                <Link className="text-decoration-none text-white" to="/about">
                  Read Our Reviews
                </Link>
              </li>
              <li className="list-item">
                <Link className="text-decoration-none text-white" to="/about">
                  Careers
                </Link>
              </li>
              <li className="list-item">
                <Link className="text-decoration-none text-white" to="/about">
                  Offers
                </Link>
              </li>
              <li className="list-item">
                <Link className="text-decoration-none text-white" to="/about">
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row text-white text-center py-2 fw-light">
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
