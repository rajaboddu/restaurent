import React, { useState } from "react";
import Logo from "./Logo";
import { Link, useHistory } from "react-router-dom";
import Hamburger from "./Hamburger";

const Navigation = () => {
  const match = useHistory();
  const [click, setClick] = useState(false);

  const links = [
    { id: 1, to: "/", name: "HOME" },
    { id: 2, to: "/book-table", name: "BOOK" },
    { id: 3, to: "/food-order", name: "ORDER" },
    { id: 4, to: "/about", name: "ABOUT" },
  ];

  const handleNav = () => {
    setClick(!click);
  };
  return (
    <div className="md:sticky md:top-0 relative flex justify-between pt-2">
      <div
        className={`w-full h-screen bg-gradient-to-br from-red-500 via-yellow-400 to-green-500
       flex flex-col justify-around items-center md:hidden
      absolute top-0 ${
        click ? "left-0" : "-left-full"
      } transition-all duration-500 ease-in-out z-50`}
      >
        {links.map((link) => (
          <p className="para" key={link.id}>
            <Link
              to={link.to}
              onClick={handleNav}
              className={`${
                link.to === match.location.pathname ? "active" : "link"
              }`}>
              {link.name}
            </Link>
          </p>
        ))}
      </div>
      <div className="flex-1">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="absolute md:hidden right-0 z-50">
        <Hamburger handleNav={handleNav} click={click} />
      </div>
      <div className="relative hidden md:flex-1 md:inline-block">
        <nav className="relative flex justify-around">
          {links.map((link) => (
            <Link
              key={link.id}
              className={`${
                link.to === match.location.pathname ? "active" : "link"
              }`}
              to={link.to}
              onClick={handleNav}
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
