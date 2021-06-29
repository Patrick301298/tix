import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const List = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    className: "slides1",
  };
  return (
    <div className="row">
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
};

export default List;

List.propTypes = {};
