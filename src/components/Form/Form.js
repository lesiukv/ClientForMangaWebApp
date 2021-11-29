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
  ToolTip,
  Tooltip,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";
import { uploadPage } from "../../actions/pages.js";
import { useDropzone } from "react-dropzone";
import { Tag } from "../Subcomponents";
import ErrorIcon from "@material-ui/icons/Error";

const Form = ({ formFor, open, setOpen, id, post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [progressInfos, setProgressInfos] = useState({ val: [] });
  const progressInfosRef = useRef(null);

  const detailsObject = {
    title: [],
    parodie: [],
    tags: [],
    artists: [],
    group: [],
    language: [],
    category: [],
    characters: [],
    pages: [],
  };
  const [postData, setPostData] = useState(detailsObject);
  const [postDataSend, setPostDataSend] = useState(detailsObject);

  const clearInputField = (property) => {
    setPostData({ ...postData, [property]: "" });
  };
  const removeTag = (property, value) => {
    setPostDataSend({
      ...postDataSend,
      [property]: postDataSend[property].filter((element) => element !== value),
    });
  };
  const handleEnter = (e, property) => {
    if (
      e.target.value &&
      e.key === " " &&
      !e.shiftKey &&
      postDataSend[property].indexOf(e.target.value) === -1
    ) {
      setPostDataSend({
        ...postDataSend,
        [property]: [...postDataSend[property], e.target.value],
      });
      clearInputField(property);
    }
  };

  useEffect(() => {
    if (post) setPostDataSend(post);
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
        page.dest = `${Date.now()}${page.name}`;
      });
      setSelectedFiles(acceptedFiles);
      setProgressInfos({ val: [] });
      setPostDataSend({ ...postDataSend, pages: acceptedFiles });
    },
    [postDataSend]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const upload = (file, index) => {
    let _progressInfos = [...progressInfosRef.current.val];
    try {
      uploadPage(file, (event) => {
        _progressInfos[index].percentage = Math.round(
          (100 * event.loaded) / event.total
        );
        setProgressInfos({ val: _progressInfos });
      });
    } catch (e) {
      _progressInfos[index].percentage = 0;
      setProgressInfos({ val: _progressInfos });
      console.log(e);
    }
  };

  const uploadPost = async () => {
    const files = Array.from(selectedFiles);
    let _progressInfos = files.map((file) => ({
      percentage: 0,
      fileName: file.name,
    }));
    progressInfosRef.current = {
      val: _progressInfos,
    };
    const uploadPromises = await files.map((file, index) => upload(file, index));
    Promise.all(uploadPromises).then(() => dispatch(createPost(postDataSend)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updatePost(id, postDataSend));
    } else {
      uploadPost();
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
            <div className={classes.formHeader}>
              <Typography variant="h6" className={classes.formElement}>
                {formFor} Manga
              </Typography>
              <Tooltip
                placement="bottom-end"
                arrow
                title={
                  <p>
                    To use space button press{" "}
                    <kbd className={classes.kbd}>Shift</kbd> +{" "}
                    <kbd className={classes.kbd}>Space</kbd>
                  </p>
                }
              >
                <ErrorIcon color="secondary" />
              </Tooltip>
            </div>
            <div className={classes.tags}>
              {postDataSend?.title.map((value, index) => (
                <Tag
                  value={value}
                  key={index}
                  property="title"
                  removeTag={removeTag}
                />
              ))}
            </div>
            <TextField
              className={classes.formElement}
              name="title"
              label="Title"
              variant="outlined"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
              onKeyDown={(e) => handleEnter(e, "title")}
              fullWidth
              color="secondary"
            />
            <div className={classes.tags}>
              {postDataSend?.parodie.map((value, index) => (
                <Tag
                  value={value}
                  key={index}
                  property="parodie"
                  removeTag={removeTag}
                />
              ))}
            </div>
            <TextField
              className={classes.formElement}
              name="parodie"
              label="Parodie"
              variant="outlined"
              value={postData.parodie}
              onChange={(e) =>
                setPostData({ ...postData, parodie: e.target.value })
              }
              onKeyDown={(e) => handleEnter(e, "parodie")}
              fullWidth
              color="secondary"
            />
            <div className={classes.tags}>
              {postDataSend?.tags.map((value, index) => (
                <Tag
                  value={value}
                  key={index}
                  property="tags"
                  removeTag={removeTag}
                />
              ))}
            </div>
            <TextField
              className={classes.formElement}
              name="tags"
              label="Tags"
              variant="outlined"
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value })
              }
              onKeyDown={(e) => handleEnter(e, "tags")}
              fullWidth
              color="secondary"
            />
            <div className={classes.tags}>
              {postDataSend?.artists.map((value, index) => (
                <Tag
                  value={value}
                  key={index}
                  property="artists"
                  removeTag={removeTag}
                />
              ))}
            </div>
            <TextField
              className={classes.formElement}
              name="artists"
              label="Artists"
              variant="outlined"
              value={postData.artists}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  artists: e.target.value,
                })
              }
              onKeyDown={(e) => handleEnter(e, "artists")}
              fullWidth
              color="secondary"
            />
            <div className={classes.tags}>
              {postDataSend?.group.map((value, index) => (
                <Tag
                  value={value}
                  key={index}
                  property="group"
                  removeTag={removeTag}
                />
              ))}
            </div>
            <TextField
              className={classes.formElement}
              name="group"
              label="Group"
              variant="outlined"
              value={postData.group}
              onChange={(e) =>
                setPostData({ ...postData, group: e.target.value })
              }
              onKeyDown={(e) => handleEnter(e, "group")}
              fullWidth
              color="secondary"
            />
            <div className={classes.tags}>
              {postDataSend?.language.map((value, index) => (
                <Tag
                  value={value}
                  key={index}
                  property="language"
                  removeTag={removeTag}
                />
              ))}
            </div>
            <TextField
              className={classes.formElement}
              name="language"
              label="Language"
              variant="outlined"
              value={postData.language}
              onChange={(e) =>
                setPostData({ ...postData, language: e.target.value })
              }
              onKeyDown={(e) => handleEnter(e, "language")}
              fullWidth
              color="secondary"
            />
            <div className={classes.tags}>
              {postDataSend?.category.map((value, index) => (
                <Tag
                  value={value}
                  key={index}
                  property="category"
                  removeTag={removeTag}
                />
              ))}
            </div>
            <TextField
              className={classes.formElement}
              name="category"
              label="Category"
              variant="outlined"
              value={postData.category}
              onChange={(e) =>
                setPostData({ ...postData, category: e.target.value })
              }
              onKeyDown={(e) => handleEnter(e, "category")}
              fullWidth
              color="secondary"
            />
            <div className={classes.tags}>
              {postDataSend?.characters.map((value, index) => (
                <Tag
                  value={value}
                  key={index}
                  property="characters"
                  removeTag={removeTag}
                />
              ))}
            </div>
            <TextField
              className={classes.formElement}
              name="characters"
              label="Characters"
              variant="outlined"
              value={postData.characters}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  characters: e.target.value,
                })
              }
              onKeyDown={(e) => handleEnter(e, "characters")}
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
            <Box sx={{ width: "100%", margin: "15px 0" }}>
              {progressInfos?.val.map((progressInfo, index) => (
                <div className={classes.uploading} key={index}>
                  <Typography variant="body2">
                    {progressInfo.fileName}
                  </Typography>
                  <Typography variant="body2">
                    {progressInfo.percentage}%
                  </Typography>
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
