import React from "react";
import Post from "./Post.js";
import { Grid, Container } from "@material-ui/core";
import useStyless from "./styles.js";
import Loading from "../Loading/Loading";

const Posts = ({ posts, isLoading }) => {
  const classes = useStyless();

  if (isLoading) return <Loading />;

  return (
    <Container className={classes.container}>
      <Grid container alignItems="stretch" spacing={1}>
        {posts
          .slice(0)
          .reverse()
          .map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={3}>
              <Post post={post} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Posts;
