import React, { useEffect, useState } from "react";
// import "./Calender.css";
import { IoNuclearOutline } from "react-icons/io5";
import { DailyCardContainer } from "./CardContainer";

const buttonStyle = {
  backgroundColor: "white",
  border: "1px solid lightgrey",
  borderRadius: 8,
  width: 40,
  height: 30,
  boxShadow:
    "rgb(3 3 3 / 20%) 0px 3px 4px 0px, inset rgb(60 60 60 / 11%) 0px 3px 4px 0px",
};
const fontStyle = {
  fontSize: 18,
  fontWeight: "bold",
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function Calendar({ cardDetails }) {
  const [date, setDate] = useState(new Date());
  const [monthArray, setMonthArray] = useState([]);
  const getDateArray = () => {
    let currPos = 0;
    let firstDay = date.getDay();
    let d = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let totalDays = d.getDate();
    let finalArray = new Array();
    let weekArray = new Array();
    let currDay = 1;
    while (currDay <= totalDays) {
      var temp = new Date(date.getFullYear(), date.getMonth(), currDay);
      if (temp.getDay() == 0 && weekArray.length != 0) {
        finalArray.push([...weekArray]);
        weekArray.length = 0;
      }
      weekArray.push(currDay);
      currDay++;
    }

    while (weekArray.length != 7) {
      weekArray.push(0);
    }
    finalArray.push([...weekArray]);
    while (finalArray[0].length < 7) {
      finalArray[0].unshift(0);
    }

    setMonthArray(finalArray);
  };

  useEffect(() => {
    getDateArray();
  }, [date]);

  return (
    <div className="info_calendar__container">
      <div className="calendar__wrapper">
        <div className="calendar__header">
          <button
            onClick={() => {
              setDate(
                new Date(
                  date.getFullYear(),
                  date.getMonth() - 1,
                  date.getDate()
                )
              );
            }}
          >
            {"<"}
          </button>
          <p className="month__year">
            {months[date.getMonth()]} {date.getFullYear()}
          </p>
          <button
            onClick={() => {
              setDate(
                new Date(
                  date.getFullYear(),
                  date.getMonth() + 1,
                  date.getDate()
                )
              );
            }}
          >
            {">"}
          </button>
        </div>
        <DailyCardContainer day="Today" cardDetails={cardDetails.today} />
        <DailyCardContainer day="Tomorrow" cardDetails={cardDetails.tomorrow} />
      </div>
    </div>
  );
}

export default Calendar;
