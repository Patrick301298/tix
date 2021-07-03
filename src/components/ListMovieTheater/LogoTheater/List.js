import React from "react";

const List = (props) => {
  return (
    <ul className="nav nav-tabs listPCinemas accordion" id="parentListPCinemas">
      <>{props.children}</>
    </ul>
  );
};
export default List;
