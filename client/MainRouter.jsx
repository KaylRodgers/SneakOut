import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Users from "./user/Users";
import Signup from "./user/Signup";
import Signin from './auth/Signin';
import Menu from './core/Menu';
import Products from './products/Products'
import FeaturedItems from "./products/FeaturedItems";


const MainRouter = () => {
  return (
    <div>
      <Menu />
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/products" component={Products}/>
        <Route path="/featureditems" component={FeaturedItems}/>
      </Switch>
    </div>
  );
};
export default MainRouter;
