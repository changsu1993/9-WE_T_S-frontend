import React from "react";
import Nav from "../../Components/Nav/Nav";
import Contents from "./Contents";
import Footer from "../../Components/Footer/Footer";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <Contents />
        <Footer />
      </div>
    );
  }
}

export default Main;
