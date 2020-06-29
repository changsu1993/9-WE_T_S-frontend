import React from "react";
import "./MyModalImages.scss";

class MyModalImages extends React.Component {
  render() {
    return (
      <div className="MyModalImages">
        {this.props.data &&
          this.props.data.map((imgObject) => {
            return (
              <img
                alt="product-img-in-full-size"
                className="product-img-in-full"
                src={imgObject.img}
              />
            );
          })}
        <button>close</button>
      </div>
    );
  }
}

export default MyModalImages;
