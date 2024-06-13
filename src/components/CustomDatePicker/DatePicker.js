import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

function CustomDatePicker({
  placeHolderText,
  value,
  onChangeDate,
  noBackground,
}) {
  const [startDate, setStartDate] = useState(null);

  const handleChange = (date) => {
    setStartDate(date);
    onChangeDate(date);
  };
  const class1 = "input-group-prepend";
  return (
    <div className="input-group">
      <div
        // className={`${
        //   noBackground ? "noBackground" : ""
        // } "input-group-prepend"`}
        className={`${noBackground ? "noBackground" : ""} ${class1}`}
      >
        <SlCalender />
      </div>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        className="form-control"
        dateFormat="dd-MM-yyyy"
        placeholderText={placeHolderText}
        value={value}
      />
    </div>
  );
}

export default CustomDatePicker;
