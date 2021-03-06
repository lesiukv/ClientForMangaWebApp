import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  pageContainer: {
    display: "flex",
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  pageImage: {
    maxWidth: "90%",
  },
  pageControl: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#4b4b4b",
    width: "inherit",
  },
  buttonControl: {
    color: "#d9d9d9",
  },
});
