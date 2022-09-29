import React, { useState, useEffect } from "react";
import "./DropdownSection.css";
import DropdownItem from "./DropdownItem";
import useGetAllProducts from "../../api/useGetAllProducts";

const DropdownSection = (props) => {
  const { isLoading } = useGetAllProducts();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productList = () => {
      const locallyStoredProducts = JSON.parse(
        localStorage.getItem("products")
      );
      const filteredProducts = locallyStoredProducts
        .filter((item) => item.menuSection === props.header)
        .slice(0, 5);

      console.log(filteredProducts);
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
      {!isLoading && (
        <div>
          <h4 className="dropdown-header py-3">{props.header}</h4>
          <ul className="list-group">{products}</ul>
        </div>
      )}
    </div>
  );
};

export default DropdownSection;
