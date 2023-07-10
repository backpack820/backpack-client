import React from "react";

const PurchasedTicketDetails = ({ payment }) => {
  const { _id, name, holderName, cardNumber, totalPrice, totalSeat, value } = payment;
  return (
    <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
      <td className="p-3">
        <p>{_id}</p>
      </td>
      <td className="p-3">
        <p>{holderName}</p>
      </td>
      <td className="p-3">
        <p className="text-gray-600">{name}</p>
      </td>
      <td className="p-3">
        <p>{cardNumber}</p>
      </td>
      <td className="p-3">
        <p>BDT {totalPrice}</p>
      </td>
      <td className="p-3 text-center">
        <p>{totalSeat}</p>
      </td>
      <td className="p-3">
        {value.map((seat) => (
          <p key={seat.id}>{seat.seatName}</p>
        ))}
      </td>
    </tr>
  );
};

export default PurchasedTicketDetails;
