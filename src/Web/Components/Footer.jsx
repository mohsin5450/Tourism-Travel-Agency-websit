import React from "react";
import { Link } from "react-router-dom";
import menu from "../Content/NavContent";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className=" bg-[#170C0A] ">
      <div className="flex flex-col justify-center ">
        <div className=" flex flex-wrap justify-around  mt-10 ">
          {menu.map((menu, index) => (
            <Link
              to={"/" + menu.name}
              key={index}
              className=" text-white mr-2 mb-4"
            >
              {menu.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-row justify-center mt-10">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook size={30} color="#E7602A" className="mr-8" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram size={30} color="#E7602A" className="mr-8" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter size={30} color="#E7602A" className="mr-8" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube size={30} color="#E7602A" className="mr-8" />
          </a>
        </div>
        <div className="flex  justify-center mt-8 mb-10">
          <span className="text-white flex flex-row">
            © 2022 <p>Tours</p>. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
