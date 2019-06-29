import * as constants from "./constants";

const initialSearchState = {
  searchField: ""
};

export const searchRobots = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case constants.CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialRobotssReducer = {
  robots: [],
  error: ""
};

export const updateRobotsReducer = (state = initialRobotssReducer, action) => {
  switch (action.type) {
    case constants.REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload
      });
    case constants.REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        robots: action.payload
      });
    default:
      return state;
  }
};
