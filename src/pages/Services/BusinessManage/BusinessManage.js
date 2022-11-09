import React from "react";
import "./BusinessManage.css";
import photo1 from "../../../images/Picture1.jpg";
import asset16 from "../../../images/serviceImg/Asset 15.svg";
import asset14 from "../../../images/serviceImg/Asset 14.svg";
import asset12 from "../../../images/serviceImg/Asset 12.svg";
import asset11 from "../../../images/serviceImg/Asset 11.svg";
import SubNavbar from "../../../shared/SubNavbar/SubNavbar";
const BusinessManage = () => {
  return (
    <div>
      <div className="hidden md:block md:sticky  md:top-20 md:z-50">
        <SubNavbar></SubNavbar>
      </div>
      <div className="md:flex md:z-10 ">
        <div className="h-full md:sticky top-0 z-10  bg-gradient-to-tl from-[#6A0DAD] to-gray-800">
          <img
            className="w-full md:w-[900px] h-[650px] md:h-screen mix-blend-overlay relative z-10 opacity-70"
            src={photo1}
            alt=""
          />
          <div className="absolute top-[15rem] md:top-56 z-20 px-5">
            <h1 className="text-white text-4xl">
              BUSINESS <br />
              MANAGEMENT <br /> SOLUTIONS
            </h1>
            <h4 className="text-xl mt-10 text-white uppercase">Service</h4>
            <progress
              class="progress progress-warning w-56 "
              value="10"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="pt-5 pl-2 md:ml-[-4rem] z-20 pb-10">
          <div className="flex items-center md:items-stretch">
            <div className="px-10 py-2 bg-base-100 rounded-lg shadow-2xl h-28 md:h-fit">
              <img className="w-16 mx-auto" src={asset16} alt="" />
              <p className="text-center text-xs mt-2">ERP Software</p>
            </div>
            <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-xl">
              <p className=" py-1 md:py-0 ">
                ERP systems support all aspects of financial management, human
                resources, supply chain management, and manufacturing with your
                core accounting function.
              </p>
            </div>
          </div>
          <div className="flex items-center md:items-stretch mt-5">
            <div className="px-10 py-2 bg-base-100 rounded-lg shadow-2xl h-28 md:h-fit">
              <img className="w-16 mx-auto" src={asset14} alt="" />
              <p className="text-xs text-center mt-2 ">HR Software</p>
            </div>
            <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
              <p className="py-1 md:py-0">
                Recruitment, payroll, resource planning. At each step we make
                your process most user friendly and easier. It makes your HR
                process most efficient and achieve HR goals.
              </p>
            </div>
          </div>
          <div className="flex items-center md:items-stretch  mt-5">
            <div className="px-7 py-2 bg-base-100 rounded-lg shadow-2xl h-28 md:h-fit">
              <img className="w-11 mx-auto" src={asset12} alt="" />
              <p className="text-xs text-center mt-2">
                Restaurant <br /> Management
              </p>
            </div>
            <div className="px-6 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
              <p className="py-1 md:py-0">
                The secret sauce to a restaurant’s success lies in analytics.
                Restaurant management is made easy by our food-tech solutions.
              </p>
            </div>
          </div>
          <div className="flex items-center md:items-stretch  mt-5">
            <div className="px-10 py-2 bg-base-100 rounded-lg shadow-2xl h-28 md:h-fit">
              <img className="w-16 mx-auto" src={asset11} alt="" />
              <p className="text-xs text-center mt-2">School Software</p>
            </div>
            <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
              <p className="py-1 md:py-0">
                This software can automate and optimize teacher workload, helps
                schools to simplify enrollment processing, and enables teachers
                to monitor students’ academic progress. Corporate data
                management application
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessManage;
