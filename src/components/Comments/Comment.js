import React from "react";
import {
  Avatar,
  Typography,
  Box,
} from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import moment from "moment";
import { ActionsButton } from "../Subcomponents";

const Comment = ({ comment, setUpdatedComment, userId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

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
          <ActionsButton
            comment={comment}
            dispatch={dispatch}
            updateElement={setUpdatedComment}
          />
        )}
      </Box>
    </div>
  );
};

export default Comment;
