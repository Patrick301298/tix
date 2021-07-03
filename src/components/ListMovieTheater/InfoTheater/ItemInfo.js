import React from "react";
import BHDStar from "../../../assets/Image/bhd-star-bitexco-16105952137769.png";
const ItemInfo = ({ itemTheater }) => {
  return (
    <div className="cinema">
      <img className="cinemaImage" src={BHDStar} alt="" />
      <div className="wrapInfo">
        <span className="nameMovieCinema">
          <span className="colorCinema BHD Star"> {itemTheater.tenCumRap}</span>
        </span>
        <span className="infoMovieCinema">{itemTheater.diaChi}</span>
        <span className="redDetail showingDetailCinema">
          <a href="#chitiet">[ Chi Tiết ]</a>
        </span>
      </div>
    </div>
  );
};

export default ItemInfo;
