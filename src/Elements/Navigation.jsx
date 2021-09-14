import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Navigation = () => {
  const [markerStyles, setMarkerStyles] = useState({
    width: 0,
    height: 0,
    left: 0,
    opacity: 0,
  });
  const links = [
    { id: 1, to: "/", name: "HOME" },
    { id: 2, to: "/book-table", name: "BOOK" },
    { id: 3, to: "/food-order", name: "ORDER" },
    { id: 4, to: "/about", name: "ABOUT" },
  ];
  const linkClass = "relative text-2xl font-normal font-sriracha text-gray-800";

  const handleMarker = (e) => {
    let newStyles = { ...markerStyles }
    newStyles.height = e.target.offsetHeight
    newStyles.width = (e.target.offsetWidth + 16)/16 + 'rem'
    newStyles.left = (e.target.offsetLeft - 10)/16 + 'rem'
    newStyles.opacity = 1
    setMarkerStyles({...newStyles})
  };

  const {width, height, left, opacity} = {...markerStyles}
  return (
    <div className="sticky top-0 flex justify-between pt-2">
      <div className="flex-1">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="absolute md:hidden right-0 z-10">
        <Hamburger />
      </div>
      <div className="relative hidden md:flex-1 md:inline-block">
        <div className="absolute rounded-md
        bg-gradient-to-br from-red-500 to-yellow-400  
         transition-all duration-500 ease-in-out"
          style={{ "width": width, "height":height, "left":left, "opacity":opacity}}></div>
        <nav className="relative flex justify-around">
          {links.map((link) => (
            <Link
              key={link.id}
              className={linkClass}
              to={link.to}
              onClick={handleMarker}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
