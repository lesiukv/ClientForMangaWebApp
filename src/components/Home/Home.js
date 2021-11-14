import React, { useState } from "react";
import useStyles from "./styles.js";
import { Container, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Form from "../Form/Form.js";
import Posts from "../Posts/Posts.js";
import { useSelector } from "react-redux";

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const { isAuthenticated } = useSelector((state) => state.auth);
  const formId = "form-menu";
  const handleFormOpen = () => setOpen(true);

  return (
    <Container>
      {isAuthenticated && (
        <Button
          className={classes.button}
          aria-haspopup="true"
          onClick={handleFormOpen}
          aria-controls={formId}
        >
          <AddIcon
            color="secondary"
            fontSize="large"
            className={classes.addIcon}
          />
        </Button>
      )}

      <Posts />
      <Form formFor="Post" open={open} setOpen={setOpen} />
    </Container>
  );
};

export default Home;
