import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner1 from "../../../assets/Image/ban-tay-diet-quy-evil-expeller-16177781815781.png";
import Banner2 from "../../../assets/Image/lat-mat-48h-16177782153424.png";
import Banner3 from "../../../assets/Image/trang-ti-16194117174325.jpg";
import Play from "../../../assets/Image/play-video.png";
import "./style.scss";
export default class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 700,
      autoplaySpeed: 2000,
      className: "slides",
    };
    return (
      <div className="row grayBack">
        <div className="col-xs-12">
          <button type="button" className="playTrailer">
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
      </div>
    );
  }
}
