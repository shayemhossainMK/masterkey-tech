import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PartnersContainer from "./PartnersContainer";

const Partners = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch(`partners.json`)
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  console.log(brands);
  return (
    <div className="py-10 px-5 md:px-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-center font-semibold text-2xl uppercase text-primary ">
          Our Partners
        </h1>
        <div className=" mt-6 md:mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-0">
            {brands.map((brand) => (
              <PartnersContainer brand={brand}></PartnersContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
