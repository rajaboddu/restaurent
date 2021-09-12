import React, { useState } from "react";

//orderedList containing rice, tiffins, liquids, iceCreams
const Cart = ({ count, orderedList }) => {
  const [toggler, setToggler] = useState(false);
  const handleToggle = () => {
    setToggler(!toggler);
  };

  const categories = ['rice', 'tiffins', 'liquids', 'iceCreams']

  let orderListClass = toggler
    ? ""
    : "hidden";
  return (
    <>
      <div className={`${orderListClass} bg-yellow-300`}>
        {orderedList['rice'].map(item => <p key={item.id}>{item.name}</p>)}
      </div>
      <button
        onClick={handleToggle}
        className="relative bg-red-500 w-12 h-12 rounded-3xl flex justify-center items-center"
      >
        <div
          className="absolute -top-2 right-0 w-5 h-5 rounded-3xl bg-yellow-300 
        flex justify-center items-center text-md font-bold"
        >
          {count}
        </div>
        <i className="fas fa-cart-plus text-2xl "></i>
      </button>
    </>
  );
};

export default Cart;
