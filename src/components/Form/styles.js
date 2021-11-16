import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#d9d9d9",
    margin: "auto"
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "400px",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
    cursor: "pointer !important",
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 20,
  },
  formElement: {
    margin: theme.spacing(1),
  },
  modal: {
    display: "flex",

    justifyContent: "center",

    overflowY:'scroll',
  },
  closeButton: {
    marginRight: "auto"
  },
  uploading: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  }
}));
