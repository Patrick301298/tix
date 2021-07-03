import React from "react";
import _ from "lodash";
import ListInfo from "./ListInfo";
import ItemInfo from "./ItemInfo";
const InfoTheater = ({ listTheater }) => {
  const renderListTheater = () => {
    let xhtml = null;
    if (_.isEmpty(listTheater)) return xhtml;
    xhtml = listTheater.map((item, index) => {
      return <ItemInfo key={index} itemTheater={item} />;
    });
    return xhtml;
  };
  return <ListInfo>{renderListTheater()}</ListInfo>;
};

export default InfoTheater;
