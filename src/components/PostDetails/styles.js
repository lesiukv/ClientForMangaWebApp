import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    color: "#d9d9d9",
    marginBottom: "30px",
  },
  container: {
    backgroundColor: "#1f1f1f",
    borderRadius: "9px",
  },
  titleImage: {
    backgroundBlendMode: "normal",
    borderRadius: "9px",
    maxWidth: "30%",
    margin: "20px",
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      margin: "20px 0px"
    },
    alignSelf: "center"
  },
  loading: {
    color: "#d9d9d9",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  },
  detailsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "start",
    margin: "20px 0px"
  },
  details: {
    margin: "20px 0 !important",
  },
  subDetails: {
    display: "flex",
    flexWrap: "wrap",
    margin: "15px 0",
    color: "#d9d9d9 !important",
    alignItems: "baseline",
  },
  moreIcon: {
    color: "#d9d9d9",
    padding: "20px 0",
  },
  iconButton: {
    padding: "0px 10px",
  },
  delete: {
    color: "#ed2553",
  },
  page: {
    maxWidth: '100%',
    borderRadius: '6px'
  },
  pagesContainer: {
    display: "flex",
    justifyContent: "space-evenly", 
    flexWrap: "wrap",
    alignItems: "center",
    padding: '20px',
    [theme.breakpoints.down('xs')]: {
      padding: '5px'
    },
    marginBottom: "20px"
  },
  pageBox: {
    display: 'flex',
    alignItems: 'center',
    width: '19%',
    [theme.breakpoints.down('sm')]: {
      width: '49%',
    },
  },
}))