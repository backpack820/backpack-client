import React from "react";
import TicketPrice from "../../Events/TicketPrice/TicketPrice";
import { useLoaderData } from "react-router-dom";

const DestinationPage = () => {
  const { name, image, description } = useLoaderData();
  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl">{name}</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
              <img alt="Tee" src={image} className="h-72 w-full rounded-xl object-cover lg:h-[540px]" />
            </div>
            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <p className="text-justify">{description}</p>
              </div>
            </div>
          </div>

          <div className="sticky lg:top-0">
            <TicketPrice name={name}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationPage;
