import { apiGetListMovieTheater } from "../../api/Movie/listMovie.api";
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
    dispatch(getMovieTheaterSuccess("Lỗi lấy dữ liệu"));
  }
};
