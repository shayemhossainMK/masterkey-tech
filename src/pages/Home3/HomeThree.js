import React from "react";
import { Link } from "react-router-dom";
import CustomLinkTwo from "../../shared/CustomLinkTwo/CustomLinkTwo";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Services from "../Services/Services";
import "./HomeThree.css";

const HomeThree = () => {
  return (
    <div className="home-container">
      <div>
        <div className="h-screen">
          <Home></Home>
        </div>
        <div>
          <Services></Services>
        </div>
        <Contact></Contact>
      </div>
      <div className="bg-primary h-screen flex justify-end text-white items-center text-right px-10 sticky top-0">
        <ul>
          <li className="text-xs">
            <CustomLinkTwo to="/">Home</CustomLinkTwo>
          </li>
          <li className="my-3 text-sm">
            <CustomLinkTwo to="/services">What we do</CustomLinkTwo>
          </li>
          <li className="text-sm">
            <CustomLinkTwo to="/contact">Contact</CustomLinkTwo>
          </li>
          <li className="my-3 text-sm">
            <CustomLinkTwo to="/about">About us</CustomLinkTwo>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeThree;
