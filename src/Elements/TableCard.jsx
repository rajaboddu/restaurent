import React from "react";
import { SubTitle, Para } from "../designComponents/Typography";
import {Button} from '../designComponents/Button'
import StarIcons from "./StarIcons";

const TableCard = ({ name, cost, rating, pic, available }) => {
  return (
    <div className="m-4 w-60 flex flex-col rounded-lg border overflow-hidden">
      <img className="object-cover h-48 w-full" src={pic} alt="seat image" />
      <div>
        <div className="flex flex-col items-center">
          <SubTitle>{name}</SubTitle>
          <Button>
            OCCUPY
          </Button>
        </div>
        <div>
          <div className="flex justify-center items-center  divide-x-2 divide-black">
            <div className="flex flex-col items-center pr-4">
              <StarIcons rating={rating} />
              <div>
                <Para>Rating</Para>
              </div>
            </div>
            <div className="px-2">
              <Para>${cost}</Para>
            </div>
            <div className="pl-2">
              <Para dashed={!available}>Available</Para>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
