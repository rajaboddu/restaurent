import React from "react";

const Cart = ({count, orderedList}) => {
  return (
    <>
      <ul>
        {orderedList.map(item =>
          <li key={item.id}>{item.name}</li>)}
      </ul>
       <div className="relative bg-red-500 w-12 h-12 rounded-3xl flex justify-center items-center">
        <div
          className="absolute -top-2 right-0 w-5 h-5 rounded-3xl bg-yellow-300 
        flex justify-center items-center text-md font-bold"
        >
          {count}
        </div>
        <i className="fas fa-cart-plus text-2xl "></i>
      </div>
    </>
  );
};

export default Cart;
