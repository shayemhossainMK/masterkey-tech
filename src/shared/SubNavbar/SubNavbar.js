import React from "react";
import { Link } from "react-router-dom";
import service1 from "../../images/services/Asset 8.svg";
import service2 from "../../images/services/Asset 9.svg";
import service3 from "../../images/services/Asset 10.svg";
import service4 from "../../images/services/Asset 7.svg";
import service5 from "../../images/services/Asset 6.svg";
import service6 from "../../images/services/Asset 4.svg";
import service7 from "../../images/services/Asset 3.svg";
import service8 from "../../images/services/Asset 2.svg";
import CustomLink from "../CustomLink/CustomLink";
import "./Subnavbar.css";

const SubNavbar = () => {
  return (
    <div className="bg-secondary py-3 mt-1 shadow-lg sticky top-24 z-40">
      <ul className="flex justify-center items-center">
        <li className="mx-2 shadow-xl border border-blue-300 rounded-md  subnav-btn">
          <Link to="/businessmanage">
            <div className="flex text-white text-xs p-1">
              <img className="w-4 mr-1" src={service1} alt="" />
              <span>Business Management</span>
            </div>
          </Link>
        </li>
        <li className="mx-2  shadow-xl border border-blue-300 rounded-md  subnav-btn ">
          <Link to="/digitalmarketing">
            <div className="flex text-white text-xs p-1">
              <img className="w-4 mr-1" src={service2} alt="" />
              Digital Marketing
            </div>
          </Link>
        </li>
        <li className="mx-2 shadow-xl border border-blue-300  rounded-md  subnav-btn ">
          <Link to="/mobileapp">
            <div className="flex text-white text-xs p-1">
              <img className="w-5 mr-1" src={service3} alt="" />
              Mobile app & Web Development
            </div>
          </Link>
        </li>
        <li className="mx-2 shadow-xl border border-blue-300 first-line: rounded-md  subnav-btn">
          <Link to="/ecommerce">
            <div className="flex text-white text-xs p-1">
              <img className="w-4 mr-1" src={service4} alt="" />
              E-Commerce Solution
            </div>
          </Link>
        </li>
        <li className="mx-2 shadow-xl border border-blue-300 rounded-md  subnav-btn">
          <Link to="/affiliate">
            <div className="flex text-white text-xs p-1">
              <img className="w-5 mr-1" src={service5} alt="" />
              Affiliate Marketing Solutions
            </div>
          </Link>
        </li>
        <li className="mx-2 shadow-xl border border-blue-300  rounded-md  subnav-btn">
          <Link to="/adnetwork">
            <div className="flex text-white text-xs p-1">
              <img className="w-4 mr-1" src={service6} alt="" />
              Ad Network Solutions
            </div>
          </Link>
        </li>
        <li className="mx-2 shadow-xl border border-blue-300 rounded-md subnav-btn">
          <Link to="/personalbranding">
            <div className="flex text-white text-xs p-1">
              <img className="w-4 mr-1" src={service7} alt="" />
              Personal Branding
            </div>
          </Link>
        </li>
        <li className="mx-2 shadow-xl border border-blue-300 rounded-md subnav-btn">
          <Link to="/bulksms">
            <div className="flex text-white text-xs p-1">
              <img className="w-3 mr-1" src={service8} alt="" />
              Bulk SMS Services
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SubNavbar;
