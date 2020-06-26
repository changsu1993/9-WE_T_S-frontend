import React from "react";
import "./Account_guest.scss";
import amilogo from "../../Images/amilogo.png";

class Account_guest extends React.Component {
  render() {
    return (
      <div className="guest-container">
        <div className="guest">
          <div className="guest-checkout">
            <img
              src={amilogo}
              alt="ami"
              height="28px"
              width="17px"
              className="guest-ami"
            ></img>
            Guest Checkout
          </div>
          <form className="guest-id">
            <input
              type="text"
              id="guest-id"
              placeholder="Email Address *"
              required
            />
          </form>
          <button className="connect-button">Connect</button>
        </div>
      </div>
    );
  }
}

export default Account_guest;
