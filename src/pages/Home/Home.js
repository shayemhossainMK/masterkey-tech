import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import homeVideo from "../../images/homeCover.mp4";
import "./Home.css";

const Home = () => {
  return (
    <div className="h-96">
      <div className="flex flex-col " style={{ height: "100vh" }}>
        <video src={homeVideo} autoPlay loop muted></video>
        <div className="containt px-2 md:px-10 mt-52 md:mt-36">
          <h1 className="text-2xl mb-4  text-base-100">
            We talk solutions that
          </h1>
          <span className="text-3xl text-secondary">
            <Typewriter
              words={["MATTERS", "CONVERTS", "DISRUPTS!"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
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
    </div>
  );
};

export default Home;
