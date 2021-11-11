import * as actionTypes from "../actions/actionTypes";

const profiles = (profile = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_DATA:
      return action.payload;
    default:
      return profile;
  }
};

export default profiles;
