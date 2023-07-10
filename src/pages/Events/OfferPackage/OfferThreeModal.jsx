import React, { useContext } from "react";
import { Fragment, useState } from "react";
import { Button, Dialog, DialogBody, Input, Typography } from "@material-tailwind/react";
import { AuthContext } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const OfferThreeModal = ({ handleSubmitPackageThree }) => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const userName = user?.displayName;
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);

  const handlePaymentThree = (event) => {
    event.preventDefault();

    const form = event.target;
    const offerTicketQuantity = form.offerThreeTicket.value;
    const offerTicketPrice = form.offerThreeTicketPrice.value;
    const offerDestinationOne = form.offerThreeDestinationOne.value;
    const offerDestinationTwo = form.offerThreeDestinationTwo.value;
    const offerDestinationThree = form.offerThreeDestinationThree.value;
    const offerDestinationFour = form.offerThreeDestinationFour.value;
    const offerDestinationFive = form.offerThreeDestinationFive.value;
    const offerDestinationSix = form.offerThreeDestinationSix.value;
    const cardNumber = form.cardNumber.value;
    const expireDate = form.expireDate.value;
    const cvc = form.cvc.value;

    const offerThree = {
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
      body: JSON.stringify(offerThree),
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
          <form className="flex w-full justify-center bg-blue-gray-50 rounded-md" onSubmit={handlePaymentThree}>
            <div className="flex flex-col rounded sm:p-8">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">
                  <input type="number" name="offerThreeTicket" className="w-11" value={20} disabled />
                  Tickets
                </h4>
                <span className="text-5xl font-bold">
                  Only <input type="number" name="offerThreeTicketPrice" value={15000} className="w-40" disabled />
                  TK
                </span>
              </div>
              <p className="mt-3 leadi text-gray-600">💥Flat Discount Offer! Buy 20 tickets to get Discount on each ticket up to 5000Tk.</p>
              <ul className="flex-1 text-gray-600">
                <li className="">
                  • <input type="text" name="offerThreeDestinationOne" value="Dhaka to Cox's Bazar" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerThreeDestinationTwo" value="Dhaka to Chittagong" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerThreeDestinationThree" value="Dhaka to Sreemongol" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerThreeDestinationFour" value="Dhaka to Sylhet" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerThreeDestinationFive" value="Dhaka to Khagrachari" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerThreeDestinationSix" value="Dhaka to Khulna" disabled />
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

export default OfferThreeModal;
