import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [click, setClick] = useState(false);
  const iconSize = click ? "scale-100" : "scale-0";
  const icons = [
    {
      id: 1,
      className: "fas fa-home",
      position: "right-28 top-1.5 delay-75",
      to: "/",
    },
    {
      id: 2,
      className: "fas fa-chair",
      position: "right-24 top-14 delay-100",
      to: "/book-table",
    },
    {
      id: 3,
      className: "fas fa-cheese",
      position: "right-16 top-24 delay-150",
      to: "/food-order",
    },
    {
      id: 4,
      className: "fas fa-ice-cream",
      position: "right-3.5 top-28 delay-200",
      to: "/about",
    },
  ];
  const divRef = useRef();
  const handleNav = (e) => {
    setClick(!click);
  };
  const transition = "transition duration-200 ease-";
  let bar1Class = click ? `rotate-45 translate-y-1 ${transition}out` : "";
  let bar2Class = click ? `-rotate-45 -translate-y-0.5 ${transition}out` : "";
  return (
    <>
      <div className="cursor-pointer" onClick={handleNav} ref={divRef}>
        <div className="z-10 w-9 h-9 rounded-3xl bg-white border-2 border-red-700 m-1 flex justify-center items-center">
          <div className="w-7 h-7 rounded-3xl bg-red-800 flex flex-col justify-center items-center">
            <div
              className={`w-5 h-0.5 bg-white my-0.5 transform ${bar1Class} ${transition}in`}
            ></div>
            <div
              className={`w-5 h-0.5 bg-white my-0.5 transform ${bar2Class} ${transition}in`}
            ></div>
          </div>
        </div>
        {icons.map((icon) => (
          <div key={icon.id}
            className={`transform ${iconSize} transition duration-300 ease-in absolute ${icon.position} cursor-pointer bg-red-500 w-9 h-9 rounded-3xl flex justify-center items-center`}
          >
            <Link to={icon.to}>
              <i className={`${icon.className} text-2xl`}></i>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hamburger;
