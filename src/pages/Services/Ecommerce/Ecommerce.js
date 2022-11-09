import React from "react";
import photo2 from "../../../images/photo2.jpeg";
import asset32 from "../../../images/serviceImg/ecommerce/Asset 32.svg";
import asset31 from "../../../images/serviceImg/ecommerce/Asset 31.svg";
import asset30 from "../../../images/serviceImg/ecommerce/Asset 30.svg";
import SubNavbar from "../../../shared/SubNavbar/SubNavbar";
import photo1 from "../../../images/e-commerce.jpg";
import "./Ecommerce.css";

const Ecommerce = () => {
  return (
    <div>
      <div className="hidden md:block md:sticky  md:top-20 md:z-50">
        <SubNavbar></SubNavbar>
      </div>
      <div>
        <div className="md:flex ">
          <div className="h-full md:sticky top-0 z-10  bg-gradient-to-tl from-[#6A0DAD] to-gray-800">
            <img
              className="w-full md:w-[900px] h-[650px] md:h-screen mix-blend-overlay relative z-10 opacity-70"
              src={photo1}
              alt=""
            />
            <div className="absolute top-[15rem] md:top-56 z-20 px-5">
              <h1 className="text-white text-4xl">
                E-COMMERCE <br />
                SOLUTIONS
              </h1>
              <h4 className="text-xl mt-10 text-white uppercase">Service</h4>
              <progress
                class="progress progress-warning w-56 "
                value="50"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="pt-5 pl-2 md:ml-[-4rem] z-20">
            <div className="flex items-center md:items-stretch">
              <div className="px-10 py-4 bg-base-100 rounded-lg shadow-2xl h-32 md:h-fit">
                <img className="w-10 mx-auto" src={asset32} alt="" />
                <p className="text-center text-xs mt-2">
                  E-commerce Website/App
                </p>
              </div>
              <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-xl">
                <p className="py-1 md:py-0">
                  Create a beautiful online store/e-commerce app or website and
                  start selling online. We have more than 5 years of experience
                  in developing e-commerce businesses. We can help you to set up
                  your online footprint and create an e-commerce platform for
                  your business.
                </p>
              </div>
            </div>
            <div className="flex items-center md:items-stretch mt-5">
              <div className="px-11 py-4 bg-base-100 rounded-lg shadow-2xl h-32 md:h-fit">
                <img className="w-12 mx-auto" src={asset31} alt="" />
                <p className="text-center text-xs mt-2">
                  Multi Store Ecommerce
                </p>
              </div>
              <div className="px-5 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
                <p className="py-1 md:py-0">
                  A multi-store eCommerce platform allows you to launch and
                  manage multiple stores from a single platform.
                  enterprise-level companies can offer a unique shopping
                  experience even while handling multiple brands and not
                  compromising on centralized services for their unique
                  customers.
                </p>
              </div>
            </div>
            <div className="flex items-center md:items-stretch mt-5">
              <div className="px-10 py-5 bg-base-100 rounded-lg shadow-2xl h-32 md:h-fit">
                <img className="w-12 mx-auto" src={asset30} alt="" />
                <p className="text-xs text-center mt-2">Marketplacet</p>
              </div>
              <div className="px-6 flex items-center mx-5 bg-base-100 rounded-lg shadow-lg">
                <p className="py-1 md:py-0">
                  If you are thinking of creating and maintaining your
                  marketplace we can help you to accomplish your business. We
                  have a proven track record of building and maintaining
                  Marketplace. Also, our industry experts can audit your
                  existing platform and help to grow your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
