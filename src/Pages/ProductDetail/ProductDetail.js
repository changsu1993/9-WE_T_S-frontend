import React from "react";
import "./ProductDetail.scss";

class ProductDetail extends React.Component {
  render() {
    return (
      <main className="product-detail">
        <header className="product-header">
          <button className="product-directory">Woman</button>
          <span>&nbsp;></span>
          <button className="product-directory">Clothing</button>
          <span>&nbsp;></span>
          <button className="product-directory">Tops</button>
        </header>
        <div className="product-main-photo-and-info">
          <div className="product-main-photo"></div>
          <div calssName="product-info"></div>
        </div>
      </main>
    );
  }
}

export default ProductDetail;
