import React from "react";

const List = (props) => {
  return <div className="row">{props.children}</div>;
};

export default List;

List.propTypes = {};
