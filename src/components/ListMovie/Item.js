import React from "react";
import { Link } from "react-router-dom";

import Play from "../../assets/Image/play-video.png";
import Star from "../../assets/Image/star1.png";
import Star1_2 from "../../assets/Image/star1.2.png";
import { useDispatch } from "react-redux";
import { getInfoMovieByID } from "../../redux/Movie/movie.action";

const Item = ({ itemMovie }) => {
  const dispatch = useDispatch();
  const handleClickItem = (e) => {
    dispatch(getInfoMovieByID(itemMovie.maPhim));
    console.log("Data");
  };
  //console.log(itemMovie);
  return (
    <div
      style={{
        width: `${25}%`,
        display: "inline-block",
      }}
      className="col-sm-3 col-xs-12 wrapFilm "
    >
      <div className="film">
        <a href="#phim">
          <div className="filmThumbnail">
            <img
              src={itemMovie.hinhAnh}
              alt=""
              style={{ width: 215, height: 318 }}
            />
            <div className="hoverInfo showHover showingDetail">
              <button className="playTrailer">
                <a href={itemMovie.trailer}>
                  <img src={Play} alt="" />
                </a>
              </button>
            </div>
            <span className="avgPoint">
              <p className="txtPoint">{itemMovie.danhGia}</p>
              <p>
                <img className="smallStar" src={Star} alt="" />
                <img className="smallStar" src={Star} alt="" />
                <img className="smallStar" src={Star} alt="" />
                <img className="half" src={Star1_2} alt="" />
              </p>
            </span>
          </div>
        </a>
        <div className="info">
          <div className="nameFilm">
            <span className="ageType ageType-general">{itemMovie.maPhim}</span>
            {itemMovie.tenPhim}
          </div>
          <div className="infoFilm">
            Ngày Khởi Chiếu : {itemMovie.ngayKhoiChieu}
          </div>
          <div className="showHover">
            <Link
              onClick={handleClickItem}
              to={`/movie/${itemMovie.maPhim}`}
              className="buyNow showingDetail"
            >
              MUA VÉ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

Item.propTypes = {};
