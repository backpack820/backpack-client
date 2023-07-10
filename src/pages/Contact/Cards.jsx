import React from "react";
import { Card, CardBody, CardFooter, Typography, Tooltip } from "@material-tailwind/react";
import location from "../../assests/icons/location.png";
import email from "../../assests/icons/email.png";
import phone from "../../assests/icons/phone.png";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 gap-10">
      <Card className="w-96 flex items-center">
        <img src={location} alt="location" className="w-1/3" />
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Location
          </Typography>
          <Typography className="font-medium text-justify">177, suite 6 (6th Floor), Mahtab center Bijoy nagor, Shahid Syed Nazrul Islam Sharani, Dhaka 1000.</Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography as="a" href="#facebook" variant="lead" color="blue" textGradient>
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography as="a" href="#twitter" variant="lead" color="light-blue" textGradient>
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography as="a" href="#instagram" variant="lead" color="purple" textGradient>
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
      {/* 2 */}
      <Card className="w-96 flex items-center">
        <img src={email} alt="location" className="w-1/3" />
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Email
          </Typography>
          <Typography className="font-medium text-justify">admin@backpack.com</Typography>
          <Typography className="font-medium text-justify">backpack@backpack.com</Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography as="a" href="#facebook" variant="lead" color="blue" textGradient>
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography as="a" href="#twitter" variant="lead" color="light-blue" textGradient>
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography as="a" href="#instagram" variant="lead" color="purple" textGradient>
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
      {/* 3 */}
      <Card className="w-96 flex items-center">
        <img src={phone} alt="location" className="w-1/3" />
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Phone
          </Typography>
          <Typography className="font-medium text-justify">
            <Tooltip content="Hotline" placement="right">
              +8801820820820
            </Tooltip>
          </Typography>
          <Typography className="font-medium text-justify">
            <Tooltip content="Phone" placement="right">
              +8801674647647
            </Tooltip>
          </Typography>{" "}
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography as="a" href="#facebook" variant="lead" color="blue" textGradient>
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography as="a" href="#twitter" variant="lead" color="light-blue" textGradient>
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography as="a" href="#instagram" variant="lead" color="purple" textGradient>
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
