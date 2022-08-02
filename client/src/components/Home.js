import React from "react";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="header-img-wrapper">
        <img src="" alt="" className="img-fluid" />
        <div className="header-overlay-wrapper">
          <h1>Become a Technician</h1>
          <h2>New Adidas Data Pack</h2>
          <Link>Shop Now</Link>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
