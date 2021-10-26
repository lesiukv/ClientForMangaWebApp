import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
  },
  head: {
    display: "flex",
    flexWrap: "nowrap",
  },
  account: {
    display: "flex",
    flexWrap: "nowrap",
  },
}));
