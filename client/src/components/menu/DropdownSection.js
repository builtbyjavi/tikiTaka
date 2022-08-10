import React from "react";
import "./DropdownSection.css";
import DropdownItem from "./DropdownItem";
import useGetAllProducts from "../../api/useGetAllProducts";

const DropdownSection = (props) => {
  const { products } = useGetAllProducts();
  const productList = () => {
    const items = products.filter(
      (product) => product.menuSection === props.header
    );

    return items.map((item) => {
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
