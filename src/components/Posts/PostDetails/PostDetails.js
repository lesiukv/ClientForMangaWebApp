import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import {
  CardMedia,
  Container,
  Grid,
  CircularProgress,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Box,
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../../actions/posts";
import Form from "../../Form/Form.js";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";
import { getPostDetailsTopics } from "../../../actions/topics";
import moment from "moment";
import Page from "./Page/Page";

const PostDetails = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const { postId } = useParams();
  const history = useHistory();
  let match = useRouteMatch();
  const menuId = "menu-post-manipulation";
  const post = useSelector((state) =>
    state.posts.find((element) => element._id === postId)
  );

  useEffect(() => {
    dispatch(getPostDetailsTopics(post));
  }, [dispatch, post]);

  const topicsNumber = useSelector((state) => state.topic);

  console.log(topicsNumber);

  if (!post) {
    return (
      <Container className={classes.loadingContainer}>
        <CircularProgress className={classes.loading} />
      </Container>
    );
  }
  
  if (!topicsNumber) {
    return (
      <Container className={classes.loadingContainer}>
        <CircularProgress className={classes.loading} />
      </Container>
    );
  }

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleFormOpen = () => setOpen(true);

  function handleDelete() {
    dispatch(deletePost(postId));
    history.push("/home");
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
      id={menuId}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
    >
      <MenuItem onClick={handleFormOpen}>Update</MenuItem>
      <MenuItem className={classes.delete} onClick={handleDelete}>
        Delete
      </MenuItem>
    </Menu>
  );

  return (
    <Switch>
      <Route path={`${match.path}/:pageId`}>
        <Page post={post} />
      </Route>
      <Route path={match.path}>
        <Container className={classes.container}>
          <Grid
            key={postId}
            className={classes.detailsContainer}
            container
            alignItems="stretch"
          >
            <img
              className={classes.titleImage}
              alt={post?.pages[0]?.name}
              src={`http://localhost:5000/uploads/${post?.pages[0]?.dest}`}
            />
            <Grid className={classes.details} item xs={12} sm={3} md={5}>
              <Typography className={classes.title} variant="h4">
                {post.title}
              </Typography>
              <div className={classes.subDetails}>
                <Typography>Parodie:</Typography>&nbsp;
                <span className={classes.span}>
                  <span>{post.parodie}</span>
                  &nbsp;
                  <span className={classes.number}>{topicsNumber["parodie"]}</span>
                </span>
              </div>
              <div className={classes.subDetails}>
                <Typography>Language:</Typography>&nbsp;
                <span className={classes.span}>
                  <span>{post.language}</span>
                  &nbsp;
                  <span className={classes.number}>{topicsNumber["language"]}</span>
                </span>
              </div>
              <div className={classes.subDetails}>
                <Typography>Group:</Typography>&nbsp;
                <span className={classes.span}>
                  <span>{post.group}</span>
                  &nbsp;
                  <span className={classes.number}>{topicsNumber["group"]}</span>
                </span>
              </div>
              <div className={classes.subDetails}>
                <Typography>Category:</Typography>&nbsp;
                <span className={classes.span}>
                  <span>{post.category}</span>
                  &nbsp;
                  <span className={classes.number}>{topicsNumber["category"]}</span>
                </span>
              </div>
              <div className={classes.subDetails}>
                <Typography>Tags:</Typography>&nbsp;
                {post.tags.map((tag, index) => (
                  <div key={index}>
                    &nbsp;
                    <span className={classes.span}>
                      <span>{tag}</span>
                      &nbsp;
                      <span className={classes.number}>{topicsNumber["tags"][index]}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className={classes.subDetails}>
                <Typography>Artists:&nbsp;</Typography>
                {post.artists.map((artist, index) => (
                  <div key={index}>
                    &nbsp;
                    <span className={classes.span}>
                      <span>{artist}</span>
                      &nbsp;
                      <span className={classes.number}>{topicsNumber["artists"][index]}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className={classes.subDetails}>
                <Typography>Characters:&nbsp;</Typography>
                {post.characters.map((character, index) => (
                  <div key={index}>
                    &nbsp;
                    <span className={classes.span}>
                      <span>{character}</span>
                      &nbsp;
                      <span className={classes.number}>{topicsNumber["characters"][index]}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className={classes.subDetails}>
                <Typography>Pages:</Typography>&nbsp;
                <span className={classes.span}>{post.pages.length}</span>
              </div>
              <div className={classes.subDetails}>
                <Typography>Uploaded:</Typography>&nbsp;
                {moment(post.createdAt).startOf("day").fromNow()}
              </div>
            </Grid>
            <IconButton
              className={classes.iconButton}
              onClick={handleMenuOpen}
              aria-controls={menuId}
              aria-haspopup="true"
            >
              <MoreIcon className={classes.moreIcon} />
            </IconButton>
          </Grid>
        </Container>
        <Container className={classes.container}>
          <Grid
            container
            alignItems="stretch"
            className={classes.pagesContainer}
          >
            {post.pages.map((page, index) => (
              <Box className={classes.pageBox} item xs={12} sm={4} key={index}>
                <Link to={`${match.url}/${index}`}>
                  <img
                    className={classes.page}
                    alt={page.name}
                    src={`http://localhost:5000/uploads/${page.dest}`}
                  />
                </Link>
              </Box>
            ))}
          </Grid>
        </Container>
        {renderMenu}
        <Form
          formFor="Update"
          id={postId}
          post={post}
          open={open}
          setOpen={setOpen}
        />
      </Route>
    </Switch>
  );
};

export default PostDetails;
