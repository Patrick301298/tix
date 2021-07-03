import React from "react";
import _ from "lodash";
import Item from "./Item";
import List from "./List";
const LogoTheater = ({ listLogo, loading, error }) => {
  const renderLogoTheater = () => {
    let xhtml = null;
    if (_.isEmpty(listLogo)) return xhtml;
    xhtml = listLogo.slice(0, 6).map((item, index) => {
      return <Item key={index} itemLogo={item} />;
    });
    return xhtml;
  };
  return (
    <div>
      <List>{renderLogoTheater()}</List>
    </div>
  );
};

export default LogoTheater;
