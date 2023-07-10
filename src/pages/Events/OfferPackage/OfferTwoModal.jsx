import React, { useContext } from "react";
import { Fragment, useState } from "react";
import { Button, Dialog, DialogBody, Input, Typography } from "@material-tailwind/react";
import { AuthContext } from "../../../context/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const OfferTwoModal = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const userName = user?.displayName;
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);

  const handlePaymentTwo = (event) => {
    event.preventDefault();

    const form = event.target;
    const offerTicketQuantity = form.offerTwoTicket.value;
    const offerTicketPrice = form.offerTwoTicketPrice.value;
    const offerDestinationOne = form.offerTwoDestinationOne.value;
    const offerDestinationTwo = form.offerTwoDestinationTwo.value;
    const offerDestinationThree = form.offerTwoDestinationThree.value;
    const offerDestinationFour = form.offerTwoDestinationFour.value;
    const offerDestinationFive = form.offerTwoDestinationFive.value;
    const offerDestinationSix = form.offerTwoDestinationSix.value;
    const cardNumber = form.cardNumber.value;
    const expireDate = form.expireDate.value;
    const cvc = form.cvc.value;

    const offerTwo = {
      email: userEmail,
      userName,
      offerTicketQuantity,
      offerTicketPrice,
      offerDestinationOne,
      offerDestinationTwo,
      offerDestinationThree,
      offerDestinationFour,
      offerDestinationFive,
      offerDestinationSix,
      cardNumber,
      expireDate,
      cvc,
    };

    fetch("https://backpack-server.vercel.app/discount", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(offerTwo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Purchase success");
          navigate("/myprofile");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient">
        Subscribe
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        size="xl"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody>
          <form className="flex justify-center w-full bg-blue-gray-50 rounded-md" onSubmit={handlePaymentTwo}>
            <div className="flex flex-col rounded sm:p-8">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">
                  <input type="number" name="offerTwoTicket" className="w-11" value={10} disabled />
                  Tickets
                </h4>
                <span className="text-5xl font-bold">
                  Only <input type="number" name="offerTwoTicketPrice" value={8000} className="w-32" disabled />
                  TK
                </span>
              </div>
              <p className="mt-3 leadi">💥Flat Discount Offer! Buy 10 tickets to get Discount on each ticket up to 2000TK.</p>
              <ul className="flex-1  text-gray-600">
                <li className="text-xl font-medium">Destinations:</li>
                <li className="">
                  • <input type="text" name="offerTwoDestinationOne" value="Dhaka to Cox's Bazar" className="" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerTwoDestinationTwo" value="Dhaka to Chittagong" className="" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerTwoDestinationThree" value="Dhaka to Sreemongol" className="" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerTwoDestinationFour" value="Dhaka to Sylhet" className="" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerTwoDestinationFive" value="Dhaka to Khagrachari" className="" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerTwoDestinationSix" value="Dhaka to Khulna" className="" disabled />
                </li>
              </ul>
              <div>
                <Typography variant="small" color="blue-gray" className="font-medium mt-2">
                  Card Details
                </Typography>

                <Input label="CardNumber" name="cardNumber" maxLength={19} required />
                <div className="my-2 flex items-center gap-4">
                  <Input label="Expires" name="expireDate" type="date" maxLength={5} containerProps={{ className: "min-w-[72px]" }} required />
                  <Input label="CVC" name="cvc" maxLength={4} containerProps={{ className: "min-w-[72px]" }} required />
                </div>
              </div>
              <Button size="lg" type="submit">
                Pay Now
              </Button>
              <Toaster />
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};

export default OfferTwoModal;
