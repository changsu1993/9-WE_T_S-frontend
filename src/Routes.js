import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Account/Account";
import Main from "./Pages/Main/Main";
import Man from "./Pages/Products/Man";
import Woman from "./Pages/Products/Woman";
import Accessories from "./Pages/Products/Accessories";
import Shoes from "./Pages/Products/Shoes";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/account" component={Login} />
          <Route exact path="/shopping/man" component={Man} />
          <Route exact path="/shopping/woman" component={Woman} />
          <Route exact path="/shopping/accessories" component={Accessories} />
          <Route exact path="/shopping/shoes" component={Shoes} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
