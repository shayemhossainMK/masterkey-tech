import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  BallTriangle,
  Circles,
  Grid,
  LineWave,
  MutatingDots,
  Oval,
  Puff,
  Rings,
  TailSpin,
  Triangle,
  Watch,
} from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BallTriangle color="#ED6949" height={100} width={100} />
    </div>
  );
};

export default Loading;
