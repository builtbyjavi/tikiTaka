import React, { useState, useEffect } from "react";
import "./DropdownSection.css";
import DropdownItem from "./DropdownItem";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000",
});

const DropdownSection = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  }, []);

  const productList = () => {
    const items = products.filter(
      (product) => product.menuSection === props.header
    );

    return items.map((item) => {
      return (
        <li className="list-group-item" key={item._id}>
          <DropdownItem name={item.name} img={item.thumbnail} id={item._id} />
        </li>
      );
    });
  };

  return (
    <div className="card">
      <h4 className="dropdown-header">{props.header}</h4>
      <ul className="list-group">{productList()}</ul>
    </div>
  );
};

export default DropdownSection;
