import React from "react";
import "./CartModal.scss";
import CartProduct from "./CartProduct";
import WishProduct from "../Wishlist/WishProduct";

class CartModal extends React.Component {
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
    console.log(this.props.cartList)
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
        {this.props.openWishlist ? (
          <div className="product-container">
            <div className="bag-title">
              <div>
                <button>Bag (0)</button>
                <button className="change">
                  Wishlist (
                  {this.props.wishList.length === 1
                    ? this.props.wishList[0].quantity
                    : this.props.wishList &&
                      this.props.wishList.reduce((a, b) => {
                        return a.quantity + b.quantity;
                      })}
                  )
                </button>
              </div>
              <button className="close" onClick={this.props.closeWishlist}>
                Close
              </button>
            </div>
            <WishProduct wishList={this.props.wishList} />
          </div>
        ) : null}
      </>
    );
  }
}

export default CartModal;
