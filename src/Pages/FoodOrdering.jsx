import React,{useState} from "react";
import FoodNavigator from "../Elements/FoodNavigator";
import Liquids from "../foodSections/Liquids";
import Rice from "../foodSections/Rice";
import IceCream from "../foodSections/IceCream";
import Tiffins from "../foodSections/Tiffins";
import Cart from "../Elements/Cart";

const FoodOrdering = () => {
  return (
    <div className="m-2">
      <h1 className="text-4xl font-normal text-white bg-black text-center w-56 mx-auto">
        FOOD COURT
      </h1>
      <section id="rice">
        <Rice />
      </section>
      <section id="tiffins">
        <Tiffins />
      </section>
      <section id="liquids">
        <Liquids />
      </section>
      <section id="icecream">
        <IceCream />
      </section>
      <FoodNavigator />
      <div className="sticky bottom-2 max-w-sm m-auto flex justify-center">
        <Cart />
      </div>
    </div>
  );
};

export default FoodOrdering;
