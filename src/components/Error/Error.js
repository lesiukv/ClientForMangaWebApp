import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import {
  Modal,
  Slide,
  Typography,
  IconButton,
  Container,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
// import { useDispatch } from "react-redux";
// import { removeError } from "../../actions/errors";

const Error = ({ error }) => {
  // const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    // dispatch(removeError());
  };

  useEffect(() => {
    setOpen(true);
  }, [error]);

  return (
    <Modal open={open} onClose={handleClose} top={0}>
      <Slide direction="down" in={open} mountOnEnter unmountOnExit>
        <div className={classes.container}>
          <Container className={classes.errorContainer}>
            <div className={classes.errorHeader}>
              <Typography className={classes.errorMessage}>
                {error.message}
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>

            {JSON.stringify(error)}
          </Container>
        </div>
      </Slide>
    </Modal>
  );
};

export default Error;
