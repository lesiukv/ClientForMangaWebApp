import React, { useState, useEffect, useCallback } from "react";
import useStyles from "./styles.js";
import CloseIcon from "@material-ui/icons/Close";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Modal,
  Fade,
  Backdrop,
  LinearProgress,
  Box,
  IconButton
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";
import { uploadPages } from "../../actions/pages.js";
import { useDropzone } from "react-dropzone";

const Form = ({ formFor, open, setOpen, id, post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    title: "",
    parodie: "",
    tags: [],
    artists: [],
    group: "",
    language: "",
    category: "",
    characters: [],
    pages: [],
  });

  const clear = () => {
    setPostData({
      title: "",
      parodie: "",
      tags: "",
      artists: "",
      group: "",
      language: "",
      category: "",
      characters: "",
      pages: "",
    });
  };

  const [progress, setProgress] = useState();

  console.log(progress);

  const handleFormClose = () => setOpen(false);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setPostData({ ...postData, pages: acceptedFiles });
    },
    [postData]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updatePost(id, postData));
    } else {
      postData.pages.forEach((page) => {
        const fileExtension = (page.name.match(/\.+[\S]+$/) || [])[0];
        page.dest = `page${Date.now()}${fileExtension}`;
      });
      dispatch(createPost(postData));
      dispatch(uploadPages(postData.pages, setProgress));
    }
    clear();
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
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <IconButton
              onClick={handleFormClose}
              className={classes.closeButton}
            >
              <CloseIcon color="secondary"/>
            </IconButton>
            <Typography variant="h6" className={classes.formElement}>
              {formFor} Manga
            </Typography>
            <TextField
              className={classes.formElement}
              name="title"
              label="Title"
              variant="outlined"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
              fullWidth
              color="secondary"
            />

            <TextField
              className={classes.formElement}
              name="parodie"
              label="Parodie"
              variant="outlined"
              value={postData.parodie}
              onChange={(e) =>
                setPostData({ ...postData, parodie: e.target.value })
              }
              fullWidth
              color="secondary"
            />

            <TextField
              className={classes.formElement}
              name="tags"
              label="Tags"
              variant="outlined"
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value.split(",") })
              }
              fullWidth
              color="secondary"
            />

            <TextField
              className={classes.formElement}
              name="artists"
              label="Artists"
              variant="outlined"
              value={postData.artists}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  artists: e.target.value.split(","),
                })
              }
              fullWidth
              color="secondary"
            />

            <TextField
              className={classes.formElement}
              name="group"
              label="Group"
              variant="outlined"
              value={postData.group}
              onChange={(e) =>
                setPostData({ ...postData, group: e.target.value })
              }
              fullWidth
              color="secondary"
            />

            <TextField
              className={classes.formElement}
              name="language"
              label="Language"
              variant="outlined"
              value={postData.language}
              onChange={(e) =>
                setPostData({ ...postData, language: e.target.value })
              }
              fullWidth
              color="secondary"
            />

            <TextField
              className={classes.formElement}
              name="category"
              label="Category"
              variant="outlined"
              value={postData.category}
              onChange={(e) =>
                setPostData({ ...postData, category: e.target.value })
              }
              fullWidth
              color="secondary"
            />

            <TextField
              className={classes.formElement}
              name="characters"
              label="Characters"
              variant="outlined"
              value={postData.characters}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  characters: e.target.value.split(","),
                })
              }
              fullWidth
              color="secondary"
            />
            <div {...getRootProps()} className={classes.fileInput}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
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
            <Box sx={{ width: "100%" }}>
              <LinearProgress value={progress} />
            </Box>
          </form>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default Form;
