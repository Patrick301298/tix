import React from "react";
import Logo from "../../assets/Image/logo.png";
const Item = ({ itemMovieTheater }) => {
  console.log(itemMovieTheater);
  return (
    <li className="liPCinema">
      <a href="#Logo">
        <img src={itemMovieTheater.logo} alt="" />
      </a>
    </li>
  );
};

export default Item;
