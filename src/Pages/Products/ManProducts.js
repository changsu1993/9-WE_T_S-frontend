import React from "react";
import Nav from "../../Components/Nav/Nav";
import ProductList from "./ProductList/ProductList";
import Footer from "../../Components/Footer/Footer";
import "./Products.scss";

class ManProducts extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      activeTab: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/finaldatalist.json")
      // fetch("http://10.58.7.232:8000/product/list")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_data, activeTab: 0 }));
  }

  valueHandler = (e) => {
    this.setState({ activeTab: e.target.value });
  };

  render() {
    const { data, activeTab } = this.state;

    const parsePrice = (x) => x;

    const sortByLowerPrices = data
      .slice()
      .sort(
        (a, b) => parsePrice(a.product_price) - parsePrice(b.product_price)
      );

    const sortByHigerPrices = data
      .slice()
      .sort(
        (a, b) => parsePrice(b.product_price) - parsePrice(a.product_price)
      );

    const obj = {
      0: <ProductList data={data} />,
      1: <ProductList data={sortByLowerPrices} />,
      2: <ProductList data={sortByHigerPrices} />,
    };

    return (
      <>
        <Nav />
        <main className="ManProducts">
          <div className="man-category"> Man </div>
          <div className="num-of-items">{data.length} items</div>

          <section className="man-header">
            <div className="man-wrapper">
              <div className="man-explained">
                <p>
                  The new AMI Pre-Collection mirrors the essence of the brand:
                  intrinsic joy and optimism.
                </p>
                <p>Combining bright colors, rich textures and new patterns.</p>
                <p>
                  A late-summer atmosphere and a retro vibe is introduced for
                  this new season.
                </p>
              </div>
              <div className="man-main-photo"></div>
            </div>
          </section>
          <section className="filter-bar">
            <div className="cat-col-size">
              <select>
                <option value>Categories</option>
                <option value="0">Categories</option>
                <option value="1">Categories</option>
              </select>
              <select>
                <option value>Colors</option>

                {data &&
                  data.map((obj, idx) => {
                    return <option value={idx}>{obj.product_color}</option>;
                  })}
              </select>
            </div>
            <div className="sort-by">
              <select onChange={this.valueHandler}>
                <option value="0">Sort by</option>
                <option value="1">Lower prices</option>
                <option value="2">Higher prices</option>
              </select>
            </div>
          </section>
          {data && obj[activeTab]}
        </main>
        <Footer />
      </>
    );
  }
}

export default ManProducts;
