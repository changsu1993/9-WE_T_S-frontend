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
      firstError: false,
      lastError: false,
      emailError: false,
      inputFirst: false,
      inputLast: false,
      inputEmail: false,
      inputPw: false,
      inputCon: false,
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
  // first name은 한글만 받을 수 있게 조건 최소 1 최대 4
  // last name도 한글이고 최소 1 최대 2
  // 비밀번호  숫자 들어가고 특수문자그리고 영어 소문자 대문자 최소 8 최대 15 영문자 특수문자 숫자 하나씩 포함한 8자리 이상 15자리 이하

  checkFirstNameVaild = (emailId, emailPw, emailCon, firstName, lastName) => {
    const checkFirstName = /(?=.*^[가-힣]+$).{1,4}$/; // 백엔드 조건 first name 한글이면서 글자수 최소 1 - 최대 4
    const checkLastName = /(?=.*^[가-힣]+$).{1,2}$/; // 백엔드 조건 last name 한글이면서 글자수 최소 1 - 최대 2
    const checkPw = /(?=.*\d{1,15})(?=.*[~`!@#$%\^&*()-+=]{1,15})(?=.*[a-zA-Z]{2,15}).{8,15}$/;
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
  };

  inputLastClickHandler = (e) => {
    e.preventDefault();
    this.setState({ inputLast: !this.state.inputLast });
  };

  inputEmailClickHandler = (e) => {
    e.preventDefault();
    this.setState({ inputEmail: !this.state.inputEmail });
  };

  inputPwClickHandler = (e) => {
    e.preventDefault();
    this.setState({ inputPw: !this.state.inputPw });
  };

  inputConClickHandler = (e) => {
    e.preventDefault();
    this.setState({ inputCon: !this.state.inputCon });
  };

  infoChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signUpClickHandler = (e) => {
    e.preventDefault();
    const { firstName, lastName, emailId, emailPw, emailCon } = this.state;

    console.log("this.state : ", this.state);
    if (
      this.checkFirstNameVaild(emailId, emailPw, emailCon, firstName, lastName) // 비밀번호와 비밀번호 확인값이 다르면 애초에  fetch를 실행하지 말라는 조건문.
    ) {
      fetch("http://10.58.6.200:8000/account/sign-up", {
        method: "POST",
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: emailId,
          password: emailPw,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };

  render() {
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
                autocomplete="off"
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
                autocomplete="off"
              />
              <label
                htmlFor="lastName"
                className={this.state.inputLast ? "last-up" : "last-down"}
              >
                Last Name *
              </label>
              <div
                className="firstError"
                style={{ display: this.state.firstError ? "block" : "none" }}
              >
                Please enter first name
              </div>
              <div
                className="lastError"
                style={{ display: this.state.lastError ? "block" : "none" }}
              >
                Please enter last name
              </div>
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
                autocomplete="off"
              />
              <label
                htmlFor="emailId"
                className={this.state.inputEmail ? "email-up" : "email-down"}
              >
                Email Address *
              </label>
              <div
                className="emailError"
                style={{ display: this.state.emailError ? "block" : "none" }}
              >
                Please enter your email address properly.
              </div>
            </form>
            <form className="email-password">
              <input
                onChange={this.infoChangeHandler}
                onFocus={this.inputPwClickHandler}
                onBlur={this.inputPwClickHandler}
                type="password"
                id="emailPw"
                className="email-pw"
                name="emailPw"
              />
              <label
                htmlFor="emailPw"
                className={this.state.inputPw ? "pw-up" : "pw-down"}
              >
                Password *
              </label>
            </form>
            <form className="confirm-password">
              <input
                onChange={this.infoChangeHandler}
                onFocus={this.inputConClickHandler}
                onBlur={this.inputConClickHandler}
                type="password"
                id="emailCon"
                className="email-con"
                name="emailCon"
              />
              <label
                htmlFor="emailCon"
                className={this.state.inputCon ? "con-up" : "con-down"}
              >
                Confirm Password *
              </label>
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

export default Account_signup;
