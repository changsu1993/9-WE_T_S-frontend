import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: this.props.imageUrl,
      hovered: false,
      colorHovered: false,
    };
  }
  mouseOverHandler = () => {
    const { colorHovered } = this.state;
    if (colorHovered) return;
    this.setState({ imageSrc: this.props.imageHovered, hovered: true });
  };

  mouseOutHandler = () => {
    const { colorHovered } = this.state;
    if (colorHovered) return;
    this.setState({ imageSrc: this.props.imageUrl, hovered: false });
  };

  colorMouseOver = (img) => {
    this.setState({ imageSrc: img, colorHovered: true });
  };

  colorMouseOut = () => {
    this.setState({ imgSrc: this.props.imageUrl, colorHovered: false });
  };

  render() {
    const {
      mouseOutHandler,
      mouseOverHandler,
      colorMouseOut,
      colorMouseOver,
    } = this;
    const { imageSrc, hovered, colorHovered } = this.state;
    const { name, price, colors } = this.props;

    return (
      <div
        className="Product"
        onMouseOut={mouseOutHandler}
        onMouseOver={mouseOverHandler}
      >
        <Link to="/shopping/man">
          <div className="imgs">
            <img alt="product-img" className="img-original" src={imageSrc} />
          </div>
          <div className="text-wrapper">
            <div className="name-and-price">
              <span className="product-name">{name}</span>
              <span className="product-price">{price}</span>
            </div>
            <div
              className={
                colorHovered || hovered
                  ? "color-and-add show"
                  : "color-and-add hide"
              }
            >
              <div className="color-options">
                {colors.map((color) => {
                  return (
                    <img
                      onMouseEnter={() => colorMouseOver(color.imageUrl)}
                      onMouseLeave={colorMouseOut}
                      alt=""
                      className="color-option"
                      src={color.colorImage}
                    />
                  );
                })}
              </div>
              <button className="quick-add-hovered">Quick Add</button>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Product;
