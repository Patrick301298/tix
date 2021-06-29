import React from "react";
const Item = ({ itemMovieTheater }) => {
  return (
    <li className="liPCinema">
      <a href="#Logo">
        <img src={itemMovieTheater.logo} alt="" />
      </a>
    </li>
  );
};

export default Item;
