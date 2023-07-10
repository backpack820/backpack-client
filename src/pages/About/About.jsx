import React from "react";
import "leaflet/dist/leaflet.css";
import Title from "./Title.jsx";
import Description from "./Description.jsx";
import Team from "./Team.jsx";

const About = () => {
  return (
    <div>
      <Title />
      <div className="p-5">
        <Description />
        <Team />
      </div>
    </div>
  );
};

export default About;
