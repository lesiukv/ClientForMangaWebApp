import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#ed2553",
    maxWidth: 'auto'
  },
  errorContainer: {
    maxWidth: 'auto',
    overflowWrap: 'break-word',
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  errorMessage: {

  }
}));

export default useStyles;
