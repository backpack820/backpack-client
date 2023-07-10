import React from "react";
import Selection from "./Selection";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  const { id, name, image } = destination;
  return (
    <div>
      <Link to={`/destinations/${id}`}>
        <Selection figure={image} caption={name}></Selection>
      </Link>
    </div>
  );
};

export default DestinationCard;
