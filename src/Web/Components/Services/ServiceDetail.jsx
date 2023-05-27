import React from "react";
import service from "../../Content/ServiceContent";
import { useParams } from "react-router-dom";
const ServiceDetail = () => {
  let { name } = useParams();
  return (
    <div className=" flex  h-screen w-screen bg-[#060B07] ">
      <div className="flex justify-center items-center">
        {service
          .filter((service) => service.name === name)
          .map((filterService) => (
            <div className="flex flex-col justify-center items-center text-center">
              <div className="flex justify-center mb-14  ">
                <h1 className="text-[#E7602A] text-3xl">
                  {filterService.name}
                </h1>
              </div>
              <div className="flex justify-center text-center items-center flex-col md:flex-row">
                <div className="flex  justify-center items-center mb-8 md:mr-5 ">
                  <img
                    src={filterService.image}
                    alt="not available"
                    className="w-96 rounded-md"
                  />
                </div>
                <div className="flex md:w-1/2 text-center">
                  <p className="text-white text-1xl">{filterService.detail}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
