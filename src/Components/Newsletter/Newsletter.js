import React, { Component } from "react";
import "./Newsletter.scss";
import amilogo from "../../Images/amilogo.png";

class Newsletter extends Component {
  render() {
    const { onClose } = this.props;

    return (
      <div className="newsletter">
        <div className="newsletter-main">
          <div className="close">
            <button type="button" className="close-button" onClick={onClose}>
              Close
            </button>
          </div>
          <section className="center">
            <img
              src={amilogo}
              alt="ami"
              height="28px"
              width="17px"
              className="ami-logo"
            ></img>
            <div className="center-title">Let's stay friends</div>
            <div className="center-letter">
              <div>
                Subscribe to our newsletter and be the first informed on our
                latest
              </div>
              <div className="middle-text">
                collection drops, private sales and collaborations.
              </div>
              <p>&nbsp;</p>
              <div className="last-text">
                We are pleased to offer you 10% off your first online purchase.
              </div>
            </div>
          </section>
          <form className="center-information">
            <div className="email-information">
              <div className="email">
                <input
                  className="email-text"
                  type="text"
                  autoComplete="off"
                  placeholder="Email Address *"
                  aria-required="true"
                  id="email-address"
                ></input>
              </div>
            </div>
            <div className="country-information">
              <div className="country-main">
                <div className="country-box">
                  <select
                    className="country-select"
                    id="country-select-id"
                    aria-required="true"
                    aria-label="Select your country"
                    name="country"
                  >
                    <option>Select your country</option>
                    <option>Korea, Republic of</option>
                    <option>Germany</option>
                    <option>United States</option>
                    <option>Italy</option>
                  </select>
                  <span className="gender-checkbox">
                    <label className="menswear-label" htmlFor="menswear-button">
                      <input
                        type="checkbox"
                        id="menswear-button"
                        name="menwear"
                        className="men-check"
                      ></input>
                      <span className="menswear">Menswear</span>
                    </label>
                    <label
                      className="womenswear-label"
                      htmlFor="womenswear-button"
                    >
                      <input
                        type="checkbox"
                        id="womenswear-button"
                        name="womenwear"
                        className="women-check"
                      ></input>
                      <span className="womenswear">Womenswear</span>
                    </label>
                  </span>
                </div>
              </div>
            </div>
            <div className="register">
              <button type="submit" className="register-button">
                Register
              </button>
              <span className="register-letter">
                You can opt out at any time by clicking
                <br /> 'Unsubscribe' at the bottom of any of our emails
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Newsletter;
