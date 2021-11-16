import React from "react";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Topic from "./components/Topic/Topic.js";
import PostDetails from "./components/PostDetails/PostDetails.js";
import Profile from "./components/Profile/Profile.js";
import Posts from "./components/Posts/Posts.js";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme.js";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route path="/topic/:topicName">
          <Topic />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/favorites">
          <Posts favorites />
        </Route>
        <Route path="/post/:postId">
          <PostDetails />
        </Route>
        <Route path="/profile/:profileId">
          <Profile />
        </Route>
        <Redirect exact from="/" to="/home" />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
