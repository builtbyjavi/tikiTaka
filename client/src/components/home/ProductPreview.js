import React from "react";

const ProductPreview = (props) => {
  const item = props.item;
  return (
    <React.Fragment>
      <div className="card p-2 border-0">
        <img src={item.thumbnail[0].url} className="product-img" alt="" />
        <h5 className="pt-1">{item.name}</h5>
        <p>${item.price}</p>
      </div>
    </React.Fragment>
  );
};

export default ProductPreview;
