import React from "react";
import "./Product.scss";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      imageSrc: "imageUrl",
      hovered: false,
    };
  }

  mouseOverHandler = () => {
    this.setState({ imageSrc: "imageHovered", hovered: true });
  };

  mouseOutHandler = () => {
    this.setState({ imageSrc: "imageUrl", hovered: false });
  };

  colorMouseOver = (idx) => {
    console.log(this.props.imageOtherColors[idx][idx]);
    this.setState({ imageSrc: "imageOtherColors" });
  };

  colorMouseOut = () => {
    this.setState({ imgSrc: "imageHovered" });
  };

  render() {
    return (
      <div className="man-set">
        <a
          className="man-product-photo"
          href="http://localhost:3000/shopping/man"
          onMouseOut={this.mouseOutHandler}
          onMouseOver={this.mouseOverHandler}
        >
          <div className="imgs">
            <img
              alt="product-img"
              className="img-original"
              src={this.props[]}
            />
          </div>
          <div className="text-wrapper">
            <div className="name-and-price">
              <span class="product-name">{this.props.name}</span>
              <span class="product-price">{this.props.price}</span>
            </div>
            <div
              className={
                this.state.hovered ? "color-and-add" : "color-and-add-opacity"
              }
            >
              <div className="color-options">
                {this.props.colors.map((obj, idx) => {
                  return (
                    <img
                      onMouseOver={() => this.colorMouseOver(idx)}
                      onMouseOut={this.colorMouseOut}
                      alt=""
                      className="color-option"
                      src={obj.colorImage}
                    />
                  );
                })}
              </div>
              <button className="quick-add-hovered">Quick Add</button>
            </div>
          </div>
        </a>
      </div>
    );
  }.
}

export default Product;
