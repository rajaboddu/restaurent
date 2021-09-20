import React from "react";
import { Button } from "./Button";
import { Para } from "./Typography";
import {Link} from 'react-router-dom'

const SpecialCard = ({name, cost, img}) => {
  return (
      <div className="flex flex-col bg-blue-200 w-60 rounded-lg 
    overflow-hidden shadow-xl border border-red-600">
      <div className="relative">
        <div
          className="w-40 h-6 bg-blue-600 absolute -right-10 top-6
                transform rotate-45"
        >
          <Para classValue="text-white text-center">20% offer</Para>
        </div>
        <img
          className="h-48 w-full object-cover mr-4"
          src={img}
          alt="card-im"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Para classValue='text-center'>{name}</Para>
        <Para>${cost}</Para>
        <Button><Link to='/food-order'>ORDER NOW</Link></Button>
      </div>
    </div>
  );
};

export default SpecialCard;
