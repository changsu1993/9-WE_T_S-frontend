import React from "react";
import Product from "../Product/Product";
import "./ProductList.scss";

class ProductList extends React.Component {
  render() {
    return (
      <div className="man-collections">
        {this.props.data.map((item, idx) => {
          return (
            <Product
              key={idx}
              id={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              imageHovered={item.imageHovered}
              color1={item.color1}
              color2={item.color2}
              color3={item.color3}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
