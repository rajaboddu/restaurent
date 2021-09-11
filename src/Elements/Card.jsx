import React from "react";
import StarIcons from "./StarIcons";

const Card = ({ type, rating, pic, name, cost }) => {
  const colorName = type === "Veg" ? "green" : "red";
  return (
    <div className="mt-2 sm:mt-0 flex bg-white justify-between border-gray-400 border rounded-md">
      <div className="flex flex-col m-3 items-start flex-1">
        <div
          className={`w-4 h-4 bg-white border-2 border-${colorName}-500 rounded-sm flex justify-center items-center`}
        >
          <div className={`bg-${colorName}-500 w-2 h-2 rounded-xl`}></div>
        </div>
        <h3 className="text-md font-semibold">{name}</h3>
        <p className="text-md font-normal">${cost}</p>
        <StarIcons rating={rating} />
      </div>
      <div className="flex flex-col justify-center m-3">
        {pic && (
          <img
            className="w-24 h-24 rounded-md"
            src={pic}
            alt="biryani picture"
          />
        )}

        <button
          className={`-mt-4 mx-2 px-4 bg-${colorName}-200 rounded-md border border-${colorName}-600 text-md font-semibold`}
        >
          ADD <sup className="text-md font-semibold">+</sup>
        </button>
      </div>
    </div>
  );
};

export default Card;
