import React from "react";
import { withRouter } from "react-router-dom";
import amilogo from "../../Images/amilogo.png";
import eyes from "../../Images/button.png";
import "./Account_login.scss";

class Account_login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginId: "",
      loginPw: "",
      errorId: false,
      errorPassword: false,
      inputId: false,
      inputPw: false,
      eyes: false,
    };
  }

  passwordSecurityClickHandler = (e) => {
    e.preventDefault();
    this.setState({ eyes: !this.state.eyes });
  };

  changeHandler = (e) => {
    const { loginId, loginPw } = this.state;
    this.setState({ [e.target.name]: e.target.value });

    if (loginId.length >= 5 && loginId.includes("@" && ".")) {
      this.setState({ errorId: false });
    }

    if (loginPw.length >= 5) {
      this.setState({ errorPassword: false });
    }
  };

  inputIdClickHandler = (e) => {
    e.preventDefault();
    this.setState({ inputId: !this.state.inputId });

    if (this.state.loginId.length > 0) {
      this.setState({ inputId: true });
    }
  };

  inputPwClickHandler = (e) => {
    e.preventDefault();
    this.setState({ inputPw: !this.state.inputPw });

    if (this.state.loginPw.length > 0) {
      this.setState({ inputPw: true });
    }
  };

  loginClickHandler = (e) => {
    e.preventDefault();

    console.log("this.state : ", this.state);

    if (
      this.state.loginId.length >= 5 &&
      this.state.loginPw.length >= 5 &&
      this.state.loginId.includes("@" && ".")
    ) {
      fetch("http://10.58.7.177:8000/account/sign-in", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.loginId,
          password: this.state.loginPw,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("access_token", res.access_token);
          this.props.history.push("/");
        });
    }

    if (this.state.loginId.length > 0) {
      this.setState({});
    }

    if (
      this.state.loginId.length <= 5 &&
      !this.state.loginId.includes("@" && ".")
    ) {
      this.setState({ errorId: true });
    }

    if (this.state.loginPw.length <= 5) {
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
              autoComplete="off"
              onFocus={this.inputIdClickHandler}
              onBlur={this.inputIdClickHandler}
            />
            <label
              htmlFor="loginId"
              className={this.state.inputId ? "id-up" : "id-down"}
            >
              Email Address *
            </label>
          </form>
          <div
            className="error-id"
            style={{ display: this.state.errorId ? "block" : "none" }}
          >
            Please enter your email address properly.
          </div>
          <form className="login-password">
            <input
              onChange={this.changeHandler}
              onFocus={this.inputPwClickHandler}
              onBlur={this.inputPwClickHandler}
              type={this.state.eyes ? "text" : "password"}
              id="loginPw"
              name="loginPw"
              autoComplete="off"
              className="loginPw-text"
            />
            <label
              htmlFor="loginPw"
              className={this.state.inputPw ? "pw-up" : "pw-down"}
            >
              Password *
            </label>
            <button
              className="eyes-button"
              onClick={this.passwordSecurityClickHandler}
            >
              <img src={eyes} alt="eyes" className="eyes-image" />
            </button>
          </form>
          <div
            className="error-password"
            style={{ display: this.state.errorPassword ? "block" : "none" }}
          >
            Please enter your email password properly.
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

export default withRouter(Account_login);
