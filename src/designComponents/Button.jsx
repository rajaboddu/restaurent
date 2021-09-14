import React from "react";

const Button = ({ children, classes }) => {
  return (
    <button
      className={`${classes} bg-gradient-to-r from-red-600 via-yellow-300 to-green-500
    rounded-md text-center text-2xl px-4 py-1.5 font-sriracha text-gray-800 w-40 m-1
   transform transition duration-500 ease-in-out hover:-translate-y-0.5
   hover:shadow-lg focus:outline-none
focus:ring-2 focus:ring-gray-800 focus:ring-opacity-60`}
    >
      {children}
    </button>
  );
};

export default Button;
