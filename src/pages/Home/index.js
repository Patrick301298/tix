import React from "react";
import ListMovieContainer from "../../containers/ListMovieContainer";
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

      <div className="homeTix__newsMovie">
        <div className="homeTix__newsMovie">{/* News Movie Container */}</div>
      </div>
    </div>
  );
};

export default Home;
