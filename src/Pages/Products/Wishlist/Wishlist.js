import React from "react";
import "./Wishlist.scss";
import Nav from "../../../Components/Nav/Nav";
import Footer from "../../../Components/Footer/Footer";

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishList: this.props.location.state.wishList,
    };
  }
  
  render() {
    return (
      <>
        <Nav />
        <div className="Wishlist">
          <div className="wish-title">My Wishlist</div>
          <div className="left-container">
          {this.state.wishList &&
                this.state.wishList.map((product, i)=>{ 
                  return(
                  <div className="product">
                <div className="product-img">
                  <img
                    src={
                     product.productImage
                    }
                    alt=""
                  />
                </div>
                <div className="product-box">
                  <div className="product-name">{product.name}</div>
                  <div className="select-box">
                    <div className="size">
                      <span>Size</span>
                      <div className="control">
                        <select>
                          {product.size &&
                            product.size.map((s, index) => {
                              return <option key={index}>{s}</option>;
                            })}
                        </select>
                      </div>
                    </div>
                    <div className="colour">
                      <span>Colour</span>
                      <span>
                        {product.color}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="remove-price">
                  <button className="remove">Remove</button>
                  <div className="price">
                    ₩
                    {product.price &&
                      product.price.toLocaleString()}
                  </div>
                  <button className="add-cart">Add to cart</button>
                </div>
              </div>)})} 
        
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Wishlist;
