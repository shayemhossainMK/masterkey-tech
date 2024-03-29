import React from "react";
import "./Spider.css";
import spider from "../../images/Asset 82 - 2.svg";
import service1 from "../../images/services/Asset 8.svg";
import service2 from "../../images/services/Asset 9.svg";
import service3 from "../../images/services/Asset 10.svg";
import service4 from "../../images/services/Asset 7.svg";
import service5 from "../../images/services/Asset 6.svg";
import service6 from "../../images/services/Asset 4.svg";
import service7 from "../../images/services/Asset 3.svg";
import service8 from "../../images/services/Asset 2.svg";
import { Link } from "react-router-dom";

const Spider = () => {
  return (
    <div className="spider-container relative h-full mt-[-10px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-center items-center h-screen svg-container">
          <img
            className="w-[130px] md:w-[500px] absolute top-[138px] left-[425px] "
            src={spider}
            alt=""
          />
        </div>
        <Link to="/businessmanage">
          <div className="flex items-center bg-base-100 rounded-lg w-36 md:w-60 absolute top-[295px] md:top-16 left-[122px] md:left-[560px] md:py-1">
            <img className="w-10 mr-4 pl-3" src={service1} alt="" />
            <p className="text-xs md:text-sm">
              Business Management <br /> Software
            </p>
          </div>
        </Link>
        <Link to="/mobileapp">
          <div className="flex justify-between bg-base-100 rounded-lg w-32 md:w-60 absolute top-[350px] md:top-[178px] left-[3px] md:left-[170px] md:py-1">
            <p className="text-right text-xs md:text-sm mr-0 md:mr-1">
              Mobile app & Web Development
            </p>
            <img
              className="w-7 md:w-10 md:mr-3 pl-1 md:pl-2"
              src={service3}
              alt=""
            />
          </div>
        </Link>
        <Link to="/personalbranding">
          <div className="flex items-center bg-base-100 py-2 rounded-lg w-60 absolute top-[175px] left-[944px]">
            <img className="w-12 mr-3 pl-3 " src={service7} alt="" />
            <p className="text-sm">Personal Branding</p>
          </div>
        </Link>
        <Link to="/ecommerce">
          <div className="flex items-center justify-between bg-base-100  rounded-lg w-60 absolute top-[296px] left-[170px] py-3">
            <p className="flex justify-end w-full mr-3 text-sm">
              E-Commerce Solution
            </p>
            <img className="w-10 pr-3" src={service4} alt="" />
          </div>
        </Link>
        <Link to="/digitalmarketing">
          <div className="flex items-center bg-base-100  rounded-lg w-60 absolute top-[296px] left-[944px] py-1">
            <img className="w-10 pl-3" src={service2} alt="" />
            <p className="ml-4 text-sm">
              Digital Marketing <br /> Solutions
            </p>
          </div>
        </Link>
        <Link to="/bulksms">
          <div className="flex items-center justify-between bg-base-100  rounded-lg w-60 absolute top-[420px] left-[170px] py-2">
            <p className="flex justify-end mr-3 w-full text-sm">
              Bulk SMS Services
            </p>
            <img className="w-8 mr-3" src={service8} alt="" />
          </div>
        </Link>
        <Link to="/affiliate">
          <div className="flex items-center bg-base-100  rounded-lg w-60 absolute top-[418px] left-[944px] py-1">
            <img className="w-12 mr-4 pl-3" src={service5} alt="" />
            <p className="text-sm">
              Affiliate Marketing <br /> Solutions
            </p>
          </div>
        </Link>
        <Link to="/adnetwork">
          <div className="flex items-center bg-base-100 rounded-lg w-60 absolute top-[522px] left-[560px] py-2">
            <img className="w-10 mr-3 pl-3" src={service6} alt="" />
            <p className="text-sm">Ad Network Solutions</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Spider;
