import asset3 from "../../../images/serviceImg/Asset 3.svg";
import coinCount from "../../../images/money-count.png";
import React from "react";
import photo2 from "../../../images/photo2.jpeg";
import asset60 from "../../../images/serviceImg/Asset 60.svg";
import asset56 from "../../../images/serviceImg/Asset 56.svg";
import asset57 from "../../../images/serviceImg/Asset 57.svg";
import asset59 from "../../../images/serviceImg/Asset 59.svg";
import asset52 from "../../../images/serviceImg/Asset 52.svg";
import asset53 from "../../../images/serviceImg/Asset 53.svg";
import SubNavbar from "../../../shared/SubNavbar/SubNavbar";
const AffiliateMarketing = () => {
  return (
    <div>
      <SubNavbar></SubNavbar>
      <div className="bg-primary h-screen">
        <div className="text-center">
          <h1 className="uppercase text-white text-2xl pt-5">
            AFFILIATE MARKETING SOLUTIONS
          </h1>
        </div>
        <div className="px-5 md:px-20 pt-3 md:pt-10">
          <div className="flex ">
            <div className="px-5 md:px-30">
              <img className="w-82" src={asset3} alt="" />
              <p className="px-5 md:px-24 text-white text-xl mt-[-15rem] ">
                For any e-commerce business Affiliate Marketing is a must.
                Because it contributes more than 20% of daily traffic and 10% of
                the sale. In Masterkey we have the best Affiliate Marketing
                Managers who have working experience with Brands established in
                the US, UK, Canada, and South Asian markets.
              </p>
            </div>
            <div>
              <img src={coinCount} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="pb-5">
          <div className="flex ">
            <div className="business-img h-full">
              <img className="w-full h-5/6" src={photo2} alt="" />
            </div>
            <div className="pt-5 ml-[-4rem]">
              <div className="flex">
                <div className="px-7 py-7 bg-base-100 rounded-lg shadow-2xl">
                  <img className="w-16 mx-auto" src={asset60} alt="" />
                </div>
                <div className="px-5 justify-between flex items-center mx-5 bg-base-100 rounded-lg shadow-xl w-full">
                  <p>Making a proper strategic affiliate business plan.</p>
                  <p className="text-4xl  text-gray-400">01</p>
                </div>
              </div>
              <div className="flex mt-5">
                <div className="px-7 py-6 bg-base-100 rounded-lg shadow-2xl">
                  <img className="w-16 mx-auto" src={asset59} alt="" />
                </div>
                <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg w-full justify-between">
                  <p className="">
                    Choosing or creating and setting up the right Affiliate
                    tracking software.
                  </p>
                  <p className="text-4xl text-gray-400">02</p>
                </div>
              </div>
              <div className="flex  mt-5">
                <div className="px-7 py-7 bg-base-100 rounded-lg shadow-2xl">
                  <img className="w-16 mx-auto" src={asset57} alt="" />
                </div>
                <div className="px-6 flex items-center justify-between w-full mx-5 bg-base-100 rounded-lg shadow-lg">
                  <p className="">
                    Set up email automation, trigger emails, and pixels, add
                    resources for affiliates, and then test the platform and
                    make it ready to launch
                  </p>
                  <p className="text-4xl text-gray-400">03</p>
                </div>
              </div>
              <div className="flex mt-5">
                <div className="px-7 py-6 bg-base-100 rounded-lg shadow-2xl">
                  <img className="w-16 mx-auto mt-3" src={asset56} alt="" />
                </div>
                <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg w-full justify-between">
                  <p className="">
                    Recruiting active, engaging affiliates that can drive sales.
                  </p>
                  <p className="text-4xl text-gray-400">04</p>
                </div>
              </div>
              <div className="flex  mt-5">
                <div className="px-7 py-2 bg-base-100 rounded-lg shadow-2xl">
                  <img className="w-16 mt-4 mx-auto" src={asset53} alt="" />
                </div>
                <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg justify-between w-full">
                  <p className="">
                    Managing affiliates to grow the affiliate campaign.
                  </p>
                  <p className="text-4xl text-gray-400">05</p>
                </div>
              </div>
              <div className="flex  mt-5">
                <div className="px-7 py-5 bg-base-100 rounded-lg shadow-2xl">
                  <img className="w-16 mx-auto" src={asset59} alt="" />
                </div>
                <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg justify-between w-full ">
                  <p className="">Fighting with click frauds.</p>
                  <p className="text-4xl text-gray-400 ml-1">06</p>
                </div>
              </div>
              <div className="flex  mt-5">
                <div className="px-7 py-5 bg-base-100 rounded-lg shadow-2xl">
                  <img className="w-16 mx-auto" src={asset59} alt="" />
                </div>
                <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg justify-between w-full">
                  <p className="">Managing payroll.</p>
                  <p className="text-4xl text-gray-400 ml-1">07</p>
                </div>
              </div>
              <div className="flex  mt-5">
                <div className="px-7 py-2 bg-base-100 rounded-lg shadow-2xl">
                  <img className="w-16 mt-4 mx-auto" src={asset52} alt="" />
                </div>
                <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg justify-between w-full">
                  <p className="">Managing Branding by monitoring affiliates</p>
                  <p className="text-4xl text-gray-400">09</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateMarketing;
