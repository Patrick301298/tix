import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieTheaterByID } from "../../../redux/MovieTheater/movietheater.action";
import InfoTheater from "../../../components/ListMovieTheater/InfoTheater";
const ListTheaterContainer = () => {
  const dispatch = useDispatch();
  const { listTheater, listLogo } = useSelector((state) => state.movieTheater);
  useEffect(() => {
    if (listLogo.length > 0) {
      dispatch(getMovieTheaterByID(listLogo[0].maHeThongRap));
    }
  }, [dispatch, listLogo]);
  return <InfoTheater listTheater={listTheater} />;
};

export default ListTheaterContainer;
