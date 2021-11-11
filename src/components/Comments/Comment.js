import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../actions/comments";
import MoreIcon from "@material-ui/icons/MoreVert";
import moment from "moment";

const Comment = ({ comment, setUpdatedComment, userId }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const classes = useStyles();
  const dispatch = useDispatch();
  const menuId = "menu-post-manipulation";

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(false);
  const handleDelete = () => {
    dispatch(deleteComment(comment._id));
    handleMenuClose();
  };
  const handleUpdate = () => {
    setUpdatedComment(comment);
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
      <MenuItem onClick={handleUpdate}>Update</MenuItem>
      <MenuItem
        color="secondary"
        className={classes.delete}
        onClick={handleDelete}
      >
        Delete
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Box className={classes.comment}>
        <div className={classes.account}>
          <Avatar />
          <div>
            <div className={classes.head}>
              <Typography className={classes.text}>
                {comment.author?.username}
              </Typography>
              &nbsp;
              <Typography variant="body2" className={classes.text}>
                {moment(comment.createdAt).startOf("day").fromNow()}
              </Typography>
            </div>

            <Typography className={classes.text}>{comment.comment}</Typography>
          </div>
        </div>
        {userId === comment.author?._id && (
          <IconButton
            className={classes.text}
            onClick={handleMenuOpen}
            aria-controls={menuId}
            aria-haspopup="true"
          >
            <MoreIcon className={classes.iconButton} />
          </IconButton>
        )}
      </Box>
      {renderMenu}
    </div>
  );
};

export default Comment;
