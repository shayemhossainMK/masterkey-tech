import React from "react";
import { Link } from "react-router-dom";
import service1 from "../../images/serviceWhiteImg/Asset 90.svg";
import service2 from "../../images/serviceWhiteImg/Asset 91.svg";
import service3 from "../../images/serviceWhiteImg/Asset 92.svg";
import service4 from "../../images/serviceWhiteImg/Asset 89.svg";
import service5 from "../../images/serviceWhiteImg/Asset 88.svg";
import service6 from "../../images/serviceWhiteImg/Asset 86.svg";
import service7 from "../../images/serviceWhiteImg/Asset 85.svg";
import service8 from "../../images/serviceWhiteImg/Asset 84.svg";
import CustomLink from "../CustomLink/CustomLink";
import "./Subnavbar.css";
import CustomLinkTwo from "../CustomLinkTwo/CustomLinkTwo";

const SubNavbar = () => {
  return (
    <div className="py-3 mt-1 bg-secondary shadow-lg md:sticky top-20 z-40">
      <ul className="flex justify-center items-center">
        <li className="mx-2 shadow-xl rounded-md  subnav-btn">
          <div className="flex text-xs p-1">
            <img className="w-4 mr-1" src={service1} alt="" />
            <CustomLinkTwo to="/businessmanage">
              <span>Business Management</span>
            </CustomLinkTwo>
          </div>
        </li>
        <li className="mx-2  shadow-xl rounded-md  subnav-btn ">
          <div className="flex text-xs p-1">
            <img className="w-4 mr-1" src={service2} alt="" />
            <CustomLinkTwo to="/digitalmarketing">
              Digital Marketing
            </CustomLinkTwo>
          </div>
        </li>
        <li className="mx-2 shadow-xl rounded-md  subnav-btn ">
          <div className="flex text-xs  p-1">
            <img className="w-5 mr-1" src={service3} alt="" />
            <CustomLinkTwo to="/mobileapp">
              Mobile app & Web Development
            </CustomLinkTwo>
          </div>
        </li>
        <li className="mx-2 shadow-xl first-line: rounded-md  subnav-btn">
          <div className="flex text-xs p-1 ">
            <img className="w-4 mr-1" src={service4} alt="" />
            <CustomLinkTwo to="/ecommerce">E-Commerce Solution </CustomLinkTwo>
          </div>
        </li>
        <li className="mx-2 shadow-xl rounded-md  subnav-btn">
          <div className="flex text-xs p-1">
            <img className="w-5 mr-1" src={service5} alt="" />
            <CustomLinkTwo to="/affiliate">
              Affiliate Marketing Solutions
            </CustomLinkTwo>
          </div>
        </li>
        <li className="mx-2 shadow-xl rounded-md  subnav-btn">
          <div className="flex text-xs p-1">
            <img className="w-4 mr-1" src={service6} alt="" />
            <CustomLinkTwo to="/adnetwork">Ad Network Solutions </CustomLinkTwo>
          </div>
        </li>
        <li className="mx-2 shadow-xl rounded-md subnav-btn">
          <div className="flex text-xs p-1">
            <img className="w-4 mr-1" src={service7} alt="" />
            <CustomLinkTwo to="/personalbranding">
              Personal Branding{" "}
            </CustomLinkTwo>
          </div>
        </li>
        <li className="mx-2 shadow-xl rounded-md subnav-btn">
          <div className="flex text-xs p-1">
            <img className="w-3 mr-1" src={service8} alt="" />
            <CustomLinkTwo to="/bulksms">Bulk SMS </CustomLinkTwo>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SubNavbar;
