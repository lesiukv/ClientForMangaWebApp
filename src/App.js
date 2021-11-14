import React from "react";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Topic from "./components/Topic/Topic.js";
import PostDetails from "./components/PostDetails/PostDetails.js";
import Profile from "./components/Profile/Profile.js";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme.js";
// import Error from "./components/Error/Error";
// import { useSelector } from "react-redux";

const App = () => {
  // const error = useSelector((state) => state.errors);

  return (
    <ThemeProvider theme={theme}>
      {/* {error && <Error error={error}/>} */}
      <Header />
      <Switch>
        <Route path="/topic/:topicName">
          <Topic />
        </Route>
        <Route path="/home">
          <Home />
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
