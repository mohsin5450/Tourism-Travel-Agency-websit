import React from "react";
import about from "../Content/AboutContent";
const AboutUs = () => {
  return (
    <div
      name="AboutUs"
      className="flex h-screen bg-[#060B07] flex-col justify-center"
    >
      <div className="flex justify-center text-center">
        <h1 className="text-[#E7602A] text-3xl mb-20">
          What do you know About US?
        </h1>
      </div>

      <div className="flex justify-center text-center ">
        {about.map((about, index) => (
          <p className="text-white" key={index}>
            {about.discription}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
