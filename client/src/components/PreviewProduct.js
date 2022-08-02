import React from "react";

const PreviewProduct = (props) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card">
          <p>New Color</p>
          <img src="" alt="" />
        </div>
        <h3>{props.name}</h3>
        <h3>{props.description}</h3>
        <h3>{props.price}</h3>
      </div>
    </React.Fragment>
  );
};

export default PreviewProduct;
