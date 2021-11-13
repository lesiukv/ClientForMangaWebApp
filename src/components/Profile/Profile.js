import React, { useEffect } from "react";
import useStyles from "./styles";
import { Container, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getProfileData } from "../../actions/profiles";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { profileId } = useParams();
  const classes = useStyles();
  const {
    user: { username, userId },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileData(profileId));
  }, [profileId, dispatch]);

  const { profileData, isLoading, error } = useSelector(
    (state) => state.profile
  );

  return (
    <>
      <Container></Container>
      <Container></Container>
      <Container></Container>
    </>
  );
};

export default Profile;
