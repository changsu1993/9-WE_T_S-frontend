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
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              imageHovered={item.imageHovered}
              colors={item.colors}
              imageOtherColors={item.imageOtherColors}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
