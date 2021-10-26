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
  const [updatedComment, setUpdatedComment] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  let updatedCommentId;

  useEffect(() => {
    if (updatedComment) {
      setPostComment(updatedComment);
    }
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
      dispatch(updateComment(postId, updatedComment._id, postComment));
    } else {
      dispatch(createComment(postId, postComment));
    }
    setUpdatedComment(null);
    clear();
  };

  return (
    <div className={classes.comments}>
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
          name="author"
          label="Author"
          variant="outlined"
          value={postComment.author}
          fullWidth
          onChange={(e) => {
            setPostComment({ ...postComment, author: e.target.value });
          }}
          color="secondary"
        />
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
