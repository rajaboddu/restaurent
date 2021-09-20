import React from "react";
import Logo from "../Elements/Logo";
import { Para } from "../designComponents/Typography";
import { Button } from "../designComponents/Button";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col items-center space-y-4">
      <div className="flex justify-around space-x-4 mt-6">
        <i className="fab fa-facebook text-white text-4xl transform
        hover:-translate-y-2 hover:text-blue-800 transition-all duration-100"></i>
        <i className="fab fa-instagram text-white text-4xl transform
        hover:-translate-y-2 hover:text-pink-600 transition-all duration-100"></i>
        <i className="fab fa-twitter text-white text-4xl transform
        hover:-translate-y-2 hover:text-blue-500 transition-all duration-100"></i>
        <i className="fas fa-phone text-white text-3xl transform
        hover:-translate-y-2 hover:text-yellow-400 transition-all duration-100"></i>
        <i className="fab fa-whatsapp text-white text-4xl transform
        hover:-translate-y-2 hover:text-green-500 transition-all duration-100"></i>
      </div>
      <div className="-ml-9">
        <Logo />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center
          md:flex-row md:divide-x md:divide-white">
          <Para classValue="pr-3 text-white">Spicy Birds</Para>
          <Para classValue="px-3 text-white">
            2-345, Koyala Center, Kakinada
          </Para>
          <Para classValue="pl-3 text-white">Phone:9876543210</Para>
        </div>
        <div className="flex flex-col items-center justify-center
          md:flex-row">
          <Para classValue="text-white">
            Copyright &copy; 2021 Spicy theme.
          </Para>
          <Para classValue="text-white">
          All rights reserved.
          </Para>
        </div>
      </div>
      <Button classes="flex items-center justify-around">
        <Para>Find on Map</Para>
        <i className="fas fa-location-arrow text-sm"></i>
      </Button>
    </div>
  );
};

export default Footer;
