import React from "react";
import StarIcons from "../../Elements/StarIcons";

const FoodCard = ({
  type,
  rating,
  pic,
  name,
  cost,
  manageCount,
  index,
  quantity,
  category,
}) => {
  const colorName = type === "Veg" ? "green" : "red";

  return (
    <div className="mt-2 sm:mt-0 flex bg-white justify-between border-gray-400 border rounded-md">
      <div className="flex flex-col m-3 items-start flex-1">
        <div
          className={`w-4 h-4 bg-white border-2 border-${colorName}-500 rounded-sm flex justify-center items-center`}
        >
          <div className={`bg-${colorName}-500 w-2 h-2 rounded-xl`}></div>
        </div>
        <p className='subtitle1'>{name}</p>
        <p className='para'>${cost}</p>
        <StarIcons rating={rating} />
      </div>
      <div className="flex flex-col justify-center  items-center m-3">
        {pic && <img className="w-24 h-24 rounded-md" src={pic} alt={name} />}

        <div className="-mt-4">
          {quantity > 0 ? (
            <div
              className={`flex justify-start divide-x divide-black  bg-${colorName}-200 rounded-md border border-${colorName}-600`}
            >
              <button
                className="text-md font-semibold px-2"
                onClick={() => manageCount("minus", index, category)}
              >
                -
              </button>

              <p className="para px-2">{quantity}</p>
              <button
                className="text-md font-semibold px-2"
                onClick={() => manageCount("add", index, category)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className={`font-sriracha mx-2 px-4 bg-${colorName}-200 rounded-md border border-${colorName}-600 text-md font-semibold`}
              onClick={() => manageCount("add", index, category)}
            >
              ADD +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
