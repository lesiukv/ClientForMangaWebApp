import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import CloseIcon from "@material-ui/icons/Close";
import Settings from "@material-ui/icons/Settings";
import { Button, IconButton } from "@material-ui/core";
import useStyles from "./styles.js";

const Page = ({ post }) => {
  const { pageId } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const numberOfPages = post.pages.length;
  const goToPostDetails = () => {
    history.push(`/post/${post._id}`);
  };

  const pageControl = (
    <div className={classes.pageControl}>
      <IconButton onClick={goToPostDetails} className={classes.buttonControl}>
        <CloseIcon className={classes.buttonControl} />
      </IconButton>
      <div className={classes.pagination}>
        <IconButton
          disabled={pageId > 0 ? false : true}
          className={classes.buttonControl}
        >
          <Link to={`${parseInt(pageId) - 1}`}>
            <ArrowBack className={classes.buttonControl} />{" "}
          </Link>
        </IconButton>
        <Button className={classes.buttonControl}>
          {parseInt(pageId) + 1} of {numberOfPages}
        </Button>
        <IconButton
          disabled={numberOfPages > parseInt(pageId) + 1 ? false : true}
          className={classes.buttonControl}
        >
          <Link to={`${parseInt(pageId) + 1}`}>
            <ArrowForward className={classes.buttonControl} />{" "}
          </Link>
        </IconButton>
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
