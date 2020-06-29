import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from "./Pages/Account/Account";
import Main from "./Pages/Main/Main";
import Man from "./Pages/Products/Man";
import Woman from "./Pages/Products/Woman";
import Accessories from "./Pages/Products/Accessories";
import Shoes from "./Pages/Products/Shoes";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProductDetail2 from "./Pages/ProductDetail/ProductDetail2";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/shopping/man" component={Man} />
          <Route exact path="/shopping/woman" component={Woman} />
          <Route exact path="/shopping/accessories" component={Accessories} />
          <Route exact path="/shopping/shoes" component={Shoes} />
          <Route exact path="/shopping/item1Red" component={ProductDetail} />
          <Route exact path="/shopping/item1Black" component={ProductDetail2} />
          {/* <Route exact path="/shopping/item1White" component={itemWhite} />
          <Route exact path="/shopping/item1Red" component={itemRed} />
          <Route exact path="/shopping/item1Stripe" component={itemStripe} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
