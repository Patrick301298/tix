import React from "react";
import ListMovieContainer from "../../containers/ListMovieContainer";
import ListMovieTheaterContainer from "../../containers/ListMovieTheaterContainer";
import HomeNewsContainer from "../../containers/HomeNewsContainer";
import HomeAppContainer from "../../containers/HomeAppContainer";
import Banner from "./Banner";
const Home = (props) => {
  return (
    <div className="homeTix">
      <div className="homeTix__header">
        <div className="homeTix__header__banner">
          <Banner />
        </div>
        <div className="homeTix__header__searchMovie">
          {/* Search Movie container */}
        </div>
      </div>

      <div className="homeTix__listMovie">
        <div className="homeTix__listMovie__inTro">
          {/* List Movie Container */}
          <ListMovieContainer />
        </div>
      </div>

      <div className="homeTix__listMovieTheater">
        <div className="homeTix__listMovieTheater__inTro">
          {/* List Movie Theater Container */}
          <ListMovieTheaterContainer />
        </div>
      </div>

      <div className="homeTix__homeNews">
        <div className="homeTix__homeNews__inTro">
          {/* Home News Container */}
          <HomeNewsContainer />
        </div>
      </div>

      <div className="homeTix__homeApp">
        <div className="homeTix__homeApp__inTro">
          {/* Home App Container */}
          <HomeAppContainer />
        </div>
      </div>

      <div className="homeTix__newsMovie">
        <div className="homeTix__newsMovie">{/* News Movie Container */}</div>
      </div>
    </div>
  );
};

export default Home;
