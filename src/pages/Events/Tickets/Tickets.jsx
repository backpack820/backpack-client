import React from "react";
import { useLoaderData } from "react-router-dom";
import TicketCard from "./TicketCard";
import OfferPackage from "../OfferPackage/OfferPackage";

const Tickets = () => {
  const destination = useLoaderData();
  return (
    <div className="mb-10">
      <p className="text-3xl font-bold text-center my-5 ">Destionation</p>
      <section className="container mx-auto px-4 grid gap-2 sm:grid-cols-3 sm:grid-rows-2">
        {destination.map((destination) => (
          <TicketCard key={destination.id} destination={destination} />
        ))}
      </section>
      <OfferPackage/>
    </div>
  );
};

export default Tickets;
