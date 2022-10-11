import React from "react";

const ImageGrid = (props) => {
  const images = props.images;

  return (
    <React.Fragment>
      <div className="container py-4">
        <div className="row g-2">
          {images.map((img) => {
            return (
              <div className="col-4" key={images._id}>
                <img src={img.url} alt="" className="img-fluid" />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageGrid;
