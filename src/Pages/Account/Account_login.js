import React from "react";
import "./Account_login.scss";
import amilogo from "../../Images/amilogo.png";

class Account_login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginid: "",
      loginpw: "",
      errorid: false,
      errorpassword: false,
    };
  }

  handlelgid = (event) => {
    this.setState({
      loginid: event.target.value,
      errorid: false,
    });
  };

  handlelgpw = (event) => {
    this.setState({
      loginpw: event.target.value,
      errorpassword: false,
    });
  };

  handleClick = (e) => {
    e.preventDefault();

    // console.log(this.state.lgnid, this.state.lgnpw);

    if (
      this.state.loginid.length >= 5 &&
      this.state.loginpw.length >= 5 &&
      this.state.loginid.includes("@" && ".")
    ) {
      fetch("http://10.58.2.83:8000/account/sign-in", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.loginid,
          password: this.state.loginpw,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } else if (
      this.state.loginid.length < 5 &&
      // this.handlelgid.includes("@" && ".") &&
      this.state.loginpw.length < 5
    ) {
      this.setState({ errorid: true });
      this.setState({ errorpassword: true });
    }
  };
  render() {
    return (
      <div className="login-container">
        <div className="login">
          <div className="already-customer">
            <img
              src={amilogo}
              alt="ami"
              height="28px"
              width="17px"
              className="already-ami"
            ></img>
            Already Customer
          </div>
          <form className="login-id">
            <input
              onChange={this.handlelgid}
              type="text"
              id="loginid"
              placeholder="Email Address *"
              required
            />
          </form>
          <div
            className="error-id"
            style={{ display: this.state.errorid ? "block" : "none" }}
          >
            Please enter email address
          </div>
          <form className="login-password">
            <input
              onChange={this.handlelgpw}
              type="password"
              id="loginpw"
              placeholder="Password *"
              required
            />
          </form>
          <div
            className="error-password"
            style={{ display: this.state.errorpassword ? "block" : "none" }}
          >
            Please enter email password
          </div>
          <div className="last-wrapper">
            <div className="forgot">
              <a href="https://www.amiparis.com/kr/account/forgotpassword">
                Forgot your Password?
              </a>
              <label>
                <input
                  type="checkbox"
                  name="save-data"
                  className="save-checkbox"
                />
                <span className="checkbox-ment">Remember me</span>
              </label>
            </div>
          </div>
          <div className="login-register-wrapper">
            <button className="login-button" onClick={this.handleClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Account_login;
