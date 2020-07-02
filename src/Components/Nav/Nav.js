import React from "react";
import "./Nav.scss";
import ami_logo from "../../Images/amilogo.png";
import ami_white from "../../Images/amilogo-white.png";
import ami_black from "../../Images/amilogo1.png";
import Newsletter from "../Newsletter/Newsletter";
import NewsletterPortal from "../Newsletter/NewsletterPortal";
import Search from "../Search/Search";
import SearchPortal from "../Search/SearchPortal";
import { Link } from "react-router-dom";



class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: null,
      prevScrollpos: window.pageYOffset,
      visible: true,
      mouseEnter: false,
      Newsletter: false,
      Search: false,
      cartClick : false,
      category : []
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    fetch("http://10.58.7.177:8000")
    .then(res => res.json())
    .then(res => this.setState({
      category : res.category_list
    }))
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  mouseOver = (id) => {
    this.setState({
      activeTab: id,
    });
  };

  mouseOut = () => {
    this.setState({
      activeTab: undefined,
    });
  };


  mouseEnterNav = () => {
    this.setState({
      mouseEnter: true,
    });
  };

  mouseLeaveNav = () => {
    this.setState({
      mouseEnter: false,
    });
  };

  imgHandler = () => {
    if (this.state.visible) {
      if (this.state.mouseEnter) {
        return ami_black;
      }
      return ami_white;
    } else {
      return ami_logo;
    }
  }

  handleOpenModal = () => {
    this.setState({
      Newsletter: true,
    });
  };

  handleOpenSearch = () => {
    this.setState({
      Search: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      Newsletter: false,
    });
  };

  handleCloseSearch = () => {
    this.setState({
      Search: false,
    });
  };

  cartClickHandler = (e) => {
    this.setState({
      cartClick : true,
    })
  }

  render() {
    console.log(this.state.category)
    const colorchange =
      this.state.visible && this.state.mouseEnter === false
        ? "white-color"
        : "";

    return (
      <div
        className={`Nav ${this.state.visible ? "text-logo" : ""}`}
        onMouseEnter={this.mouseEnterNav}
        onMouseLeave={this.mouseLeaveNav}
      >
        <ul className="left-menu">
          <li
            onMouseOver={() => this.mouseOver(0)}
            onMouseOut={this.mouseOut}
            className="category-btn"
          >
            <span className={colorchange}>Menu</span>
            <div
              className={`hover-nav ${
                this.state.activeTab === 0 ? "show" : "hide"
              } ${this.state.visible ? "text-logo" : ""}`}
            >
              <ul className="product-nav">
                <li>Rainbow Capsule Collection</li>
                <li>About AMI</li>
                <li>New Arrivals</li>
                <li>Spring Summer 20 Show</li>
                <li>Fall Winter 20 Show</li>
                <li>Collaborations</li>
                <li>Stores</li>
                <li>Affiliates</li>
                <li>Customer service</li>
              </ul>
              <div className="red-text">
                FREE SHIPPING AND RETURNS FOR ALL ORDERS ABOVE 270£
              </div>
              <div className="img">
                <img
                  src="https://www.amiparis.com/BWStaticContent/14000/14000/d9b0b8fa-a2df-4660-b8de-ac11ce17c220_ami-navigation-menu.jpg"
                  alt=""
                />
                <p>AMI SS20 Collection</p>
              </div>
            </div>
          </li>
          <li
            onMouseOver={() => this.mouseOver(1)}
            onMouseOut={this.mouseOut}
            className="category-btn"
          >
            <a href="#!" className="sale-tab">
              Sale
            </a>
            <div
              className={`hover-nav ${
                this.state.activeTab === 1 ? "show" : "hide"
              } ${this.state.visible ? "text-logo" : ""}`}
            >
              <ul className="sale-text product-nav">
                <li>T-Shirts & Polos</li>
                <li>Shirts</li>
                <li>Trousers</li>
                <li>Shorts</li>
                <li>Denim</li>
                <li>Jackets & Coats</li>
                <li>Sweatshirts & Hoodies</li>
                <li>Sweaters & Cardigans</li>
                <li>Suits</li>
                <li>Leather</li>
                <li>Accessories</li>
                <li>Shoes</li>
              </ul>
            </div>
          </li>
          <li
            onMouseOver={() => this.mouseOver(2)}
            onMouseOut={this.mouseOut}
            className="category-btn"
          >
            <Link
              to="/shopping/man"
              className={colorchange}
            >

              Man
            </Link>
            <div
              className={`hover-nav ${
                this.state.activeTab === 2 ? "show" : "hide"
              } ${this.state.visible ? "text-logo" : ""}`}
            >
              <ul className="product-nav">
                <li className="sale-tab">Sale</li>
         {this.state.category&&this.state.category.map((list,i)=>{return <li key={i}>{list.category_name}</li>})}
                {/* <li>New Arrivals</li>
                <li>Rainbow Collection</li>
                <li>Ami de Coeur</li>
                <li>T-Shirts & Polos</li>
                <li>Shirts</li>
                <li>Shorts</li>
                <li>Trousers</li>
                <li>Swimshorts</li>
                <li>Denim</li>
                <li>Jackets & Coats</li>
                <li>Sweatshirts & Hoodies</li>
                <li>Sweaters & Cardigans</li>
                <li>Suits</li>
                <li>Leather</li>
                <li>Jewelry</li>
                <li>Accessories</li>
                <li>Shoes</li> */}
              </ul>

              <div className="red-text">
                FREE SHIPPING AND RETURNS FOR ALL ORDERS ABOVE 270£
              </div>
              <div className="img">
                <img
                  src="https://www.amiparis.com/BWStaticContent/14000/14000/066c6524-fe1c-4d5f-b213-efa2f2c42d21_ami-navigation-men.jpg"
                  alt=""
                />
                <p>Explore the SS20 Men's Collection</p>
              </div>
            </div>
          </li>
          <li
            onMouseOver={() => this.mouseOver(3)}
            onMouseOut={this.mouseOut}
            className="category-btn"
          >
            <a href="#!" className={colorchange}>
              Woman
            </a>
            <div
              className={`hover-nav ${
                this.state.activeTab === 3 ? "show" : "hide"
              } ${this.state.visible ? "text-logo" : ""}`}
            >
              <ul className="product-nav">
                <li className="sale-tab">Sale</li>
                <li>New Arrivals</li>
                <li>Rainbow Collection</li>
                <li>Ami de Coeur</li>
                <li>Accessories</li>
                <li>Jewelry</li>
                <li>Jackets & Coats</li>
                <li>Sweatshirts & Hoodies</li>
                <li>Sweaters</li>
                <li>Dresses & Jumpsuits</li>
                <li>Shirts</li>
                <li>Shorts & Skirts</li>
                <li>T-Shirts & Tops</li>
                <li>Trousers</li>
                <li>Denim</li>
                <li>Blazers & Suits</li>
                <li>Leather</li>
                <li>Shoes</li>
              </ul>
              <div className="red-text">
                FREE SHIPPING AND RETURNS FOR ALL ORDERS ABOVE 270£
              </div>
              <div className="img">
                <img
                  src="https://www.amiparis.com/BWStaticContent/14000/14000/7a29dcf9-234a-4fdb-9bc1-ce0d9d691bea_ami-navigation-women.jpg"
                  alt=""
                />
                <p>Explore the SS20 Women's Collection</p>
              </div>
            </div>
          </li>
          <li
            onMouseOver={() => this.mouseOver(4)}
            onMouseOut={this.mouseOut}
            className="category-btn"
          >
            <a href="#!" className={colorchange}>
              Accessories
            </a>
            <div
              className={`hover-nav acc-nav ${
                this.state.activeTab === 4 ? "show" : "hide"
              } ${this.state.visible ? "text-logo" : ""}`}
            >
              <ul className="product-nav">
                <li>Beanies & Caps</li>
                <li>Socks</li>
                <li>Key Chains</li>
                <li>Belts</li>
                <li>Sunglasses</li>
                <li>Leather Goods</li>
                <li>Small Leather Goods</li>
                <li>Jewelry</li>
              </ul>
              <div className="red-text">
                FREE SHIPPING AND RETURNS FOR ALL ORDERS ABOVE 270£
              </div>
              <div className="acc-img">
                <img
                  src="https://www.amiparis.com/BWStaticContent/14000/14000/1b5b1a22-cb8b-44af-bf85-998b06b2f01f_navigation-accessoires.jpg"
                  alt=""
                />
                <p>Explore the SS20 Accessories Collection</p>
              </div>
            </div>
          </li>

          <li
            onMouseOver={() => this.mouseOver(5)}
            onMouseOut={this.mouseOut}
            className="category-btn"
          >
            <a href="#!" className={colorchange}>
              Shoes
            </a>
            <div
              className={`hover-nav acc-nav ${
                this.state.activeTab === 5 ? "show" : "hide"
              } ${this.state.visible ? "text-logo" : ""}`}
            >
              <ul className="product-nav shoes-nav">
                <li>Sneakers</li>
                <li>Derbies</li>
                <li>Boots</li>
              </ul>
              <div className="red-text">
                FREE SHIPPING AND RETURNS FOR ALL ORDERS ABOVE 270£
              </div>
              <div className="acc-img">
                <img
                  src="https://www.amiparis.com/BWStaticContent/14000/14000/1b5b1a22-cb8b-44af-bf85-998b06b2f01f_navigation-accessoires.jpg"
                  alt=""
                />
                <p>Explore the SS20 Shoes Collection</p>
              </div>
            </div>
          </li>
        </ul>

        <div className="logo">
          <img
            className={this.state.visible ? "text-logo" : ""}
            src={this.imgHandler()}
            alt=""
          />
        </div>

        <ul className="right-menu">
          <li>
            <button  className={colorchange} onClick={this.handleOpenModal}>Newsletter</button>
          </li>
          <li>
            <button className={colorchange} onClick={this.handleOpenSearch}>Search</button>
          </li>
          <li>
            <Link to ="/account" className={colorchange}>Account</Link>
          </li>
          <li>
            <button className={colorchange} onClick={this.cartClickHandler}>Cart (0)</button>
          </li>
          <li>
            <button className={colorchange}>KR ₩</button>
          </li>
        </ul>
        {this.state.Newsletter && (
          <NewsletterPortal>
            <Newsletter onClose={this.handleCloseModal} />
          </NewsletterPortal>
        )}
        {this.state.Search && (
          <SearchPortal>
            <Search onClose={this.handleCloseSearch} />
          </SearchPortal>
        )}
      </div>
    );
  }
}

export default Nav;
