import React from "react";
import { Link } from "react-router-dom";
import ImageModal from "../../Components/ImageModal/ImageModal";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import Nav from "../../Components/Nav/Nav";
import ProductBottomBar from "../../Components/ProductBottomBar/ProductBottomBar";
import Footer from "../../Components/Footer/Footer";
import Arrowdown from "../../Images/arrow-down.png";
import Heart from "../../Images/heart1.png";
import Heart2 from "../../Images/red-heart.png";
import "./ProductDetail.scss";

class ProductDetailwData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailData: {},
      heartClick: false,
      showList: false,
      option: "",
      click: false,
      showImage: false,
      isModalOpen: false,
      isLoading: false,
      prevScrollpos: window.pageYOffset,
      isVisible: false,
    };
  }

  componentDidMount() {
    const { id, colorId } = this.props.match.params;
    this.setState({ isLoading: true });
    setTimeout(() => {
      fetch(`http://localhost:3000/data/detailDatadata.json`)
        // fetch(`http://10.58.7.232:8000/product/${id}/color/${colorId}`)
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            detailData: res.product_data,
            isLoading: false,
          })
        );
    }, 1000);

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      isVisible: window.pageYOffset > 500 ? true : false,
    });
  };

  sizeSelectHandler = (option) => {
    this.setState({ option });
  };

  arrowClickHandler = () => {
    const { click } = this.state;
    this.setState({ click: !click });
  };

  heartClickHandler = () => {
    const { heartClick } = this.state;
    this.setState({ heartClick: !heartClick });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
    window.scrollTo(0, 0);
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const {
      sizeSelectHandler,
      arrowClickHandler,
      openModal,
      closeModal,
      heartClickHandler,
    } = this;

    const {
      detailData,
      option,
      click,
      isModalOpen,
      isLoading,
      isVisible,
      heartClick,
    } = this.state;

    const imgsArray =
      detailData.product_images &&
      detailData.product_images.filter((obj, index) => {
        return index !== 0;
      });

    return (
      <>
        <ImageModal
          isOpen={isModalOpen}
          close={closeModal}
          images={detailData.product_images}
        />

        <Nav />
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            <main className="ProductDetail">
              <header>
                <button>Man</button>
                <span>{`>`}</span>
                <button>Clothing</button>
                <span>{`>`}</span>
                <button>{detailData.sub_sub_category}</button>
              </header>
              <div className="product-main-photo-and-info">
                <section className="size">
                  <img
                    className="product-photo"
                    alt="product-img"
                    src={
                      detailData.product_images && detailData.product_images[0]
                    }
                  />
                  <img
                    className="heart-button"
                    src={heartClick ? Heart2 : Heart}
                    onClick={heartClickHandler}
                  />
                </section>
                <section className="product-info-wrapper size">
                  <div className="product-info">
                    <h1>{detailData.product_name}</h1>
                    <div className="price-detail">
                      <span>
                        ₩ {}
                        {detailData.product_price &&
                          detailData.product_price.toLocaleString()}
                      </span>
                      <span className="import-incl">
                        (Import Duties Included)
                      </span>
                    </div>
                    <p>clothing standard</p>
                    <div className="select-a-size">
                      <span>Size</span>
                      <div
                        onClick={arrowClickHandler}
                        className="size-dropdown-bar"
                      >
                        <div className="drop-down">
                          <div className="click-to-select">
                            <span>
                              {option !== "" ? option : "Select a size"}
                            </span>
                            <img
                              class={click ? "clicked" : "x-clicked"}
                              alt="arrow-icon"
                              src={Arrowdown}
                            />
                          </div>

                          <ul className={`size-list ${click ? "show" : ""}`}>
                            {detailData.product_size &&
                              detailData.product_size.map((opt) => {
                                return (
                                  <li
                                    onClick={() => {
                                      sizeSelectHandler(opt);
                                    }}
                                    name={opt}
                                  >
                                    {opt}
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="color-in-comment-box"></div>
                    <div className="colors-options">
                      <span>Colors</span>
                      <div className="colors">
                        {detailData.button_images &&
                          detailData.button_images.map((obj) => {
                            return (
                              <div className="colors-wrapper">
                                <span>COLOR</span>
                                <img
                                  alt="color-options"
                                  className="circled-color"
                                  src={obj}
                                />
                              </div>
                            );
                          })}
                      </div>
                    </div>
                    <button className="add-to-cart">Add to cart</button>
                  </div>
                  <div className="product-detail-buttons">
                    <button>Description</button>
                    <button>Size Guide</button>
                    <button>Shipping</button>
                  </div>
                </section>

                {imgsArray &&
                  imgsArray.map((imgobj) => {
                    return (
                      <section className="size">
                        <img
                          onClick={openModal}
                          alt="product-img"
                          className="product-photo"
                          src={imgobj}
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
                    {detailData.product_guide &&
                      detailData.product_guide.map((cg) => {
                        return <p className="care-guide">{cg}</p>;
                      })}
                  </div>
                </div>
              </div>
            </main>
            <Footer />
            {detailData.product_size && (
              <ProductBottomBar
                isActive={isVisible}
                price={detailData.product_price.toLocaleString()}
                size={detailData.product_size}
              />
            )}
          </>
        )}
      </>
    );
  }
}

export default ProductDetailwData;
