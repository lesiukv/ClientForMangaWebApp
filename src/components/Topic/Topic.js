import React, { useEffect } from "react";
import {
  CircularProgress,
  Typography,
  Container,
  Box,
} from "@material-ui/core";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getTopic } from "../../actions/topics";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const Topic = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { topicName } = useParams();

  useEffect(() => {
    dispatch(getTopic(topicName));
  }, [dispatch, topicName]);

  const {
    topicArr: topic,
    error,
    isLoading,
  } = useSelector((state) => state.topic);

  if (!topic || !topicName)
    return (
      <Container className={classes.loadingContainer}>
        <CircularProgress className={classes.loading} />
      </Container>
    );

  const [topicValues, topicAmount] = topic;

  if (
    isLoading 
  )
    return <Loading />;

  return (
    <Container className={classes.container}>
      <Typography className={classes.text} variant="h3" color="primary">
        {topicName.charAt(0).toUpperCase() + topicName.slice(1)}
      </Typography>
      <Box className={classes.topicContainer}>
        {topicValues[topicName]?.map((value, index) => (
          <span key={index} className={classes.span}>
            <span>{value}</span>
            &nbsp;
            <span className={classes.number}>
              {topicAmount[topicName][index]}
            </span>
          </span>
        ))}
      </Box>
    </Container>
  );
};

export default Topic;
