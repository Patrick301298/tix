import React from "react";
import _ from "lodash";

import "./style.scss";

import List from "./List";
import Item from "./Item";

const ListMovie = ({ listMovie, loading, error }) => {
  const renderMovie = () => {
    let xhtml = null;
    if (_.isEmpty(listMovie)) return xhtml;
    xhtml = listMovie.slice(0, 16).map((item) => {
      return <Item itemMovie={item} />;
    });
    return xhtml;
  };
  return (
    <div className="row grayBack" id="filmblock">
      <div className="col-xs-12 block mainMaxWidth" id="homeMovies">
        <ul className="nav nav-tabs navCenter">
          <li style={{ marginRight: 5 }} className="active">
            <a href="#abc">Đang Chiếu</a>
          </li>
          <li style={{ marginLeft: 5 }}>
            <a href="#abc">Sắp chiếu</a>
          </li>
        </ul>
        <List>{renderMovie()}</List>
      </div>
    </div>
  );
};

export default ListMovie;

ListMovie.propTypes = {};
