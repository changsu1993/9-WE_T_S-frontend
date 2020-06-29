import React from "react";
import AccountLogin from "./Account_login";
import AccountSignup from "./Account_signup";
import AccountGuest from "./Account_guest";
import "./Account.scss";

class Account extends React.Component {
  render() {
    return (
      <div className="Account">
        <div>
          <AccountLogin />
          <AccountGuest />
        </div>
        <AccountSignup />
      </div>
    );
  }
}

export default Account;
