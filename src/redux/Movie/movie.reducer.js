import * as types from "./movie.constants";

const initialState = {
  listMovie: [],
};

const MovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return {
        ...state,
      };
    }
  }
};

export default MovieReducer;
