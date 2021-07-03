import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListMovieTheater from "../../components/ListMovieTheater";
import { getMovieTheater } from "../../redux/MovieTheater/movietheater.action";

const ListMovieTheaterContainer = () => {
  const dispatch = useDispatch();

  const { listLogo, error, loading } = useSelector(
    (state) => state.movieTheater
  );

  useEffect(() => {
    dispatch(getMovieTheater());
  }, [dispatch]);
  return (
    <ListMovieTheater listLogo={listLogo} loading={loading} error={error} />
  );
};

export default ListMovieTheaterContainer;
