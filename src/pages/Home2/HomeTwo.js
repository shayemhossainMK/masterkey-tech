import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../Contact/Contact";
import About from "../About/About";
import serviceImg from "../../images/Picture1.png";
import "./HomeTwo.css";
import Services from "../Services/Services";

import Home from "../Home/Home";
import Spider from "../Spider/Spider";
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
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "25px",
          marginTop: "-35px",
          color: "white",
          background: "#ED6949",
          border: "1px #65509C solid",
          borderRadius: "20px",
        }}
      >
        {i + 1}
      </div>
    ),
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
    </div>
  );
};

export default HomeTwo;
