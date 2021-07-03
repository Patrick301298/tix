import {
  apiGetListMovieTheater,
  apiGetListTheaterByID,
} from "../../api/Movie/listMovie.api";
import { STATUS_CODES } from "../../constants/api";
import * as types from "./movietheater.constants";

export const getMovieTheaterRequest = () => {
  return {
    type: types.GET_LIST_MOVIE_THEATER_REQUEST,
  };
};

export const getMovieTheaterSuccess = (data) => {
  return {
    type: types.GET_LIST_MOVIE_THEATER_SUCCESS,
    payload: { data },
  };
};

export const getMovieTheaterFailure = (err) => {
  return {
    type: types.GET_LIST_MOVIE_THEATER_FAILURE,
    payload: { err },
  };
};
export const getMovieTheater = () => async (dispatch) => {
  dispatch(getMovieTheaterRequest());
  const { status, data } = await apiGetListMovieTheater();
  if (status === STATUS_CODES.SUCCESS) {
    dispatch(getMovieTheaterSuccess(data));
  } else {
    dispatch(getMovieTheaterFailure("Lỗi lấy dữ liệu"));
  }
};
/*GET MOVIE THEATER*/

export const getMovieTheaterByIDRequest = () => {
  return {
    type: types.GET_MOVIE_THEATER_BY_ID_REQUEST,
  };
};

export const getMovieTheaterByIDSuccess = (data) => {
  return {
    type: types.GET_MOVIE_THEATER_BY_ID_SUCCESS,
    payload: { data },
  };
};

export const getMovieTheaterByIDFailure = (err) => {
  return {
    type: types.GET_MOVIE_THEATER_BY_ID_FAILURE,
    payload: { err },
  };
};

export const getMovieTheaterByID = (ID) => async (dispatch) => {
  dispatch(getMovieTheaterByIDRequest());
  const { status, data } = await apiGetListTheaterByID(ID);

  if (status === STATUS_CODES.SUCCESS) {
    dispatch(getMovieTheaterByIDSuccess(data));
  } else {
    dispatch(getMovieTheaterByIDFailure("Lỗi lấy dữ liệu"));
  }
};
