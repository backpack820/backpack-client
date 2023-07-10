import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/AuthProvider";
import PurchasedTicketDetails from "./PurchasedTicketDetails";

const PurchasedTicket = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayment] = useState([]);

  useEffect(() => {
    fetch(`https://backpack-server.vercel.app/payment?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, [user?.email]);

  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Invoice #</th>
              <th className="p-3">Client Name</th>
              <th className="p-3">Destination</th>
              <th className="p-3">Card No.</th>
              <th className="p-3">Price</th>
              <th className="p-3">Total Seat</th>
              <th className="p-3">Seat No.</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <PurchasedTicketDetails key={payment?._id} payment={payment} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchasedTicket;
