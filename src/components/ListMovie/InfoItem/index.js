import React from "react";
import "./style.scss";

import Play from "../../../assets/Image/play-video.png";
import TrangTi from "../../../assets/Image/trang-ti-16190592773054.jpg";

const InfoItem = ({ inFoMovie }) => {
  return (
    <div id="mainContent" className="container-fluid">
      <div>
        <div className="row">
          <div
            className="col-sm-12 block dark"
            id="detailMain"
            style={{ backgroundColor: "rgb(10, 32, 41)" }}
          >
            <div id="detailMainTop" className="backgroundMain">
              <div className="styleBlur">
                <img src={TrangTi} alt="" className="posterLandscapeFilm" />
              </div>
              <div className="styleGradient" id="Gradient"></div>
              <div className="detailMainInfo mainMaxWidth2">
                <div className="col-sm-3 col-xs-4 filmPosterTop">
                  <div
                    className="row posterMain"
                    id="poster"
                    style={{ backgroundImage: `url(${inFoMovie.hinhAnh})` }}
                  >
                    <button className="playTrailerDetail showHover">
                      <a href={inFoMovie.trailer}>
                        <img src={Play} alt="" />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col-sm-5 infoMain">
                  <div>
                    <span className="detailMainInfo1">
                      {inFoMovie.ngayKhoiChieu}
                    </span>
                    <br />
                  </div>
                  <div className="parentInfo2">
                    <span className="detailMainInfo2">
                      <span className="ageType ageType-general">
                        {inFoMovie.maPhim}
                      </span>
                      <span>{inFoMovie.tenPhim}</span>
                    </span>
                  </div>
                  <div>
                    <span className="detailMainInfo1">
                      100 ph??t - 0 IMDb - 2D/Digital
                    </span>
                    <br />
                  </div>
                </div>
                <div className="col-sm-2 circleStar">
                  <div className="circleSum"></div>
                  <div
                    id="circlePercent"
                    className={`c100 p${+inFoMovie.danhGia * 10}`}
                  >
                    <div className="circleBorder"></div>
                    <span>{inFoMovie.danhGia}</span>
                    <div className="slice">
                      <div className="bar"></div>
                      <div className="fill"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mainMaxWidth2 contentMain">
              <div className="detailMainInfoMobile mainMaxWidth2">
                <div className="row">
                  <div className="col-sm-12 infoMain">
                    <div>
                      <span className="detailMainInfo1">30.04.2021</span>
                      <br />
                    </div>
                    <div>
                      <span className="detailMainInfo2">
                        Tr???ng T?? Phi??u L??u K??
                        <br />
                      </span>
                    </div>
                    <div>
                      <span className="detailMainInfo1">
                        100 ph??t - 0 IMDb - 2D/Digital
                        <br />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs navCenter">
                <li className="active">
                  <a href="#Thongtin">Th??ng Tin</a>
                  <div className="wing wingLeft"></div>
                  <div className="wing wingRight"></div>
                </li>
                <li>
                  <a href="#DanhGia" className="commentTab">
                    ????nh Gi??
                  </a>
                  <div className="wing wingLeft"></div>
                  <div className="wing wingRight"></div>
                </li>
              </ul>
              <div className="tab-content">
                <div id="showingInfo" className="tab-pane fade in active">
                  <div className="homeNewsMain">
                    <div className="row isFlex detailMainStyle">
                      <div className="col-sm-6 col-xs-12 film left">
                        <div className="row rowLeftInfo">
                          <p className="contentTitle">Ng??y c??ng chi???u</p>
                          <p className="contentInfo">30.03.2021</p>
                        </div>
                        <div className="row rowLeftInfo">
                          <p className="contentTitle">?????o di???n</p>
                          <p className="contentInfo">Ph???m Gia Nh???t Linh</p>
                        </div>
                        <div className="row rowLeftInfo">
                          <p className="contentTitle">Di???n vi??n</p>
                          <p className="contentInfo">Ph???m Gia Nh???t Linh</p>
                        </div>
                        <div className="row rowLeftInfo">
                          <p className="contentTitle">Th??? lo???i</p>
                          <p className="contentInfo">H??i h?????c</p>
                        </div>
                        <div className="row rowLeftInfo">
                          <p className="contentTitle">?????nh d???ng</p>
                          <p className="contentInfo">2D/Digital</p>
                        </div>
                        <div className="row rowLeftInfo">
                          <p className="contentTitle">Qu???c Gia SX</p>
                          <p className="contentInfo">Vi???t Nam</p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-12 film right">
                        <div className="row rowLeftInfo">
                          <p className="contentTitle">N???i dung</p>
                        </div>
                        <div className="row rowLeftInfo">
                          <p className="contentInfoFull description">
                            {inFoMovie.moTa}
                          </p>
                        </div>
                        <div className="row rowLeftInfo">
                          <p className="contentInfoFull"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
