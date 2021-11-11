import * as api from "../api";
import * as actionTypes from "../actions/actionTypes";

export const getProfileData = (profileId) => async (dispatch) => {
  try {
    const profileData = await api.getProfileData(profileId);
    dispatch({ type: actionTypes.GET_PROFILE_DATA, payload: profileData });
  } catch (error) {
    console.log(error);
  }
};
