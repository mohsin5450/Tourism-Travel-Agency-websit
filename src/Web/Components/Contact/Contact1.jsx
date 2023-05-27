import React from "react";
import { Link } from "react-router-dom";
const Contact1 = () => {
  return (
    <div className="flex bg-[#060B07] flex-col ">
      <div className="flex flex-col justify-center text-center mb-16">
        <h1 className="text-[#E7602A] text-3xl mb-8 font-medium">Contact us</h1>

        <p className="text-white text-1xl mb-8">
          Click on the below button to contact us
        </p>
        <div className="flex justify-center">
          <div className=" flex bg-[#E7602A]  rounded-md">
            <Link to="/ContactUs" className="p-2 text-2xl text-white">
              Contact US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
