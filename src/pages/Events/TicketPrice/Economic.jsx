import React from "react";
import SelectBus from "../../../components/SelectBus";
import DatePick from "../../../components/DatePick";
import SeatBooking from "../../../components/SeatBooking";



const Economic = ({ EconomicPrice, name }) => {
  console.log(EconomicPrice, "from economic price page");
  return (
    <div>
      <div>
        <p className="text-lg text-center">
          Ticket Price: <span className="font-semibold text-lg text-blue-600">{EconomicPrice}</span> BDT
        </p>
      </div>
      <div className="flex justify-around items-end gap-x-3">
        <SelectBus/>
        <DatePick/>
      </div>
      <SeatBooking EconomicPrice={EconomicPrice} name={name}/>
    </div>
  );
};

export default Economic;
