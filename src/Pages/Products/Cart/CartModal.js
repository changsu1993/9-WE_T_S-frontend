import React from "react";
import "./CartModal.scss";
import CartProduct from "./CartProduct";
import WishProduct from "../Wishlist/WishProduct";

class CartModal extends React.Component {
  constructor(){
    super();
    this.state={
      wishList : [],
    }
  }

  componentDidMount() {
    console.log(localStorage.getItem("access_token"))
    
    fetch("http://10.58.7.16:8000/order/like-product", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token")
      }
    })
      .then(res => res.json())
      .then(res => this.setState({
        wishList : res.wish_list
      }))

    //   let wishList = localStorage.getItem("wishlist");
    // wishList = JSON.parse(wishList);
    // this.setState({
    //   wishList
    // })
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
    console.log(this.state.wishList)
  
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
