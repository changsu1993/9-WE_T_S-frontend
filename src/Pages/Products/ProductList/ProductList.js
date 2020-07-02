import React from "react";
import Product from "../Product/Product";
import { withRouter } from "react-router-dom";
import "./ProductList.scss";

class ProductList extends React.Component {
  clickHandler = (id, colorId) => {
    this.props.history.push(`/shopping/man/${id}/color/${colorId}`);
  };

  render() {
    return (
      <div className="product-list">
        {this.props.data &&
          this.props.data.map((item, idx) => {
            return (
              <div
                onClick={() =>
                  this.clickHandler(item.product_id, item.product_color_id)
                }
              >
                <Product
                  key={idx}
                  id={item.product_id}
                  name={item.product_name}
                  price={item.product_price}
                  imageUrl={item.product_images[0]}
                  imageHovered={item.product_images[1]}
                  color={item.button_image}
                  colorId={item.product_color_id}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

export default withRouter(ProductList);
