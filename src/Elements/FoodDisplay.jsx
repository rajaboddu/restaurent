import React from "react";
import FoodCard from "../designComponents/cards/FoodCard";

const FoodDisplay = ({ listItems, manageCount, sectionTitle ,category}) => {
  return (
    <div>
      <p className='subtitle2'>{ sectionTitle}</p >
      <div className="gridLayout">
        {listItems.map((item) => (
          <FoodCard
            key={item.id}
            name={item.name}
            type={item.type}
            cost={item.cost}
            rating={item.rating}
            pic={item.Pic}
            manageCount={manageCount}
            index={item.id - 1}
            quantity={item.quantity}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
