import React, { useState } from "react";
import Calendar from "react-calendar";
import { Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import { AiTwotoneCalendar } from "react-icons/ai";
import 'react-calendar/dist/Calendar.css';

const DatePick = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="">
      <Popover placement="bottom">
        <PopoverHandler>
          <button className="">
            <AiTwotoneCalendar className="text-2xl text-black"/>
          </button>
        </PopoverHandler>
        <PopoverContent>
          <Calendar 
            onChange={onChange} 
            value={value}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePick;
