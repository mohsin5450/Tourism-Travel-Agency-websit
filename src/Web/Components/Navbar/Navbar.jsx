import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { FaBars } from "react-icons/fa";
import menu from "../../Content/NavContent";
const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className=" absolute z-30  w-full text-white flex justify-between p-4 items-center">
      <div className="flex flex-row cursor-pointer  text-2xl font-bold text-center ">
        <Link to={"/Home"}>
          <h1>Top Piont Tours</h1>
        </Link>
      </div>

      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150">
          <FaBars onClick={showMenu} className="scale-150 cursor-pointer" />
        </div>
        <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10">
          {menu.map((menu, index) => (
            <Link to={"/" + menu.name} key={index}>
              {menu.name}
            </Link>
          ))}
        </ul>

        <MobileMenu showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Navbar;
