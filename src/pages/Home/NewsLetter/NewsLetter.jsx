import React from "react";
const NewsLetter = () => {
  return (
    <div
      className="w-full bg-gray-500"
        style={{backgroundImage: `url(https://greenlinebd.com/wp-content/uploads/2020/08/07.jpg)`}}
    >
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100">Get Our Updates</h1>
        <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">Find out about events and other news</p>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="example@email.com"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          />
          <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-blue-700 text-gray-50">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
