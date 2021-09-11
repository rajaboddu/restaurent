import React, { useState } from "react";
import FoodNavigator from "../Elements/FoodNavigator";
import Liquids from "../foodSections/Liquids";
import Rice from "../foodSections/Rice";
import IceCream from "../foodSections/IceCream";
import Tiffins from "../foodSections/Tiffins";
import Cart from "../Elements/Cart";
import { riceItems } from "../data/riceItems";

// filter object if quantity ===1 else reduce the quantity of the item by 1.

const FoodOrdering = () => {
  const [riceList, setRiceList] = useState(riceItems);
  const [count, setCount] = useState(0);
  const [orderedItems, setOrderedItems] = useState([])
  const manageCount = (operation, index) => {
    if (count >= 0) {
      if (operation === "add") {
        setCount((count) => count + 1);
        let updateItems = [...riceList];
        updateItems[index].quantity += 1;
        setRiceList(updateItems);
        let updateList = orderedItems
        updateList.push(riceList[index])
        setOrderedItems(updateList)
        console.log(orderedItems);
      } else if (operation === "minus") {
        setCount((count) => count - 1);
        let updateItems = [...riceList];
        updateItems[index].quantity -= 1;
        setRiceList(updateItems);
        if (riceList[index].quantity === 0) {
          let updateList = orderedItems.filter(item => item.id !== index)
          setOrderedItems(updateList)
        }
        else if (riceList[index].quantity > 0) {
          let reduceOrderList = [...orderedItems]
          console.log(reduceOrderList);
        }
      }
    } else {
      setCount(0);
    }
  };
  return (
    <div className="m-2">
      <h1 className="text-4xl font-normal text-white bg-black text-center w-56 mx-auto">
        FOOD COURT
      </h1>
      <section id="rice">
        <Rice listItems={riceItems} manageCount={manageCount} />
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
        <Cart count={count} orderedList={ orderedItems}/>
      </div>
    </div>
  );
};

export default FoodOrdering;
