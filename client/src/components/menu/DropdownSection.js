import React, { useState, useEffect } from "react";
import "./DropdownSection.css";
import DropdownItem from "./DropdownItem";
// import useHttpReq from "../../api/useHttpReq";
import useGetAllProducts from "../../api/useGetAllProducts";

const DropdownSection = (props) => {
  // const [products, setProducts] = useState([]);
  const { products, isLoading } = useGetAllProducts();

  // useEffect(() => {
  // console.log(products);
  // let items = products.filter((item) => item.menuSection === props.header);
  // items = items.slice(0, 5);
  // setProducts(items);
  // }, []);

  const productList = () => {
    products.map((item) => {
      return (
        <li
          className="list-group-item border-0 py-1 bg-light hover"
          key={item._id}
        >
          <DropdownItem name={item.name} img={item.thumbnail} id={item._id} />
        </li>
      );
    });
  };

  return (
    <div className="card border-0 bg-light">
      <h4 className="dropdown-header py-3">{props.header}</h4>
      <ul className="list-group">{productList()}</ul>
    </div>
  );
};

export default DropdownSection;
