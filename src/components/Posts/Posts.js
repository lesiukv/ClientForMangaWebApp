import React from "react";
import Post from "./Post/Post.js";
import { useSelector } from "react-redux";
import { Grid, Container } from "@material-ui/core";
import useStyless from "./styles.js";
import { Link } from "react-router-dom";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyless();

  return (
    <>
      <Container className={classes.container}>
        <Grid container alignItems="stretch" spacing={2}>
          {posts
            .slice(0)
            .reverse()
            .map((post) => (
              <Grid key={post._id} item xs={12} sm={6} md={4}>
                <Link to={`post/${post._id}`}>
                  <Post post={post} />
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Posts;
