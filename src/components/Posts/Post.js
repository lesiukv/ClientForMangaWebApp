import React from "react";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import useStyles from "./styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../actions/favorites";

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleFavorite = (postId) => dispatch(addFavorite(postId));

  return (
    <Card className={classes.card}>
      <IconButton
        className={classes.favoritesButton}
        onClick={() => handleFavorite(post._id)}
      >
        <FavoriteIcon color="secondary" />
      </IconButton>
      
      <img
        className={classes.media}
        alt="title"
        src={`http://localhost:5000/uploads/${post?.pages[0]?.dest}`}
      />
      <CardContent>
        <Typography className={classes.title}>{post.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
