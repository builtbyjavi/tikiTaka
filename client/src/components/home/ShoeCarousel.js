import React from "react";
import { Link, NavLink } from "react-router-dom";
import ProductPreview from "./ProductPreview";
import { useSelector } from "react-redux";
import "./ShoeCarousel.css";

const ShoeCarousel = (props) => {
  const products = useSelector((state) => state.data.products);
  const bestSellers = products[0];
  const newReleases = products[1];
  const onSale = products[2];

  return (
    <React.Fragment>
      {props.isLoading && <div>Loading</div>}
      {!props.isLoading && (
        <div className="container-fluid">
          <div className="row text-center py-5">
            <h2>innovative design that rules the pitch.</h2>
          </div>
          <div className="row text-center">
            <div className="col">
              <NavLink to="/" className="text-decoration-none text-black">
                {/* <h4 className="fw-light">Best Sellers</h4> */}
              </NavLink>
            </div>

            <div className="col">
              <NavLink to="/" className="text-decoration-none text-black">
                {/* <h4 className="fw-light">New Releases</h4> */}
              </NavLink>
            </div>

            <div className="col">
              <NavLink to="/" className="text-decoration-none text-black">
                {/* <h4 className="fw-light">On Sale</h4> */}
              </NavLink>
            </div>
          </div>
          <div className="row gx-2">
            <div className="col-4 carousel-img ">
              <Link
                to={`/products/${bestSellers._id}`}
                className="text-decoration-none text-black"
              >
                <ProductPreview item={bestSellers} />
              </Link>
            </div>
            <div className="col-4 carousel-img">
              <Link
                to={`/products/${newReleases._id}`}
                className="text-decoration-none text-black"
              >
                <ProductPreview item={newReleases} />
              </Link>
            </div>
            <div className="col-4 carousel-img">
              <Link
                to={`/products/${onSale._id}`}
                className="text-decoration-none text-black"
              >
                <ProductPreview item={onSale} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ShoeCarousel;
