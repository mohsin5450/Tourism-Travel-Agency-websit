import React from "react";
import packages from "../../Content/PackagesContent";
import { useParams } from "react-router-dom";
const PackageDetail = () => {
  let { name } = useParams();
  return (
    <div className="flex min-h-screen w-screen bg-[#060B07]">
      <div className=" mt-24">
        {packages
          .filter((packages) => packages.name === name)
          .map((filterPackage) => (
            <div className="flex flex-col">
              <div className="flex justify-center  mb-8">
                <h1 className="text-[#E7602A] text-3xl">
                  {filterPackage.name}
                </h1>
              </div>
              <div className="flex w-screen justify-center items-center ">
                <img
                  src={filterPackage.image}
                  alt="not avalibale"
                  className="md:w-[30rem] w-[25rem]"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-around ml-8">
                <div className=" flex flex-col justify-center mt-8 ">
                  <p className=" text-[#E7602A] text-2xl ">Package inclusion</p>
                  <ul className=" list-disc">
                    {filterPackage.pkg.map((pkg,index) => (
                      <li  key={index} className="text-white">{pkg.p}</li>
                    ))}
                  </ul>
                </div>

                <div className=" flex flex-col justify-center mt-8 ">
                  <p className=" text-[#E7602A] text-2xl ">Term & Conditions</p>
                  <ul className=" list-disc">
                    {filterPackage.condition.map((cond,index) => (
                      <li  key={index} className="text-white">{cond.p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PackageDetail;
