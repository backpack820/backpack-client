import React, { useState } from "react";
import SubscriptionModal from "./SubscriptionModal";

const SubscriptionDetails = ({ discount }) => {
  const {
    _id,
    userName,
    offerDestinationOne,
    offerDestinationTwo,
    offerDestinationThree,
    offerDestinationFour,
    offerDestinationFive,
    offerDestinationSix,
    cardNumber,
    offerTicketPrice,
    offerTicketQuantity,
  } = discount;
  const [decreaseNumber, setDecreaseNumber] = useState(offerTicketQuantity);
  localStorage.setItem("decreaseNumber", decreaseNumber);
  const localDecreaseNumber = JSON.parse(localStorage.getItem("decreaseNumber"));

  return (
    <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
      <td className="p-3">
        <p>{_id}</p>
      </td>
      <td className="p-3">
        <p>{userName}</p>
      </td>
      <td className="p-3">
        <p className="text-gray-600">{offerDestinationOne}</p>
        <p className="text-gray-600">{offerDestinationTwo}</p>
        <p className="text-gray-600">{offerDestinationThree}</p>
        <p className="text-gray-600">{offerDestinationFour}</p>
        <p className="text-gray-600">{offerDestinationFive}</p>
        <p className="text-gray-600">{offerDestinationSix}</p>
      </td>
      <td className="p-3">
        <p>{cardNumber}</p>
      </td>
      <td className="p-3">
        <p>BDT {offerTicketPrice}</p>
      </td>
      <td className="p-3 text-center">
        <p>{localDecreaseNumber}</p>
      </td>
      <td className="p-3">
        <SubscriptionModal decreaseNumber={decreaseNumber} setDecreaseNumber={setDecreaseNumber} />
      </td>
    </tr>
  );
};

export default SubscriptionDetails;
