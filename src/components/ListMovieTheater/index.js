import React from "react";
import "./style.scss";
// import LogoTheater from "./LogoTheater";
import ListTheaterContainer from "../../containers/ListMovieTheaterContainer/ListTheaterContainer";
import LogoTheaterContainer from "../../containers/ListMovieTheaterContainer/LogoTheaterContainer";
const ListMovieTheater = ({ listLogo, loading, error, listTheater }) => {
  return (
    <div className="row session-main grayBack" id="cinemablock">
      <div className="col-xs-12 block mainMaxWidth" id="homeCinemaComplex">
        <div id="sliderAdsCinema" className="wrapSlick banner-ads"></div>
        <div className="noelBand"></div>
        {/* <LogoTheater listLogo={listLogo} /> */}
        <LogoTheaterContainer />
        {/* <InfoTheater listTheater={listTheater} /> */}
        <ListTheaterContainer />
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
