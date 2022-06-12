import React from "react";
import photo2 from "../../../images/photo2.jpeg";
import asset42 from "../../../images/serviceImg/Asset 42.svg";
import "./AdNetwork.css";
import asset35 from "../../../images/serviceImg/Asset 35.svg";

const AdNetwork = () => {
  return (
    <div className="flex">
      <div className="network-img">
        <img className="w-96" src={photo2} alt="" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 py-5 mt-1 md:mt-10 gap-5">
          <div className="flex items-center  shadow-lg bg-base-100 rounded-lg py-5">
            <div>
              <img className="w-14 ml-[-1rem]" src={asset35} alt="" />
            </div>
            <div>
              <h1 className="text-secondary text-xl">BRANDING</h1>
              <p>- Display</p>
              <p>- Video</p>
              <p>- Ad innovation</p>
            </div>
          </div>
          <div className="flex shadow-lg bg-base-100 rounded-md">
            <div>
              <img className="w-10" src={asset35} alt="" />
            </div>
            <div>
              <h1>BRANDING</h1>
              <p>- Display</p>
              <p>- Video</p>
              <p>- Ad innovation</p>
            </div>
          </div>
          <div className="flex shadow-lg bg-base-100 rounded-md">
            <div>
              <img className="w-10" src={asset35} alt="" />
            </div>
            <div>
              <h1>BRANDING</h1>
              <p>- Display</p>
              <p>- Video</p>
              <p>- Ad innovation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdNetwork;
