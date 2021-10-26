import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  comments: {
    padding: '20px 0px !important'
  },
  text: {
    color: "#d9d9d9",
    marginLeft: "15px",
  },
  delete: {
    color: "#ed2553",
  },
  comment: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0px",
    alignItems: "start",
    padding: "10px 0px"
  },
  head: {
    display: "flex",
    flexWrap: "nowrap",
  },
  account: {
    display: "flex",
    flexWrap: "nowrap",
  },
  formElement: {
    margin: '5px 0px'
  },
  input: {
    borderRadius: "9px",
    backgroundColor: "#4b4b4b !important",
    textAlign: "start"
  },
  label: {
    color: "#d9d9d9",
    backgroundColor: "#d9d9d9"
  }
}));
