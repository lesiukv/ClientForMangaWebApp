import * as api from "../api";
import * as actionTypes from "../actions/actionTypes";

const profileDataFailed = (error) => {
  return { type: actionTypes.GET_PROFILE_DATA_FAILED, error: error };
};

const profileDataLoading = () => {
  return { type: actionTypes.GET_PROFILE_DATA_LOADING };
};

export const getProfileData = (profileId) => async (dispatch) => {
  dispatch(profileDataLoading());
  try {
    const profileData = await api.getProfileData(profileId);
    dispatch({ type: actionTypes.GET_PROFILE_DATA, payload: profileData });
  } catch (error) {
    dispatch(profileDataFailed(error));
  }
};
