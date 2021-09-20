import React from "react";
import History from "../Elements/History";
import Reviews from "../Elements/Reviews";
import Footer from '../Elements/Footer'
import Specials from "../Elements/Specials";

const About = () => {
  return (
    <div className="mt-2">
      <History />
      <Specials/>
      <Reviews />
      <Footer/>
    </div>
  );
};

export default About;
