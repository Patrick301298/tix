import * as types from "./movie.constants";

const initialState = {
  listMovie: [],
  loading: false,
  error: "",
};

const MovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_LIST_MOVIE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.GET_LIST_MOVIE_SUCCESS: {
      const { data = [] } = payload;

      return {
        ...state,
        loading: false,
        listMovie: data,
      };
    }

    case types.GET_LIST_MOVIE_FAILURE: {
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

export default MovieReducer;
