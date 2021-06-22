import React from "react";
import "./style.scss";
import Logo from "../../../assets/Image/web-logo.png";
import User from "../../../assets/Image/user.png";
import Location from "../../../assets/Image/gps.png";
function Header() {
  return (
    <div id="navbarHeader">
      <a href="/" className="left">
        <img className="webLogo" src={Logo} alt="" />
      </a>
      <div className="center" id="headMenu">
        <a href="#abc" className="titleDisplay">
          Lịch chiếu
        </a>
        <a href="#abc" className="titleDisplay">
          Cụm rạp
        </a>
        <a href="#abc" className="titleDisplay">
          Tin Tức
        </a>
        <a href="#abc" className="titleDisplay">
          Ứng dụng
        </a>
      </div>
      <div className="right">
        <div id="account" className="imgCircle">
          <a href="#abc" className="menu titleDisplay">
            <img className="btnLogin" src={User} alt="" />
            <p className="white" style={{ display: "inline-block" }}>
              Đăng Nhập
            </p>
          </a>
        </div>
        <div className="selectLocation dropdown">
          <img src={Location} alt="" className="place-header white" />
          <div
            className="dropdown-toggle selectMenu white"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Hồ Chí Minh
          </div>
          <ul className="dropdown-menu selectScroll">
            <li>
              <a href="#abc">Hồ Chí Minh</a>
            </li>
            <li>
              <a href="#abc">Hà Nội</a>
            </li>
            <li>
              <a href="#abc">Đà Nẵng</a>
            </li>
            <li>
              <a href="#abc">Hải Phòng</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
