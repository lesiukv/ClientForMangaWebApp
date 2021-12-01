import React, { useEffect } from "react";
import {
  Typography,
  Container,
  Box,
} from "@material-ui/core";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getTopic } from "../../actions/topics";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { Tag } from "../Subcomponents";

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

  const [topicValues, topicAmount] = topic;

  if (isLoading) return <Loading />;

  return (
    <>
      <Container className={classes.container}>
        <Typography className={classes.text} variant="h3" color="primary">
          {topicName.charAt(0).toUpperCase() + topicName.slice(1)}
        </Typography>
        <Box className={classes.topicContainer}>
          {topicValues.map((value, index) => (
            <div key={index} className={classes.tag}>
              <Tag value={value} number={topicAmount[index]} />
            </div>
          ))}
        </Box>
      </Container>
      {error && <Error />}
    </>
  );
};

export default Topic;
