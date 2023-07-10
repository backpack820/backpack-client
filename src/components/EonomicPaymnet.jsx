import React, { Fragment, useContext, useState } from "react";
import { Button, Dialog, DialogHeader, DialogBody, Input, Typography } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";

import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const EonomicPaymnet = ({ totalPrice, totalSeat, value, name }) => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };
  const handlePayment = (event) => {
    event.preventDefault();
    const form = event.target;
    const userEmail = form?.email?.value;
    const cardNumber = form?.cardNumber?.value;
    const cardExpire = form?.expireDate?.value;
    const cvc = form?.cvc?.value;
    const holderName = form?.holderName?.value;

    const payment = {
      name,
      email: userEmail,
      holderName,
      cardNumber,
      cardExpire,
      cvc,
      totalPrice,
      totalSeat,
      value,
    };

    if (totalPrice > 0 && totalSeat > 0) {
      fetch("https://backpack-server.vercel.app/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Purchase success");
            form.reset();
            navigate("/myprofile");
          }
        })
        .catch((err) => console.error(err));
    } else {
      toast.error("Please purchase atleast one ticket");
    }

    // console.log({ userEmail, cardNumber, cardExpire, cvc, holderName, totalPrice, value, name });
  };

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient" size="sm" fullWidth>
        Payment
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
        <DialogHeader className="capitalize text-xl">Destination: {name}</DialogHeader>
        <DialogBody divider>
          <p className="text-2xl lg:text-center text-white bg-blue-600 font-bold">Total Fare: {totalPrice}</p>
          <p className="text-xl lg:text-center text-white bg-blue-600 font-bold">Total Fare: {totalSeat}</p>
          <p className="text-xl lg:text-center text-white bg-blue-600 font-bold">
            Selected Seat:{" "}
            {value.length > 0 ? (
              <sapn>
                {value.map((seat) => (
                  <span key={seat.id}>{(seat.id ? " " : "") + seat.seatName}</span>
                ))}
              </sapn>
            ) : (
              "Please select your seat"
            )}
          </p>
          <form className="mt-2 flex flex-col gap-4" onSubmit={handlePayment}>
            <div>
              <p className="text-sm mb-2 text-black">User Email</p>
              <Input type="email" label="Email Address" name="email" defaultValue={user.email} disabled />
              <p className="text-sm my-2 text-black">Username</p>
              <Input label="Holder Name" name="holderName" defaultValue={user.displayName} disabled />
            </div>

            <div>
              <Typography variant="small" color="blue-gray" className="mb-4 font-medium">
                Card Details
              </Typography>

              <Input
                label="CardNumber"
                name="cardNumber"
                maxLength={19}
                required
                // value={formatCardNumber(cardNumber)}
                // onChange={(event) => setCardNumber(event.target.value)}
              />
              <div className="my-4 flex items-center gap-4">
                <Input label="Expires" name="expireDate" type="date" maxLength={5} containerProps={{ className: "min-w-[72px]" }} required />
                <Input label="CVC" name="cvc" maxLength={4} containerProps={{ className: "min-w-[72px]" }} required />
              </div>
            </div>
            <Button size="lg" type="submit">
              Pay Now
            </Button>
            <Typography variant="small" color="gray" className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60">
              <p className="text-center">Payments are secure and encrypted</p>
            </Typography>
            <Toaster />
          </form>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};

export default EonomicPaymnet;
