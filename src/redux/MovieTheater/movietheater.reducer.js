import * as types from "./movietheater.constants";

const initialState = {
  listMovieTheater: [],
  loading: false,
  error: "",
};

const MovieTheaterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_LIST_MOVIE_THEATER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_LIST_MOVIE_THEATER_SUCCESS: {
      const { data = [] } = payload;
      return {
        ...state,
        loading: false,
        listMovieTheater: data,
      };
    }
    case types.GET_LIST_MOVIE_THEATER_FAILURE: {
      const { err } = payload;
      return {
        ...state,
        loading: false,
        error: err,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default MovieTheaterReducer;
