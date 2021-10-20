import React from "react";
import { tables } from "../data/tables";
import TableCard from "../designComponents/cards/TableCard";

const Booking = () => {
  return (
    <div className="flex flex-col sm:inline">
      <div className='titlediv1 max-w-xs'>
        <div className='titlediv2'>
        SEAT BOOKING
        </div>
      </div>
      <div className="gridLayout justify-items-center">
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
