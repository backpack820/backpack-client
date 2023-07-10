import React from "react";

const Selection = ({ figure, caption }) => {
  return (
    <figure className="relative">
      <img src={figure} alt={caption} className="w-full h-80 object-cover" />
      <figcaption className="absolute z-10 bottom-2 left-2 text-white text-2xl font-bold">{caption}</figcaption>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/50"></div>
    </figure>
  );
};

export default Selection;
