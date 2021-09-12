import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={post.titleImage ? post.titleImage : post.selectedFile}
          title={post.title}
        />
        <CardContent>
          <Typography className={classes.title}>{post.title}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Post;
