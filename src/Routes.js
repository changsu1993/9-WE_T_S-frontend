import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from "./Pages/Account/Account";
import Newsletter from "./Components/Newsletter/Newsletter";
import Main from "./Pages/Main/Main";
import Man from "./Pages/Products/ManProducts";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProductDetail2 from "./Pages/ProductDetail/ProductDetail2";
import Cart from "./Pages/Products/Cart/Cart";
import Wishlist from "./Pages/Products/Wishlist/Wishlist";
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
          <Route exact path="/shopping/item1Red" component={ProductDetail} />
          <Route exact path="/shopping/item1Black" component={ProductDetail2} />
          <Route
            exact
            path="/shopping/product-detail"
            component={ProductDetail}
          />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/wishlist" component={Wishlist} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
