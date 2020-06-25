import React from "react";
import "./Products.scss";
import ProductList from "./ProductList/ProductList";

class Man extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.data }));
  }

  render() {
    return (
      <main className="man">
        <div className="man-category"> Man </div>
        <div className="num-of-items">{this.state.data.length} items</div>

        <section className="man-header">
          <div className="man-wrapper">
            <div className="man-explained">
              <p>
                The new AMI Pre-Collection mirrors the essence of the brand:
                intrinsic joy and optimism.
              </p>
              <p>Combining bright colors, rich textures and new patterns.</p>
              <p>
                A late-summer atmosphere and a retro vibe is introduced for this
                new season.
              </p>
            </div>
            <div className="man-main-photo"></div>
          </div>
        </section>
        <section className="filter-bar">
          <div className="cat-col-size">
            <select>
              <option value>Categories</option>
              <option value="0">Lower prices</option>
              <option value="1">Higher prices</option>
            </select>
            <select>
              <option value>Colors</option>
              <option value="0">Lower prices</option>
              <option value="1">Higher prices</option>
            </select>
            <select>
              <option value>Sizes</option>
              <option value="0">Lower prices</option>
              <option value="1">Higher prices</option>
            </select>
          </div>
          <div className="sort-by">
            <select>
              <option value>Sort by</option>
              <option value="0">Lower prices</option>
              <option value="1">Higher prices</option>
            </select>
          </div>
        </section>
        <ProductList data={this.state.data} />
      </main>
    );
  }
}

export default Man;
