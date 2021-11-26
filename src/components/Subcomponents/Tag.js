import React from "react";
import useStyles from "./styles";

const Tag = ({ value, number }) => {
  const classes = useStyles();

  return (
    <div>
      &nbsp;
      <span className={classes.span}>
        <span className={classes.tagText}>{value}</span>
        &nbsp;
        <span className={classes.number}>{number}</span>
      </span>
    </div>
  );
};

export default Tag;
