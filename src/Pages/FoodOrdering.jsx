import React, { useState } from "react";
import FoodNavigator from "../Elements/FoodNavigator";
import Rice from "../foodSections/FoodDisplay";
import Cart from "../Elements/Cart";
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
      if (operation === "add") {
        setCount((count) => count + 1);
        let newItems = { ...itemsList };
        let updateItems = [...newItems[category]];
        updateItems[index].quantity += 1;
        setItemsList(newItems);
        manageOrderList(index, category);
      } else if (operation === "minus") {
        setCount((count) => count - 1);
        let newItems = { ...itemsList };
        let updateItems = [...newItems[category]];
        updateItems[index].quantity -= 1;
        setItemsList(newItems);
        manageOrderList(index, category);
      }
    } else {
      setCount(0);
    }
  };

  const manageOrderList = (index, category) => {
    let newItems = { ...itemsList }; //all items object
    const selectedItem = newItems[category][index]; //category items array
    let updateOrderItems = { ...orderedItems };
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
        <h1 className="text-4xl font-normal text-white bg-black text-center w-56 mx-auto">
          FOOD COURT
        </h1>
        <section id="rice">
          <Rice
            listItems={riceItems}
            category="rice"
            manageCount={manageCount}
            sectionTitle="Rice Items"
          />
        </section>
        <section id="tiffins">
          <Rice
            listItems={tiffinItems}
            category="tiffins"
            manageCount={manageCount}
            sectionTitle="Tiffin Items"
          />
        </section>
        <section id="liquids">
          <Rice
            listItems={liquidItems}
            category="liquids"
            manageCount={manageCount}
            sectionTitle="Beverages"
          />
        </section>
        <section id="icecream">
          <Rice
            listItems={iceCreamItems}
            category="iceCreams"
            manageCount={manageCount}
            sectionTitle="Ice Creams"
          />
        </section>
        <FoodNavigator />
      </div>
      {count && <div className="sticky max-w-lg m-auto flex flex-col items-center bottom-2">
        <Cart
          count={count}
          orderedList={orderedItems}
          toggle={toggler}
          handleToggle={handleToggle}
        />
      </div>}
    </div>
  );
};

export default FoodOrdering;
