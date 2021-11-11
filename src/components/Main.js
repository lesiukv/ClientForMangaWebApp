import React, {useEffect} from "react";
import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import Topic from "./Topic/Topic.js";
import PostDetails from "./Posts/PostDetails/PostDetails.js";
import Profile from "./Profile/Profile.js";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/posts.js";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  return (
    <>
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
    </>
  );
};

export default Main;
