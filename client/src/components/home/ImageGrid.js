import React from "react";

const ImageGrid = (props) => {
    const images = props.images.map(image => image.url)
    while (images) {
        
        for (let col = 0; col = 2; col++) {

        }
    }
    
    return <React.Fragment>
        <div className="images">
            {images}
        </div>
    </React.Fragment>;
};

export default ImageGrid;
