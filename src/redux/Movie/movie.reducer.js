import moment from "moment";
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
    //GET_LIST_MOVIE_OLD_DATE
    case types.GET_LIST_MOVIE_OLD_DATE_REQUEST: {
      return {
        ...state,
      };
    }
    case types.GET_LIST_MOVIE_OLD_DATE_SUCCESS: {
      const { data = [] } = payload;

      const dateNow = moment().unix();
      const listNew = data.filter((item) => {
        const dateStarted = moment(item.ngayKhoiChieu).unix();
        return dateStarted <= dateNow;
      });

      return {
        ...state,
        listMovie: listNew,
      };
    }
    case types.GET_LIST_MOVIE_OLD_DATE_FAILURE: {
      const { err } = payload;
      return {
        ...state,
        payload: { err },
      };
    }
    //GET_LIST_MOVIE_FUTURE_DATE
    case types.GET_LIST_MOVIE_FUTURE_DATE_REQUEST: {
      return {
        ...state,
      };
    }
    case types.GET_LIST_MOVIE_FUTURE_DATE_SUCCESS: {
      const { data = [] } = payload;
      const dateNow = moment().unix();
      const listNew = data.filter((item) => {
        const dateFuture = moment(item.ngayKhoiChieu).unix();
        return dateFuture >= dateNow;
      });
      return {
        ...state,
        listMovie: listNew,
      };
    }
    case types.GET_LIST_MOVIE_FUTURE_DATE_FAILURE: {
      const { err } = payload;
      return {
        ...state,
        payload: { err },
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
