import React from "react";
import _ from "lodash";

import List from "./List";
import Item from "./Item";

const ListMovie = ({ listMovie, loading, error }) => {
  const renderMovie = () => {
    let xhtml = null;

    if (_.isEmpty(listMovie)) return xhtml;

    xhtml = listMovie.map((item) => {
      return <Item itemMovie={item} />;
    });

    return xhtml;
  };

  return <List>{renderMovie()}</List>;
};

export default ListMovie;

ListMovie.propTypes = {};
