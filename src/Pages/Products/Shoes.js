import React from "react";
import "./Products.scss";

class Shoes extends React.Component {
  render() {
    return (
      <main>
        <div className="man-category">
          Man
          <div className="num-of-items">592 items</div>
        </div>
        <section>
          <div></div>
          <div></div>
        </section>
        // eslint-disable-next-line prettier/prettier
        <section className="filter-bar"></section>
        <div></div>
      </main>
    );
  }
}

export default Shoes;
