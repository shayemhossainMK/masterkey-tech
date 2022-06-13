import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../Contact/Contact";
import About from "../About/About";
import serviceImg from "../../images/Picture1.png";

import Home from "../Home/Home";
const HomeTwo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="h-screen">
      <div className="overflow-hidden">
        <Slider {...settings}>
          <div>
            <div>
              <Home></Home>
            </div>
          </div>
          <div>
            <img className="h-screen w-full" src={serviceImg} alt="" />
          </div>
          <div>
            <About></About>
          </div>
          <div>
            <Contact></Contact>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeTwo;
