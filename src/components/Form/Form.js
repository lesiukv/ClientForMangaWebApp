import React, { useState, useEffect, useCallback, useRef } from "react";
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
  Box,
  IconButton,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";
import { uploadPage } from "../../actions/pages.js";
import { useDropzone } from "react-dropzone";

const Form = ({ formFor, open, setOpen, id, post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [progressInfos, setProgressInfos] = useState({ val: [] });
  const progressInfosRef = useRef(null);

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

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

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

  const handleFormClose = () => setOpen(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((page) => {
        const fileExtension = (page.name.match(/\.+[\S]+$/) || [])[0];
        page.dest = `page${Date.now()}${fileExtension}`;
      });
      setSelectedFiles(acceptedFiles);
      setProgressInfos({ val: [] });
      setPostData({ ...postData, pages: acceptedFiles });
    },
    [postData]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const upload = async (idx, file) => {
    let _progressInfos = [...progressInfosRef.current.val];
    try {
      await uploadPage(file, (event) => {
        _progressInfos[idx].percentage = Math.round(
          (100 * event.loaded) / event.total
        );
        setProgressInfos({ val: _progressInfos });
      });
    } catch (e) {
      _progressInfos[idx].percentage = 0;
      setProgressInfos({ val: _progressInfos });
      console.log(e);
    }
  };

  const uploadFiles = () => {
    const files = Array.from(selectedFiles);

    let _progressInfos = files.map((file) => ({
      percentage: 0,
      fileName: file.name,
    }));

    progressInfosRef.current = {
      val: _progressInfos,
    };

    const uploadPromises = files.map((file, i) => upload(i, file));

    Promise.all(uploadPromises).then(() => dispatch(createPost(postData)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updatePost(id, postData));
    } else {
      uploadFiles();
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
              <CloseIcon color="secondary" />
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
            <Box sx={{ width: "100%", margin: '15px 0' }}>
              {progressInfos &&
                progressInfos.val.length > 0 &&
                progressInfos.val.map((progressInfo, index) => (
                  <div className={classes.uploading} key={index}>
                    <Typography variant='body2'>{progressInfo.fileName}</Typography>
                    <Typography variant='body2'>{progressInfo.percentage}%</Typography>
                  </div>
                ))}
            </Box>
          </form>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default Form;
