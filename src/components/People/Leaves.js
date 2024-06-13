import React, {useEffect, useState} from "react";
import { SlCalender } from "react-icons/sl";
import "./Leaves.css";
import axios from "axios";
import Calendar from "./Calender";
import { leavesData } from "pages/leave/leaveData";

const Leaves = () => {
  const [leaveData, setLeaveData] = useState({
    availableLeaves: 0,
    leavesUsed: 0,
    overdueLeaves: 0,
    pendingLeaves: 0,
    approvedLeaves: 0,
    rejectedLeaves: 0,
    leaves: [],
    upcomingHolidays: [],
    month: "January 2024",
  });

  function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0]; // Returns date in 'YYYY-MM-DD' format
  }
  
  useEffect(() => {
    const fetchLeaveData = async () => {
      try {
        // Fetch leave data for the current month
        const loginDate = getCurrentDate();
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/people/list_of_leave/${loginDate}`);
        setLeaveData(response.data.data);
      } catch (error) {
        console.error("Error fetching leave data:", error.message);
      }
    };

    fetchLeaveData();
  }, []);


  return (
    <div className="leaves-list">
      <div className="flex job-open-list-heading">
        <div>
          <SlCalender size={25} />
        </div>
        <div className="job-open-list-title">
          <h3>LEAVES</h3>
        </div>
      </div>
      <div className="first-grid">
        <div className="first-sub-grid">
        <div className="grid-inside">
          <h1 style={{ fontWeight: 600 }}>{leaveData.availableLeaves}</h1>
          <h4>Available leaves this year</h4>
        </div>
        <div className="grid-inside with-border">
          <h1 style={{ fontWeight: 600 }}>{leaveData.leavesUsed}</h1>
          <h4>Leaves used this year</h4>
        </div>
        <div className="grid-inside">
          <h1 style={{ fontWeight: 600 }}>{leaveData.overdueLeaves}</h1>
          <h4 style={{ marginLeft: 10 }}>
            Overdue leaves to use by this year
          </h4>
        </div>
        </div>
        <div className="first-sub-grid">
          <div className="grid-inside">
            <h1 style={{ fontWeight: 600 }}>{leaveData.pendingLeaves}</h1>
            <h4>Pending Leave</h4>
          </div>
          <div className="grid-inside with-border2 ">
             <h1 style={{ fontWeight: 600 }}>{leaveData.approvedLeaves}</h1>
            <h4>Approved Leave Applications</h4>
            
          </div>
          <div className="grid-inside" >
            <h1 style={{ fontWeight: 600 }}>{leaveData.rejectedLeaves}</h1>
            <h4 style={{ marginLeft: 0 }}>
              Rejected leave applications
            </h4>
          </div>
        </div>
      </div>
      <div className="second-grid">
        <div className="grid-2">
          <Calendar leaves={leavesData} />
        </div>
        <div className="grid-1">
          <div className="grid-1-inside">
            <h4 style={{ textAlign: "center" }}>{leaveData.month}</h4>
            <ul>
              {leaveData.upcomingHolidays.map((holiday) => (
                  <li key={holiday.date}>
                    <div>
                      <h5>{holiday.date}</h5>
                      <span>({holiday.name})</span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaves;
