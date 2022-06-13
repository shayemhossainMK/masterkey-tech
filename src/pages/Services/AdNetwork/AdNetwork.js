import React from "react";
import photo2 from "../../../images/services/Picture3.jpg";
import asset42 from "../../../images/serviceImg/Asset 42.svg";
import "./AdNetwork.css";
import asset35 from "../../../images/serviceImg/Asset 35.svg";
import SubNavbar from "../../../shared/SubNavbar/SubNavbar";
import photo4 from "../../../images/services/Picture4.png";

const AdNetwork = () => {
  return (
    <div>
      <SubNavbar></SubNavbar>
      <div className="flex">
        <div className="network-img h-full sticky top-0 z-10  bg-gradient-to-tl from-[#6A0DAD] to-gray-800">
          <img
            className="w-full h-screen mix-blend-overlay relative z-10 opacity-70"
            src={photo2}
            alt=""
          />
          <div className=" absolute top-56 z-20 px-5">
            <div className="w-60">
              <img className="w-28 mb-4" src={photo4} alt="" />
            </div>
            <h1 className="text-white text-4xl">
              ADS NETWORK <br /> SUPPORT
            </h1>
            <h4 className="text-xl mt-10 text-white uppercase">Service</h4>
            <progress
              class="progress progress-warning w-56 "
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="px-5 my-7">
          <h1 className="text-3xl text-primary space-y-5">
            MK ADS DIGITAL BRINGS <br />
            <span className="text-red-500 underline">QUALITY TRAFFIC</span> THAT
            MAKES <br />{" "}
            <span className="text-red-500 underline">CONVERSION</span> EASIER.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 md:mt-20">
            <div className="px-3 py-3 text-center rounded-xl bg-base-100 shadow-2xl">
              <img className="w-8 mx-auto" src={asset42} alt="" />
              <h1 className="text-3xl text-secondary my-2">1500+</h1>
              <p>Publishers App & Web</p>
            </div>
            <div className="px-3 py-3 shadow-2xl text-center rounded-xl">
              <img className="w-8 mx-auto " src={asset42} alt="" />
              <h1 className="text-3xl text-secondary my-2">10000+</h1>
              <p>Database of publishers</p>
            </div>
            <div className="px-3 text-center shadow-xl rounded-lg py-3">
              <img className="w-8 mx-auto" src={asset42} alt="" />
              <h1 className="text-secondary text-3xl my-2">$100K+</h1>
              <p>Monthly Sale</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 py-5 mt-1 md:mt-10 gap-8">
            <div className="flex items-center  shadow-lg bg-base-100 rounded-lg py-7">
              <div>
                <img className="w-14 ml-[-1rem]" src={asset35} alt="" />
              </div>
              <div>
                <h1 className="text-secondary text-xl mb-2">BRANDING</h1>
                <p>- Display</p>
                <p>- Video</p>
                <p>- Ad innovation</p>
              </div>
            </div>
            <div className="flex items-center shadow-lg bg-base-100 rounded-md py-7">
              <div>
                <img className="w-14 ml-[-1rem]" src={asset35} alt="" />
              </div>
              <div>
                <h1 className="text-secondary text-xl mb-2">ASSOCIATION</h1>
                <p>- Worldwide partners</p>
                <p>
                  - Top publishers provide <br /> quality traffic
                </p>
              </div>
            </div>
            <div className="flex items-center  shadow-lg bg-base-100 rounded-lg py-10">
              <div>
                <img className="w-14 ml-[-1rem]" src={asset35} alt="" />
              </div>
              <div>
                <h1 className="text-secondary text-xl mb-2">PERFORMANCE</h1>
                <p>- Mobile</p>
                <p>- Desktop</p>
              </div>
            </div>
            <div className="flex items-center  shadow-lg bg-base-100 rounded-lg">
              <div>
                <img className="w-14 ml-[-1rem]" src={asset35} alt="" />
              </div>
              <div>
                <h1 className="text-secondary text-xl mb-2">TARGETING</h1>
                <p>- Ad Targeting</p>
                <p>- User Profiling</p>
                <p>- Customer-base Growth</p>
              </div>
            </div>
            <div className="flex items-center  shadow-lg bg-base-100 rounded-lg py-5">
              <div>
                <img className="w-14 ml-[-1rem]" src={asset35} alt="" />
              </div>
              <div>
                <h1 className="text-secondary text-xl mb-2">
                  DATA <br /> INTELLIGENCE
                </h1>
                <p>- Specific-user targeting</p>
                <p>- Confirmed purchases</p>
                <p>- Ad innovation</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button className="btn btn-secondary px-20 text-white">
              EXPLORE MORE: WWW.MKADSDIGITAL.COM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdNetwork;
