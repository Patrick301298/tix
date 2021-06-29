import { createStore, applyMiddleware } from "redux";
import combineReducer from "../combineReducers";
import thunk from "redux-thunk";

const configStore = () => {
  const store = createStore(combineReducer, applyMiddleware(thunk));

  return store;
};

export default configStore;
