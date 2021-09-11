import React from "react";
import StarIcons from "./StarIcons";

const TableCard = ({ name, cost, rating, pic, available }) => {
  let classValue = available ? "" : "text-underline";
  return (
    <div className="m-4 w-64 bg-white flex flex-col rounded-lg border overflow-hidden">
      <img className="object-cover h-48 w-full" src={pic} alt="seat image" />
      <div>
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold">{name}</h4>
          <button className="my-1 bg-gray-400 text-xl font-semibold p-1 rounded-sm">
            OCCUPY
          </button>
        </div>
        <div>
          <div className="flex justify-center items-center  divide-x-2 divide-black">
            <div className="flex flex-col items-center pr-4">
              <StarIcons rating={rating} />
              <div>
                <p className="text-sm font-semibold">Rating</p>
              </div>
            </div>
            <div className="px-4">
              <p className="text-xl font-semibold">${cost}</p>
            </div>
            <div className="pl-4">
              <p className={`${classValue} text-md font-normal`}>Avilable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
