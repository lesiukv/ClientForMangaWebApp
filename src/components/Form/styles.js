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
    margin: "auto",
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

    overflowY: "scroll",
  },
  closeButton: {
    marginRight: "auto",
  },
  uploading: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  tags: {
    margin: theme.spacing(1),
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  formHeader: {
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  kbd: {
    backgroundColor: "#eee",
    borderRadius: "3px",
    border: "1px solid #b4b4b4",
    boxShadow:
      "0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset",
    color: "#333",
    display: "inline-block",
    fontSize: ".85em",
    fontweight: "700",
    lineHeight: "1",
    padding: "2px 4px",
    whiteSpace: "nowrap",
  },
}));
