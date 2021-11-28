import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import Form from "../Form/Form.js";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";
import { getPostDetails } from "../../actions/posts";
import moment from "moment";
import Page from "./Page/Page";
import Comments from "../Comments/Comments";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { Tag, ActionsButton } from "../Subcomponents";

const PostDetails = ({ isAuthenticated, user, dispatch }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { postId } = useParams();
  const history = useHistory();
  let match = useRouteMatch();

  useEffect(() => {
    dispatch(getPostDetails(postId));
  }, [dispatch, postId]);

  const {
    postdetailsArr: [details, amount],
    isLoading,
    error,
  } = useSelector((state) => state.postdetails);

  const handleFormOpen = () => setOpen(true);

  if (isLoading) return <Loading />;

  return (
    <>
      <Switch>
        <Route path={`${match.path}/:pageId`}>
          <Page post={details} />
        </Route>
        <Route path={match.path}>
          {!error && (
            <>
              <Container className={classes.container}>
                <Grid
                  key={postId}
                  className={classes.detailsContainer}
                  container
                  alignItems="stretch"
                >
                  <img
                    className={classes.titleImage}
                    alt={details?.pages[0]?.name}
                    src={`http://localhost:5000/uploads/${details?.pages[0]?.dest}`}
                  />
                  <Grid className={classes.details} item xs={12} sm={5} md={7}>
                    {details.title?.map((title, index) => (
                      <Typography
                        key={index}
                        className={classes.title}
                        variant="h4"
                      >
                        {title}
                      </Typography>
                    ))}
                    <div className={classes.subDetails}>
                      <Typography>Parodie:</Typography>
                      {details.parodie.map((parodie, index) => (
                        <Tag
                          key={index}
                          value={parodie}
                          number={amount["parodie"][index]}
                        />
                      ))}
                    </div>
                    <div className={classes.subDetails}>
                      <Typography>Language:</Typography>
                      {details.language?.map((language, index) => (
                        <Tag
                          key={index}
                          value={language}
                          number={amount["language"][index]}
                        />
                      ))}
                    </div>
                    <div className={classes.subDetails}>
                      <Typography>Group:</Typography>
                      {details.group?.map((group, index) => (
                        <Tag
                          key={index}
                          value={group}
                          number={amount["group"][index]}
                        />
                      ))}
                    </div>
                    <div className={classes.subDetails}>
                      <Typography>Category:</Typography>
                      {details.category?.map((category, index) => (
                        <Tag
                          key={index}
                          value={category}
                          number={amount["category"][index]}
                        />
                      ))}
                    </div>
                    <div className={classes.subDetails}>
                      <Typography>Tags:</Typography>&nbsp;
                      {details.tags.map((tag, index) => (
                        <Tag
                          key={index}
                          value={tag}
                          number={amount["tags"][index]}
                        />
                      ))}
                    </div>
                    <div className={classes.subDetails}>
                      <Typography>Artists:&nbsp;</Typography>
                      {details.artists.map((artist, index) => (
                        <Tag
                          key={index}
                          value={artist}
                          number={amount["artists"][index]}
                        />
                      ))}
                    </div>
                    <div className={classes.subDetails}>
                      <Typography>Characters:&nbsp;</Typography>
                      {details.characters.map((character, index) => (
                        <Tag
                          key={index}
                          value={character}
                          number={amount["characters"][index]}
                        />
                      ))}
                    </div>
                    <div className={classes.subDetails}>
                      <Typography>Pages:</Typography>&nbsp;
                      <Tag value={details.pages.length} />
                    </div>
                    <div className={classes.subDetails}>
                      <Typography>Uploaded:</Typography>&nbsp;
                      {moment(details.createdAt).startOf("day").fromNow()}
                    </div>
                  </Grid>
                  {isAuthenticated && (
                    <ActionsButton
                      postId={postId}
                      dispatch={dispatch}
                      updateElement={handleFormOpen}
                      history={history}
                    />
                  )}
                </Grid>
              </Container>
              <Container className={classes.container}>
                <Grid
                  container
                  alignItems="stretch"
                  className={classes.pagesContainer}
                >
                  {details.pages.map((page, index) => (
                    <Box className={classes.pageBox} xs={12} sm={4} key={index}>
                      <Link to={`${match.url}/${index}`}>
                        <img
                          className={classes.page}
                          alt={page.name}
                          src={`http://localhost:5000/uploads/${page.dest}`}
                        />
                      </Link>
                    </Box>
                  ))}
                </Grid>
              </Container>{" "}
            </>
          )}
          <Container
            sx={{
              marginTop: "50px !important",
              justifyContetn: "space-between",
            }}
            className={classes.container}
          >
            <Comments
              user={user}
              isAuthenticated={isAuthenticated}
              postId={postId}
            />
          </Container>
          <Form
            formFor="Update"
            id={postId}
            post={details}
            open={open}
            setOpen={setOpen}
          />
        </Route>
      </Switch>
      {error && <Error error={error} />}
    </>
  );
};

export default PostDetails;
