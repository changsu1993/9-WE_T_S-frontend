import React from "react";
import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";
import "./CartProduct.scss";

class Bag extends React.Component {
  
  render() {
    return (
      <div className="bag-box">
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
                        return (
                          <option
                            selected={
                              s === this.props.selectedOption
                                ? "selected"
                                : ""
                            }
                            key={index}
                          >
                            {s}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
              <div className="colour">
                <span>Colour</span>
                <span>{this.props.color}</span>
              </div>
              <div className="quantity">
                <span>Quantity</span>
                <div className="control">
                  <button
                    onClick={() => this.props.quantityHandler(-1)}
                    style={{
                      cursor:
                        this.props.quantity === 1 ? "not-allowed" : "pointer",
                      color:
                        this.props.quantity === 1
                          ? "rgb(203, 203, 203)"
                          : "black",
                    }}
                  >
                    <GoDash size="16" position="absolute" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="4"
                    value={this.props.quantity}
                  />
                  <button
                    onClick={() => this.props.quantityHandler(1)}
                    style={{
                      cursor:
                        this.props.quantity === 4 ? "not-allowed" : "pointer",
                      color:
                        this.props.quantity === 4
                          ? "rgb(203, 203, 203)"
                          : "black",
                    }}
                  >
                    <GoPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="remove-price">
            <button className="remove">Remove</button>
            <div className="price">
              ₩{this.props.price && this.props.price.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Bag;
