import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieTheater } from "../../../redux/MovieTheater/movietheater.action";
import LogoTheater from "../../../components/ListMovieTheater/LogoTheater";
const LogoTheaterContainer = () => {
  const dispatch = useDispatch();
  const { listLogo } = useSelector((state) => state.movieTheater);

  useEffect(() => {
    dispatch(getMovieTheater());
  }, [dispatch]);
  return <LogoTheater listLogo={listLogo} />;
};

export default LogoTheaterContainer;
