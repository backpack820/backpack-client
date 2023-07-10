import React from "react";
import { Link } from "react-router-dom";
import Selection from "../../Home/Destination/Selection";

const TicketCard = ({ destination }) => {
  const { id, name, image } = destination;
  return (
    <div>
      <div>
        <Link to={`/destinations/${id}`}>
          <Selection figure={image} caption={name}></Selection>
        </Link>
      </div>
    </div>
  );
};

export default TicketCard;
