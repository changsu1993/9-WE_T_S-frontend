import React from "react";
import Product from "../Product/Product";
import { withRouter } from "react-router-dom";
import "./ProductList.scss";

class ProductList extends React.Component {
  clickHandler = (id, colorId) => {
    this.props.history.push(`/shopping/man/${id}/color/${colorId}`);
  };

  render() {
    const { data } = this.props;
    return (
      <div className="ProductList">
        {data &&
          data.map((item, idx) => {
            return (
              <Product
                onClick={() =>
                  this.clickHandler(item.product_id, item.product_color_id)
                }
                key={`${item.product_id}_${idx}`}
                id={item.product_id}
                name={item.product_name}
                price={item.product_price}
                imageUrl={item.product_images[0]}
                imageHovered={item.product_images[1]}
                colors={item.button_images}
                colorId={item.product_color_id}
              />
            );
          })}
      </div>
    );
  }
}

export default withRouter(ProductList);
