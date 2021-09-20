import React from "react";

export const Button = ({ children, classes }) => {
  return (
    <button
      className={`${classes} bg-gradient-to-r from-red-600 via-yellow-300 to-green-500
    rounded-md text-center text-2xl px-3 py-1.5 font-sriracha text-gray-800 w-44 m-1`}
    >
      {children}
    </button>
  );
};

export const RoundButton = ({ children, handleClick, classes}) => {
  return (
    <button
      onClick={handleClick}
      className={`${classes} text-2xl w-12 h-12 rounded-full shadow-xl
    bg-gradient-to-tr from-red-600 via-yellow-400 to-green-500
    transiston-all duration-200 ease-in-out
    `}
    >
      {children}
    </button>
  );
};
