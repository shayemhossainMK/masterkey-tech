import React from "react";
import "./BusinessManage.css";
import photo1 from "../../../images/serviceImg/photo1.jpeg";
import asset16 from "../../../images/serviceImg/Asset 15.svg";
import asset14 from "../../../images/serviceImg/Asset 14.svg";
import asset12 from "../../../images/serviceImg/Asset 12.svg";
import asset11 from "../../../images/serviceImg/Asset 11.svg";
const BusinessManage = () => {
  return (
    <div>
      <div className="flex ">
        <div className="business-img h-screen">
          <img className="w-full h-5/6" src={photo1} alt="" />
        </div>
        <div className="pt-5 ml-[-4rem]">
          <div className="flex">
            <div className="px-10 py-2 bg-base-100 rounded-lg shadow-2xl">
              <img className="w-16 mx-auto" src={asset16} alt="" />
              <p className="text-center">
                <small>ERP Software</small>
              </p>
            </div>
            <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-xl">
              <p>
                ERP systems support all aspects of financial management, human
                resources, supply chain management, and manufacturing with your
                core accounting function.
              </p>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="px-10 py-2 bg-base-100 rounded-lg shadow-2xl">
              <img className="w-16 mx-auto" src={asset14} alt="" />
              <p className="text-center">
                <small>HR Software</small>
              </p>
            </div>
            <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
              <p className="">
                Recruitment, payroll, resource planning. At each step we make
                your process most user friendly and easier. It makes your HR
                process most efficient and achieve HR goals.
              </p>
            </div>
          </div>
          <div className="flex  mt-5">
            <div className="px-8 py-2 bg-base-100 rounded-lg shadow-2xl">
              <img className="w-16 mx-auto" src={asset12} alt="" />
              <p className="text-xs text-center">
                Restaurant <br /> Management
              </p>
            </div>
            <div className="px-6 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
              <p className="">
                The secret sauce to a restaurant’s success lies in analytics.
                Restaurant management is made easy by our food-tech solutions.
              </p>
            </div>
          </div>
          <div className="flex  mt-5">
            <div className="px-10 py-2 bg-base-100 rounded-lg shadow-2xl">
              <img className="w-16 mx-auto" src={asset11} alt="" />
              <p className="text-xs text-center mt-2">School Software</p>
            </div>
            <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
              <p className="">
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
