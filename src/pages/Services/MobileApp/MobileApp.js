import React from "react";
import SubNavbar from "../../../shared/SubNavbar/SubNavbar";
import "./MobileApp.css";
import photo7 from "../../../images/services/Picture7.jpg";
import img1 from "../../../images/services/mobile-app/Asset 76.svg";
import img2 from "../../../images/services/mobile-app/Asset 75.svg";
import img3 from "../../../images/services/mobile-app/Asset 74.svg";
import img4 from "../../../images/services/mobile-app/Asset 73.svg";
import img5 from "../../../images/services/mobile-app/Asset 72.svg";
import img6 from "../../../images/services/mobile-app/Asset 71.svg";
import img7 from "../../../images/services/mobile-app/Asset 70.svg";
import img8 from "../../../images/services/mobile-app/Asset 69.svg";
import img9 from "../../../images/services/mobile-app/Asset 68.svg";
import img10 from "../../../images/services/mobile-app/Asset 67.svg";
import img11 from "../../../images/services/mobile-app/Asset 66.svg";
import img12 from "../../../images/services/mobile-app/Asset 65.svg";
import img13 from "../../../images/services/mobile-app/Asset 64.svg";
import img14 from "../../../images/services/mobile-app/Asset 63.svg";
import img15 from "../../../images/services/mobile-app/Asset 62.svg";
import img16 from "../../../images/services/mobile-app/Asset 61.svg";

const MobileApp = () => {
  return (
    <div>
      <SubNavbar></SubNavbar>
      <div>
        <div className="app-container h-[80vh]">
          <h1 className="text-4xl text-white text-center pt-5 md:pt-8">
            MOBILE APP & WEB DEVLOPMENT
          </h1>
          <p
            className="text-white text-center text-xl mt-5 "
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Our versatile and super-talented tech team can <br /> provide
            solutions to your needs.
          </p>
          <h1 className="text-5xl text-white text-center mt-20">
            You Name it,
            <br /> We can do it…
          </h1>
        </div>
      </div>
      <div>
        <div className="flex">
          <div className="network-img h-full sticky top-0 z-10  bg-gradient-to-tl from-[#6A0DAD] to-gray-800">
            <img
              className="w-full h-screen mix-blend-overlay relative z-10 opacity-70"
              src={photo7}
              alt=""
            />
            <div className=" absolute top-56 z-20 px-5">
              <h1 className="text-white text-4xl">
                MOBILE APP <br /> & WEB <br /> DEVLOPMENT
              </h1>
              <h4 className="text-xl mt-10 text-white uppercase">Service</h4>
              <progress
                class="progress progress-warning w-56 "
                value="30"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="mx-5 py-10">
            <div className="grid grid-cols-4 justify-center gap-5">
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-20 mx-auto mb-3" src={img1} alt="" />
                <p className="text-center text-xs">Website Development</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-20 mx-auto mb-3" src={img2} alt="" />
                <p className="text-xs text-center">Newspaper Website</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-20 mx-auto mb-3" src={img3} alt="" />
                <p className="text-center text-xs">WordPress Development</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-20 mx-auto mb-3" src={img4} alt="" />
                <p className="text-center text-xs">Web Design</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-20 mx-auto mb-3" src={img5} alt="" />
                <p className="text-center text-xs">Cloud & Cyber Security</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-20 mx-auto mb-3" src={img6} alt="" />
                <p className="text-center text-xs">Chat Bots</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-20 mx-auto mb-3" src={img7} alt="" />
                <p className="text-center text-xs">iOS App Development</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-10 mx-auto mb-3" src={img8} alt="" />
                <p className="text-center text-xs">Android App Development</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-20 mx-auto mb-3" src={img9} alt="" />
                <p className="text-center text-xs">Food Delivery App</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-20 mx-auto mb-3" src={img10} alt="" />
                <p className="text-center text-xs">Tracking App</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-20 mx-auto mb-3" src={img11} alt="" />
                <p className="text-center text-xs">Blockchain Development</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-20 mx-auto mb-3" src={img12} alt="" />
                <p className="text-center text-xs">Web Application</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-20 mx-auto mb-3" src={img13} alt="" />
                <p className="text-center text-xs">Website Redesign</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-14 mx-auto mb-3" src={img14} alt="" />
                <p className="text-center text-xs">Website maintenance</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-14 mx-auto mb-3" src={img15} alt="" />
                <p className="text-center text-xs">UX/UI Development</p>
              </div>
              <div className=" p-5 shadow-xl rounded-xl">
                <img className="w-14 mx-auto mb-3" src={img16} alt="" />
                <p className="text-center text-xs">Facebook Applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
