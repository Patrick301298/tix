import React from "react";
import _ from "lodash";
import BHDStar from "../../assets/Image/bhd-star-bitexco-16105952137769.png";
import "./style.scss";
import List from "./List";
import Item from "./Item";
const ListMovieTheater = ({ listMovieTheater, loading, error }) => {
  const renderMovieTheater = () => {
    let xhtml = null;
    if (_.isEmpty(listMovieTheater)) return xhtml;
    xhtml = listMovieTheater.slice(0, 6).map((item) => {
      return <Item itemMovieTheater={item} />;
    });
    return xhtml;
  };
  return (
    <div className="row session-main grayBack" id="cinemablock">
      <div className="col-xs-12 block mainMaxWidth" id="homeCinemaComplex">
        <div id="sliderAdsCinema" className="wrapSlick banner-ads"></div>
        <div className="noelBand"></div>
        <List>{renderMovieTheater()}</List>
        <div
          className="tab-content float-left"
          id="listCinemas"
          style={{ height: 705 }}
        >
          <div>
            <div className="cinema active">
              <img className="cinemaImage" src={BHDStar} alt="" />
              <div className="wrapInfo">
                <span className="nameMovieCinema">
                  <span className="colorCinema BHD Star">BHD Star</span> -
                  Bitexco
                </span>
                <span className="infoMovieCinema">
                  L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                </span>
                <span className="redDetail showingDetailCinema">
                  <a href="#chitiet">[ Chi Tiết ]</a>
                </span>
              </div>
            </div>
            <div className="cinema">
              <img className="cinemaImage" src={BHDStar} alt="" />
              <div className="wrapInfo">
                <span className="nameMovieCinema">
                  <span className="colorCinema BHD Star">BHD Star</span> -
                  Bitexco
                </span>
                <span className="infoMovieCinema">
                  L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                </span>
                <span className="redDetail showingDetailCinema">
                  <a href="#chitiet">[ Chi Tiết ]</a>
                </span>
              </div>
            </div>
            <div className="cinema active">
              <img className="cinemaImage" src={BHDStar} alt="" />
              <div className="wrapInfo">
                <span className="nameMovieCinema">
                  <span className="colorCinema BHD Star">BHD Star</span> -
                  Bitexco
                </span>
                <span className="infoMovieCinema">
                  L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                </span>
                <span className="redDetail showingDetailCinema">
                  <a href="#chitiet">[ Chi Tiết ]</a>
                </span>
              </div>
            </div>
            <div className="cinema active">
              <img className="cinemaImage" src={BHDStar} alt="" />
              <div className="wrapInfo">
                <span className="nameMovieCinema">
                  <span className="colorCinema BHD Star">BHD Star</span> -
                  Bitexco
                </span>
                <span className="infoMovieCinema">
                  L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                </span>
                <span className="redDetail showingDetailCinema">
                  <a href="#chitiet">[ Chi Tiết ]</a>
                </span>
              </div>
            </div>
            <div className="cinema active">
              <img className="cinemaImage" src={BHDStar} alt="" />
              <div className="wrapInfo">
                <span className="nameMovieCinema">
                  <span className="colorCinema BHD Star">BHD Star</span> -
                  Bitexco
                </span>
                <span className="infoMovieCinema">
                  L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                </span>
                <span className="redDetail showingDetailCinema">
                  <a href="#chitiet">[ Chi Tiết ]</a>
                </span>
              </div>
            </div>
            <div className="cinema active">
              <img className="cinemaImage" src={BHDStar} alt="" />
              <div className="wrapInfo">
                <span className="nameMovieCinema">
                  <span className="colorCinema BHD Star">BHD Star</span> -
                  Bitexco
                </span>
                <span className="infoMovieCinema">
                  L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                </span>
                <span className="redDetail showingDetailCinema">
                  <a href="#chitiet">[ Chi Tiết ]</a>
                </span>
              </div>
            </div>
            <div className="cinema active">
              <img className="cinemaImage" src={BHDStar} alt="" />
              <div className="wrapInfo">
                <span className="nameMovieCinema">
                  <span className="colorCinema BHD Star">BHD Star</span> -
                  Bitexco
                </span>
                <span className="infoMovieCinema">
                  L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                </span>
                <span className="redDetail showingDetailCinema">
                  <a href="#chitiet">[ Chi Tiết ]</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ListMovies" style={{ height: 705 }}>
          <div className="emptySession">
            <p>Không có suất chiếu</p>
          </div>
        </div>
        <div className="noelBand"></div>
      </div>
    </div>
  );
};
export default ListMovieTheater;
