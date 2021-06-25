import * as types from "./movie.constants";

export const getMovie = () => {
  return {
    type: types.GET_DATA,
  };
};
