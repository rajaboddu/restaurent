import React from "react";

const Hamburger = ({ click, handleNav }) => {
  const transition = "transition duration-200 ease-";
  let bar1Class = click ? `rotate-45 translate-y-1 ${transition}out` : "";
  let bar2Class = click ? `-rotate-45 -translate-y-0.5 ${transition}out` : "";
  return (
    <>
      <div className="cursor-pointer" onClick={handleNav}>
        <div
          className="z-10 w-10 h-10 rounded-3xl
        bg-gradient-to-r from-red-600 via-yellow-400 to-green-600
          m-1 flex justify-center items-center"
        >
          <div
            className="w-8 h-8 rounded-3xl bg-gray-900
           flex flex-col justify-center items-center"
          >
            <div
              className={`w-5 h-0.5 bg-gradient-to-r from-red-600 via-yellow-400
               to-green-600 my-0.5 transform ${bar1Class} ${transition}in`}
            ></div>
            <div
              className={`w-5 h-0.5 bg-gradient-to-r from-red-600 via-yellow-400
               to-green-600 my-0.5 transform ${bar2Class} ${transition}in`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
