import React, { useState } from "react";
import useStyles from "./styles.js";
import { Container, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Form from "../Form/Form.js";
import Posts from "../Posts/Posts.js";

const Home = ({ isAuthenticated, posts, isLoading }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
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
      <Posts posts={posts} isLoading={isLoading} />
      <Form formFor="Post" open={open} setOpen={setOpen} />
    </Container>
  );
};

export default Home;
