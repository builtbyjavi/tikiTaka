import React from "react";
import { useParams } from "react-router-dom";
import useGetProduct from "../../api/useGetProduct";
import "./ProductShow.css";
import ImageGrid from "./ImageGrid";

const ProductShow = () => {
  const { loading } = useGetProduct();
  const { id } = useParams();
  const locallyStoredProducts = JSON.parse(localStorage.getItem("products"));
  const product = locallyStoredProducts.filter((item) => item._id === id);
  console.log(product);
  const isShoe = product.menuSection === "shoes";

  return (
    <React.Fragment>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className="show-wrapper px-4 py-4">
          <div className="row">
            <div className="col-8">
              <img
                src={product.thumbnail[0].url}
                alt={product.name}
                className="img-fluid w-100"
              />
            </div>
            <div className="col-4">
              <div>
                <h2>{product.name}</h2>
                <h3 className="fw-light">${product.price}</h3>
                <span class="badge bg-dark">New</span>
              </div>
              {isShoe && (
                <div>
                  <h5 className="fw-light py-4 d-inline-block ">size: </h5>

                  <select
                    className="form-select d-inline-block w-25 ms-3"
                    aria-label="select"
                  >
                    <option defaultValue>size</option>
                    <option value="1">7</option>
                    <option value="2">8</option>
                    <option value="3">9</option>
                    <option value="4">10</option>
                    <option value="5">11</option>
                    <option value="5">12</option>
                  </select>
                </div>
              )}
              {!isShoe && (
                <div className="py-4">
                  <h4>Size</h4>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      S
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineCheckbox2">
                      M
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                    />
                    <label className="form-check-label" for="inlineCheckbox3">
                      L
                    </label>
                  </div>
                </div>
              )}
              <div className="form d-flex flex-row">
                <div className="col-4">
                  <select className="form-select" aria-label="Qty">
                    <option defaultValue>Qty</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-8 px-2">
                  <button type="submit" className="btn btn-outline-dark w-100">
                    {" "}
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="pt-5">
                <p className="mb-1 fw-bold">Description</p>
                <p className="fw-light">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <ImageGrid images={product.images} /> */}
    </React.Fragment>
  );
};

export default ProductShow;
