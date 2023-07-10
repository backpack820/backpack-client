import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogsCards from "../BlogsCards/BlogsCards";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div className="mt-5 flex flex-col justify-center items-center my-5">
      <h2 className="my-5 text-3xl font-bold">Blogs</h2>
      {
        <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {blogs.map((blog) => (
            <BlogsCards key={blog.id} blog={blog} />
          ))}
        </div>
      }
    </div>
  );
};

export default Blogs;
