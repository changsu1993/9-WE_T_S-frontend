import React from "react";
import "./Account_signup.scss";
import amilogo from "../../Images/amilogo.png";

class Account_signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      emailid: "",
      emailpw: "",
      emailcon: "",
    };
  }

  handleFirst = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };

  handleLast = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  handleId = (event) => {
    this.setState({
      emailid: event.target.value,
    });
  };

  handlePw = (event) => {
    this.setState({
      emailpw: event.target.value,
    });
  };

  handleCon = (event) => {
    this.setState({
      emailcon: event.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();

    console.log("this.state : ", this.state);
    // 비밀번호와 비밀번호 확인값이 다르면 애초에  fetch를 실행하지 말라는 조건문.
    if (this.state.emailpw === this.state.emailcon) {
      fetch("http://10.58.2.83:8000/account/sign-up", {
        method: "POST",
        body: JSON.stringify({
          first_name: this.state.firstname,
          last_name: this.state.lastname,
          email: this.state.emailid,
          password: this.state.emailpw,
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
                onChange={this.handleFirst}
                type="text"
                id="firstname"
                placeholder="First Name *"
              />
              <input
                onChange={this.handleLast}
                type="text"
                id="lastname"
                placeholder="Last Name *"
              />
            </form>
            <form className="email-address">
              <input
                onChange={this.handleId}
                type="text"
                id="emailid"
                placeholder="Email Address *"
              />
            </form>
            <form className="email-password">
              <input
                onChange={this.handlePw}
                type="password"
                id="emailpw"
                placeholder="Password *"
              />
            </form>
            <form className="confirm-password">
              <input
                onChange={this.handleCon}
                type="password"
                id="emailcon"
                placeholder="Confirm Password *"
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
