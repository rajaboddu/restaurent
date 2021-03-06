import React, { useState } from "react";
import FoodNavigator from "../Elements/food-section/FoodNavigator";
import FoodDisplay from "../Elements/food-section/FoodDisplay";
import Cart from "../Elements/food-section/Cart";
import { riceItems } from "../data/riceItems";
import { iceCreamItems } from "../data/icecreams";
import { liquidItems } from "../data/liquids";
import { tiffinItems } from "../data/tiffins";

const FoodOrdering = () => {
  const [toggler, setToggler] = useState(false);
  const handleToggle = () => {
    setToggler(!toggler);
  };
  const [itemsList, setItemsList] = useState({
    rice: riceItems,
    tiffins: tiffinItems,
    liquids: liquidItems,
    iceCreams: iceCreamItems,
  });
  const [count, setCount] = useState(0);
  const [orderedItems, setOrderedItems] = useState({
    rice: [],
    tiffins: [],
    liquids: [],
    iceCreams: [],
  });
  const manageCount = (operation, index, category) => {
    if (count >= 0) {
      let newItems = itemsList;
      let updateCategoryItems = newItems[category];
      if (operation === "add") {
        setCount((count) => count + 1);
        updateCategoryItems[index].quantity += 1;
      } else if (operation === "minus") {
        setCount((count) => count - 1);
        updateCategoryItems[index].quantity -= 1;
      }
      setItemsList(newItems);
      manageOrderList(index, category);
    } else {
      setCount(0);
    }
  };

  const manageOrderList = (index, category) => {
    let newItems = itemsList; //all items object
    const selectedItem = newItems[category][index]; //category items array
    let updateOrderItems = orderedItems;
    const filteredList = updateOrderItems[category].filter(
      (item) => item.id !== index + 1
    );
    const newOrderList = [...filteredList, selectedItem];
    updateOrderItems[category] = newOrderList;
    setOrderedItems(updateOrderItems);
  };
  return (
    <div className="m-2">
      <div
        className={`${
          toggler
            ? "filter blur-md transition-all duration-500 ease-linear select-none"
            : " transition-all duration-500 ease-linear"
        }`}
      >
        <div className="titlediv1 max-w-xs">
          <div className="titlediv2">FOOD ORDER</div>
        </div>
        <section id="rice">
          <FoodDisplay
            listItems={riceItems}
            category="rice"
            manageCount={manageCount}
            sectionTitle="Rice Items"
          />
        </section>
        <section id="tiffins">
          <FoodDisplay
            listItems={tiffinItems}
            category="tiffins"
            manageCount={manageCount}
            sectionTitle="Tiffin Items"
          />
        </section>
        <section id="liquids">
          <FoodDisplay
            listItems={liquidItems}
            category="liquids"
            manageCount={manageCount}
            sectionTitle="Beverages"
          />
        </section>
        <section id="icecream">
          <FoodDisplay
            listItems={iceCreamItems}
            category="iceCreams"
            manageCount={manageCount}
            sectionTitle="Ice Creams"
          />
        </section>
        <FoodNavigator />
      </div>
      {count && (
        <div className="sticky z-30 max-w-lg m-auto flex flex-col items-center bottom-2">
          <Cart
            count={count}
            orderedList={orderedItems}
            toggle={toggler}
            handleToggle={handleToggle}
          />
        </div>
      )}
    </div>
  );
};

export default FoodOrdering;
