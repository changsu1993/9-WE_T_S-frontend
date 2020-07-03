import React from "react";
import "./Account_login.scss";
import amilogo from "../../Images/amilogo.png";

class Account_login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginId: "",
      loginPw: "",
      errorId: false,
      errorPassword: false,
    };
  }

  // handlelgid = (event) => {
  //   this.setState({
  //     loginId: event.target.value,
  //     errorId: false,
  //   });
  // };

  // handlelgpw = (event) => {
  //   this.setState({
  //     loginPw: event.target.value,
  //     errorPassword: false,
  //   });
  // };
  //기능구현 이해 못한 부분 때문에 주석처리

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ errorPassword: false }); // 로그인 기능 구현하던 중 잠시 중단
    this.setState({ errorId: false }); // 로그인 기능 구현하던 중 잠시 중단
  };

  loginClickHandler = (e) => {
    e.preventDefault();

    console.log("this.state : ", this.state);

    if (
      this.state.loginId.length >= 5 &&
      this.state.loginPw.length >= 5 &&
      this.state.loginId.includes("@" && ".")
    ) {
      fetch("http://10.58.7.16:8000/account/sign-in", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.loginId,
          password: this.state.loginPw,
        }),
      })
        .then((res) => res.json())
        .then((res) => localStorage.setItem("access_token", res.access_token))
    } else if (
      this.state.loginId.length < 5 ||
      // this.handlelgid.includes("@" && ".") &&
      this.state.loginPw.length < 5
    ) {
      this.setState({ errorId: true });
      this.setState({ errorPassword: true });
    }
  };
  render() {
    return (
      <div className="Login">
        <div className="login-container">
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
              onChange={this.changeHandler}
              name="loginId"
              type="text"
              className="loginId-text"
              id="loginId"
              placeholder="Email Address *"
              required
            />
          </form>
          <div
            className="error-id"
            style={{ display: this.state.errorId ? "block" : "none" }}
          >
            Please enter email address
          </div>
          <form className="login-password">
            <input
              onChange={this.changeHandler}
              type="password"
              id="loginPw"
              name="loginPw"
              className="loginPw-text"
              placeholder="Password *"
              required
            />
          </form>
          <div
            className="error-password"
            style={{ display: this.state.errorPassword ? "block" : "none" }}
          >
            Please enter email password
          </div>
          <div className="last-wrapper">
            <div className="forgot">
              <a href="">Forgot your Password?</a>
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
            <button className="login-button" onClick={this.loginClickHandler}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Account_login;
