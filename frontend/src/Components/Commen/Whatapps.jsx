import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const WhatsApp = () => {
  const phoneNumber = "9943863916";
  const message = "Hello, I would like to know more about your services."; 

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} 
        className="text-green-500 hover:text-green-600 transition duration-200 ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="w-12 h-12" />
      </Link>
    </div>
  );
};

export default WhatsApp;
