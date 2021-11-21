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
    maxWidth: "100% !important",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#4b4b4b",
    borderRadius: "9px !important", 
  },
  favoritesButton: {
    position: "absolute",
    right: 0,
  },
  cardTitle: {
    padding: "10px !important",
    color: "#d9d9d9",
  },
});
