import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import {
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
import { getPostDetails } from "../../../actions/posts";
import moment from "moment";
import Page from "./Page/Page";
import Comments from "../../Comments/Comments";

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

  useEffect(() => {
    dispatch(getPostDetails(postId));
  }, [dispatch, postId]);

  const data = useSelector((state) => state.postdetails);
  const [details, amount] = data;

  if (!details || !amount) {
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
        <Page post={details} />
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
              alt={details?.pages[0]?.name}
              src={`http://localhost:5000/uploads/${details?.pages[0]?.dest}`}
            />
            <Grid className={classes.details} item xs={12} sm={3} md={5}>
              <Typography className={classes.title} variant="h4">
                {details.title}
              </Typography>
              <div className={classes.subDetails}>
                <Typography>Parodie:</Typography>&nbsp;
                <span className={classes.span}>
                  <span>{details.parodie}</span>
                  &nbsp;
                  <span className={classes.number}>{amount["parodie"]}</span>
                </span>
              </div>
              <div className={classes.subDetails}>
                <Typography>Language:</Typography>&nbsp;
                <span className={classes.span}>
                  <span>{details.language}</span>
                  &nbsp;
                  <span className={classes.number}>{amount["language"]}</span>
                </span>
              </div>
              <div className={classes.subDetails}>
                <Typography>Group:</Typography>&nbsp;
                <span className={classes.span}>
                  <span>{details.group}</span>
                  &nbsp;
                  <span className={classes.number}>{amount["group"]}</span>
                </span>
              </div>
              <div className={classes.subDetails}>
                <Typography>Category:</Typography>&nbsp;
                <span className={classes.span}>
                  <span>{details.category}</span>
                  &nbsp;
                  <span className={classes.number}>{amount["category"]}</span>
                </span>
              </div>
              <div className={classes.subDetails}>
                <Typography>Tags:</Typography>&nbsp;
                {details.tags.map((tag, index) => (
                  <div key={index}>
                    &nbsp;
                    <span className={classes.span}>
                      <span>{tag}</span>
                      &nbsp;
                      <span className={classes.number}>
                        {amount["tags"][index]}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <div className={classes.subDetails}>
                <Typography>Artists:&nbsp;</Typography>
                {details.artists.map((artist, index) => (
                  <div key={index}>
                    &nbsp;
                    <span className={classes.span}>
                      <span>{artist}</span>
                      &nbsp;
                      <span className={classes.number}>
                        {amount["artists"][index]}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <div className={classes.subDetails}>
                <Typography>Characters:&nbsp;</Typography>
                {details.characters.map((character, index) => (
                  <div key={index}>
                    &nbsp;
                    <span className={classes.span}>
                      <span>{character}</span>
                      &nbsp;
                      <span className={classes.number}>
                        {amount["characters"][index]}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <div className={classes.subDetails}>
                <Typography>Pages:</Typography>&nbsp;
                <span className={classes.span}>{details.pages.length}</span>
              </div>
              <div className={classes.subDetails}>
                <Typography>Uploaded:</Typography>&nbsp;
                {moment(details.createdAt).startOf("day").fromNow()}
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
            {details.pages.map((page, index) => (
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
        <Container sx={{marginTop: '50px !important', justifyContetn: 'space-between'}} className={classes.container}>
       
          <Typography className={classes.title}>Post Comment</Typography>
          <Comments postId={postId} />

        </Container>
        {renderMenu}
        <Form
          formFor="Update"
          id={postId}
          post={details}
          open={open}
          setOpen={setOpen}
        />
      </Route>
    </Switch>
  );
};

export default PostDetails;
