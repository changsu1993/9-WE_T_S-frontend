import React from "react";
import { API_URL } from "../../../config"
import CartProduct from "./CartProduct";
import WishProduct from "../Wishlist/WishProduct";
import "./CartModal.scss";

class CartModal extends React.Component {
  constructor(){
    super();
    this.state={
      wishList : [],
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/order/like-product`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token")
      }
    })
      .then(res => res.json())
      .then(res => this.setState({
        wishList : res.wish_list
      }))
  }

  quantityHandler = (count) => {
    const newObj = { ...this.props.cartList[0] };
    if (count === 1) {
      if (this.props.cartList[0].quantity === 4) {
        return;
      }
    } else {
      if (this.props.cartList[0].quantity === 1) {
        return;
      }
    }

    newObj.quantity += count;
    this.setState({ cartList: [newObj] });
  };

  render() {
    return (
      <>
        {this.props.openCart ? (
          <div className="product-container">
            <div className="bag-title">
              <div>
                <button className="change">
                  Bag (
                  {this.props.cartList.length === 1
                    ? this.props.cartList[0].quantity
                    : this.props.cartList &&
                      this.props.cartList.reduce((a, b) => {
                        return a.quantity + b.quantity;
                      })}
                  )
                </button>
                <button>Wishlist (0)</button>
              </div>
              <button className="close" onClick={this.props.closeCart}>
                Close
              </button>
            </div>
            <CartProduct
              cartList={this.props.cartList}
              quantityHandler={this.quantityHandler}
            />
          </div>
        ) : null}
        {this.props.openWishlist && this.state.wishList.length > 0 ? (
          <div className="product-container">
            <div className="bag-title">
              <div>
                <button>Bag (0)</button>
                <button className="change">
                  Wishlist (
                  {this.state.wishList.length}
                  )
                </button>
              </div>
              <button className="close" onClick={this.props.closeWishlist}>
                Close
              </button>
            </div>
            <div className="wish">
            <WishProduct wishList={this.state.wishList}/>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default CartModal;
