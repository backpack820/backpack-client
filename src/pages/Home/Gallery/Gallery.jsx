import React from "react";

const Gallery = () => {
  return (
    <section className="container px-4 flex flex-col items-center my-16 mx-auto">
      <h2 className="mb-2 text-xl">All-exclusive Buses</h2>
      <p className="mb-8 text-xl font-bold">Journey through stunning destinations, memories captured</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="col-span-2 md:col-span-3 md:row-span-2">
          <img src="https://greenlinebd.com/wp-content/uploads/2020/08/07.jpg" alt="borabora1" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src="https://greenlinebd.com/wp-content/uploads/2020/08/DSC_0228-scaled.jpg" alt="borabora2" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src="https://greenlinebd.com/wp-content/uploads/2020/08/DSC_0257-scaled.jpg" alt="maldives1" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src="https://greenlinebd.com/wp-content/uploads/2020/08/IMG_5903.jpg" alt="maldives2" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src="https://greenlinebd.com/wp-content/uploads/2020/08/DSC_0413.jpg" alt="maldives1" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
