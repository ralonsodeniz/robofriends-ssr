import * as constants from "./constants";
import apiCall from "../api/api";

export const setSearchField = text => {
  return {
    type: constants.CHANGE_SEARCHFIELD,
    payload: text
  };
};

export const getRobots = urlToFetch => dispatch => {
  return apiCall(urlToFetch)
    .then(data =>
      dispatch({ type: constants.REQUEST_ROBOTS_SUCCESS, payload: data })
    )
    .catch(error =>
      dispatch({ type: constants.REQUEST_ROBOTS_FAILED, payload: error })
    );
};
