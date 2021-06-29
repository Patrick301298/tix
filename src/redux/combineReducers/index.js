import { combineReducers } from "redux";
import MovieReducer from "../Movie/movie.reducer";
import MovieTheaterReducer from "../MovieTheater/movietheater.reducer";

const combineReducer = combineReducers({
  movie: MovieReducer,
  movieTheater: MovieTheaterReducer,
});

export default combineReducer;
