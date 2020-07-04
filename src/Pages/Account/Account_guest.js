import React from "react";
import { API_URL } from "../../config"
import "./Account_guest.scss";
import amilogo from "../../Images/amilogo.png";

class Account_guest extends React.Component {
  constructor() {
    super();
    this.state = {
      emailAddress: "",
      emailAddressId: false,
      isInputActive: false,
    };
  }

  handleEmail = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (
      this.state.emailAddress.length >= 5 &&
      this.state.emailAddress.includes("@" && ".")
    ) {
      this.setState({ emailAddressId: false });
    }
  };

  inputClickHandler = (e) => {
    e.preventDefault();
    this.setState({ isInputActive: !this.state.isInputActive });
    if (this.state.emailAddress.length > 0) {
      this.setState({ isInputActive: true });
    }
  };

  guestClickHandler = (e) => {
    e.preventDefault();

    console.log("this.state: ", this.state);
    const { emailAddress } = this.state;
    if (emailAddress.length >= 5 && emailAddress.includes("@" && ".")) {
      fetch(`${API_URL}/account/guest/sign-up`, {
        method: "POST",
        body: JSON.stringify({
          email: emailAddress,
        }),
      })
        // .then((res) => res.json())
        .then((res) => console.log("res >>>", res));
    }
    if (emailAddress.length <= 5 && !emailAddress.includes("@" && ".")) {
      this.setState({ emailAddressId: true });
    }
  };

  render() {
    return (
      <div className="Guest">
        <div className="guest-container">
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
              className="guest-text"
              name="emailAddress"
              autoComplete="off"
              onChange={this.handleEmail}
              onFocus={this.inputClickHandler}
              onBlur={this.inputClickHandler}
              required
            />
            <label
              htmlFor="emailAddress"
              className={this.state.isInputActive ? "text-up" : "text-down"}
            >
              Email Address *
            </label>
          </form>
          <div
            className="emailAddressId"
            style={{ display: this.state.emailAddressId ? "block" : "none" }}
          >
            Please enter your email address properly.
          </div>
          <button className="connect-button" onClick={this.guestClickHandler}>
            Connect
          </button>
        </div>
      </div>
    );
  }
}

export default Account_guest;
