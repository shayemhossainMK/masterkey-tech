import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../Contact/Contact";
import About from "../About/About";
import "./HomeTwo.css";
import Services from "../Services/Services";

import Home from "../Home/Home";
import Spider from "../Spider/Spider";
import Footer from "../../shared/Footer/Footer";
import FooterTwo from "../../shared/FooterTwo/FooterTwo";
const HomeTwo = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 3000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 7000,
    // pauseOnHover: false,
    // infinite: true,
    // speed: 3000,
    // autoplay: true,
    // autoplaySpeed: 7000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // pauseOnHover: false,
  };
  return (
    <div>
      <div className="overflow-hidden">
        <Slider {...settings}>
          <div>
            <div>
              <Home></Home>
            </div>
          </div>
          <div>
            <About></About>
          </div>
          <div>
            <Contact></Contact>
          </div>
        </Slider>
      </div>
      <Spider></Spider>
      <About></About>
      <Contact></Contact>
      <FooterTwo></FooterTwo>
    </div>
  );
};

export default HomeTwo;
