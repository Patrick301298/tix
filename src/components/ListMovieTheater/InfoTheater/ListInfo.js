import React from "react";

const ListInfo = (props) => {
  return (
    <div
      className="tab-content float-left"
      id="listCinemas"
      style={{ height: 705 }}
    >
      <>{props.children}</>
    </div>
  );
};

export default ListInfo;
