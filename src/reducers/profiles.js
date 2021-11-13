import { SignalCellularNullOutlined } from "@material-ui/icons";
import * as actionTypes from "../actions/actionTypes";

const profiles = (
  profile = {
    isLoading: true,
    error: null,
    profileData: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_DATA:
      return { ...profile, isLoading: false, profileData: action.payload };
    case actionTypes.GET_PROFILE_DATA_FAILED:
      return { ...profile, isLoading: false, error: action.error };
    case actionTypes.GET_PROFILE_DATA_LOADING:
      return { ...profile, isLoading: true };
    default:
      return profile;
  }
};

export default profiles;
