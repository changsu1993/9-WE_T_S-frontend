import React from "react";
import { Link } from "react-router-dom";
import ImageModal from "../../Components/ImageModal/ImageModal";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import Nav from "../../Components/Nav/Nav";
import ProductBottomBar from "../../Components/ProductBottomBar/ProductBottomBar";
import Footer from "../../Components/Footer/Footer";
import Arrowdown from "../../Images/arrow-down.png";
import "./ProductDetail.scss";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailData: {},
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

  componentDidMount = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      fetch("http://localhost:3001/data/detailData.json")
        .then((res) => res.json())
        .then((res) =>
          this.setState({ detailData: res.detailData, isLoading: false })
        );
    }, 1000);
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    this.setState({
      isVisible: window.pageYOffset > 500 ? true : false,
    });
  };

  sizeSelectHandler = (size) => {
    this.setState({ option: size });
  };

  arrowClickHandler = () => {
    const { click } = this.state;
    this.setState({ click: !click });
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
    } = this;

    const {
      detailData,
      option,
      click,
      isModalOpen,
      isLoading,
      isVisible,
    } = this.state;

    const imgsArray =
      detailData.productImages &&
      detailData.productImages.filter((obj, idx) => {
        return idx !== 0;
      });

    return (
      <>
        <ImageModal
          isOpen={isModalOpen}
          close={closeModal}
          data={detailData.id && detailData.productImages}
        />

        <Nav />
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            <main className="ProductDetail">
              <header>
                <button>{detailData.category}</button>
                <span>{`>`}</span>
                <button>{detailData.subCategory}</button>
                <span>{`>`}</span>
                <button>{detailData.subSubCategory}</button>
              </header>
              <div className="product-main-photo-and-info">
                <section className="size">
                  <img
                    className="product-photo"
                    alt="product-img"
                    src={
                      detailData.productImages &&
                      detailData.productImages[0].img
                    }
                  />
                </section>
                <section className="product-info-wrapper size">
                  <div className="product-info">
                    <h1>{detailData.name}</h1>
                    <div className="price-detail">
                      <span>
                        ₩{detailData.price && detailData.price.toLocaleString()}
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
                            {detailData.size &&
                              detailData.size.map((opt) => {
                                return (
                                  <li
                                    onClick={() => {
                                      sizeSelectHandler(opt.option);
                                    }}
                                    name={opt.option}
                                  >
                                    {opt.option}
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
                        {detailData.colors &&
                          detailData.colors.map((obj) => {
                            return (
                              <div className="colors-wrapper">
                                <span>{obj.name}</span>
                                <Link to={`/shopping/item1${obj.name}`}>
                                  <img
                                    alt="color-options"
                                    className="circled-color"
                                    src={obj.img}
                                  />
                                </Link>
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

                {detailData.id &&
                  imgsArray.map((imgobj) => {
                    return (
                      <section className="size">
                        <img
                          onClick={openModal}
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
                    {detailData.id &&
                      detailData.careGuide.map((cg) => {
                        return <p className="care-guide">{cg.careGuide}</p>;
                      })}
                  </div>
                </div>
              </div>
            </main>
            <Footer />
            {detailData.id && (
              <ProductBottomBar
                isActive={isVisible}
                price={detailData.price.toLocaleString()}
                size={detailData.size}
              />
            )}
          </>
        )}
      </>
    );
  }
}

export default ProductDetail;
