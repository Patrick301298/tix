import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner1 from "../../../assets/Image/ban-tay-diet-quy-evil-expeller-16177781815781.png";
import Banner2 from "../../../assets/Image/lat-mat-48h-16177782153424.png";
import Banner3 from "../../../assets/Image/trang-ti-16194117174325.jpg";
import Play from "../../../assets/Image/play-video.png";

import "./style.scss";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    className: "slides",
  };
  return (
    <div id="sliderTrailer">
      <button type="button" className="playTrailer showHover">
        <img src={Play} alt="" />
      </button>
      <Slider {...settings}>
        <div>
          <a href="#abc">
            <img src={Banner1} alt="" />
          </a>
        </div>
        <div>
          <a href="#abc">
            <img src={Banner2} alt="" />
          </a>
        </div>
        <div>
          <a href="#abc">
            <img src={Banner3} alt="" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
