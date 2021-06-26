import React from "react";

import Play from "../../assets/Image/play-video.png";
import CN from "../../assets/Image/CN.PNG";

const Item = ({ itemMovie }) => {
  return (
    <div
      style={{
        width: `${25}%`,
        display: "inline-block",
      }}
      className="col-sm-3 col-xs-12 wrapFilm "
    >
      <div className="film">
        <a href="#abc">
          <div className="filmThumbnail">
            <img
              src={itemMovie.hinhAnh}
              alt=""
              style={{ width: 215, height: 318 }}
            />
            <div className="hoverInfo showHover showingDetail">
              <button className="playTrailer">
                <img src={Play} alt="" />
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Item;

Item.propTypes = {};
