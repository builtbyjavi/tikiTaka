import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductShow.css";
import ImageGrid from "./ImageGrid";
import ShoeForm from "../UI/ShoeForm";
import Form from "../UI/Form";

const ProductShow = () => {
  const { id } = useParams();
  const locallyStoredProducts = JSON.parse(localStorage.getItem("products"));
  const product = locallyStoredProducts.filter((item) => item._id === id)[0];
  const isShoe = product.menuSection === "shoes";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="show-wrapper px-5 py-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item ">
              <a
                href="/products"
                className="text-decoration-none text-black fw-bold"
              >
                Products
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>
        <div className="row justify-content-center">
          <div className="col-7">
            <img
              src={product.images[0].url}
              alt={product.name}
              className="img-fluid main-img"
            />
            <ImageGrid images={product.images} />
          </div>
          <div className="col">
            <div>
              <h2>{product.name}</h2>
              <h3 className="fw-light">${product.price}</h3>
              <span className="badge bg-dark">New</span>
            </div>
            {isShoe && <ShoeForm product={product} />}
            {!isShoe && <Form product={product} />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductShow;
