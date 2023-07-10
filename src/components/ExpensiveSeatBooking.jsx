import Booking from "./Booking";
import { useState } from "react";
import ExpensivePayment from "./ExpensivePayment";

const ExpensiveSeatBooking = ({ BusinessPrice, name }) => {
  const [value, setValue] = useState([]);
  const buttonNames = [
    {
      seatName: "A1",
      id: "1",
    },
    {
      seatName: "A2",
      id: "2",
    },
    {
      seatName: "A3",
      id: "3",
      colorClass: "classic",
    },
    {
      seatName: "A4",
      id: "4",
    },
    {
      seatName: "B1",
      id: "5",
    },
    {
      seatName: "B2",
      id: "6",
    },
    {
      seatName: "B3",
      id: "7",
    },
    {
      seatName: "B4",
      id: "8",
      colorClass: "classic",
    },
    {
      seatName: "C1",
      id: "9",
      colorClass: "classic",
    },
    {
      seatName: "C2",
      id: "10",
    },
    {
      seatName: "C3",
      id: "11",
    },
    {
      seatName: "C4",
      id: "12",
    },
    {
      seatName: "D1",
      id: "13",
      colorClass: "classic",
    },
    {
      seatName: "D2",
      id: "14",
      colorClass: "classic",
    },
    {
      seatName: "D3",
      id: "15",
    },
    {
      seatName: "D4",
      id: "16",
    },
    {
      seatName: "E1",
      id: "17",
    },
    {
      seatName: "E2",
      id: "18",
    },
    {
      seatName: "E3",
      id: "19",
    },
    {
      seatName: "E4",
      id: "20",
    },
    {
      seatName: "F1",
      id: "21",
    },
    {
      seatName: "F2",
      id: "22",
    },
    {
      seatName: "F3",
      id: "23",
    },
    {
      seatName: "F4",
      id: "24",
    },
    {
      seatName: "G1",
      id: "25",
    },
    {
      seatName: "G2",
      id: "26",
      colorClass: "classic",
    },
    {
      seatName: "G3",
      id: "27",
      colorClass: "classic",
    },
    {
      seatName: "G4",
      id: "28",
    },
    {
      seatName: "H1",
      id: "29",
    },
    {
      seatName: "H2",
      id: "30",
    },
    {
      seatName: "H3",
      id: "31",
    },
    {
      seatName: "H4",
      id: "32",
    },
  ];

  const handleClick2 = (buttonName) => {
    const newValue = [...value, buttonName];
    setValue(newValue);
  };
  const totalPrice = value.length * BusinessPrice;
  const totalSeat = value.length;

  return (
    <div className="my-5">
      <div className="flex flex-col justify-center items-center">
        <p className="text-black text-center font-semibold mb-2">Select Your Seat</p>
        <div className="grid grid-cols-4">
          {buttonNames.map((buttonName) => (
            <Booking key={buttonName.id} buttonName={buttonName} handleClick2={handleClick2} />
          ))}
        </div>
      </div>

      <ul className="flex justify-between mt-5">
        <li className="text-blue-gray-900 font-bold">Available</li>
        <li className="text-green-700 font-bold">Selected</li>
        <li className="text-red-500 font-bold">Sold</li>
      </ul>
      <p className="text-justify mb-2 text-sm text-red-500">NB: Select your ticket carefully. Once you have selected your seat is not changable.</p>
      <p className="text-center text-lg mt-2">
        You have selected {value.length} seat for a price of BDT {totalPrice}
      </p>
      <ExpensivePayment totalPrice={totalPrice} totalSeat={totalSeat} value={value} name={name}/>
    </div>
  );
};

export default ExpensiveSeatBooking;
