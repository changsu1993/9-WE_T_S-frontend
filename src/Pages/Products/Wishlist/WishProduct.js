import React from "react";
import { Link } from "react-router-dom";
import WishBag from "./WishBag";
import "./WishProduct.scss";

class WishProduct extends React.Component {
  render() {
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
