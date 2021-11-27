import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  span: {
    backgroundColor: "#4b4b4b",
    borderRadius: "6px",
    padding: "4px",
  },
  number: {
    color: "#ed2553",
  },
  tagText: {
    color: "#d9d9d9",
  },
  tag: {
    margin: '6px 2px 6px 2px',
    flexWrap: 'nowrap'
  }
}));

export default useStyles;
