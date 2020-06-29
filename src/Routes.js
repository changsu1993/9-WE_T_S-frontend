import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from "./Pages/Account/Account";
import Newsletter from "./Components/Newsletter/Newsletter";
import Main from "./Pages/Main/Main";
import Man from "./Pages/Products/Man";
import Woman from "./Pages/Products/Woman";
import Accessories from "./Pages/Products/Accessories";
import Shoes from "./Pages/Products/Shoes";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Search from "./Components/Search/Search";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/newsletter" component={Newsletter} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/shopping/man" component={Man} />
          <Route exact path="/shopping/woman" component={Woman} />
          <Route exact path="/shopping/accessories" component={Accessories} />
          <Route exact path="/shopping/shoes" component={Shoes} />
          <Route
            exact
            path="/shopping/product-detail"
            component={ProductDetail}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
