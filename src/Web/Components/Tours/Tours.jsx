import React from "react";
import tours from "../../Content/ToursContent";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Navigation } from "swiper";

const Tours = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 850px)",
  });

  return (
    <div className="flex h-screen bg-[#060B07] flex-col">
      <div className="flex justify-center text-center">
        <h1 className="text-[#E7602A] text-3xl mb-20">Our Tours</h1>
      </div>
      <div className="flex justify-center flex-col  ">
        {isMobile ? (
          <>
            <Swiper
              loop={true}
              autoplay={{
                delay: 2000,
              }}
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {tours.map((tours) => (
                <SwiperSlide className="flex flex-col " key={tours.id}>
                  <div className="rounded-2xl">
                    <img
                      src={tours.image}
                      alt="not available"
                      width="400"
                      heigth="300"
                      className="rounded-2xl"
                    />
                  </div>
                  <div className=" flex flex-col">
                    <h1 className="text-[#E7602A] text-2xl mb-5 mt-2 font-medium">
                      {tours.name}
                    </h1>
                    <p className="text-white">{tours.description}</p>
                  </div>
                  <div className="flex justify-end bg-[#061C38] mt-2 rounded-md">
                    <Link
                      to={"/Tours/" + tours.name}
                      className="text-white p-2 font-bold text-1xl"
                    >
                      View detail
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <>
            <Swiper
              loop={true}
              autoplay={{
                delay: 2000,
              }}
              slidesPerView={3}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {tours.map((tours) => (
                <SwiperSlide className="flex flex-col" key={tours.id}>
                  <div className="rounded-2xl">
                    <img
                      src={tours.image}
                      alt="not available"
                      width="600"
                      heigth="400"
                      className="rounded-2xl"
                    />
                  </div>
                  <div className=" flex flex-col">
                    <h1 className="text-[#E7602A] text-2xl font-medium mb-5 mt-2">
                      {tours.name}
                    </h1>
                    <p className="text-white">{tours.description}</p>
                  </div>
                  <div className="flex justify-end bg-[#061C38] mt-2 rounded-md">
                    <Link
                      to={"/Tours/" + tours.name}
                      className=" text-white p-2 font-bold text-1xl"
                    >
                      View detail
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
        <div className="flex justify-center">
          <div className=" flex bg-[#E7602A] mt-8 rounded-md">
            <Link to="/Tours" className="p-2 text-white">
              See All Tours
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
