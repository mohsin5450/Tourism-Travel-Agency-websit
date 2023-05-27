import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import "./whatsappStyle.css";
const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://wa.me/9212345678"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsWhatsapp className="fa fa-whatsapp whatsapp-icon" size={30} />
      </a>
    </div>
  );
};

export default Whatsapp;
