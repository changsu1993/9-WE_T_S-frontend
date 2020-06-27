import React from "react";
import "./Account_guest.scss";
import amilogo from "../../Images/amilogo.png";

class Account_guest extends React.Component {
  constructor() {
    super();
    this.state = {
      emailAddress: "",
    };
  }

  handleEmail = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();

    console.log("this.state : ", this.state);

    fetch("http://10.58.2.83:8000/account/sign-up", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.emailAddress,
      }),
    }).then((res) => console.log("res >>>", res));
  };

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
              name="emailAdress"
              placeholder="Email Address *"
              onChange={this.handleEmail}
              required
            />
          </form>
          <button className="connect-button" onClick={this.handleClick}>
            Connect
          </button>
        </div>
      </div>
    );
  }
}

export default Account_guest;
