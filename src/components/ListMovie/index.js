import React from "react";
import _ from "lodash";

import { useDispatch } from "react-redux";

import "./style.scss";

import List from "./List";
import Item from "./Item";
import {
  getMovieFutureDate,
  getMovieOldDate,
} from "../../redux/Movie/movie.action";

const ListMovie = ({ listMovie, loading, error }) => {
  const dispatch = useDispatch();
  const renderMovie = () => {
    let xhtml = null;
    if (_.isEmpty(listMovie)) return xhtml;
    xhtml = listMovie.slice(0, 32).map((item, index) => {
      return <Item key={index} itemMovie={item} />;
    });
    return xhtml;
  };
  const handleChangeDC = () => {
    dispatch(getMovieOldDate());
  };
  const handleChangeSC = () => {
    dispatch(getMovieFutureDate());
  };
  return (
    <div className="row grayBack" id="filmblock">
      <div className="col-xs-12 block mainMaxWidth" id="homeMovies">
        <ul className="nav nav-tabs navCenter">
          <li
            onClick={handleChangeDC}
            style={{ marginRight: 5 }}
            className="active"
          >
            <a href="#DangChieu">Đang Chiếu</a>
          </li>
          <li onClick={handleChangeSC} style={{ marginLeft: 5 }}>
            <a href="#SapChieu">Sắp chiếu</a>
          </li>
        </ul>
        <List>{renderMovie()}</List>
      </div>
    </div>
  );
};

export default ListMovie;

ListMovie.propTypes = {};
