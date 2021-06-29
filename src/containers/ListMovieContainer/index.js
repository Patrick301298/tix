import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListMovie from "../../components/ListMovie";
import { getMovie } from "../../redux/Movie/movie.action";

const ListMovieContainer = () => {
  const dispatch = useDispatch();

  const { listMovie, error, loading } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  return <ListMovie listMovie={listMovie} loading={loading} error={error} />;
};

export default ListMovieContainer;
