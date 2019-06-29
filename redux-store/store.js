import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { searchRobots, updateRobotsReducer } from "./reducers";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const logger = createLogger();
const combinedStore = combineReducers({
  searchRobots,
  updateRobotsReducer
});

export function initializeStore(initialState) {
  return createStore(
    combinedStore,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
  );
}
