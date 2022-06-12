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

const Services = () => {
  return (
    <div className="px-3 md:px-28 py-5 h-screen service-container">
      <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-10 items-center text-center">
        <Link to="/businessmanage">
          <div className="py-9 px-9 bg-base-100 mx-auto rounded-xl shadow-md">
            <img className="w-16 mx-auto mb-2" src={service1} alt="" />
            <p className="text-secondary">
              Business Management <br /> Software
            </p>
          </div>
        </Link>
        <Link to="/digitalmarketing">
          <div className="px-14 py-9 bg-base-100 mx-auto rounded-xl shadow-md">
            <img className="w-16 mx-auto mb-2" src={service2} alt="" />
            <p className="text-secondary">
              Digital Marketing <br /> Solutions
            </p>
          </div>
        </Link>
        <Link to="/">
          <div className="px-7 py-10 bg-base-100 rounded-xl">
            <img className="w-16 mx-auto mb-2" src={service3} alt="" />
            <p className="text-secondary">Mobile app & Web Development</p>
          </div>
        </Link>
        <Link to="/">
          <div className="py-12 bg-base-100 rounded-lg">
            <img className="w-16 mx-auto mb-2" src={service4} alt="" />
            <p className="text-secondary">E-Commerce Solution</p>
          </div>
        </Link>
        <Link to="/">
          <div className="py-10 px-7 bg-base-100 rounded-lg">
            <img className="w-24 mx-auto mb-2" src={service5} alt="" />
            <p className="text-secondary">Affiliate Marketing Solutions</p>
          </div>
        </Link>
        <Link to="/">
          <div className="py-12 px-8 rounded-lg bg-base-100">
            <img className="w-16 mx-auto mb-2" src={service6} alt="" />
            <p className="text-secondary">Ad Network Solutions</p>
          </div>
        </Link>
        <Link to="/">
          <div className="py-12 px-8 rounded-lg bg-base-100">
            <img className="w-16 mx-auto mb-2" src={service7} alt="" />
            <p className="text-secondary">Personal Branding</p>
          </div>
        </Link>
        <Link to="/">
          <div className="py-12 px-8 rounded-lg bg-base-100">
            <img className="w-16 mx-auto mb-2" src={service2} alt="" />
            <p className="text-secondary">Bulk SMS Services</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
