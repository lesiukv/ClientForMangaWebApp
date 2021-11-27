import React from "react";
import useStyles from "./styles";

const Tag = ({ value, number }) => {
  const classes = useStyles();

  return (
    <div className={classes.tag}>
      &nbsp;
      <span className={classes.span}>
        <span className={classes.tagText}>{value}</span>
        &nbsp;
        {number && <span className={classes.number}>{number}</span>}
      </span>
    </div>
  );
};

export default Tag;
