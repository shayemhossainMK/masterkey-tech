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

import FooterTwo from "../../shared/FooterTwo/FooterTwo";
import HomeServices from "../HomeService/HomeService";
import Partners from "../Partners/Partners";

const HomeTwo = () => {
  return (
    <div>
      <Home></Home>
      <div className="block md:hidden">
        <HomeServices></HomeServices>
      </div>
      <div className="hidden md:block">
        <Spider></Spider>
      </div>
      <About></About>
      <Partners></Partners>
    </div>
  );
};

export default HomeTwo;
