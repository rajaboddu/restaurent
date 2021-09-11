import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Navigation = () => {
  const links = [
    { id: 1, to: "/", name: "HOME" },
    { id: 2, to: "/book-table", name: "BOOK" },
    { id: 3, to: "/food-order", name: "ORDER" },
    { id: 4, to: "/about", name: "ABOUT" },
  ];
  const linkClass = "relative text-2xl font-normal font-notosans px-6";

  return (
    <div className="relative sticky top-0 flex justify-between pt-2">
      <div className="flex-1">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="absolute md:hidden right-0 z-10">
        <Hamburger />
      </div>
      <div className="relative hidden md:flex-1 md:inline-block">
        <nav className="relative flex justify-around divide-x-2 divide-black">
          {links.map((link) => (
            <Link
              key={link.id}
              className={linkClass}
              to={link.to}
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
