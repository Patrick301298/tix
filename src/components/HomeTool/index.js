import React from "react";
import "./style.scss";
const HomeTool = () => {
  return (
    <div id="homeTools" className="hideOnMobile">
      <div className="w30p widthByPercent dropdown selectFilm" id="selectMovie">
        <div
          className="dropdown-toggle selectMenu white ng-binding"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Phim
        </div>
        <ul className="dropdown-menu selectScroll">
          <li>
            <a href="#TrangTi">Trạng tí phiêu lưu ký</a>
          </li>
          <li>
            <a href="#Latmat">Lật Mặt - 48h</a>
          </li>
        </ul>
      </div>
      <div className="smallBlock widthByPercent dropdown selectCinema">
        <div
          className="dropdown-toggle selectMenu white ng-binding"
          data-toggle="dropdown"
        >
          Rạp
        </div>
        <ul className="dropdown-menu">
          <li>
            <a href="#chonPhim">Vui lòng chọn phim</a>
          </li>
        </ul>
      </div>
      <div className="smallBlock widthByPercent dropdown selectDate">
        <div
          className="dropdown-toggle selectMenu white ng-binding"
          data-toggle="dropdown"
        >
          Ngày Xem
        </div>
        <ul className="dropdown-menu">
          <li>
            <a href="#chonPhim">Vui lòng chọn phim và rạp</a>
          </li>
        </ul>
      </div>
      <div className="smallBlock widthByPercent dropdown selectSession">
        <div
          className="dropdown-toggle selectMenu white ng-binding"
          data-toggle="dropdown"
        >
          Suất Chiếu
        </div>
        <ul className="dropdown-menu">
          <li>
            <a href="#chonPhim">Vui lòng chọn phim,rap và ngày xem</a>
          </li>
        </ul>
      </div>
      <div className="smallBlock widthByPercent">
        <div className="after-btn"></div>
        <div className="before-btn"></div>
        <button className="btn btn-primary" id="btnBuy">
          MUA VÉ NGAY
        </button>
      </div>
    </div>
  );
};

export default HomeTool;
