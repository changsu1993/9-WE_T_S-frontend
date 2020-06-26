import React from "react";
import "./ProductDetail.scss";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

class ProductDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      detailData: {},
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/detailData.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({ detailData: res.detailData }, () => {
          console.log(this.state.detailData, "here");
        })
      );
  }

  render() {
    //   const photoFilter = this.state.detailData.productImage.filter((obj) => {
    //     return obj.index!== 0;
    //   });
    //   console.log(photoFilter);

    //idx  가 영이 아닌 것 으로 필터를 돌려서, 변수에 저장후 아래  jsx에서 그 변수로  map을 돌리기
    return (
      <>
        <Nav />
        <main className="product-detail">
          <header className="product-header">
            <button className="button-underline">
              {this.state.detailData.category}
            </button>
            <span>></span>
            <button className="button-underline">
              {this.state.detailData.subCategory}
            </button>
            <span>></span>
            <button className="button-underline">
              {this.state.detailData.subSubCategory}
            </button>
          </header>
          <div className="product-main-photo-and-info">
            <section className="size">
              <img
                className="product-photo"
                alt="product"
                src="https://cdn-images.farfetch-contents.com/ami-short-sleeves-shirt_14374136_27071707_1920.jpg?c=2"
              />
            </section>
            <section className="product-info-wrapper size">
              <div className="product-info">
                <h1>{this.state.detailData.name}</h1>
                <div className="price-detail">
                  <span>
                    $
                    {this.state.detailData.id &&
                      this.state.detailData.price.toLocaleString()}
                  </span>
                  <span className="import-incl">(Import Duties Included)</span>
                </div>
                <p>clothing standard</p>
                <div className="select-a-size">
                  <span>Size</span>
                  <div className="dropdown-bar"></div>
                </div>
                <div className="colors-options">
                  <span>Colors</span>
                  <span></span>
                </div>
                <button className="add-to-cart">Add to cart</button>
              </div>
              <div className="product-detail-buttons">
                <button className="button-underline-small">Description</button>
                <button className="button-underline-small">Size Guide</button>
                <button className="button-underline-small">Shipping</button>
              </div>
            </section>

            {this.state.detailData.id &&
              this.state.detailData.productImages.map((imgobj) => {
                return (
                  <section className="size">
                    <img
                      alt="product-img"
                      className="product-photo"
                      src={imgobj.img}
                    />
                  </section>
                );
              })}
          </div>
          <div className="customer-care-guide">
            <div className="care-box">
              <div className="care">
                <h2>Customer Care</h2>
                <p>eshop@amiparis.fr</p>
                <p>+44 238 214 5908</p>
              </div>
            </div>
            <div className="care-box">
              <div className="care">
                <h2>Care Guide</h2>
                {this.state.detailData.id &&
                  this.state.detailData.careGuide.map((cg) => {
                    return <p className="care-guide">{cg.careGuide}</p>;
                  })}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
