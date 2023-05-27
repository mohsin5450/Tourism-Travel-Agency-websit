import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import menu from "../../Content/NavContent";
import "./style.css";

const MobileMenu = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-[#060B07] gap-8 justify-center p-8 z-30 md:hidden"
          : "hidden"
      }
    >
      <FaTimes
        onClick={() => showMenu()}
        className="cursor-pointer"
        size={40}
      />
      {menu.map((menu, index) => (
        <Link to={"/" + menu.name} onClick={() => showMenu()} key={index}>
          {menu.name}
        </Link>
      ))}
    </ul>
  );
};

export default MobileMenu;
