import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductPreview from "../home/ProductPreview";

const AllProducts = () => {
  const products = JSON.parse(localStorage.getItem("products"));
  const locallyStoredImages = JSON.parse(localStorage.getItem("images"));

  const banner = locallyStoredImages.filter((images) =>
    images.filename.replace(/_/g, "").toLowerCase().includes("banner")
  )[0].url;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="">
        <img className=" w-100" src={banner} alt="soccer cleats and ball" />
      </div>
      <div className="pt-5 pb-3 px-5">
        <h2>All Products </h2>
      </div>
      <div className="container">
        <div className="row g-2">
          {products.map((item) => {
            return (
              <div className="col-4">
                <Link
                  to={`/products/${item._id}`}
                  className="text-decoration-none text-dark"
                >
                  <ProductPreview item={item} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-5"></div>
    </React.Fragment>
  );
};

export default AllProducts;
