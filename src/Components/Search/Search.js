import React, { Component } from "react";
import "./Search.scss";
import searchIcon from "../../Images/search.png";

class Search extends Component {
  render() {
    const { onClose } = this.props;

    return (
      <div className="search">
        <div className="search-main">
          <div className="search-box">
            <span className="search-findbox">
              <img src={searchIcon} alt="search" className="search-img" />|
              <input
                type="text"
                placeholder="Find anything"
                className="search-text"
              />
            </span>
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </div>
          <div className="ami-png">
            <img
              src="https://www.amiparis.com/static/ami/build/images/ami-search.61da0f09be6696c3b756.gif"
              alt="Loading AMI Mascot"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
