import React, { Component } from "react";
import AccountLogin from "./Account_login";
import AccountSignup from "./Account_signup";
import AccountGuest from "./Account_guest";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "./Account.scss";

class Account extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="Account">
          <div>
            <AccountLogin />
            <AccountGuest />
          </div>
          <AccountSignup />
        </div>
        <Footer />
      </>
    );
  }
}

export default Account;
