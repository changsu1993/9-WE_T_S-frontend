import React from "react";
import "./ProductBottomBar.scss";
import Arrowdown from "../../Images/arrow-down-white.png";

class ProductBottomBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      option: "",
      click: false,
    };
  }

  sizeSelectHandler = (option) => {
    this.setState({ option });
  };

  arrowClickHandler = () => {
    const { click } = this.state;
    this.setState({ click: !click });
  };

  render() {
    const { isActive, price, size } = this.props;
    return (
      <div className={`ProductBottomBar ${isActive ? "" : "hide"}`}>
        <div className="bottom-bar-wrapper">
          <div className="price">₩ {price}</div>
          <div className="size-and-button">
            <div className="select-a-size">
              <div
                onClick={this.arrowClickHandler}
                className="size-dropdown-bar"
              >
                <div className="drop-down">
                  <div className="click-to-select">
                    <span>
                      {this.state.option !== ""
                        ? this.state.option
                        : "Select a size"}
                    </span>
                    <img
                      class={this.state.click ? "clicked" : "x-clicked"}
                      alt="arrow-icon"
                      src={Arrowdown}
                    />
                  </div>
                  <ul className={`size-list ${this.state.click ? "show" : ""}`}>
                    {size &&
                      size.map((opt, i) => {
                        return (
                          <li key={i}
                            onClick={() => {
                              this.sizeSelectHandler(opt);
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
            <button className="add-to-cart">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductBottomBar;
