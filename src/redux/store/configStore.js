import { createStore } from "redux";
import combineReducer from "../combineReducers";

const configStore = () => {
  const store = createStore(
    combineReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configStore;
