import React, { useState, useEffect } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles.js";
import {
  getComments,
  createComment,
  updateComment,
} from "../../actions/comments";
import Comment from "./Comment";

const Comments = ({ postId }) => {
  const [postComment, setPostComment] = useState({
    author: "",
    comment: "",
  });
  const [updatedComment, setUpdatedComment] = useState({});
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (updatedComment) setPostComment(updatedComment);
    dispatch(getComments(postId));
  }, [dispatch, postId, updatedComment]);

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
      dispatch(updatedComment(postId, updatedComment._id, postComment));
    }
    dispatch(createComment(postId, postComment));
    clear();
  };

  return (
    <div>
      <form autoComplete="off" id="form" noValidate onSubmit={handleSubmit}>
        <TextField
          className={classes.formElement}
          name="author"
          label="Author"
          varinat="outlined"
          value={postComment.author}
          onChange={(e) => {
            setPostComment({ ...postComment, author: e.target.value });
          }}
        />
        <TextField
          className={classes.formElement}
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
        {comments.map((comment, index) => (
          <Comment
            key={index}
            comment={comment}
            postId={postId}
            setUpdatedComment={setUpdatedComment}
          />
        ))}
      </Box>
    </div>
  );
};

export default Comments;
