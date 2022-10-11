import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const locallyStoredImages = JSON.parse(localStorage.getItem("images"));
  const video = locallyStoredImages.filter((image) =>
    image.filename.replace(/_/g, "").toLowerCase().includes("video")
  )[0].url;
  const banner = locallyStoredImages.filter((image) =>
    image.filename.replace(/_/g, "").toLowerCase().includes("aboutbanner")
  )[0].url;
  const headquarters = locallyStoredImages.filter((image) =>
    image.filename.replace(/_/g, "").toLowerCase().includes("aboutheadquarters")
  )[0].url;
  const header = locallyStoredImages.filter((image) =>
    image.filename.replace(/_/g, "").toLowerCase().includes("aboutheader")
  )[0].url;

  const [scroll, setScrollState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollState(window.scrollY > 40);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="header-bg position-relative ">
        <div className="w-50 float-end pt-4">
          <img src={header} alt="" className="image-fluid w-100" />
        </div>
        <div className="text-wrapper position-absolute top-100 translate-middle-y text-black ps-4">
          <h1 className="fw-light m-0">Our Mission</h1>
          <h1 className="display-1 fw-semibold m-0">
            Bring <br />
            Inspiration <br />
            And <br />
            Innovation <br />
            <span className={scroll ? "scroll" : "invisible opacity-0"}>
              To <br />
              Every <br />
              Athlete <br />
              In The <br />
              World
            </span>
          </h1>
        </div>
      </div>
      <div className="video-wrapper mw-100 ">
        <video
          src={video}
          autoPlay
          muted
          loop
          className="w-100 pt-1"
          alt="nike soccer commercial"
        />
      </div>

      <div className="position-relative">
        <img src={banner} alt="" className="img-fluid" />
        <div className="text-white position-absolute top-0 end-0 p-3 mw-50 text-bg">
          <h1 className="fw-light">performance on all levels</h1>
          <h1 className="display-1 fw-semibold">This is TikiTaka</h1>
        </div>
      </div>

      <div className="p-5 w-100 figures-wrapper">
        <div className="row text-black mb-5">
          <h2 className="display-3 fw-light m-0">TikiTaka In Figures</h2>
        </div>
        <div className="row text-black">
          <div className="col text-center">
            <h2 className="display-2 fw-semibold">6.8</h2>
            <h4 className="fw-light">Billion Euro Sales in 2021</h4>
          </div>
          <div className="col text-center">
            <h2 className="display-2 fw-semibold">557</h2>
            <h4 className="fw-light">Million Euros EBIT in 2021</h4>
          </div>
          <div className="col text-center">
            <h2 className="display-2 fw-semibold">~16,100</h2>
            <h4 className="fw-light">Employees</h4>
          </div>
          <div className="col text-center">
            <h2 className="display-2 fw-semibold">1997</h2>
            <h4 className="fw-light">Year of Birth</h4>
          </div>
        </div>
      </div>

      <div className="pb-5 position-relative">
        <div className="text-white position-absolute top-0 p-5 text-bg">
          <h1 className="display-2 fw-semibold">TikiTaka Headquarters</h1>
          <h4 className="fw-light">California, United States</h4>
        </div>
        <div className="image-wrapper mw-100">
          <img
            src={headquarters}
            alt=""
            className="image-fluid w-100 headquarters"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
