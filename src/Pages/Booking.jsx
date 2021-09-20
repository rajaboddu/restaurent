import React from "react";
import { tables } from "../data/tables";
import { Title } from "../designComponents/Typography";
import TableCard from "../Elements/TableCard";

const Booking = () => {
  return (
    <div className="flex flex-col sm:inline">
      <Title classValue='max-w-xs'>SEAT BOOKING</Title>
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
