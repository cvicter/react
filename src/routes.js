import React from "react";

import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";
import Form from "./pages/form";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
      <Route path="/product/form" component={Form} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
