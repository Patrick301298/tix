import { combineReducers } from "redux";
import MovieReducer from "../Movie/movie.reducer";

const combineReducer = combineReducers({
  movie: MovieReducer,
});

export default combineReducer;
