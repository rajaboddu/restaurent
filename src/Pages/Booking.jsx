import React from "react";
import { tables } from "../data/tables";
import TableCard from "../Elements/TableCard";

const Booking = () => {
  return (
    <div className='flex flex-col sm:inline'>
      <h1 className="text-4xl font-normal text-white bg-black text-center w-64 mx-auto">
        SEAT BOOKING
      </h1>
      <div
        className="gridLayout justify-items-center"
      >
        {tables.map((table) => (
          <TableCard
            key={table.id}
            name={table.type}
            pic={table.pic}
            rating={table.rating}
            available={table.avialable}
            cost={table.cost}
          />
        ))}
      </div>
    </div>
  );
};

export default Booking;
