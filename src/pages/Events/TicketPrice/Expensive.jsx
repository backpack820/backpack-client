import React from "react";
import SelectBus from "../../../components/SelectBus";
import DatePick from "../../../components/DatePick";
import ExpensiveSeatBooking from "../../../components/ExpensiveSeatBooking";

const Expensive = ({ BusinessPrice, name }) => {
  return (
    <div>
      <div>
        <p className="text-lg text-center">
          Ticket Price: <span className="font-semibold text-lg text-blue-600">{BusinessPrice}</span> BDT
        </p>
      </div>
      <div className="flex justify-around items-end gap-x-3">
        <SelectBus />
        <DatePick />
      </div>
      <ExpensiveSeatBooking BusinessPrice={BusinessPrice} name={name} />
    </div>
  );
};

export default Expensive;
