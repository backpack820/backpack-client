import React from "react";
import Map from "./Map";
import Cards from "./Cards";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold py-5">Contact us</p>
        <Cards />
      </div>
      <Map />
    </div>
  );
};

export default Contact;
