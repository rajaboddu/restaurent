import { React, useState } from "react";
import { RoundButton } from "../../designComponents/Button";

const links = [
  {
    id: 1,
    text: "fas fa-concierge-bell",
    url: "#rice",
    animation: "delay-300 bottom-16 mb-36",
  },
  {
    id: 2,
    text: "fas fa-birthday-cake",
    url: "#tiffins",
    animation: "delay-200 bottom-11 mb-28",
  },
  {
    id: 3,
    text: "fas fa-glass-martini-alt",
    url: "#liquids",
    animation: "delay-150 bottom-24 my-2",
  },
  {
    id: 4,
    text: "fas fa-ice-cream",
    url: "#icecream",
    animation: "delay-75 bottom-12 my-1",
  },
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
    <div className="sticky z-40 bottom-2 w-16 ml-auto">
      <div className="pl-2">
        {links.map((link) => (
          <RoundButton
            key={link.id}
            classes={`${classValue} ${link.animation} absolute`}
          >
            <a href={link.url}>
              <i className={`${link.text}`}></i>
            </a>
          </RoundButton>
        ))}
        <RoundButton handleClick={handleToggle}>
          <i className={`${mainIconClass} fas fa-utensils`}></i>
        </RoundButton>
      </div>
    </div>
  );
};

export default FoodNavigator;
