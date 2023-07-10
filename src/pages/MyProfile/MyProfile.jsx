import React, { useContext, useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { AuthContext } from "../../context/AuthProvider";
import PurchasedTicket from "./PurchasedTicket";
import Subscription from "./Subscription";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("subscription");
  const data = [
    {
      label: "Subscription",
      value: "subscription",
      desc: <Subscription/>,
    },
    {
      label: "Purchased Ticket",
      value: "purchasedTicket",
      desc: <PurchasedTicket/>,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl text-center my-5 font-semibold uppercase">
        Welcome to <br/> <span className="text-blue-600">{user?.displayName}'s</span> Dashboard
      </p>
      <div className="w-5/6">
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className: "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} onClick={() => setActiveTab(value)} className={activeTab === value ? "text-blue-500" : ""}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default MyProfile;
