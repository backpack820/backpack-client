import React from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = useLoaderData();
  return (
    <div className="my-5 flex flex-col justify-center items-center">
      <p className="text-3xl font-bold text-center">Reviews</p>
      <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
