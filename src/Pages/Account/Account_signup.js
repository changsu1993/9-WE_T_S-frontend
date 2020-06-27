import React from "react";
import "./Account_signup.scss";
import amilogo from "../../Images/amilogo.png";

class Account_signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      emailPw: "",
      emailCon: "",
    };
  }

  // handleFirst = (event) => {
  //   this.setState({
  //     firstName: event.target.value,
  //   });
  // };

  // handleLast = (event) => {
  //   this.setState({
  //     lastName: event.target.value,
  //   });
  // };

  // handleId = (event) => {
  //   this.setState({
  //     emailId: event.target.value,
  //   });
  // };

  // handlePw = (event) => {
  //   this.setState({
  //     emailPw: event.target.value,
  //   });
  // };

  // handleCon = (event) => {
  //   this.setState({
  //     emailCon: event.target.value,
  //   });
  // };
  // 기능구현과 접목해서 생각해보려고 지우지 않고 남겨둠

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();

    console.log("this.state : ", this.state);
    // 비밀번호와 비밀번호 확인값이 다르면 애초에  fetch를 실행하지 말라는 조건문.
    if (this.state.emailPw === this.state.emailCon) {
      fetch("http://10.58.2.83:8000/account/sign-up", {
        method: "POST",
        body: JSON.stringify({
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          email: this.state.emailId,
          password: this.state.emailPw,
        }),
      }).then((res) => console.log("res >>>", res));
    }
  };

  render() {
    return (
      <div className="signup-container">
        <div className="signup">
          <div className="new-customer">
            <img
              src={amilogo}
              alt="ami"
              height="28px"
              width="17px"
              className="ami-image"
            ></img>
            New Customer
          </div>
          <div className="new-form">
            <form className="name">
              <input
                onChange={this.handleChange}
                type="text"
                id="firstName"
                placeholder="First Name *"
                name="firstName"
              />
              <input
                onChange={this.handleChange}
                type="text"
                id="lastName"
                placeholder="Last Name *"
                name="lastName"
              />
            </form>
            <form className="email-address">
              <input
                onChange={this.handleChange}
                type="text"
                id="emailId"
                placeholder="Email Address *"
                name="emailId"
              />
            </form>
            <form className="email-password">
              <input
                onChange={this.handleChange}
                type="password"
                id="emailPw"
                placeholder="Password *"
                name="emailPw"
              />
            </form>
            <form className="confirm-password">
              <input
                onChange={this.handleChange}
                type="password"
                id="emailCon"
                placeholder="Confirm Password *"
                name="emailCon"
              />
            </form>
          </div>
          <div className="login-register-wrapper">
            <div className="send-checkbox">
              <form className="send-box">
                <input type="checkbox" name="send" className="send-check" />
                <span>
                  Send me AMI newsletters with the latest collections,
                  promotions and store events
                </span>
              </form>
              <div className="last-wrapper">
                <span>By clicking Register you agree to our </span>
                <a
                  href="https://www.amiparis.com/kr/legal#terms-and-conditions"
                  id="team-link"
                >
                  Terms and Conditions
                </a>
                <span> and </span>
                <a
                  href="https://www.amiparis.com/kr/legal#privacy-policy"
                  id="privacy-link"
                >
                  Privacy and Cookies Policy.
                </a>
                <button className="register-button" onClick={this.handleClick}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account_signup;
