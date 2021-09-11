import React from "react";
import Card from "../Elements/Card";
import { riceItems } from "../data/riceItems";

const Rice = () => {
  const rating = 5;
  return (
      <div>
          <h2 className='text-xl text-pink-700 ml-4 font-semibold'>Rice Items</h2>
      <div
        className="gridLayout"
      >
        {riceItems.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            type={item.type}
            cost={item.cost}
            rating={rating}
            pic={item.Pic}
          />
        ))}
      </div>
    </div>
  );
};

export default Rice;
