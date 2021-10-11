import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <img className={classes.media} alt="title" src={`http://localhost:5000/uploads/${post?.pages[0]?.dest}`}/>
        <CardContent>
          <Typography className={classes.title}>{post.title}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Post;
