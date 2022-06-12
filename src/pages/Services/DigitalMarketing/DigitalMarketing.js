import React from "react";
import photo2 from "../../../images/photo2.jpeg";
import asset29 from "../../../images/serviceImg/digital-marketing/Asset 29.svg";
import asset28 from "../../../images/serviceImg/digital-marketing/Asset 28.svg";
import asset27 from "../../../images/serviceImg/digital-marketing/Asset 27.svg";
import asset26 from "../../../images/serviceImg/digital-marketing/Asset 26.svg";
import asset23 from "../../../images/serviceImg/digital-marketing/Asset 23.svg";
import asset24 from "../../../images/serviceImg/digital-marketing/Asset 24.svg";
import asset25 from "../../../images/serviceImg/digital-marketing/Asset 25.svg";
import "./DigitalMarketing.css";
import SubNavbar from "../../../shared/SubNavbar/SubNavbar";

const DigitalMarketing = () => {
  return (
    <div>
      <SubNavbar></SubNavbar>
      <div className="">
        <div className="flex ">
          <div className="business-img h-full sticky top-0 z-10  bg-gradient-to-tl from-[#6A0DAD] to-gray-800">
            <img
              className="w-full h-full mix-blend-overlay"
              src={photo2}
              alt=""
            />
          </div>
          <div className="py-5 ml-[-4rem] z-20">
            <div className="flex">
              <div className="px-10 py-1 bg-base-100 rounded-lg shadow-2xl">
                <img className="w-12 mx-auto" src={asset29} alt="" />
                <p className="text-center">
                  <small>Email Marketing</small>
                </p>
              </div>
              <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-xl">
                <p>
                  Generating an impressive ROI, email is a powerhouse channel
                  that can drive incredible incremental revenue with a
                  comprehensive strategy and solid execution.
                </p>
              </div>
            </div>
            <div className="flex mt-5">
              <div className="px-7 py-2 bg-base-100 rounded-lg shadow-2xl">
                <img className="w-12 mx-auto" src={asset28} alt="" />
                <p className="text-center">
                  <small>Social media marketing</small>
                </p>
              </div>
              <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
                <p className="">
                  Our social media marketing team isn’t limited to just making
                  visual and content writing. Our magic happens when you meet
                  the performance-oriented inauguration.
                </p>
              </div>
            </div>
            <div className="flex  mt-5">
              <div className="px-8 py-2 bg-base-100 rounded-lg shadow-2xl">
                <img className="w-12 mx-auto" src={asset27} alt="" />
                <p className="text-xs text-center">
                  Multimedia content development
                </p>
              </div>
              <div className="px-6 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
                <p className="">
                  Multimedia content development is important in today’s world.
                  For instance, images and videos speak a thousand words. People
                  can learn more about a business through a picture and video,
                  more than through a blog post.
                </p>
              </div>
            </div>
            <div className="flex  mt-5">
              <div className="px-12 py-2 bg-base-100 rounded-lg shadow-2xl">
                <img className="w-12 mx-auto" src={asset26} alt="" />
                <p className="text-xs text-center mt-2">School Software</p>
              </div>
              <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
                <p className="">
                  Mobile content management (MCM) is a set of technologies that
                  provide secure access to corporate data on smartphones,
                  tablets, and other endpoint devices. The main component of a
                  mobile content management system is a file storage and file
                  sharing service.
                </p>
              </div>
            </div>
            <div className="flex  mt-5">
              <div className="px-12 py-2 bg-base-100 rounded-lg shadow-2xl">
                <img className="w-12 mx-auto" src={asset23} alt="" />
                <p className="text-xs text-center mt-2">SEO services</p>
              </div>
              <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
                <p className="">
                  Capture more online sales with our ecommerce SEO services. Get
                  access the team and tech that have helped our grow and
                  accelerate your earnings. Learn more about our tech-enabled
                  ecommerce SEO services now or request a custom proposal for
                  your store
                </p>
              </div>
            </div>
            <div className="flex  mt-5">
              <div className="px-7 py-2 bg-base-100 rounded-lg shadow-2xl">
                <img className="w-12 mx-auto" src={asset24} alt="" />
                <p className="text-xs text-center mt-2">
                  Conversation rate optimization
                </p>
              </div>
              <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
                <p className="">
                  CRO strategy is designed to convert more of your visitors into
                  paying customers. We will aid you convert your target
                  audiences into paying customers. Our enriched library of user
                  data has proven result oriented strategies
                </p>
              </div>
            </div>
            <div className="flex  mt-5">
              <div className="px-7 py-2 bg-base-100 rounded-lg shadow-2xl">
                <img className="w-12 mx-auto" src={asset24} alt="" />
                <p className="text-xs text-center mt-2">
                  Conversation rate optimization
                </p>
              </div>
              <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
                <p className="">
                  CRO strategy is designed to convert more of your visitors into
                  paying customers. We will aid you convert your target
                  audiences into paying customers. Our enriched library of user
                  data has proven result oriented strategies
                </p>
              </div>
            </div>
            <div className="flex  mt-5">
              <div className="px-11 py-2 bg-base-100 rounded-lg shadow-2xl">
                <img className="w-12 mx-auto" src={asset25} alt="" />
                <p className="text-xs text-center mt-2">Total branding</p>
              </div>
              <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
                <p className="">
                  From identity creation to promotion, a total branding support
                  will help you promote your brand to the right audiences. our
                  experienced industry experts will aid you to develop the your
                  from ground up to meet the best possible outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
