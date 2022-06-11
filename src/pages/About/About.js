import React from "react";
import "./About.css";
import asset2 from "../../images/Asset 2.svg";

const About = () => {
  return (
    <div className="about-container h-screen text-base-100">
      <div className="md:w-8/12 px-5 md:px-20 pt-28">
        <img className="w-28 mb-4 md:mb-2" src={asset2} alt="" />
        <h1 className="text-3xl mb-3">
          We believe, one idea begets others, but <br /> one great idea stays
          stronger <br />
          above all.{" "}
        </h1>
        <p className="mt-5 md:mt-0">
          We are a comprehensive AI based Marketing-Tech solution provider
          company. Providing you 360 degree solutions to make every steps of
          your business journey easier and smoother. Our solutions are purpose
          driven, performance oriented and consulted by highly adored experts in
          the industry. Ability to inaugurate the right technologies with proper
          communication integration makes us different from others.
        </p>
      </div>
    </div>
  );
};

export default About;
