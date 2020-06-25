import React from "react";
import "./Footer.scss";
import ami_logo from "../../Images/amilogo1.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="logo">
          <img src={ami_logo} alt="" />
        </div>

        <ul>
          <li>
            <a href="#!">Contact us</a>
            <a href="#!">Customer service</a>
            <a href="#!">Newsletter</a>
            <a href="#!">Terms & Conditions</a>
          </li>
          <li>
            <a href="#!">Privacy Policy</a>
            <a href="#!">Cookie Preferences</a>
            <a href="#!">Instagram</a>
            <a href="#!">Facebook</a>
          </li>
          <li>
            <a href="#!">Youtube</a>
            <a href="#!">Linkedin</a>
            <a href="#!">Spotify</a>
            <a href="#!">Site map</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
