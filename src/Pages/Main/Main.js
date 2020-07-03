import React from "react";
import Nav from "../../Components/Nav/Nav";
import Contents from "./Contents";
import Footer from "../../Components/Footer/Footer";

class Main extends React.Component {
  constructor(){
    super();
    this.state={
      mouseEnter : false,
      whiteColor : true
    }
  }

  mouseEnterNav = () => {
    this.setState({
      mouseEnter: true,
    });
  }

  mouseLeaveNav = () => {
    this.setState({
      mouseEnter: false,
    });
  };

  render() {
    return (
      <div className="Main">
        <Nav mouseEnterNav ={this.mouseEnterNav} mouseLeaveNav = {this.mouseLeaveNav} mouseEnter={this.state.mouseEnter} whiteColor={this.state.whiteColor}/>
        <Contents />
        <Footer />
      </div>
    );
  }
}

export default Main;
