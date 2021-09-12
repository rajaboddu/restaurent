import React from "react";
import Card from "../Elements/Card";

const Rice = ({ listItems, manageCount, sectionTitle ,category}) => {
  return (
    <div>
      <h2 className="text-xl text-pink-700 ml-4 font-semibold">
        {sectionTitle}
      </h2>
      <div className="gridLayout">
        {listItems.map((item) => (
          <Card
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

export default Rice;
