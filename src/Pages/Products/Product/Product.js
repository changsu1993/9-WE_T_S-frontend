import React from "react";
import { withRouter } from "react-router-dom";
import Heart from "../../../Images/heart1.png";
import Heart2 from "../../../Images/red-heart.png";
import "./Product.scss";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: this.props.imageUrl,
      heartClick: false,
      hovered: false,
      colorHovered: false,
      heartHovered: false,
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

  heartClickHandler = () => {
    const { heartClick } = this.state;
    this.setState({ heartClick: !heartClick });
  };

  enterHeartHandler = () => {
    this.setState({ heartHovered: true });
  };

  leaveHeartHandler = () => {
    this.setState({ heartHovered: false });
  };

  render() {
    const {
      mouseOutHandler,
      mouseOverHandler,
      colorMouseOut,
      colorMouseOver,
      heartClickHandler,
      enterHeartHandler,
      leaveHeartHandler,
    } = this;
    const { imageSrc, hovered, colorHovered, heartClick } = this.state;
    const { name, price, colors, imageUrl, onClick } = this.props;

    return (
      <div
        className="Product"
        onClick={onClick}
        onMouseOut={mouseOutHandler}
        onMouseOver={mouseOverHandler}
      >
        <div className="imgs">
          <img alt="product-img" className="img-original" src={imageSrc} />
          <img
            className="heart-button"
            src={heartClick ? Heart2 : Heart}
            onClick={heartClickHandler}
            onMouseOver={enterHeartHandler}
            onMouseOut={leaveHeartHandler}
          />
        </div>
        <div className="text-wrapper">
          <div className="name-and-price">
            <span className="product-name">{name}</span>
            <span className="product-price">₩{price.toLocaleString()}</span>
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
                    onMouseEnter={() => colorMouseOver(imageUrl)}
                    onMouseLeave={colorMouseOut}
                    alt=""
                    className="color-option"
                    src={color}
                  />
                );
              })}
            </div>
            <button className="quick-add-hovered">Quick Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
