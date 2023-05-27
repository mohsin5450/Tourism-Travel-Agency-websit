import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d18gq2a",
        "template_5dpuvbq",
        form.current,
        "YyaV4_b3CNxU9TK49"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div name="Contact" className=" bg-[#060B07]">
      <div className="flex  justify-center  pt-20 mb-10 ">
        <p className="text-4xl font-bold    text-[#E7602A]  ">Contact</p>
      </div>
      <div className=" flex flex-col-reverse justify-evenly items-center ">
        <div className=" flex w-1/2 justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-[#495057] focus:outline-none"
            />
            <input
              type="text"
              name="user_email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-[#495057] focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-[#495057] focus:outline-none"
            ></textarea>

            <input
              type="submit"
              value="Send"
              className="text-black bg-[#D8E3E7] hover:text-white hover:bg-[#4E86D5] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            />
          </form>
        </div>

        <div className="flex flex-wrap justify-center ">
          <div className=" group flex  justify-center items-center w-56 h-52 m-8  rounded-[20px] bg-whit shadow-md hover:shadow-lg hover:shadow-blue-500">
            <div className="flex flex-col">
              <div className="mb-5 ">
                <BsTelephoneFill color="#E7602A" size={30} />
              </div>
              <div>
                <h1 className="font-bold group-hover:scale-105 duration-300 text-white">
                  Phone
                </h1>
              </div>
            </div>
          </div>
          <div className=" group flex  justify-center items-center w-56 h-52 m-8  rounded-[20px] bg-whit shadow-md hover:shadow-lg hover:shadow-blue-500">
            <div className="flex flex-col">
              <div className="mb-5 ">
                <MdEmail color="#E7602A" size={30} />
              </div>
              <div>
                <h1 className="font-bold group-hover:scale-105 duration-300 text-white">
                  Email
                </h1>
              </div>
            </div>
          </div>
          <div className=" group flex  justify-center items-center w-56 h-52 m-8  rounded-[20px] bg-whit shadow-md hover:shadow-lg hover:shadow-blue-500">
            <div className="flex flex-col">
              <div className="mb-5 ">
                <MdLocationOn color="#E7602A" size={30} />
              </div>
              <div>
                <h1 className="font-bold group-hover:scale-105 duration-300 text-white">
                  Location
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
