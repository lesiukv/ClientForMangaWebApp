import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Slide,
} from "@material-ui/core";
import useStyles from "./styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../actions/favorites";
import Loading from "../Loading/Loading";

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [onHover, setOnHover] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { favorites, isLoading } = useSelector((state) => state.favorites);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoading) return <Loading />;
    setIsFavorite(favorites.some((favorite) => favorite._id === post._id));
  }, [favorites, isLoading, post._id]);

  const handleAddFavorite = (postId) => {
    dispatch(addFavorite(postId));
    setIsFavorite(true);
  };
  const handleRemoveFavorite = (postId) => {
    dispatch(removeFavorite(postId));
    setIsFavorite(false);
  };

  return (
    <Card
      className={classes.card}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      {isAuthenticated && onHover && (
        <Slide direction="down" in={onHover} mountOnEnter unmountOnExit>
          <IconButton
            className={classes.favoritesButton}
            onClick={() =>
              isFavorite
                ? handleRemoveFavorite(post._id)
                : handleAddFavorite(post._id)
            }
          >
            <FavoriteIcon
              fontSize="large"
              className={classes.favoriteIcon}
              color={isFavorite ? "secondary" : ""}
            />
          </IconButton>
        </Slide>
      )}
      <Link to={`post/${post._id}`}>
        <img
          className={classes.media}
          alt="title"
          src={`http://localhost:5000/uploads/${post?.pages[0]?.dest}`}
        />
        <CardContent>
          <Typography className={classes.title}>{post.title}</Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default Post;
