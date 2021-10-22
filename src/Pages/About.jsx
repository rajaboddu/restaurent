import React from "react";
import History from "../Elements/about/History";
import Reviews from "../Elements/about/Reviews";
import Footer from '../Elements/about/Footer'
import Specials from "../Elements/about/Specials";

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
