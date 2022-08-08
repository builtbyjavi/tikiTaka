import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ShoeCarousel from "./ShoeCarousel";
import ShoeSlide from "./ShoeSlide";
import Reviews from "./Reviews";
import FeaturedItems from "./FeaturedItems";
import useGetAllImages from "../../api/useGetAllImages";
import useGetAllProducts from "../../api/useGetAllProducts";

const Home = () => {
  const { images, loading } = useGetAllImages();

  let video = "";
  let banner = "";
  let topImg = "";
  let bottomImg = "";
  if (!loading) {
    video = images.filter((images) =>
      images.filename.replace(/_/g, "").toLowerCase().includes("video")
    )[0].url;
    banner = images.filter((images) =>
      images.filename.replace(/_/g, "").toLowerCase().includes("banner")
    )[0].url;
    topImg = images.filter((images) =>
      images.filename.replace(/_/g, "").toLowerCase().includes("homeslide1")
    )[0].url;
    bottomImg = images.filter((images) =>
      images.filename.replace(/_/g, "").toLowerCase().includes("homeslide2")
    )[0].url;
  }

  return (
    <React.Fragment>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <div className="header-img-wrapper vw-100">
            <img src={images[0].url} alt="" className="img-fluid w-100" />
            <div className="header-overlay-wrapper text-light bg-light bg-opacity-25 p-3 ">
              <h1>Become a Technician</h1>
              <h2>New Adidas Data Pack</h2>
              <Link to="/" className="text-decoration-none text-light">
                <h5 className="fw-light">Shop Now</h5>
              </Link>
            </div>
          </div>

          <ShoeCarousel />
          <ShoeSlide topImg={topImg} bottomImg={bottomImg} />
          <div className="video-wrapper">
            <video
              src={video}
              autoPlay
              muted
              loop
              className="video"
              alt="nike soccer commercial"
            />
          </div>
          <div className="banner-wrapper p-3">
            <img className="banner-img w-100" src={banner} />
            <div className="banner-footer row align-items-center py-3 px-5 bg-light">
              <div className="col-4 border-end border-dark">
                <h3>Helping You Achieve High Performance</h3>
              </div>
              <div className="col-8 ">
                <h5 className="fw-light m-0">
                  All the gear you need from trusted, result-proven brands.
                  Check out all of the new releases exclusively at TikiTaka
                  <span>
                    &nbsp;
                    <Link
                      to="/"
                      className="text-decoration-none text-secondary"
                    >
                      Shop Now
                    </Link>
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <FeaturedItems />
          <Reviews />
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;