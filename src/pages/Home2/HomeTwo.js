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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          width: "30px",
          marginTop: "-35px",
          color: "white",
          background: "#65509c",
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
            <img className="h-screen w-screen" src={serviceImg} alt="" />
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
