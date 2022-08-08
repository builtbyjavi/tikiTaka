import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useGetProduct from "../../api/useGetProduct";

const client = axios.create({
  baseURL: "http://localhost:5000",
});

const ProductShow = () => {
  const { product, loading } = useGetProduct();

  return (
    <React.Fragment>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className="card d-flex flex-row">
          <img
            src={product.images[0].url}
            alt={product.name}
            className="img-fluid w-50"
          />
          <div>
            <h2>{product.name}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <Link to="/">Home</Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductShow;
