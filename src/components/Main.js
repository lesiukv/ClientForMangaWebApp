import React from "react";
import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import Topic from "./Topic/Topic.js";

import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/topic">
          <Topic />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Redirect exact from="/" to="/home" />
      </Switch>
    </>
  );
};

export default Main;
