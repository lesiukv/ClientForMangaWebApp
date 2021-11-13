import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles.js";
import {
  getComments,
  createComment,
  updateComment,
} from "../../actions/comments";
import Comment from "./Comment";

const Comments = ({ postId }) => {
  const {
    isAuthenticated,
    user: { userId },
  } = useSelector((state) => state.auth);
  
  const [postComment, setPostComment] = useState({
    author: userId,
    comment: "",
  });
  const [updatedComment, setUpdatedComment] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (updatedComment) {
      setPostComment(updatedComment);
    }
    dispatch(getComments(postId));
  }, [dispatch, postId, updatedComment]);

  const {
    commentsArr: comments,
    isLoading,
    error,
  } = useSelector((state) => state.comments);

  const clear = () => {
    setPostComment({
      author: userId,
      comment: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (updatedComment) {
      dispatch(updateComment(updatedComment._id, postComment));
    } else {
      dispatch(createComment(postId, postComment));
    }
    setUpdatedComment(null);
    clear();
    dispatch(getComments(postId));
  };

  return (
    <div className={classes.comments}>
      {isAuthenticated ? (
        <form
          className={classes.form}
          autoComplete="off"
          id="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <TextField
            className={classes.formElement}
            InputProps={{
              classes: { input: classes.input },
            }}
            name="comment"
            label="Comment"
            variant="outlined"
            value={postComment.comment}
            fullWidth
            onChange={(e) => {
              setPostComment({ ...postComment, comment: e.target.value });
            }}
            color="secondary"
            size="medium"
          />
          <div>
            <Button
              className={classes.formElement}
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              type="submit"
            >
              Submit
            </Button>
            <Button
              className={classes.formElement}
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
      ) : (
        <Typography>You must login or register user</Typography>
      )}
      <Box>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            comment={comment}
            userId={userId}
            setUpdatedComment={setUpdatedComment}
          />
        ))}
      </Box>
    </div>
  );
};

export default Comments;
