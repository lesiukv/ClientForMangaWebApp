import React, { useEffect } from "react";
import { Typography, Container, Box } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getTopics } from "../../actions/topics";
import { useParams } from "react-router-dom";

const Topic = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { topicName } = useParams();

  useEffect(() => {
    dispatch(getTopics());
  }, [dispatch]);

  const topic = useSelector((state) => state.topics[topicName]);

  console.log(topic);

  return (
    <Container className={classes.container}>
      <Typography className={classes.text} variant="h3" color="primary">
        {topicName.charAt(0).toUpperCase() + topicName.slice(1)}
      </Typography>
      {topic?.map((element, index) => (
        <span key={index} className={classes.span}>
          {element}
        </span>
      ))}
    </Container>
  );
};

export default Topic;