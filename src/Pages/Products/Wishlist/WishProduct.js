import React from "react";
import "./WishProduct.scss";
import WishBag from "./WishBag";
import { Link } from "react-router-dom";

class WishProduct extends React.Component {
  render() {
    console.log(this.props.wishList)
    return (
      <>
        {this.props.wishList&&this.props.wishList.map((product, i) => {
          return (
            <WishBag
              key={i}
              name={product.name}
              productImage={product.image}
              color={product.color}
              size={product.size}
              price={product.price}
            />
          );
        })}
        <div className="view-wish">
          <Link
            to={{
              pathname: "/wishlist",
              state: {
                wishList: this.props.wishList,
              },
            }}
          >
            <button>View Wishlist</button>
          </Link>
        </div>
      </>
    );
  }
}
export default WishProduct;
