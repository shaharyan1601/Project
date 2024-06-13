import React, { useEffect, useState } from "react";
import "./Calender.css";
import axios from "axios";

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

function Calendar({ leaves }) {
  const [date, setDate] = useState(new Date());
  const [monthArray, setMonthArray] = useState([]);
  const [leaveCounts, setLeaveCounts] = useState({

    applied: 0,
    pending: 0,
    approved: 0,
    rejected: 0
  });

  const fetchLeaveCounts = async (year) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/myinfo/leave/${year}`); 
      const { applied, pending, approved, rejected } = response.data.data;
      setLeaveCounts({ applied, pending, approved, rejected });
    } catch (error) {
      console.error('Error fetching leave counts:', error);
    }
  };

  useEffect(() => {
    getDateArray();
    const year =date.getFullYear();
    fetchLeaveCounts(date.getFullYear()); 
  }, [date]);

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


  const checkLeave = (days) => {
    for (let idx = 0; idx < leaves.length; idx++) {
      let value = leaves[idx];
      var leaveDateArr = value.date.split("-");

      var leaveDate = new Date(
        leaveDateArr[0],
        leaveDateArr[1],
        leaveDateArr[2]
      );
      // console.log(leaveDateArr[0],leaveDateArr[1],leaveDateArr[2], leaveDate);
      var givenDate = new Date(date.getFullYear(), date.getMonth(), days);
      // console.log(days,"leave",leaveDate.getTime(),leaveDate,"given",givenDate.getTime(),givenDate);
      if (leaveDate.getTime() == givenDate.getTime()) {
        console.log("true", leaveDate);
        let ans = {
          className: value.cat,
          circle: value.circle,
          label: value.label,
        };
        console.log(ans);
        return ans;
      }
    }

    return {
      className: "",
      circle: "",
      label: "",
    };
  };
  // useEffect(() => {
  //   getDateArray();
  // }, [date]);

  const isApprovedLeave = monthArray[2]
    ?.sort(() => Math.random() - 0.5)
    .slice(2, 3);

  const pendingLeave = monthArray[3]
    ?.sort(() => Math.random() - 0.5)
    .slice(4, 5);

  const rejectedLeave = monthArray[3]
    ?.sort(() => Math.random() - 0.5)
    .slice(5, 6);

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
        <table className="info_calendar__table">
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thur</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          {monthArray.map((weeks, i) => {
            return (
              <tr key={i}>
                {weeks.map((days, index) => {
                  const isLeave = checkLeave(days);
                  return (
                    <td className={`${isLeave.className} `} key={index}>
                      {days != 0 && (
                        <span
                          className={`${
                            index == 0 || index == 6 ? "weekDays" : ""
                          }
                            ${
                              days == new Date().getDate() &&
                              date.getMonth() ==
                              new Date().getMonth()
                              ? "today"
                              : ""
                            } day 
                                        
                            ${
                              isApprovedLeave[0] === days
                              ? "approvedLeave"
                              : null
                            }
                            ${
                              pendingLeave[0] === days
                              ? "pendingLeave"
                              : null
                              }
                            ${
                               rejectedLeave[0] === days
                               ? "rejectedLeave"
                               : null
                            }
                                        
                          `}
                        >
                          {days}
                        </span>
                      )}
                      {/* {
                        <div className="leaveLabel">
                          <div className={`circle ${isLeave.circle}`}></div>{" "}
                          {isLeave.label}
                        </div>
                      } */}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </table>
        <div className="calendar__markers">
          <div className="div">
            <div className="circle holidayCircle"></div>
            <span>Holidays</span>
          </div>
          <div className="div">
            <div className="circle approvedCircle"></div>
            <span>Approved Leaves</span>
          </div>
          <div className="div">
            <div className="circle pendingCircle"></div>
            <span>Pending Leaves</span>
          </div>
          <div className="div">
            <div className="circle rejectedCircle"></div>
            <span>Rejected Leaves</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
