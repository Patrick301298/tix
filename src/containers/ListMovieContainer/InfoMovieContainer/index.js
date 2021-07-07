import React from "react";
import { useSelector } from "react-redux";
import InfoItem from "../../../components/ListMovie/InfoItem";

const InfoMovieContainer = () => {
  const { inFoMovie } = useSelector((state) => state.movie);
  return <InfoItem inFoMovie={inFoMovie} />;
};

export default InfoMovieContainer;
