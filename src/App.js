import React, { useEffect } from "react";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Topic from "./components/Topic/Topic.js";
import PostDetails from "./components/PostDetails/PostDetails.js";
import Profile from "./components/Profile/Profile.js";
import Posts from "./components/Posts/Posts.js";
import Error from "./components/Error/Error.js";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme.js";
import { useSelector, useDispatch } from "react-redux";
import { getFavorites } from "./actions/favorites.js";
import { getPosts } from "./actions/posts.js";
import { logoutUser } from "./actions/auth.js";

const App = () => {
  const dispatch = useDispatch();


  const { isAuthenticated, user, isTokenExpired } = useSelector(
    (state) => state?.auth
  );

  console.log(isTokenExpired)


  useEffect(() => {
    dispatch(getPosts());
    if (isTokenExpired) dispatch(logoutUser());
    if (isAuthenticated) dispatch(getFavorites());
  }, [dispatch, isAuthenticated, isTokenExpired]);

  const {
    favorites,
    isLoading: isLoadingFavs,
    error: errorFavs,
  } = useSelector((state) => state.favorites);

  const { posts, isLoading, error } = useSelector((state) => state.posts);

  return (
    <ThemeProvider theme={theme}>
      <Header dispatch={dispatch} isAuthenticated={isAuthenticated} />
      <Switch>
        <Route path="/topic/:topicName">
          <Topic />
        </Route>
        <Route path="/home">
          <Home
            isAuthenticated={isAuthenticated}
            posts={posts}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/favorites">
          <Posts posts={favorites} isLoading={isLoadingFavs} />
        </Route>
        <Route path="/post/:postId">
          <PostDetails
            dispatch={dispatch}
            isAuthenticated={isAuthenticated}
            user={user}
          />
        </Route>
        <Route path="/profile/:profileId">
          <Profile dispatch={dispatch} />
        </Route>
        <Redirect exact from="/" to="/home" />
      </Switch>
      {(error || errorFavs) && <Error error={error || errorFavs} />}
    </ThemeProvider>
  );
};

export default App;
