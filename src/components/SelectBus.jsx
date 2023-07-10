import React from "react";

const SelectBus = () => {
  return (
    <select className=" border-b-2 border-blue-500 mt-5 p-1" required>
      <option selected>Available Bus</option>
      <option>Ena Transport (Pvt) Ltd</option>
      <option>Hanif Enterprise</option>
      <option>Royal Coach</option>
      <option>Shyamoli SP</option>
      <option>Tuba Line</option>
      <option>Soudia Coach</option>
    </select>
  );
};

export default SelectBus;
