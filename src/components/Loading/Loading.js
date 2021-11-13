import React from "react";
import useStyles from "./styles";
import { Container, CircularProgress } from "@material-ui/core";


const Loading = () => {
  const classes = useStyles();

  return (
    <Container className={classes.loadingContainer}>
      <CircularProgress className={classes.loading} />
    </Container>
  );
};

export default Loading;
