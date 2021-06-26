import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.scss";
import TT from "../../../assets/Image/TT.PNG";
import Play from "../../../assets/Image/play-video.png";
import CN from "../../../assets/Image/CN.PNG";
import LM from "../../../assets/Image/LM.PNG";
import TTHM from "../../../assets/Image/TTHM.PNG";
class ListMovie extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 700,
      autoplaySpeed: 2000,
      className: "slides1",
    };
    return (
      <div className="row grayBack" id="filmblock">
        <div className="col-xs-12 block mainMaxWidth" id="homeMovies">
          <ul className="nav nav-tabs navCenter">
            <li style={{ marginRight: 5 }} className="active">
              <a href="#abc">Đang Chiếu</a>
            </li>
            <li style={{ marginLeft: 5 }}>
              <a href="#abc">Sắp chiếu</a>
            </li>
          </ul>
          <Slider {...settings}>
            <div>
              <div className="row">
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
                          src={CN}
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
                          src={LM}
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
                          src={CN}
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
                </div>{" "}
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
                          src={CN}
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
                          src={TT}
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
                          src={LM}
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
                          src={TT}
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
                          src={TTHM}
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
              </div>
            </div>
            <div>
              <div className="row">
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
                          src={LM}
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
                          src={CN}
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
                          src={LM}
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
                </div>{" "}
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
                          src={TTHM}
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
                          src={TT}
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
                          src={TTHM}
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
                          src={TT}
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
                          src={TT}
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
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default ListMovie;
