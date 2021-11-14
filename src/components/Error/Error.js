import React, { useState } from "react";
import useStyles from "./styles";
import { Typography, Container } from "@material-ui/core";
import { useSelector } from "react-redux";

const Error = () => {
  const classes = useStyles();
  const {err, isLoading} = useSelector((state) => state.errors);

  if(isLoading) return <div></div>

  console.log(err)

  return (
    <div className={classes.container}>
      <Container className={classes.errorContainer}>
        <Typography className={classes.errorMessage}>
          {err.message}
        </Typography>
        {JSON.stringify(err)}
      </Container>
    </div>
  );
};

export default Error;
