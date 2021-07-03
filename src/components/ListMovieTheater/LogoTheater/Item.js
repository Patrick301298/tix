import React from "react";
import { useDispatch } from "react-redux";
import { getMovieTheaterByID } from "../../../redux/MovieTheater/movietheater.action";

const Item = ({ itemLogo }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(getMovieTheaterByID(itemLogo.maHeThongRap));
    e.preventDefault();
  };
  return (
    <li onClick={handleClick} className="liPCinema">
      <a href="#Logo">
        <img src={itemLogo.logo} alt="" />
      </a>
    </li>
  );
};

export default Item;
