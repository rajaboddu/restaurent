import React from "react";

export const Title = ({ children }) => {
  return (
    <div className="bg-gray-900 w-64 m-auto flex items-center justify-center">
      <div
        className="text-3xl font-black  text-transparent
            bg-gradient-to-r from-red-500 via-yellow-400 to-green-500
            bg-clip-text font-charm p-1 tracking-widest"
      >
        {children}
      </div>
    </div>
  );
};

export const SubTitle = ({ children }) => {
  return (
    <div
      className="text-xl font-script tracking-wider font-semibold
        text-gray-900 "
    >
      {children}
    </div>
  );
};

export const SubTitle2 = ({ children }) => {
  return (
    <div className="text-3xl font-semibold font-niconne tracking-widest">
      {children}
    </div>
  );
};

export const Para = ({ children, dashed, classValue }) => {
  return (
    <div
      className={`${
        dashed ? "line-through" : "no-underline"
      } text-lg font-normal font-sriracha tracking-wide leading-6 ${classValue}`}
    >
      {children}
    </div>
  );
};
