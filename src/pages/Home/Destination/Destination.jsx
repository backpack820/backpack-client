import React from "react";
import { useLoaderData } from "react-router-dom";
import DestinationCard from "./DestinationCard";

const Destination = () => {
  const destination = useLoaderData();
  return (
    <section className="container mx-auto px-4 grid gap-2 sm:grid-cols-3 sm:grid-rows-2">
      {
        destination.map(destination=> <DestinationCard key={destination.id} destination={destination}/>)
      }
    </section>
  );
};

export default Destination;
