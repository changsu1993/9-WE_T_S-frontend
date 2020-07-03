import React from "react";
import "./WishProduct.scss";

class WishBag extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="WishBag">
          <div className="product">
            <div className="product-img">
              <img src={this.props.productImage} alt="" />
            </div>
            <div className="product-box">
              <div className="product-name">{this.props.name}</div>
              <div className="select-box">
                <div className="size">
                  <span>Size</span>
                  <div className="control">
                    <select>
                      {this.props.size &&
                        this.props.size.map((s, index) => {
                          return <option key={index}>{s}</option>;
                        })}
                    </select>
                  </div>
                </div>
                <div className="colour">
                  <span>Colour</span>
                  <span>{this.props.color}</span>
                </div>
              </div>
            </div>
            <div className="remove-price">
              <button className="remove">Remove</button>
              <div className="price">
                ₩{this.props.price && Number(this.props.price.slice(0,-5)).toLocaleString()}
              </div>
              <button className="add-cart">Add to cart</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default WishBag;
