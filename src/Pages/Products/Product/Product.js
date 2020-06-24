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
    this.setState({ imageSrc: "imageUrl" });
  };

  render() {
    console.log("hihihi", this.props.colors);
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
              src={this.props[this.state.imageSrc]}
            />
          </div>
          <div className="text-wrapper">
            <div className="name-and-price">
              <span class="product-name">{this.props.name}</span>
              <span class="product-price">{this.props.price}</span>
            </div>
            <div className="color-and-add">
              <div className="color-options">
                {this.props.colors.map((obj) => {
                  return (
                    <img alt="" className="color-option" src={obj.colorImage} />
                  );
                })}
              </div>
              <button className="quick-add-hovered">Quick Add</button>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Product;
