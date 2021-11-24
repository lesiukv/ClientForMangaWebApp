import React, { useEffect } from "react";
import useStyles from "./styles";
import { Container, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getProfileData } from "../../actions/profiles";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading"
import Error from "../Error/Error"

const Profile = ({ dispatch }) => {
  const { profileId } = useParams();
  const classes = useStyles();
  const {
    user: { username, userId },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProfileData(profileId));
  }, [profileId, dispatch]);

  const { profileData, isLoading, error } = useSelector(
    (state) => state.profile
  );

  if (isLoading) return <Loading/>

  return (
    <>
      <Container></Container>
      <Container></Container>
      <Container></Container>
      {error && (<Error error={error}/>)}
    </>
  );
};

export default Profile;
