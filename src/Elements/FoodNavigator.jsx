import { React, useState } from "react";

const links = [
  {
    id: 1,
    text: "fas fa-concierge-bell",
    url: "#rice",
    animation: "delay-300 bottom-24 mb-28",
  },
  {
    id: 2,
    text: "fas fa-birthday-cake",
    url: "#tiffins",
    animation: "delay-200 bottom-24 mb-16",
  },
  {
    id: 3,
    text: "fas fa-glass-martini-alt",
    url: "#liquids",
    animation: "delay-150 bottom-24 mb-2",
  },
  { id: 5, text: "fas fa-ice-cream", url: "#icecream", animation: "delay-75 bottom-12" },
];

const FoodNavigator = () => {
  const [toggler, setToggler] = useState(false);
  const handleToggle = () => {
    setToggler(!toggler);
  };
  let classValue = toggler
    ? "transition duration-500 ease-out transform scale-100"
    : "transition duration-500 ease-in transform scale-0";
  let mainIconClass = toggler
    ? "transition duration-500 ease-out transform rotate-360"
    : "transition duration-500 ease-in transform rotate-0";

  return (
    <div className="sticky bottom-2 w-16 ml-auto">
      <div className="pl-2">
        <ul className='z-30'>
          {links.map((link) => (
            <li
              key={link.id}
              className={`${classValue} ${link.animation} absolute
               bg-red-500 w-12 h-12 rounded-3xl flex justify-center items-center mb-1`}
            >
              <a href={link.url}>
                <i className={`${link.text} text-2xl`}></i>
              </a>
            </li>
          ))}
        </ul>
        <button
          className="bg-red-500 w-12 h-12 rounded-3xl flex justify-center items-center z-20"
          onClick={handleToggle}
        >
          <i className={`${mainIconClass} fas fa-utensils text-2xl`}></i>
        </button>
      </div>
    </div>
  );
};

export default FoodNavigator;
