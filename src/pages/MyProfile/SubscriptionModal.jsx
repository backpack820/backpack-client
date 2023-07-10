import { Fragment, useState } from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";
import SubSeatBooking from "./SubSeatBooking/SubSeatBooking";

const SubscriptionModal = ({ decreaseNumber, setDecreaseNumber }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const handleClick2 = (buttonName) => {
    const newValue = [...value, buttonName];
    setValue(newValue);
  };
  const seatBook = value.length;

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
        <Button onClick={handleOpen} size="sm" variant="gradient">
          Use
        </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <SubSeatBooking value={value} handleClick2={handleClick2} decreaseNumber={decreaseNumber} setDecreaseNumber={setDecreaseNumber} seatBook={seatBook}/>
        </DialogBody>
        <Toaster />
      </Dialog>
    </Fragment>
  );
};

export default SubscriptionModal;
