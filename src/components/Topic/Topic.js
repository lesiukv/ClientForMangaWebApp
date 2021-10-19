import React, { useEffect } from "react";
import { Typography, Container, Box } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getTopic } from "../../actions/topics";
import { useParams } from "react-router-dom";

const Topic = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { topicName } = useParams();

  useEffect(() => {
    dispatch(getTopic(topicName));
  }, [dispatch, topicName]);

  const topic = useSelector((state) => state.topic);
  const [topicValues, topicAmount] = topic;

  console.log(topic);
  console.log(topicName)

  if (!topicValues.hasOwnProperty(topicName) || !topicAmount.hasOwnProperty(topicName)) return "Loading";

  const renderTopics = (topicValues, topicAmount) => {
    let topicList = [];
    for (let i = 0; i < topicValues[topicName].length; i++) {
      topicList.push(
        <span key={i} className={classes.span}>
          <span>{topicValues[topicName][i]}</span>
          &nbsp;
          <span className={classes.number}>{topicAmount[topicName][i]}</span>
        </span>
      );
    }
    return topicList;
  };

  return (
    <Container className={classes.container}>
      <Typography className={classes.text} variant="h3" color="primary">
        {topicName.charAt(0).toUpperCase() + topicName.slice(1)}
      </Typography>
      <Box className={classes.topicContainer}>{renderTopics(topicValues, topicAmount)}</Box>
    </Container>
  );
};

export default Topic;
