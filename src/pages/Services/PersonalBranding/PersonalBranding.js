import React from "react";
import SubNavbar from "../../../shared/SubNavbar/SubNavbar";
import "./PersonalBranding.css";
import photo8 from "../../../images/services/Picture8.png";
import photo1 from "../../../images/services/Picture10.png";
import photo2 from "../../../images/services/Picture11.png";
import photo3 from "../../../images/services/Picture12.png";
import photo4 from "../../../images/services/Picture13.png";
import Typewriter from "typewriter-effect";

const PersonalBranding = () => {
  return (
    <div className="branding-container">
      <SubNavbar></SubNavbar>
      <div className="bg-base-200 h--full">
        <div className="px-5 md:px-20 pt-10 h-screen">
          <div class="flex">
            <div>
              <img className="h-full rounded-lg shadow-2xl" src={photo8} />
            </div>
            <div className="px-36 mt-20">
              <h1 class="text-4xl text-primary text-center mb-4">
                PERSONAL BRANDING
              </h1>
              <div className="flex shadow-2xl p-10 bg-base-100 mt-10 rounded-3xl ">
                <div>
                  <p className="text-4xl text-primary">92% of people</p>
                </div>
                <div>
                  <p className="pl-5">
                    Trust recommendations from individuals over brands as a
                    result of personal branding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <img className="w-56" src={photo1} alt="" />
          </div>
          <div>
            <img className="w-60 mx-10" src={photo2} alt="" />
            <h1 className="text-xl text-white mt-[-3rem] mx-14">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [`PERSONAL BRANDING`],
                }}
              ></Typewriter>
            </h1>
          </div>
          <div>
            <img className="w-56" src={photo3} alt="" />
            <img className="w-56" src={photo4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalBranding;
