import React, { useState } from "react";
import useStyles from "./styles";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { deletePost } from "../../actions/posts";
import { deleteComment } from "../../actions/comments";

import MoreIcon from "@material-ui/icons/MoreVert";

const ActionsButton = ({
  updateElement,
  comment,
  postId,
  dispatch,
  history,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const menuId = "menu-post-manipulation";

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(false);

  const handleUpdate = () => {
    if (comment) {
      updateElement(comment);
    } else {
      updateElement(true);
    }
    handleMenuClose();
  };

  const handleDelete = () => {
    if (comment) {
      dispatch(deleteComment(comment._id));
    } else {
      dispatch(deletePost(postId));
      history.push("/home");
    }
    handleMenuClose();
  };

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
      <MenuItem onClick={() => handleUpdate()}>Update</MenuItem>
      <MenuItem className={classes.delete} onClick={() => handleDelete()}>
        Delete
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <IconButton
        className={classes.iconButton}
        onClick={handleMenuOpen}
        aria-controls={menuId}
        aria-haspopup="true"
      >
        <MoreIcon className={classes.moreIcon} />
      </IconButton>
      {renderMenu}
    </>
  );
};

export default ActionsButton;
