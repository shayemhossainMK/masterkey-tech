import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import homeVideo from "../../images/video_preview_h264.mp4";
import "./Home.css";

const Home = () => {
  return (
    <div className="h-96">
      <div className="flex flex-col justify-center " style={{ height: "90vh" }}>
        <video src={homeVideo} autoPlay loop muted></video>
        <div className="containt px-2 md:px-10">
          <h1 className="text-4xl  text-white">We talk solutions that</h1>
          <p className="text-white mt-5">
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
