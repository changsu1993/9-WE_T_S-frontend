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

    const blackColorOnly = data.filter((obj) => {
      return obj.product_color === "BLACK";
    });

    const beigeColorOnly = data.filter((obj) => {
      return obj.product_color === "BEIGE";
    });

    const offWhiteColorOnly = data.filter((obj) => {
      return obj.product_color === "OFF WHITE";
    });

    const taupeColorOnly = data.filter((obj) => {
      return obj.product_color === "TAUPE";
    });

    const clayColorOnly = data.filter((obj) => {
      return obj.product_color === "CLAY";
    });

    const greenColorOnly = data.filter((obj) => {
      return obj.product_color.includes("GREEN");
    });

    const obj = {
      0: <ProductList data={data} />,
      1: <ProductList data={sortByLowerPrices} />,
      2: <ProductList data={sortByHigerPrices} />,
      3: <ProductList data={blackColorOnly} />,
      4: <ProductList data={beigeColorOnly} />,
      5: <ProductList data={offWhiteColorOnly} />,
      6: <ProductList data={taupeColorOnly} />,
      7: <ProductList data={clayColorOnly} />,
      8: <ProductList data={greenColorOnly} />,
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
                <option>Categories</option>
              </select>
              <select onChange={this.valueHandler}>
                <option value="0">Colors</option>
                <option value="3">Black</option>
                <option value="4">Beige</option>
                <option value="5">Off-white</option>
                <option value="6">Taupe</option>
                <option value="7">Clay</option>
                <option value="8">Green</option>
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
