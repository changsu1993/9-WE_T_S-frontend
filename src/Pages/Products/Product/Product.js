import React from "react";
import "./Product.scss";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      image: false,
    };
  }

  mouseEnterHandler = () => {
    return this.setState({ image: true });
  };

  mouseOutHandler = () => {
    return this.setState({ image: false });
  };

  render() {
    return (
      <div className="man-set">
        <a
          className="man-product-photo"
          href="http://localhost:3000/shopping/man"
          onMouseOut={this.mouseOutHandler}
          onMouseOver={this.mouseEnterHandler}
        >
          <div className="imgs">
            <img
              alt="product-img"
              className="img-original"
              src={
                this.state.image ? this.props.imageHovered : this.props.imageUrl
              }
            />
          </div>
          <div className="text-wrapper">
            <div className="name-and-price">
              <span class="product-name">{this.props.id}</span>
              <span class="product-price">{this.props.price}</span>
            </div>
            <div className="color-and-add">
              <div className="color-options">
                <img
                  alt=""
                  className="color-option"
                  src={this.state.image ? this.props.color1 : null}
                />
                <img
                  alt=""
                  className="color-option"
                  src={this.state.image ? this.props.color2 : null}
                />
                <img
                  alt=""
                  className="color-option"
                  src={this.state.image ? this.props.color3 : null}
                />
              </div>
              <button
                className={
                  this.state.image ? "quick-add-hovered" : "quick-add-Xhovered"
                }
              >
                Quick Add
              </button>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Product;
