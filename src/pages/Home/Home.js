import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  return (
    <div className="flex  home-container h-[500px] md:h-[100vh]">
      <div className="containt px-2 md:px-16 mt-32 md:mt-36">
        <h1 className="text-3xl mb-4 text-base-100">We talk solutions that</h1>
        <span className="text-secondary text-4xl">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ["MATTERS", "CONVERTS", "DISRUPTS"],
            }}
          ></Typewriter>
        </span>
        <p className="text-secondary mt-4">
          Learn more about us{" "}
          <FontAwesomeIcon
            className="ml-2"
            icon={faRightLong}
          ></FontAwesomeIcon>
        </p>
      </div>
    </div>
  );
};

export default Home;
