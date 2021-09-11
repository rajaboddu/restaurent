import React from "react";
import Logo from "../Elements/Logo";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col items-center space-y-2">
      {/*icons */}
      <div className="flex justify-around space-x-4 mt-2">
        <div className="relative group">
          <div
            className="absolute -inset-0 bg-blue-400 rounded-3xl filter blur-lg opacity-0
        group-hover:opacity-100 transition duration-500
         group-hover:duration-200"
          ></div>
          <i className="relative fab fa-facebook text-white text-4xl"></i>
        </div>
        <div className="relative group">
          <div
            className="absolute -inset-0 bg-pink-500 rounded-3xl filter blur-lg opacity-0
        group-hover:opacity-100 transition duration-500
         group-hover:duration-200"
          ></div>
          <i className="relative fab fa-instagram text-white text-4xl"></i>
        </div>
        <div className="relative group">
          <div
            className="absolute -inset-0 bg-blue-400 rounded-3xl filter blur-lg opacity-0
        group-hover:opacity-100 transition duration-500
         group-hover:duration-200"
          ></div>
          <i className="relative fab fa-twitter text-white text-4xl"></i>
        </div>
        <div className="relative group">
          <div
            className="absolute -inset-0 bg-green-500 rounded-3xl filter blur-lg opacity-0
        group-hover:opacity-100 transition duration-500
         group-hover:duration-200"
          ></div>
          <i className="relative fas fa-phone text-white text-3xl"></i>
        </div>
      </div>
      <div className="-ml-9">
        <Logo />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex divide-x divide-black">
          <p className="pr-3">Spicy Birds</p>
          <p className="px-3">2-345, Koyala Center, Kakinada</p>
          <p className="pl-3">Phone:9876543210</p>
        </div>
        <div>
          <p>Copyright &copy; 2021 Spicy theme. All rights reserved. </p>
        </div>
      </div>
      <button>
        Find on Map<i className="fas fa-location-arrow"></i>
      </button>
    </div>
  );
};

export default Footer;
