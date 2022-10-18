import React, { useState, useEffect } from "react";
import DropdownItem from "./DropdownItem";
import { useSelector } from "react-redux";

const DropdownSection = (props) => {
  const [products, setProducts] = useState([]);
  const locallyStoredProducts = useSelector((state) => state.data.products);
  const filteredProducts = locallyStoredProducts
    .filter((item) => item.menuSection === props.header)
    .slice(0, 5);

  useEffect(() => {
    const productList = () => {
      setProducts(
        filteredProducts.map((item) => {
          return (
            <li
              className="list-group-item border-0 py-1 bg-light hover"
              key={item._id}
            >
              <DropdownItem
                name={item.name}
                img={item.thumbnail}
                id={item._id}
                collapseDropdown={props.collapseDropdown}
              />
            </li>
          );
        })
      );
    };

    productList();
  }, []);

  return (
    <div className="card border-0 bg-light">
      <div>
        <h4 className="dropdown-header py-3">{props.header}</h4>
        <ul className="list-group">{products}</ul>
      </div>
    </div>
  );
};

export default DropdownSection;
