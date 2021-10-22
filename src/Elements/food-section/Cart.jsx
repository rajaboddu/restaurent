import React, {useState, useEffect} from "react";

const Cart = ({ count, orderedList, toggle, handleToggle }) => {
  const categories = ["rice", "tiffins", "liquids", "iceCreams"];
  const [totalBill, setTotalBill] = useState(0)
  const [finaledList, setFinaledList] = useState([])
  const cartIcon = toggle ? "fas fa-times" : "fas fa-cart-plus";

  useEffect(() => {
    let totalOrderedList = [];
    for (let i = 0; i < categories.length; i++) {
      for (let j = 0; j < orderedList[categories[i]].length; j++){
        totalOrderedList.push(orderedList[categories[i]][j])
      }
    }
    setFinaledList(totalOrderedList)

    //for total bill
    let finalList = finaledList
    let bill = 0
    for (let a = 0; a < finalList.length; a++){
      bill = bill + (finalList[a].cost * finalList[a].quantity)
    }
    setTotalBill(bill)
  },[orderedList, totalBill, count, toggle])


  
  let orderListClass = toggle
    ? "max-h-screen scale-100 bottom-14"
    : "max-h-0 scale-0 -bottom-0";
  return (
    <>
      <div
        className={`${orderListClass} transform absolute transition-all duration-500 ease-linear
        bg-white rounded-md shadow-lg`}
      >
        <table className="table-fixed border-collapse w-full p-4">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {finaledList.map((item) => (
              <tr key={item.name}>
                <td
                  className={` ${
                    item.type === "Veg" ? "bg-green-500" : "bg-red-500"
                  } text-center w-3/5`}
                >
                  {item.name}
                </td>
                <td
                  className={` text-center  w-1/5 ${
                    item.type === "Veg" ? "bg-green-400" : "bg-red-400"
                  }`}
                >
                  {item.quantity}
                </td>
                <td
                  className={` text-center w-1/5 ${
                    item.type === "Veg" ? "bg-green-300" : "bg-red-300"
                  }`}
                >
                  ${item.cost * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="bg-red-600 flex items-center gap-4 px-2 rounded-lg max-w-sm ml-auto m-2">
          <div className="flex flex-col py-1.5">
            <p className="font-normal text-white text-base text-center">${totalBill}</p>
            <p className="font-light text-white text-xs">TOTAL</p>
          </div>
          <div className="text-white text-base">
            Place Order <i className="fas fa-caret-right"></i>
          </div>
        </button>
      </div>

      <button
        onClick={handleToggle}
        className="relative bg-red-500 w-12 h-12 rounded-3xl flex justify-center items-center"
      >
        {toggle || (
          <div
            className="absolute -top-2 right-0 w-5 h-5 rounded-3xl bg-yellow-300 
          flex justify-center items-center text-md font-bold"
          >
            {count}
          </div>
        )}
        <i className={`${cartIcon} text-2xl`}></i>
      </button>
    </>
  );
};

export default Cart;
