import React, { useState, useEffect } from "react";
import {
  Avatar,
  Typography,
  Paper,
  Box,
  Button,
  TextField,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles.js";
import {
  getComments,
  updateComment,
  deleteComment,
  addComment,
} from "../../actions/comments";
import MoreIcon from "@material-ui/icons/MoreVert";


const Comments = ({ postId }) => {
  const [postComment, setPostComment] = useState({
    author: "",
    text: "",
  });
  const [updatedComment, setUpdatedComment] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getComments(postId));

    if (updatedComment) setPostComment(updatedComment);
  });

  const comments = useSelector((state) => state.comments);

  const clear = () => {
    setPostComment({
      author: "",
      comment: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updatedComment) {
      dispatch(updateComment(postId, updatedComment._id, postComment));
    }
    dispatch(addComment(postId, postComment));
    clear();
  };

  const stringToColor = (string) => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }

    return color;
  };

  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleDelete = (commentId) => dispatch(deleteComment(postId, commentId))
  const menuId = "menu-post-manipulation";

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
    <div>
      <form autoComplete="off" id="form" noValidate onSubmit={handleSubmit}>
        <TextField
          name="author"
          label="Author"
          varinat="outlined"
          value={postComment.author}
          onChange={(e) => {
            setPostComment({ ...postComment, author: e.target.value });
          }}
        />
        <TextField
          name="comment"
          label="Comment"
          varinat="outlined"
          value={postComment.comment}
          onChange={(e) => {
            setPostComment({ ...postComment, comment: e.target.value });
          }}
        />
        <div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            type="submit"
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
      <Box>
        {comments.map((comment, index) => {
          <Paper>
            <Avatar {...stringAvatar(comment.author)} />
            <div>
              <Typography>
                {comment.autor}
              </Typography>
              <Typography>
                {comment.comment}
              </Typography>
            </div>
            <IconButton >
              <MoreIcon/>
            </IconButton>
          </Paper>;
        })}
      </Box>
    </div>
  );
};

export default Comments;
