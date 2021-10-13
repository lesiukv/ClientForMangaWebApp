import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getTopics } from "../../actions/topics";
import { useParams } from "react-router-dom";

const Topic = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { topicName } = useParams();

  useEffect(() => {
    dispatch(getTopics())
  }, [dispatch]);

  const topic = useSelector((state) => state.topics[topicName])


  return (
    <Box>
      {topic?.map((element, index) => (
        <h1 key={index}>{element}</h1>
      ))}
    </Box>
  );
};

export default Topic;
