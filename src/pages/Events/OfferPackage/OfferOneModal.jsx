import React, { useContext } from "react";
import { Fragment, useState } from "react";
import { Button, Dialog, DialogBody, Input, Typography } from "@material-tailwind/react";
import { AuthContext } from "../../../context/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const OfferOneModal = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const userName = user?.displayName;
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handlePaymentOne = (event) => {
    event.preventDefault();

    const form = event.target;
    const offerTicketQuantity = form.offerOneTicket.value;
    const offerTicketPrice = form.offerOneTicketPrice.value;
    const offerDestinationOne = form.offerOneDestinationOne.value;
    const offerDestinationTwo = form.offerOneDestinationTwo.value;
    const offerDestinationThree = form.offerOneDestinationThree.value;
    const offerDestinationFour = form.offerOneDestinationFour.value;
    const offerDestinationFive = form.offerOneDestinationFive.value;
    const offerDestinationSix = form.offerOneDestinationSix.value;
    const cardNumber = form.cardNumber.value;
    const expireDate = form.expireDate.value;
    const cvc = form.cvc.value;

    const offerOne = {
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
      body: JSON.stringify(offerOne),
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
          <form className="flex justify-center w-full bg-blue-gray-50 rounded-md" onSubmit={handlePaymentOne}>
            <div className="flex flex-col p-6  rounded sm:p-8">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">
                  <input type="number" name="offerOneTicket" className="w-7" value={5} disabled />
                  Tickets
                </h4>
                <span className="text-5xl font-bold">
                  Only <input type="number" name="offerOneTicketPrice" value={4000} className="w-32" disabled />
                  TK
                </span>
              </div>
              <p className="leadi text-gray-600">💥Flat Discount Offer! Buy 5 tickets to get Discount on each ticket up to 1000TK.</p>
              <ul className="flex-1 text-gray-600">
                <li className="text-xl text-black font-medium">Destinations:</li>
                <li className="">
                  • <input type="text" name="offerOneDestinationOne" value="Dhaka to Cox's Bazar" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerOneDestinationTwo" value="Dhaka to Chittagong" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerOneDestinationThree" value="Dhaka to Sreemongol" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerOneDestinationFour" value="Dhaka to Sylhet" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerOneDestinationFive" value="Dhaka to Khagrachari" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerOneDestinationSix" value="Dhaka to Khulna" disabled />
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

export default OfferOneModal;
