import React from "react";
import service1 from "../../images/services/Asset 8.svg";
import service2 from "../../images/services/Asset 9.svg";
import service3 from "../../images/services/Asset 10.svg";
import service4 from "../../images/services/Asset 7.svg";
import service5 from "../../images/services/Asset 6.svg";
import service6 from "../../images/services/Asset 4.svg";
import service7 from "../../images/services/Asset 3.svg";
import service8 from "../../images/services/Asset 2.svg";
import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <div className="bg-gray-50">
      <div className="py-6">
        <h2 className="text-center font-semibold text-2xl uppercase text-primary">
          What we do
        </h2>
        <hr className="w-56 mt-2 mx-auto" />
      </div>
      <div className="px-3 md:px-28 pb-10 md:pb-16 pt-2 h-full">
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-10 items-center text-center">
          <Link to="/businessmanage">
            <div className="py-9 px-9 bg-base-100 hover:bg-secondary duration-500  mx-auto rounded-xl shadow-md text-secondary hover:text-base-100">
              <img className="w-16 mx-auto mb-2" src={service1} alt="" />
              <p>
                Business Management <br /> Software
              </p>
            </div>
          </Link>
          <Link to="/digitalmarketing">
            <div className="px-14 py-9 bg-base-100 mx-auto rounded-xl shadow-md text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-16 mx-auto mb-2" src={service2} alt="" />
              <p>
                Digital Marketing <br /> Solutions
              </p>
            </div>
          </Link>
          <Link to="/mobileapp">
            <div className="px-7 py-10 bg-base-100 rounded-xl shadow-md text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-16 mx-auto mb-2" src={service3} alt="" />
              <p>Mobile app & Web Development</p>
            </div>
          </Link>
          <Link to="/ecommerce">
            <div className="py-12 bg-base-100 rounded-lg shadow-md text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-16 mx-auto mb-2" src={service4} alt="" />
              <p>E-Commerce Solution</p>
            </div>
          </Link>
          <Link to="/affiliate">
            <div className="py-10 px-7 bg-base-100 shadow-md rounded-lg text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-24 mx-auto mb-2" src={service5} alt="" />
              <p>Affiliate Marketing Solutions</p>
            </div>
          </Link>
          <Link to="/adnetwork">
            <div className="py-12 px-8 rounded-lg shadow-md bg-base-100 text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-16 mx-auto mb-2" src={service6} alt="" />
              <p>Ad Network Solutions</p>
            </div>
          </Link>
          <Link to="/personalbranding">
            <div className="py-12 px-8 rounded-lg shadow-md bg-base-100 text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-16 mx-auto mb-2" src={service7} alt="" />
              <p>Personal Branding</p>
            </div>
          </Link>
          <Link to="/bulksms">
            <div className="py-12 px-8 rounded-lg shadow-md bg-base-100 text-secondary hover:bg-secondary hover:text-base-100 duration-500">
              <img className="w-16 mx-auto mb-2" src={service8} alt="" />
              <p>Bulk SMS Services</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
