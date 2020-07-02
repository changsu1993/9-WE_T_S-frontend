import React from "react";
import "./Cart.scss";
import Nav from "../../../Components/Nav/Nav";
import Footer from "../../../Components/Footer/Footer";
import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      detailData: {},
      count: 1,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/detailData.json")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          detailData: response.detailData,
        });
      });
  }

  plusHandler = (e) => {
    let count = this.state.count;
    if (this.state.count < 4) {
      count = count + 1;
      this.setState({
        count,
      });
    }
  };

  minusHandler = (e) => {
    let count = this.state.count;
    if (
      this.state.count > 1 &&
      this.state.count <= Number(e.currentTarget.nextElementSibling.max)
    ) {
      count = count - 1;
      this.setState({
        count,
      });
    }
  };

  render() {
    return (
      <>
        <Nav />
        <div className="Cart">
          <div className="title">My Shopping Bag Ami</div>
          <div className="container">
            <div className="left-container">
              <div className="product">
                <div className="product-img">
                  <img
                    src={
                      this.state.detailData.productImages &&
                      this.state.detailData.productImages[0].img
                    }
                    alt=""
                  />
                </div>
                <div className="product-box">
                  <div className="product-name">
                    {this.state.detailData.name}
                  </div>
                  <div className="select-box">
                    <div className="size">
                      <span>Size</span>
                      <div className="control">
                        <select>
                          {this.state.detailData.size &&
                            this.state.detailData.size.map((s, index) => {
                              return <option key={index}>{s.option}</option>;
                            })}
                        </select>
                      </div>
                    </div>
                    <div className="colour">
                      <span>Colour</span>
                      <span>
                        {this.state.detailData.colors &&
                          this.state.detailData.colors[0].name}
                      </span>
                    </div>
                    <div className="quantity">
                      <span>Quantity</span>
                      <div className="control">
                        <button
                          onClick={this.minusHandler}
                          style={{
                            cursor:
                              this.state.count === 1
                                ? "not-allowed"
                                : "pointer",
                            color:
                              this.state.count === 1
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
                          value={this.state.count}
                        />
                        <button
                          onClick={this.plusHandler}
                          style={{
                            cursor:
                              this.state.count === 4
                                ? "not-allowed"
                                : "pointer",
                            color:
                              this.state.count === 4
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
                    ₩
                    {this.state.detailData.price &&
                      this.state.detailData.price.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
            <div className="right-container">
              <div className="order-title">Order Summary</div>
              <div className="order-box">
                <div className="price-box">
                  <div className="price-title">
                    <div>Sub - Total</div>
                    <div>
                      ₩
                      {this.state.detailData.price &&
                        this.state.detailData.price.toLocaleString()}
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
                      {this.state.detailData.price &&
                        (this.state.detailData.price + 31344).toLocaleString()}
                    </div>
                  </div>
                  <button>Proceed to checkout</button>
                  <div className="notice">
                    <p>
                      Our returns are free and easy. If something isn’t quite
                      right, you have 14 days to send it back to us.
                    </p>
                    <p>
                      Read more in our{" "}
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
