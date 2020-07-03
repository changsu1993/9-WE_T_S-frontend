import React from "react";
import "./Cart.scss";
import Nav from "../../../Components/Nav/Nav";
import Footer from "../../../Components/Footer/Footer";
import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: this.props.location.state.cartList,
    };
  }

  minusHandler = () => {
    const newObj = { ...this.state.cartList[0] };
    if (this.state.cartList[0].quantity > 1) {
      newObj.quantity -= 1;
      this.setState({ cartList: [newObj] });
    }
  };

  plusHandler = () => {
    const newObj = { ...this.state.cartList[0] };
    if (this.state.cartList[0].quantity < 4) {
      newObj.quantity += 1;
      this.setState({ cartList: [newObj] });
    }
  };

  render() {
    console.log(this.state.cartList);
    console.log(this.state.cartList[0].quantity);
    return (
      <>
        <Nav />
        <div className="Cart">
          <div className="title">My Shopping Bag Ami</div>
          <div className="cart-container">
            <div className="left-container">
              {this.state.cartList &&
                this.state.cartList.map((product, i) => {
                  return (
                    <div key={i} className="product">
                      <div className="product-img">
                        <img src={product.productImage} alt="" />
                      </div>
                      <div className="product-box">
                        <div className="product-name">{product.name}</div>
                        <div className="select-box">
                          <div className="size">
                            <span>Size</span>
                            <div className="control">
                              <select>
                                {product.size &&
                                  product.size.map((s, index) => {
                                    return (
                                      <option
                                        selected={
                                          s === product.selectedOption
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
                            <span>{product.color}</span>
                          </div>
                          <div className="quantity">
                            <span>Quantity</span>
                            <div className="control">
                              <button
                                onClick={this.minusHandler}
                                style={{
                                  cursor:
                                    product.quantity === 1
                                      ? "not-allowed"
                                      : "pointer",
                                  color:
                                    product.quantity === 1
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
                                value={product.quantity}
                              />
                              <button
                                onClick={this.plusHandler}
                                style={{
                                  cursor:
                                    product.quantity === 4
                                      ? "not-allowed"
                                      : "pointer",
                                  color:
                                    product.quantity === 4
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
                          ₩{product.price && product.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="right-container">
              <div className="order-title">Order Summary</div>
              <div className="order-box">
                <div className="price-box">
                  <div className="price-title">
                    <div>Sub - Total</div>
                    <div>
                      ₩
                      {this.state.cartList.length === 1
                        ? (
                            this.state.cartList[0].price *
                            this.state.cartList[0].quantity
                          ).toLocaleString()
                        : this.state.cartList &&
                          this.state.cartList
                            .reduce((a, b) => {
                              return (
                                a.price * a.quantity + b.price * b.quantity
                              );
                            })
                            .toLocaleString()}
                    </div>
                  </div>
                  <div className="price-title">
                    <div>Estimated Shipping</div>
                    <div> ₩31,344</div>
                  </div>
                </div>
                <div className="total-box">
                  <div className="price-title">
                    <div className="total-price">
                      <span>Total</span>
                      <span>(Import Duties Included)</span>
                    </div>
                    <div>
                      ₩
                      {this.state.cartList.length === 1
                        ? (
                            this.state.cartList[0].price *
                              this.state.cartList[0].quantity +
                            31344
                          ).toLocaleString()
                        : this.state.cartList &&
                          this.state.cartList
                            .reduce((a, b) => {
                              return (
                                a.price * a.quantity +
                                b.price * b.quantity +
                                31344
                              );
                            })
                            .toLocaleString()}
                    </div>
                  </div>
                  <button>Proceed to checkout</button>
                  <div className="notice">
                    <p>
                      Our returns are free and easy. If something isn’t quite
                      right, you have 14 days to send it back to us.
                    </p>
                    <p>
                      Read more in our&nbsp;
                      <a href="#!">returns and refund policy.</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Cart;
