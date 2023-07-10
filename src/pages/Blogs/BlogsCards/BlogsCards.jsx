import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const BlogsCards = ({ blog }) => {
  const { blogId, blogName, description, image } = blog;
  return (
    <Card className="mt-6 w-96 text-center my-5">
      <span className="text-xs text-gray-600">February 19, 2021</span>

      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt={blogName} layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {blogName}
        </Typography>
        <Typography>{description.slice(0, 70)}...</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`${blogId}`}>
          <Button>Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogsCards;
