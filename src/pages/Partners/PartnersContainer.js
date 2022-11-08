import React from "react";

const PartnersContainer = ({ brand }) => {
  const { name, img } = brand;
  return (
    <div className="md:border md:border-gray-100">
      <div className="bg-base-100 h-36 flex flex-col items-center justify-center relative  rounded-lg md:rounded-none hover:shadow-sm hover:scale-105 hover:bg-gray-300 hover:z-20 duration-300 ">
        <img className="w-40" src={img} alt="" />
        <p className="absolute bottom-2 text-secondary text-sm">{name}</p>
      </div>
    </div>
  );
};

export default PartnersContainer;
