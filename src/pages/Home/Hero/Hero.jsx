import React from "react";
import bg from "../../../assests/bus.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className=" relative">
      <img src={bg} className="object-cover" alt="sajel-valley"/>
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col text-center mt-12 2xl:mt-64 xl:mt-2/3 lg:mt-32">
        <h1 className="text-2xl font-bold leading-none sm:text-4xl sm:mt-16 text-white">
          Lifelong memories just a <br /> few seconds away
        </h1>
        <h1 className="text-white text-xs mt-1 sm:text-xl sm:mt-3">Let's start your journey with us, your dream will come true</h1>
        <div className="mt-5">
          <Link to="/login"><Button variant="gradient" size="sm" className="mr-2">Get started</Button></Link>
          <Link to="/blogs"><Button variant="outlined" size="sm" className="mr-2 text-white border-white">Blog</Button></Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
