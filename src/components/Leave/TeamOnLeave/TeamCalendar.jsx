import React, { useEffect, useState } from 'react';
import { IoNuclearOutline } from "react-icons/io5";
import axios from 'axios';
import Leavecalendar from "components/Leavecalendar.png";

import './calendar.css';
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June",
 "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

function HolidayCalendar(){
    const [date, setDate] = useState(new Date());
    const [monthArray, setMonthArray] = useState([]);
    const [leaves, setLeaves] = useState([]);

    const getDateArray = ()=>{
        let currPos=0;
        let firstDay = date.getDay();
        let d = new Date(date.getFullYear(), date.getMonth()+1,0);
        let totalDays = d.getDate();
        let finalArray = new Array();
        let weekArray = new Array();
        // while(currPos!=firstDay){
        //     weekArray.push(0);
        //     currPos++;
        // }
        let currDay = 1;
        while(currDay<=totalDays){
            var temp = new Date(date.getFullYear(),date.getMonth(),currDay);
            if(temp.getDay()==0 && weekArray.length!=0){
                finalArray.push([...weekArray]);
                weekArray.length=0;
            }
            weekArray.push(currDay);
            currDay++;
        }
        while(weekArray.length!=7){
            weekArray.push(0);
        }
        finalArray.push([...weekArray]);
        while (finalArray[0].length <7) {
            finalArray[0].unshift(0);
        }

        setMonthArray(finalArray);

    };
    const checkLeave = (days)=>{
        for(let idx =0;idx<leaves.length;idx++){
            let value = leaves[idx];
            var leaveDateArr = value.date.split('-');
            
            var leaveDate = new Date(
                leaveDateArr[0],
                leaveDateArr[1],
                leaveDateArr[2]
            );
            // console.log(leaveDateArr[0],leaveDateArr[1],leaveDateArr[2], leaveDate);
            var givenDate = new Date(date.getFullYear(),date.getMonth(),days);
            // console.log(days,"leave",leaveDate.getTime(),leaveDate,"given",givenDate.getTime(),givenDate);
            if(leaveDate.getTime()==givenDate.getTime()){
                console.log("true",leaveDate);
                let ans = {
                    className: value.cat,
                    circle: value.circle,
                    label: value.label,
                }
                console.log(ans);
                return ans
            }
        }
        
        return {
            className: "",
            circle: "",
            label: ""
        }
    }
   useEffect(()=>{
        getDateArray();
        fetchData();
    },[date])

    const fetchData = async () => {
        try {
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            // Make an HTTP GET request to fetch leave data for the specified year and month
            const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/leave/team_leave/${year}/${month}`);
            setLeaves(response.data.data.leaves); // Extracting the 'leaves' field from the response
            getDateArray();
        } catch (error) {
            console.error('Error fetching leave data:', error);
        }
    };
    
  return (
    <div className='leave__history__container loan_list'>
        <h3> <img src={Leavecalendar} alt="" /> TEAM ON LEAVE</h3>
        <p className="faq-paragraph">Manage our company holidays and stay upto date information</p>
        <div className="calendar__wrapper">
            <div className="calendar__header">
                <button onClick={()=>{setDate(new Date(date.getFullYear(),date.getMonth()-1,date.getDate()))}}>{"<"}</button>
                <p className="month__year">{months[date.getMonth()]} {date.getFullYear()}</p>
                <button onClick={()=>{setDate(new Date(date.getFullYear(),date.getMonth()+1,date.getDate()))}}>{">"}</button>
            </div>
            <table className='calendar__table'>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thur</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
                {monthArray.map((weeks, weekIndex) => (
                            <tr key={weekIndex}>
                                {weeks.map((days, dayIndex) => (
                                    <td key={dayIndex} className={`${checkLeave(days).className}`}>
                                        {days !== 0 && (
                                            <span className={`${(dayIndex === 0 || dayIndex === 6) ? "weekDays" : ""} 
                                                ${(days === (new Date().getDate()) && date.getMonth() === (new Date().getMonth())) ? "today" : ""} day`}>
                                                {days}
                                            </span>
                                        )}
                                        {/* {days !== 0 && (
                                            <div className='leaveLabel'>
                                                <div className={`circle ${checkLeave(days).circle}`}></div>
                                                {checkLeave(days).label}
                                            </div>
                                        )} */}
                                    </td>
                                ))}
                            </tr>
                        ))}
            </table>
            <div className="calendar__markers">
                <div className="div">
                    <div className="circle sickLeaveCircle"></div>
                    <span>Sick Leave</span>
                </div>
                <div className="div">
                    <div className="circle casualCircle"></div>
                    <span>Casual Leave</span>
                </div>
                <div className="div">
                    <div className="circle maternityCircle"></div>
                    <span>Maternity Leave</span>
                </div>
                <div className="div">
                    <div className="circle paternityCircle"></div>
                    <span>Paternity Leave</span>
                </div>
                <div className="div">
                    <div className="circle bereavementCircle"></div>
                    <span>Bereavement Leave</span>
                </div>
                <div className="div">
                    <div className="circle lossOfPayCircle"></div>
                    <span>Loss of Pay</span>
                </div>
                <div className="div">
                    <div className="circle holidayCircle"></div>
                    <span>Holidays</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HolidayCalendar