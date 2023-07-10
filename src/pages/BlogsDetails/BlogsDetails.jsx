import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogsDetails = () => {
  const { blogName, description, postingDate, image } = useLoaderData();

  return (
    <section className="text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <img src={image} alt="" className="object-cover w-full rounded sm:h-96 lg:col-span-7 bg-gray-500" />
        <div className="p-6 space-y-2 lg:col-span-5">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogName}</h3>
          <span className="text-xs text-gray-600">{postingDate}</span>
          <p className="text-justify">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogsDetails;
