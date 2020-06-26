import React from "react";
import "./Account.scss";
import AccountLogin from "./Account_login";
import AccountSignup from "./Account_signup";
import AccountGuest from "./Account_guest";
class Account extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="account">
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
