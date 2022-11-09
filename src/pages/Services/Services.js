import React from "react";
import "./Services.css";
import service1 from "../../images/services/Asset 8.svg";
import service2 from "../../images/services/Asset 9.svg";
import service3 from "../../images/services/Asset 10.svg";
import service4 from "../../images/services/Asset 7.svg";
import service5 from "../../images/services/Asset 6.svg";
import service6 from "../../images/services/Asset 4.svg";
import service7 from "../../images/services/Asset 3.svg";
import service8 from "../../images/services/Asset 2.svg";
import { Link } from "react-router-dom";
import SubNavbar from "../../shared/SubNavbar/SubNavbar";
import FooterTwo from "../../shared/FooterTwo/FooterTwo";

const Services = () => {
  return (
    <div>
      <div className="hidden md:block md:sticky md:top-20">
        <SubNavbar></SubNavbar>
      </div>
      <div className="px-3 md:px-28 pb-10 md:pb-16 pt-2 h-full service-container">
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-10 items-center text-center">
          <Link to="/businessmanage">
            <div className="h-44 flex justify-center items-center flex-col bg-base-100 hover:bg-secondary duration-500  mx-auto rounded-xl shadow-md text-secondary hover:text-base-100">
              <img className="w-16 mx-auto mb-2" src={service1} alt="" />
              <p>
                Business Management <br /> Solutions
              </p>
            </div>
          </Link>
          <Link to="/digitalmarketing">
            <div className=" h-44 flex justify-center items-center flex-col bg-base-100 mx-auto rounded-xl shadow-md text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-16 mx-auto mb-2" src={service2} alt="" />
              <p>
                Digital Marketing <br /> Solutions
              </p>
            </div>
          </Link>
          <Link to="/mobileapp">
            <div className="h-44 flex justify-center items-center flex-col bg-base-100 rounded-xl text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-16 mx-auto mb-2" src={service3} alt="" />
              <p>
                Mobile app & Web <br /> Development
              </p>
            </div>
          </Link>
          <Link to="/ecommerce">
            <div className="h-44 flex justify-center items-center flex-col bg-base-100 rounded-lg text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-16 mx-auto mb-2" src={service4} alt="" />
              <p>E-Commerce Solution</p>
            </div>
          </Link>
          <Link to="/affiliate">
            <div className="h-44 flex justify-center items-center flex-col bg-base-100 rounded-lg text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-24 mx-auto mb-2" src={service5} alt="" />
              <p>
                Affiliate Marketing <br /> Solutions
              </p>
            </div>
          </Link>
          <Link to="/adnetwork">
            <div className="h-44 flex justify-center items-center flex-col rounded-lg bg-base-100 text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-16 mx-auto mb-2" src={service6} alt="" />
              <p>Ad Network Solutions</p>
            </div>
          </Link>
          <Link to="/personalbranding">
            <div className="h-44 flex justify-center items-center flex-col rounded-lg bg-base-100 text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-16 mx-auto mb-2" src={service7} alt="" />
              <p>Personal Branding</p>
            </div>
          </Link>
          <Link to="/bulksms">
            <div className="h-44 flex justify-center items-center flex-col rounded-lg bg-base-100 text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-16 mx-auto mb-2" src={service8} alt="" />
              <p>Bulk SMS Services</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
