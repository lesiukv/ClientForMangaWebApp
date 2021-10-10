import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import CloseIcon from "@material-ui/icons/Close";
import Settings from "@material-ui/icons/Settings";
import { Typography, Box, Button, IconButton } from "@material-ui/core";
import useStyles from "./styles.js";

const Page = ({ post }) => {
  const { pageId } = useParams();
  const classes = useStyles();
  const history = useHistory();

  const goToPostDetails = () => {
    history.push(`/post/${post._id}`);
  };

  const pageControl = (
    <div className={classes.pageControl}>
      <IconButton onClick={goToPostDetails} className={classes.buttonControl}>
        <CloseIcon className={classes.buttonControl} />
      </IconButton>
      <div className={classes.pagination}>
        <Link to={`${parseInt(pageId) - 1}`}>
          <IconButton className={classes.buttonControl}>
            <ArrowBack className={classes.buttonControl} />
          </IconButton>
        </Link>
        <Button className={classes.buttonControl}>
          {parseInt(pageId) + 1} of {post.pages.length}
        </Button>
        <Link to={`${parseInt(pageId) + 1}`}>
          <IconButton className={classes.buttonControl}>
            <ArrowForward className={classes.buttonControl} />
          </IconButton>
        </Link>
      </div>
      <IconButton className={classes.buttonControl}>
        <Settings className={classes.buttonControl} />
      </IconButton>
    </div>
  );

  return (
    <>
      {pageControl}
      <div className={classes.pageContainer}>
        <img
          alt="xd"
          className={classes.pageImage}
          src={`http://localhost:5000/uploads/${post.pages[pageId]?.dest}`}
        />
      </div>
      {pageControl}
    </>
  );
};

export default Page;
