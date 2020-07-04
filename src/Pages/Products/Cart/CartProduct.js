import React from "react";
import { Link } from "react-router-dom";
import Bag from "./Bag";
import "./CartProduct.scss";


class CartProdcut extends React.Component {
  render() {
    return (
      <>
        {this.props.cartList.map((product, i) => {
          return (
            <Bag
              key={i}
              name={product.name}
              productImage={product.productImage}
              color={product.color}
              selectedOption={product.selectedOption}
              size={product.size}
              quantity={product.quantity}
              price={product.price}
              quantityHandler={this.props.quantityHandler}
            />
          );
        })}
        <ul className="price-box">
          <li>
            <span>Order value</span>
            <span>
              ₩
              {this.props.cartList.length === 1
                ? (
                    this.props.cartList[0].price *
                    this.props.cartList[0].quantity
                  ).toLocaleString()
                : this.props.cartList &&
                  this.props.cartList
                    .reduce((a, b) => {
                      return a.price * a.quantity + b.price * b.quantity;
                    })
                    .toLocaleString()}
            </span>
          </li>
          <li>
            <span>Shipping</span>
            <span>₩31,344</span>
          </li>
          <li>
            <span className="total">Total</span>
            <span>
              ₩
              {this.props.cartList.length === 1
                ? (
                    this.props.cartList[0].price *
                      this.props.cartList[0].quantity +
                    31344
                  ).toLocaleString()
                : this.props.cartList &&
                  this.props.cartList
                    .reduce((a, b) => {
                      return (
                        a.price * a.quantity + b.price * b.quantity + 31344
                      );
                    })
                    .toLocaleString()}
            </span>
          </li>
        </ul>
        <div className="btn-box">
          <button>Checkout</button>
          <Link
            to={{
              pathname: "/cart",
              state: {
                cartList: this.props.cartList,
              },
            }}
          >
            <button>View bag</button>
          </Link>
        </div>
      </>
    );
  }
}

export default CartProdcut;
