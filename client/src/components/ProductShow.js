import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000",
});

const ProductShow = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    client
      .get(`/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div className="card d-flex flex-row">
      <img
        src={product.images[0].url}
        alt={`${product.name}`}
        className="img-fluid w-50"
      />
      <div>
        <h2>{product.name}</h2>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductShow;
