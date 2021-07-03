import * as types from "./movietheater.constants";

const initialState = {
  listLogo: [],
  loading: false,
  error: "",
  listTheater: [],
};

const MovieTheaterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //GET_LOGO_THEATER
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
        listLogo: data,
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
    //GET_MOVIE_THEATER
    case types.GET_MOVIE_THEATER_BY_ID_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_MOVIE_THEATER_BY_ID_SUCCESS: {
      const { data = [] } = payload;
      return {
        ...state,
        loading: false,
        listTheater: data,
      };
    }
    case types.GET_MOVIE_THEATER_BY_ID_FAILURE: {
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
