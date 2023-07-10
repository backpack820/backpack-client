import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import SubscriptionDetails from "./SubscriptionDetails";

const Subscription = () => {
  const { user } = useContext(AuthContext);
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    fetch(`https://backpack-server.vercel.app/discount?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setDiscounts(data));
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
              <th className="p-3">Use Ticket</th>
            </tr>
          </thead>
          <tbody>
            {discounts.map((discount) => (
              <SubscriptionDetails key={discount?._id} discount={discount} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscription;
