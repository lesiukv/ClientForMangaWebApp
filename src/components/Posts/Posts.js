import React, { useEffect } from "react";
import Post from "./Post.js";
import { useSelector } from "react-redux";
import { Grid, Container } from "@material-ui/core";
import useStyless from "./styles.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts.js";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { getFavorites } from "../../actions/favorites.js";

const Posts = ({ favorites }) => {
  const classes = useStyless();
  const dispatch = useDispatch();

  useEffect(() => {
    if (favorites) {
      dispatch(getFavorites());
    } else {
      dispatch(getPosts());
    }
  }, [dispatch, favorites]);



  const {
    postsArr: posts,
    isLoading,
    error,
  } = useSelector((state) => (favorites ? state.favorites : state.posts));

  console.log(posts);

  if (isLoading) return <Loading />;

  return (
    <>
      <Container className={classes.container}>
        <Grid container alignItems="stretch" spacing={1}>
          {posts
            ?.slice(0)
            .reverse()
            .map((post) => (
              <Grid key={post._id} item xs={12} sm={6} md={3}>
                <Link to={`post/${post._id}`}>
                  <Post post={post} />
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>
      {error && <Error error={error} />}
    </>
  );
};

export default Posts;
