import React from "react";
import { Button } from "../Button";
import StarIcons from "../../Elements/StarIcons";

const TableCard = ({ name, cost, rating, pic, available }) => {
  return (
    <div className="m-4 w-60 flex flex-col rounded-lg border overflow-hidden">
      <img className="object-cover h-48 w-full" src={pic} alt="seat" />
      <div>
        <div className="flex flex-col items-center">
          <p className="subtitle1">{name}</p>
          <Button>OCCUPY</Button>
        </div>
        <div>
          <div className="flex justify-center items-center  divide-x-2 divide-black">
            <div className="flex flex-col items-center pr-4">
              <StarIcons rating={rating} />
              <div>
                <p className="para">Rating</p>
              </div>
            </div>
            <div className="px-2">
              <p className="para">${cost}</p>
            </div>
            <div className="pl-2">
              <p
                className={`para ${
                  available ? "no-underline" : "line-through"
                }`}
              >
                Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
