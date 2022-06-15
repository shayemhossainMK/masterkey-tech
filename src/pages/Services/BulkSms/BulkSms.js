import React from "react";
import SubNavbar from "../../../shared/SubNavbar/SubNavbar";
import "./BulkSms.css";
import photo1 from "../../../images/services/mobile-app/Asset 80.svg";
import photo2 from "../../../images/services/mobile-app/Asset 79.svg";
import photo3 from "../../../images/services/mobile-app/Asset 78.svg";
import photo4 from "../../../images/serviceImg/Asset 77.svg";

const BulkSms = () => {
  return (
    <div>
      <div className="hidden md:block md:sticky  md:top-20 md:z-50">
        <SubNavbar></SubNavbar>
      </div>
      <div className="bulk-container h-full pb-28">
        <div className="md:flex justify-center items-center h-screen">
          <div>
            <div className="px-5 py-10">
              <h1 className="text-white text-4xl md:fixed md:mt-[-7rem]">
                BULK SMS <br /> SERVICE
              </h1>
              <h4 className="text-xl  text-white uppercase mt-6 md:mt-0 md:fixed">
                Service
              </h4>
              <progress
                class="progress progress-warning w-56 md:fixed mt-3 md:mt-10 "
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
          <div
            className="px-5 md:flex
          flex-col items-center  md:px-36 mt-5"
          >
            <div className=" md:ml-96">
              <p className="p-5 rounded-xl bg-base-100 mb-6">
                We provide a comprehensive messaging platform that has
                integration with bulk SMS, WhatsApp, and email. We have Sorted
                Database of <span className="font-bold">1.5 corer</span> users
                in different categories like Fashion, e-commerce, Electronics,
                Education etc. Our platform is not only user-friendly, but also
                it provides you with the most necessary features. We also have a
                rich database of users that helps you increase your lead for
                initiating a selling funnel.
              </p>
            </div>
            <div className="mt-14  grid grid-cols-3 gap-4 md:gap-10 md:ml-96">
              <div className="p-5 rounded-lg bg-base-100 md:w-36 h-28">
                <img className="w-12 h-10 mx-auto" src={photo1} alt="" />
                <p className="text-center mt-3 text-xs">WhatsApp Messaging</p>
              </div>
              <div className="p-5 rounded-lg bg-base-100 md:w-36">
                <img className="w-14 mx-auto" src={photo2} alt="" />
                <p className="text-center text-xs mt-3">
                  Masterkey User Database & SMS Platform
                </p>
              </div>
              <div className="p-5 rounded-lg bg-base-100 md:w-36 h-28">
                <img className="w-12 mx-auto" src={photo3} alt="" />
                <p className="text-center text-xs mt-3">Email Services</p>
              </div>
              <div></div>
              <div className="p-5 rounded-lg bg-base-100 md:w-36">
                <img className="w-12 mx-auto" src={photo4} alt="" />
                <p className="text-center text-xs mt-3">Email Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkSms;
