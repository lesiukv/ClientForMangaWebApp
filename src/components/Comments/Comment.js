import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Avatar,
  IconButton,
  Typography,
  Paper,
  Box,
} from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../actions/comments";
import MoreIcon from "@material-ui/icons/MoreVert";
import moment from "moment";

const Comment = ({ postId, comment, setUpdatedComment }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const classes = useStyles();
  const dispatch = useDispatch();
  const menuId = "menu-post-manipulation";

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleDelete = () => dispatch(deleteComment(postId, comment._id));
  const handleUpdate = () => setUpdatedComment(comment);

  // const stringToColor = (string) => {
  //   let hash = 0;
  //   let i;

  //   for (i = 0; i < string.length; i += 1) {
  //     hash = string.charCodeAt(i) + ((hash << 5) - hash);
  //   }

  //   let color = "#";

  //   for (i = 0; i < 3; i += 1) {
  //     const value = (hash >> (i * 8)) & 0xff;
  //     color += `00${value.toString(16)}`.substr(-2);
  //   }

  //   return color;
  // };

  // const stringAvatar = (name) => {
  //   return {
  //     sx: {
  //       bgcolor: stringToColor(name),
  //     },
  //     children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  //   };
  // };

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
          {/* <Avatar {...stringAvatar(comment.author)} /> */}
          <div>
            <div className={classes.head}>
              <Typography className={classes.text}>{comment.author}</Typography>
              &nbsp;
              <Typography variant="secondary" className={classes.text}>
                {moment(comment.createdAt).startOf("day").fromNow()}
              </Typography>
            </div>
            
            <Typography className={classes.text}>{comment.comment}</Typography>
          </div>
        </div>

        <IconButton className={classes.text}>
          <MoreIcon
            className={classes.iconButton}
            onClick={handleMenuOpen}
            aria-controls={menuId}
            aria-haspopup="true"
          />
        </IconButton>
      </Box>
      {renderMenu}
    </div>
  );
};

export default Comment;
