import React from "react";
import "./style.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Mobie from "../../assets/Image/mobile.png";
import Slide16 from "../../assets/Image/slide16.jpg";
import Slide1 from "../../assets/Image/slide1.jpg";
import Slide2 from "../../assets/Image/slide2.jpg";
import Slide3 from "../../assets/Image/slide3.jpg";
import Slide4 from "../../assets/Image/slide4.jpg";

const HomeApp = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    className: "slides2",
  };
  return (
    <div id="appblock">
      <div className="row" id="wrapHomeApp">
        <div className="col-xs-12 block" id="homeApp">
          <div className="mainMaxWidth">
            <div className="row">
              <div className="col-md-6 left text-left">
                <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                <p className="textLeft">người yêu điện ảnh</p>
                <br></br>
                <p className="textSmallLeft">
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <br></br>
                <button className="buttonLeft">
                  App miễn phí - Tải về ngay!
                </button>
                <p className="textAppUnder">
                  TIX có hai phiên bản &nbsp;
                  <a
                    className="tagA"
                    href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                  >
                    IOS
                  </a>
                  &nbsp; & &nbsp;
                  <a
                    className="tagA"
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                  >
                    Android
                  </a>
                </p>
              </div>
              <div className="col-md-6 right">
                <img
                  src={Mobie}
                  alt="Loading...."
                  className="img-responsive phone-img"
                />
                <div
                  id="sliderScreen"
                  className="wrapSlick slick-initialized slick-slider"
                >
                  <Slider {...settings}>
                    <div>
                      <img src={Slide16} alt="" />
                    </div>
                    <div>
                      <img src={Slide1} alt="" />
                    </div>
                    <div>
                      <img src={Slide2} alt="" />
                    </div>
                    <div>
                      <img src={Slide3} alt="" />
                    </div>
                    <div>
                      <img src={Slide4} alt="" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeApp;
