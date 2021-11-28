import React from "react";
import useStyles from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

const Tag = ({ property, value, number, removeTag }) => {
  const classes = useStyles();

  return (
    <div className={classes.tag}>
      &nbsp;
      <span className={classes.span}>
        <span className={classes.tagText}>{value}</span>
        &nbsp;
        {number && <span className={classes.number}>{number}</span>}
        {removeTag && (
          <>
            &nbsp;
            <IconButton size="small">
              <CloseIcon
                className={classes.removeTag}
                color="secondary"
                onClick={() => removeTag(property, value)}
              />
            </IconButton>
          </>
        )}
      </span>
    </div>
  );
};

export default Tag;
