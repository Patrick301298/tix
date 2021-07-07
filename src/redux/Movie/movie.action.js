import * as types from "./movie.constants";
import { STATUS_CODES } from "../../constants/api";
import {
  apiGetInfoMovieByID,
  apiGetListMovie,
} from "../../api/Movie/listMovie.api";

export const getMovieRequest = () => {
  return {
    type: types.GET_LIST_MOVIE_REQUEST,
  };
};

export const getMovieSuccess = (data) => {
  return {
    type: types.GET_LIST_MOVIE_SUCCESS,
    payload: { data },
  };
};

export const getMovieFailure = (err) => {
  return {
    type: types.GET_LIST_MOVIE_FAILURE,
    payload: { err },
  };
};

export const getMovie = () => async (dispatch) => {
  dispatch(getMovieRequest());
  const { status, data } = await apiGetListMovie();

  if (status === STATUS_CODES.SUCCESS) {
    dispatch(getMovieSuccess(data));
  } else {
    dispatch(getMovieFailure("Lỗi lấy dữ liệu"));
  }
};

//GET_LIST_MOVIE_OLD_DATE

export const getListMovieOldDateRequest = () => {
  return {
    type: types.GET_LIST_MOVIE_OLD_DATE_REQUEST,
  };
};
export const getListMovieOldDateSuccess = (data) => {
  return {
    type: types.GET_LIST_MOVIE_OLD_DATE_SUCCESS,
    payload: { data },
  };
};
export const getListMovieOldDateFailure = (err) => {
  return {
    type: types.GET_LIST_MOVIE_OLD_DATE_FAILURE,
    payload: err,
  };
};
export const getMovieOldDate = () => async (dispatch) => {
  dispatch(getListMovieOldDateRequest());
  const { status, data } = await apiGetListMovie();

  if (status === STATUS_CODES.SUCCESS) {
    dispatch(getListMovieOldDateSuccess(data));
  } else {
    dispatch(getListMovieOldDateFailure("Failure!"));
  }
};

//GET_LIST_MOVIE_FUTURE_DATE
export const getMovieFutureDateRequest = () => {
  return {
    type: types.GET_LIST_MOVIE_FUTURE_DATE_REQUEST,
  };
};
export const getMovieFutureDateSuccess = (data) => {
  return {
    type: types.GET_LIST_MOVIE_FUTURE_DATE_SUCCESS,
    payload: { data },
  };
};
export const getMovieFutureDateFailure = (err) => {
  return {
    type: types.GET_LIST_MOVIE_FUTURE_DATE_FAILURE,
    payload: { err },
  };
};

export const getMovieFutureDate = () => async (dispatch) => {
  dispatch(getMovieFutureDateRequest());
  const { status, data } = await apiGetListMovie();

  if (status === STATUS_CODES.SUCCESS) {
    dispatch(getMovieFutureDateSuccess(data));
  } else {
    dispatch(getMovieFutureDateFailure("Failure!"));
  }
};

//GET_INFO_MOVIE_BY_ID

export const getInfoMovieByIDRequest = () => {
  return {
    type: types.GET_INFO_MOVIE_BY_ID_REQUEST,
  };
};

export const getInfoMovieByIDSuccess = (data) => {
  return {
    type: types.GET_INFO_MOVIE_BY_ID_SUCCESS,
    payload: { data },
  };
};

export const getInfoMovieByIDFailure = (err) => {
  return {
    type: types.GET_INFO_MOVIE_BY_ID_FAILURE,
    payload: { err },
  };
};

export const getInfoMovieByID = (ID) => async (dispatch) => {
  dispatch(getInfoMovieByIDRequest());

  const { status, data } = await apiGetInfoMovieByID(ID);
  console.log("Data", data);

  if (status === STATUS_CODES.SUCCESS) {
    dispatch(getInfoMovieByIDSuccess(data));
  } else {
    dispatch(getInfoMovieByIDFailure("Failed"));
  }
};
