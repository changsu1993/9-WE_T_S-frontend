import React from "react";
import Nav from "../../../Components/Nav/Nav";
import Footer from "../../../Components/Footer/Footer";
import "./Wishlist.scss";

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishList: this.props.location.state.wishList,
    };
  }

  removeWishitem = () =>{
    this.setState({
      wishList : []
    })
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
                     product.image
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
                  <button className="remove" onClick={this.removeWishitem}>Remove</button>
                  <div className="price">
                    ₩
                    {product.price &&
                      Number(product.price.slice(0,-5)).toLocaleString()}
                  </div>
                  <button className="add-cart">Add to cart</button>
                </div>
              </div>)})} 
           </div>
           {this.state.wishList.length === 0 ? (  <div className="empty-product">
              <div className="img">
                <img src="https://www.amiparis.com/static/ami/build/images/animated-ami-mascot.84104bd9c856ea6668f2.gif" alt="" />
              </div>
              <div>
                <p>Your wishlist is empty</p>
                <p>Add to your wishlist by clicking on the wishlist icon on an item or product detail page</p>
              </div>
              <button>Continue shopping</button>
            </div>) : null}
        </div>
        <Footer />
      </>
    );
  }
}

export default Wishlist;
