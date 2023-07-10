import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import Expensive from "./Expensive";
import Economic from "./Economic";
import { useLoaderData } from "react-router-dom";

const TicketPrice = ({name}) => {
  const { EconomicPrice, BusinessPrice } = useLoaderData();
  const data = [
    {
      label: "Economic",
      value: "economic",
      desc: <Economic EconomicPrice={EconomicPrice} name={name}/>,
    },
    {
      label: "Business",
      value: "business",
      desc: <Expensive BusinessPrice={BusinessPrice} name={name}/>,
    },
  ];

  return (
    <Tabs value="economic" fullwidth="true">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
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
  );
};

export default TicketPrice;
