import React from "react";
import tours from "../../Content/ToursContent";
import { useParams } from "react-router-dom";
const ToursDetail = () => {
  let { name } = useParams();
  return (
    <div className="flex min-h-screen w-screen bg-[#060B07]">
      <div className=" mt-24">
        {tours
          .filter((tours) => tours.name === name)
          .map((filtertours) => (
            <div className="flex flex-col">
              <div className="flex justify-center  mb-8">
                <h1 className="text-[#E7602A] text-3xl">{filtertours.name}</h1>
              </div>
              <div className="flex w-screen justify-center items-center ">
                <img
                  src={filtertours.image}
                  alt="not avalibale"
                  className="md:w-[30rem] w-[25rem]"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-around ml-8">
                <div className=" flex flex-col justify-center mt-8 ">
                  <p className=" text-[#E7602A] text-2xl ">Tour Detail</p>
                  <ul className=" list-disc">
                    {filtertours.detail.map((det,index) => (
                      <li key={index} className="text-white">{det.p}</li>
                    ))}
                  </ul>
                </div>

                <div className=" flex flex-col justify-center mt-8 ">
                  <p className=" text-[#E7602A] text-2xl ">Tour Notes</p>
                  <ul className=" list-disc">
                    {filtertours.note.map((note,index) => (
                      <li  key={index} className="text-white">{note.p}</li>
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

export default ToursDetail;
