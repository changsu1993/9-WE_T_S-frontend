import React from "react";
import { withRouter } from "react-router-dom";
import zxcvbn from "zxcvbn";
import amilogo from "../../Images/amilogo.png";
import eyes from "../../Images/button.png";
import "./Account_signup.scss";

class Account_signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      emailPw: "",
      emailCon: "",
      inputFirst: false,
      inputLast: false,
      inputEmail: false,
      inputPw: false,
      inputCon: false,
      oneEyes: false,
      twoEyes: false,
    };
  }

  oneEyesClickHandler = (e) => {
    e.preventDefault();
    this.setState({ oneEyes: !this.state.oneEyes });
  };

  twoEyesClickHandler = (e) => {
    e.preventDefault();
    this.setState({ twoEyes: !this.state.twoEyes });
  };

  createPasswordLabel = (result) => {
    switch (result.score) {
      case 0:
        return "Weak";
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Strong";
      default:
        return "Strong";
    }
  };

  checkFirstNameVaild = (emailId, emailPw, emailCon, firstName, lastName) => {
    const checkFirstName = /(?=.*^[가-힣]+$).{1,4}$/; // 백엔드 조건 first name 한글이면서 글자수 최소 1 - 최대 4
    const checkLastName = /(?=.*^[가-힣]+$).{1,2}$/; // 백엔드 조건 last name 한글이면서 글자수 최소 1 - 최대 2
    const checkPw = /(?=.*\d{1,15})(?=.*[~`!@#$%&*()-+=]{1,15})(?=.*[a-zA-Z]{2,15}).{8,15}$/;
    const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    //숫자, 특수문자 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력.
    let result = false;

    result =
      emailId.length >= 5 &&
      checkEmail.test(emailId) &&
      emailPw.length >= 5 &&
      checkPw.test(emailPw) &&
      emailPw === emailCon &&
      checkFirstName.test(firstName) &&
      checkLastName.test(lastName);

    return result;
  };

  inputFirstClickHandler = (e) => {
    e.preventDefault();
    this.setState({ inputFirst: !this.state.inputFirst });
    if (this.state.firstName.length > 0) {
      this.setState({ inputFirst: true });
    }
  };

  inputLastClickHandler = (e) => {
    e.preventDefault();
    this.setState({ inputLast: !this.state.inputLast });
    if (this.state.lastName.length > 0) {
      this.setState({ inputLast: true });
    }
  };

  inputEmailClickHandler = (e) => {
    e.preventDefault();
    this.setState({ inputEmail: !this.state.inputEmail });
    if (this.state.emailId.length > 0) {
      this.setState({ inputEmail: true });
    }
  };

  inputPwClickHandler = (e) => {
    e.preventDefault();
    this.setState({ inputPw: !this.state.inputPw });
    if (this.state.emailPw.length > 0) {
      this.setState({ inputPw: true });
    }
  };

  inputConClickHandler = (e) => {
    e.preventDefault();
    this.setState({ inputCon: !this.state.inputCon });
    if (this.state.emailCon.length > 0) {
      this.setState({ inputCon: true });
    }
  };

  infoChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signUpClickHandler = (e) => {
    e.preventDefault();
    const { firstName, lastName, emailId, emailPw, emailCon } = this.state;

    if (
      this.checkFirstNameVaild(emailId, emailPw, emailCon, firstName, lastName) // 비밀번호와 비밀번호 확인값이 다르면 애초에  fetch를 실행하지 말라는 조건문.
    ) {
      fetch("http://10.58.7.16:8000/account/sign-up", {
        method: "POST",
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: emailId,
          password: emailPw,
        }),
      }).then((res) => console.log(res));
    }
    this.props.history.push("/");
  };

  render() {
    const { emailPw } = this.state;
    const testedResult = zxcvbn(emailPw);
    return (
      <div className="Signup">
        <div className="signup-container">
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
                onChange={this.infoChangeHandler}
                onFocus={this.inputFirstClickHandler}
                onBlur={this.inputFirstClickHandler}
                type="text"
                id="firstName"
                className="first-name"
                name="firstName"
                autoComplete="off"
              />
              <label
                htmlFor="firstName"
                className={this.state.inputFirst ? "first-up" : "first-down"}
              >
                First Name *
              </label>
              <input
                onChange={this.infoChangeHandler}
                onFocus={this.inputLastClickHandler}
                onBlur={this.inputLastClickHandler}
                type="text"
                id="lastName"
                className="last-name"
                name="lastName"
                autoComplete="off"
              />
              <label
                htmlFor="lastName"
                className={this.state.inputLast ? "last-up" : "last-down"}
              >
                Last Name *
              </label>
            </form>
            <form className="email-address">
              <input
                onChange={this.infoChangeHandler}
                onFocus={this.inputEmailClickHandler}
                onBlur={this.inputEmailClickHandler}
                type="text"
                id="emailId"
                className="email-id"
                name="emailId"
                autoComplete="off"
              />
              <label
                htmlFor="emailId"
                className={this.state.inputEmail ? "email-up" : "email-down"}
              >
                Email Address *
              </label>
            </form>
            <form className="email-password">
              <input
                onChange={this.infoChangeHandler}
                onFocus={this.inputPwClickHandler}
                onBlur={this.inputPwClickHandler}
                type={this.state.oneEyes ? "text" : "password"}
                id="emailPw"
                className="email-pw"
                name="emailPw"
                autoComplete="off"
              />
              <progress
                className={`password-strength-meter-progress strength-${this.createPasswordLabel(
                  testedResult
                )}`}
                value={testedResult.score}
                max="3"
              />
              <span className="security-strength">Password strength:</span>
              <span className="password-security">
                {this.createPasswordLabel(testedResult)}
              </span>
              <label
                htmlFor="emailPw"
                className={this.state.inputPw ? "pw-up" : "pw-down"}
              >
                Password *
              </label>
              <button
                className="oneEyes-button"
                onClick={this.oneEyesClickHandler}
              >
                <img src={eyes} alt="eyes" className="oneEyes-image" />
              </button>
            </form>
            <form className="confirm-password">
              <input
                onChange={this.infoChangeHandler}
                onFocus={this.inputConClickHandler}
                onBlur={this.inputConClickHandler}
                type={this.state.twoEyes ? "text" : "password"}
                id="emailCon"
                className="email-con"
                name="emailCon"
                autoComplete="off"
              />
              <label
                htmlFor="emailCon"
                className={this.state.inputCon ? "con-up" : "con-down"}
              >
                Confirm Password *
              </label>
              <button
                className="twoEyes-button"
                onClick={this.twoEyesClickHandler}
              >
                <img src={eyes} alt="eyes" className="twoEyes-image" />
              </button>
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
                <a href="" id="team-link">
                  Terms and Conditions
                </a>
                <span> and </span>
                <a href="" id="privacy-link">
                  Privacy and Cookies Policy.
                </a>
                <button
                  className="register-button"
                  onClick={this.signUpClickHandler}
                >
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

export default withRouter(Account_signup);
