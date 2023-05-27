import React from "react";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <>
      <div className="relative flex items-center justify-center h-screen  overflow-hidden">
        <div className="flex flex-col justify-center text-center items-center">
          <div className="relative z-20 flex flex-col justify-center text-center ">
            <p className="text-2xl font-medium text-white mb-5">
              Discover the Beauty of
            </p>
            <h1 className="text-5xl md:text-8xl font-bold text-white">
              United Arab Emirates
            </h1>
          </div>
          <div className="relative z-20 mt-8 rounded-lg border-white border-2 flex w-36  justify-center text-center cursor-pointer ">
            <Link
              to="AboutUs"
              spy={true}
              smooth={true}
              duration={500}
              className="text-1xl text-white p-2 px-4"
            >
              Explore Now
            </Link>
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Home;
