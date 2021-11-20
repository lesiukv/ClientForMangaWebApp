import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: "15px !important",
    backgroundColor: "#1f1f1f",
    borderRadius: "9px !important",
    marginTop: "20px",
  },
  media: {
    backgroundColor: "#4b4b4b",
    backgroundBlendMode: "normal",
    maxHeight: "500px",
    objectPosition: "50% 50%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    backgroundColor: "#4b4b4b",
    borderRadius: "9px !important",
  },
  title: {
    padding: 0,
    color: "#d9d9d9",
  },
  favoritesButton: {
    position: "absolute",
    right: 0,
  },
});
