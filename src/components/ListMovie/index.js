import React, { useEffect, useState } from "react";
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
  const [activeDC, setActiveDC] = useState(false);

  const [activeSC, setActiveSC] = useState(false);

  useEffect(() => {
    setActiveDC(true);
  }, []);

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
    setActiveDC(true);
    setActiveSC(false);
  };
  const handleChangeSC = () => {
    dispatch(getMovieFutureDate());
    setActiveSC(true);
    setActiveDC(false);
  };

  return (
    <div className="row grayBack" id="filmblock">
      <div className="col-xs-12 block mainMaxWidth" id="homeMovies">
        <ul className="nav nav-tabs navCenter">
          <li
            onClick={handleChangeDC}
            style={{ marginRight: 5 }}
            className={activeDC ? "active" : ""}
          >
            <a href="#DangChieu">Đang Chiếu</a>
          </li>
          <li
            onClick={handleChangeSC}
            style={{ marginLeft: 5 }}
            className={activeSC ? "active" : ""}
          >
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
