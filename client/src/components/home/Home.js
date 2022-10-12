import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ShoeCarousel from "./ShoeCarousel";
import ShoeSlide from "./ShoeSlide";
import Reviews from "./Reviews";
import FeaturedItems from "./FeaturedItems";
import useGetAllImages from "../../api/useGetAllImages";
import useGetAllProducts from "../../api/useGetAllProducts";
import LoadingSpinner from "../UI/LoadingSpinner";

const Home = () => {
  const { isImageLoading } = useGetAllImages();
  const { isProductLoading } = useGetAllProducts();
  const locallyStoredImages = JSON.parse(localStorage.getItem("images"));
  let banner;

  useEffect(() => {
    if (!isImageLoading) {
      banner = locallyStoredImages.filter((images) =>
        images.filename.replace(/_/g, "").toLowerCase().includes("banner")
      )[0].url;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      {isImageLoading && (
        <div className="spinner-div">
          <LoadingSpinner />
        </div>
      )}
      {!isImageLoading && (
        <div className="position-relative">
          <div className="header-img-wrapper mw-100">
            <img
              src={locallyStoredImages[0].url}
              alt=""
              className="img-fluid w-100"
            />
            <div className="header-overlay-wrapper text-light bg-light bg-opacity-25 p-3 ">
              <h1>Become a Technician</h1>
              <h2>New Adidas Data Pack</h2>
              <Link to="/products" className="text-decoration-none text-light">
                <h5 className="fw-light">Shop Now</h5>
              </Link>
            </div>
          </div>

          <ShoeCarousel isLoading={isProductLoading} />
          <ShoeSlide images={locallyStoredImages} />
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
          <FeaturedItems images={locallyStoredImages} />
          <Reviews images={locallyStoredImages} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
