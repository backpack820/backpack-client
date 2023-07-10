import React from "react";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero/Hero";
import TrustedCompnay from "./TrustedCompnay/TrustedCompnay";
import Destination from "./Destination/Destination";
import NewsLetter from "./NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <div>
        <p className="text-4xl font-bold text-center my-5">Destinations</p>
        <Destination />
      </div>
      <TrustedCompnay />
      <Gallery />
      <NewsLetter/>

    </div>
  );
};

export default Home;
