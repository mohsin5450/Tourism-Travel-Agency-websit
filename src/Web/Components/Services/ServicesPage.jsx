import React from "react";
import service from "../../Content/ServiceContent";
import { Link } from "react-router-dom";
const ServicesPage = () => {
  return (
    <>
      <div name="Services" className="flex w-screen bg-[#060B07] ">
        <div className="mt-24">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                <span className="font-bold text-3xl text-[#E7602A]  mb-2 block">
                  Our Services
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-items-center md:mx-8 ">
            {service.map((service) => (
              <div key={service.id} className="  w-38 md:w-1/3  px-4">
                <div
                  key={service.id}
                  className="
                    flex
                    flex-col
                    justify-center
              text-center
              item-center
               rounded-[20px]
               bg-[#060B07]
               shadow-md
               hover:shadow-lg
               hover:shadow-[#E7602A]
               mb-8
               "
                >
                  <div className="rounded-2xl">
                    <img
                      src={service.image}
                      alt="not available"
                      width="600"
                      heigth="400"
                      className="rounded-2xl"
                    />
                  </div>
                  <h4 className="font-bold text-xl text-dark mb-3 mt-2 text-[#E7602A]">
                    {service.name}
                  </h4>
                  <p className="text-white">{service.description}</p>
                  <div className="flex justify-center mb-5">
                    <div className=" flex bg-[#061C38]  mt-2 rounded-md  shadow-md hover:shadow-lg">
                      <Link
                        to={"/Services/" + service.name}
                        className="   text-white text-1xl p-2 font-bold"
                      >
                        View detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
