import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ShoeCarousel from "./ShoeCarousel";
import ShoeSlide from "./ShoeSlide";
import Reviews from "./Reviews";
import FeaturedItems from "./FeaturedItems";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useSelector } from "react-redux";

const Home = () => {
  const isLoading = useSelector((state) => state.data.isLoading);
  const images = useSelector((state) => state.data.images);
  const banner = images.filter((image) =>
    image.filename.replace(/_/g, "").toLowerCase().includes("banner")
  )[0].url;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoading]);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="spinner-div">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (
        <div className="position-relative">
          <div className="header-img-wrapper mw-100">
            <img src={images[0].url} alt="" className="img-fluid w-100" />
            <div className="header-overlay-wrapper text-light bg-light bg-opacity-25 p-3 ">
              <h1>Become a Technician</h1>
              <h2>New Adidas Data Pack</h2>
              <Link to="/products" className="text-decoration-none text-light">
                <h5 className="fw-light">Shop Now</h5>
              </Link>
            </div>
          </div>

          <ShoeCarousel isLoading={isLoading} />
          <ShoeSlide images={images} />
          <div className="p-3">
            <img className=" w-100" src={banner} alt="soccer ball and cleats" />
            <div className="d-flex align-items-center justify-content-between py-3 px-5 bg-light">
              <div className="border-end border-dark">
                <h3>Helping You Achieve High Performance</h3>
              </div>
              <div className="ps-5">
                <h5 className="fw-light m-0">
                  All the gear you need from trusted, result-proven brands.
                  Check out all of the new releases exclusively at TikiTaka.
                </h5>
              </div>
            </div>
          </div>
          <FeaturedItems images={images} />
          <Reviews images={images} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
