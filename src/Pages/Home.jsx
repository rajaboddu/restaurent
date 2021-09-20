import React from "react";
import {Button, RoundButton} from "../designComponents/Button";
import SpecialCard from "../designComponents/SpecialityCard";
import {
  Title,
  SubTitle,
  SubTitle2,
  Para,
} from "../designComponents/Typography"

const Home = () => {
  return (
    <div>
      <Button>Home</Button>
      <SubTitle>Chiken Dum Biryani</SubTitle>
      <SubTitle2>Rice Items</SubTitle2>
      <Para>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
        molestias deserunt atque! Aut sint corrupti dolorem modi soluta alias
        ex, quo quae ipsa est corporis sit voluptatum, excepturi magni omnis.
      </Para>
      <RoundButton>
      <i className='fas fa-utensils'></i>
      </RoundButton>
      <div className='m-4'>
        <SpecialCard/>
      </div>
    </div>
  );
};

export default Home;
/*const display = [
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
);*/
