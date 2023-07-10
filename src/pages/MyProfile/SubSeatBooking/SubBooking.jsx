import React, { useState } from "react";

const SubBooking = ({ buttonName, handleClick2, value }) => {
  const { seatName, colorClass } = buttonName;

  const [btnState, setBtnState] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setBtnState((btnState) => !btnState);
    setIsDisabled(true);
    value.shift();
    // console.log("i am", {seatName})
  };

  let toggleClassCheck = btnState ? "" : "active";
  // Styles
  const styles = {
    button: {
      padding: "10px 30px",
      cursor: "pointer",
    },
    buttonDisabled: {
      padding: "10px 30px",
      cursor: "not-allowed",
    },
  };
  return (
    <div style={styles.container}>
      <button
        disabled={isDisabled}
        className={`btn${toggleClassCheck} buttonClass ${colorClass} ${isDisabled ? styles.buttonDisabled : styles.button}`}
        onClick={() => {
          handleClick();
          handleClick2(buttonName);
        }}
      >
        {seatName}
      </button>
    </div>
  );
};

export default SubBooking;
