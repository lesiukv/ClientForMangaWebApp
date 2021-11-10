import React, { useState } from "react";
import useStyles from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Paper,
  TextField,
  IconButton,
} from "@material-ui/core";
import { loginUser, registerUser } from "../../actions/auth";
import { useDispatch } from "react-redux";

const RegisterForm = ({ open, setOpen, purpose }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleFormClose = () => {
    setOpen(false);
  };
  const clear = () => {
    setUserData({
      username: "",
      password: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    purpose ? dispatch(registerUser(userData)) : dispatch(loginUser(userData));
    clear();
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleFormClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      className={classes.modal}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          <form
            autoComplete="off"
            id="form"
            noValidate
            onSubmit={handleSubmit}
            className={`${classes.root} ${classes.form}`}
          >
            <IconButton
              onClick={handleFormClose}
              className={classes.closeButton}
              color="secondary"
            >
              <CloseIcon color="secondary" />
            </IconButton>
            <Typography variant="h6" className={classes.formElement}>
              {purpose ? "Register new user" : "Login"}
            </Typography>
            <TextField
              value={userData.username}
              className={classes.formElement}
              name="username"
              label="Username"
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
            <TextField
              value={userData.password}
              className={classes.formElement}
              name="password"
              label="Password"
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              type="submit"
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
              fullWidth
            >
              Clear
            </Button>
          </form>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default RegisterForm;
