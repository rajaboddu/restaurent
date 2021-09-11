import React, { useState, useEffect } from "react";
import FoodImage from "../foodBackground.jpg";
import TableImage from "../tableBackground.jpg";

const Home = () => {
  const display = [
    {
      class: "bg-food",
      heading: "HOT BRISKET NOW",
      subText: "18 YEARS TO MASTER. YOURS TO SAVIOUR.",
      buttonText: "ORDER NOW",
    },
    {
      class: "bg-table",
      heading: "INCLUDE YOURSELF",
      subText: "OCCUPY BEFORE SOMEONE FILLS.",
      buttonText: "OCCUPY NOW",
    },
  ];
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [displayCondition, setDisplayCondition] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayCondition) {
        setCurrentDisplay(1);
      } else {
        setCurrentDisplay(0);
      }
      setDisplayCondition(!displayCondition);
    }, 6000);
    return () => clearTimeout(timer);
  }, [displayCondition]);

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen w-screen ${display[currentDisplay].class} background transition-all duration-1000 ease-in-out`}
    >
      <h1 className='text-6xl font-bold text-white mix-blend-exclusion'>{display[currentDisplay].heading}</h1>
      <h4 className='text-2xl font-semibold text-blue-400'>{display[currentDisplay].subText}</h4>
      <div>
        <button
          className=" text-2xl bg-black text-white font-light p-2 rounded-sm m-2 hover:bg-white hover:text-black hover:font-normal 
    transition duration-500 ease-in-out"
        >
          {display[currentDisplay].buttonText}
        </button>
      </div>
    </div>
  );
};

export default Home;