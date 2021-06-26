import * as types from "./movie.constants";
import { STATUS_CODES } from "../../constants/api";
import { apiGetListMovie } from "../../api/Movie/listMovie.api";

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
  const data2 = await apiGetListMovie();

  console.log(data2);
  const { status, data } = await apiGetListMovie();

  if (status === STATUS_CODES.SUCCESS) {
    dispatch(getMovieSuccess(data));
  } else {
    dispatch(getMovieFailure("Lỗi lấy dữ liệu"));
  }
};
