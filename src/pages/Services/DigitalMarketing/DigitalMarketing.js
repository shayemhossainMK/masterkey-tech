import React from "react";
import photo2 from "../../../images/Picture2.jpg";
import asset29 from "../../../images/serviceImg/digital-marketing/Asset 29.svg";
import asset28 from "../../../images/serviceImg/digital-marketing/Asset 28.svg";
import asset27 from "../../../images/serviceImg/digital-marketing/Asset 27.svg";
import asset26 from "../../../images/serviceImg/digital-marketing/Asset 26.svg";
import asset23 from "../../../images/serviceImg/digital-marketing/Asset 23.svg";
import asset24 from "../../../images/serviceImg/digital-marketing/Asset 24.svg";
import asset25 from "../../../images/serviceImg/digital-marketing/Asset 25.svg";
import "./DigitalMarketing.css";
import SubNavbar from "../../../shared/SubNavbar/SubNavbar";
import FooterTwo from "../../../shared/FooterTwo/FooterTwo";

const DigitalMarketing = () => {
  return (
    <div className="pb-10 md:pb-0">
      <div className="hidden md:block  md:sticky  md:top-20 md:z-50">
        <SubNavbar></SubNavbar>
      </div>

      <div className="md:flex ">
        <div className="h-full md:sticky top-0 z-10  bg-gradient-to-tl from-[#6A0DAD] to-gray-800">
          <img
            className=" img-container h-screen mix-blend-overlay relative z-10 opacity-70"
            src={photo2}
            alt=""
          />
          <div className=" absolute top-56 z-20 px-5">
            <h1 className="text-white text-4xl md:fixed">
              DIGITAL <br /> MARKETING <br /> SOLUTIONS
            </h1>
            <h4 className="text-xl text-white uppercase md:fixed mt-7 md:mt-36">
              Service
            </h4>
            <progress
              class="progress progress-warning w-56 md:fixed  mt-3 md:mt-44 "
              value="20"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="py-5 pl-2 md:ml-[-4rem] z-20">
          <div className="flex items-center md:items-stretch">
            <div className="px-10 py-3 bg-base-100 rounded-lg shadow-2xl h-32 md:h-fit">
              <img className="w-10 mx-auto" src={asset29} alt="" />
              <p className="text-center text-xs mt-2">Email Marketing</p>
            </div>
            <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-xl ">
              <p className="py-1 md:py-0">
                Generating an impressive ROI, email is a powerhouse channel that
                can drive incredible incremental revenue with a comprehensive
                strategy and solid execution.
              </p>
            </div>
          </div>
          <div className="flex items-center md:items-stretch mt-5">
            <div className="px-10 md:px-7 py-3 bg-base-100 rounded-lg shadow-2xl h-32 md:h-fit ">
              <img className="w-12 mx-auto" src={asset28} alt="" />
              <p className="text-center text-xs mt-2">Social media marketing</p>
            </div>
            <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
              <p className="py-1 md:py-0">
                Our social media marketing team isn’t limited to just making
                visual and content writing. Our magic happens when you meet the
                performance-oriented inauguration.
              </p>
            </div>
          </div>
          <div className="flex  items-center md:items-stretch mt-5">
            <div className=" px-[32px] md:px-[26px] py-1 bg-base-100 rounded-lg shadow-2xl h-32 md:h-fit">
              <img className="w-11 mx-auto" src={asset27} alt="" />
              <p className="text-xs text-center mt-2">
                Multimedia content development
              </p>
            </div>
            <div className="px-6 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
              <p className="py-1 md:py-0">
                Multimedia content development is important in today’s world.
                For instance, images and videos speak a thousand words. People
                can learn more about a business through a picture and video,
                more than through a blog post.
              </p>
            </div>
          </div>
          <div className="flex items-center md:items-stretch mt-5">
            <div className="px-[45px] md:px-11 py-1 bg-base-100 rounded-lg shadow-2xl h-32 md:h-fit">
              <img className="w-10 mx-auto" src={asset26} alt="" />
              <p className="text-xs text-center mt-2">
                Mobile content solution
              </p>
            </div>
            <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
              <p className="py-1 md:py-0">
                Mobile content management (MCM) is a set of technologies that
                provide secure access to corporate data on smartphones, tablets,
                and other endpoint devices. The main component of a mobile
                content management system is a file storage and file sharing
                service.
              </p>
            </div>
          </div>
          <div className="flex items-center md:items-stretch mt-5">
            <div className="px-10 md:px-11 py-3 bg-base-100 rounded-lg shadow-2xl h-32 md:h-fit">
              <img className="w-10 mx-auto" src={asset26} alt="" />
              <p className="text-xs text-center mt-2">Email Marketing</p>
            </div>
            <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
              <p className="py-1 md:py-0">
                Mobile content management (MCM) is a set of technologies that
                provide secure access to corporate data on smartphones, tablets,
                and other endpoint devices. The main component of a mobile
                content management system is a file storage and file sharing
                service.
              </p>
            </div>
          </div>
          <div className="flex items-center md:items-stretch  mt-5">
            <div className="px-[47px] md:px-[50px] py-4 bg-base-100 rounded-lg shadow-2xl h-32 md:h-fit">
              <img className="w-12 mx-auto" src={asset23} alt="" />
              <p className="text-xs text-center mt-2">SEO services</p>
            </div>
            <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
              <p className="py-1 md:py-0">
                Capture more online sales with our ecommerce SEO services. Get
                access the team and tech that have helped our grow and
                accelerate your earnings. Learn more about our tech-enabled
                ecommerce SEO services now or request a custom proposal for your
                store
              </p>
            </div>
          </div>
          <div className="flex items-center md:items-stretch mt-5">
            <div className="px-[33px] md:px-8 py-2 bg-base-100 rounded-lg shadow-2xl h-32 md:h-fit">
              <img className="w-10 mx-auto" src={asset24} alt="" />
              <p className="text-xs text-center mt-1">
                Conversation rate optimization
              </p>
            </div>
            <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
              <p className="py-1 md:py-0">
                CRO strategy is designed to convert more of your visitors into
                paying customers. We will aid you convert your target audiences
                into paying customers. Our enriched library of user data has
                proven result oriented strategies
              </p>
            </div>
          </div>
          <div className="flex items-center md:items-stretch mt-5">
            <div className="px-11 md:px-12 py-3 bg-base-100 rounded-lg shadow-2xl h-32 md:h-fit">
              <img className="w-12 mx-auto" src={asset25} alt="" />
              <p className="text-xs text-center mt-2">Total branding</p>
            </div>
            <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
              <p className="py-1 md:py-0">
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
  );
};

export default DigitalMarketing;
