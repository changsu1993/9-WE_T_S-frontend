import React from "react";
import "./Wishlist.scss";
import Nav from "../../../Components/Nav/Nav"
import Footer from "../../../Components/Footer/Footer"

class Wishlist extends React.Component{
  constructor(){
    super();
    this.state={
      detailData:{}
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/detailData.json")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          detailData: response.detailData,
        });
      });
  }

    render(){
   
        return (
          <>
          <Nav />
            <div className="Wishlist">
              <div className="wish-title">My Wishlist</div>
              <div className="left-container">
                  <div className="product">
                    <div className="product-img">
                      <img
                        src={
                          this.state.detailData.productImages &&
                          this.state.detailData.productImages[0].img
                        }
                        alt=""
                      />
                    </div>
                    <div className="product-box">
                      <div className="product-name">
                        {this.state.detailData.name}
                      </div>
                      <div className="select-box">
                        <div className="size">
                          <span>Size</span>
                          <div className="control">
                            <select>
                              {this.state.detailData.size &&
                                this.state.detailData.size.map((s, index) => {
                                  return <option key={index}>{s.option}</option>;
                                })}
                            </select>
                          </div>
                        </div>
                        <div className="colour">
                          <span>Colour</span>
                          <span>
                            {this.state.detailData.colors &&
                              this.state.detailData.colors[0].name}
                          </span>
                          </div>
                      </div>
                    </div>
                    <div className="remove-price">
                      <button className="remove">Remove</button>
                      <div className="price">
                        ₩
                        {this.state.detailData.price &&
                          this.state.detailData.price.toLocaleString()}
                      </div>
                      <button className="add-cart">Add to cart</button>
                    </div>
                  </div>
              </div>
            </div>
          <Footer/>  
        </>
        )
    }
}

export default Wishlist;