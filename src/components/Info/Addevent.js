import React, { useEffect, useState } from 'react';
import { IoNuclearOutline } from "react-icons/io5";
import "./Addevent.css";
import { Button } from "react-bootstrap";
import { FaCalendarCheck } from "react-icons/fa";
import EventForm from './AddEventModal';
import addevent from "components/addevent.png";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June",
 "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

function Addevent({event}) {

    const [date, setDate] = useState(new Date());
    const [monthArray, setMonthArray] = useState([]);
    const [openAddEvent, setOpenAddEvent] = useState(false);

    const handleClickAddEvent = () => {
        setOpenAddEvent(true);
      };
    
      const handleCloseAddEvent = () => {
        setOpenAddEvent(false);
      };

    const getDateArray = ()=>{
        let currPos=0;
        let firstDay = date.getDay();
        let d = new Date(date.getFullYear(), date.getMonth()+1,0);
        let totalDays = d.getDate();
        let finalArray = new Array();
        let weekArray = new Array();

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
    
    

    const checkEvent = (days) => {
        if (!event) {
            // If event is undefined, return a default value
            return {
                className: "",
                circle: "",
                label: ""
            };
        }

        for (let idx = 0; idx < event.length; idx++) {
            let value = event[idx];
            var leaveDateArr = value.date.split('-');

            var leaveDate = new Date(
                leaveDateArr[0],
                leaveDateArr[1],
                leaveDateArr[2]
            );

            var givenDate = new Date(date.getFullYear(), date.getMonth(), days);

            if (leaveDate.getTime() === givenDate.getTime()) {
                console.log("true", leaveDate);
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
        };
    }

    useEffect(() => {
        getDateArray();
    }, [date]);

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log('Form submitted!');
      };



    return (
        <div className="leave__history__container loan_list">
          
              <h3><img src={addevent} alt="" /> ADD EVENT</h3>
              <div className="leave__history__header">
                <p className='faq-paragraph'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  voluptas dolor saepe necessitatibus deserunt!
                </p>
          </div>
          
            <div className="event__wrapper">
                <div className="calendar__header">
                    <button onClick={()=>{setDate(new Date(date.getFullYear(),date.getMonth()-1,date.getDate()))}}>{"<"}</button>
                    <p className="month__year">{months[date.getMonth()]} {date.getFullYear()}</p>
                    <button onClick={()=>{setDate(new Date(date.getFullYear(),date.getMonth()+1,date.getDate()))}}>{">"}</button>
                </div>
                <div className="rounded-table-container"style={{marginTop:30}}>
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
                        {monthArray.map((weeks)=>{
                            return <tr>
                                    {weeks.map((days,index)=>{
                                        const isLeave = checkEvent(days);
                                        return <td className={`${isLeave.className}`}>
                                            {days!=0 && <span 
                                            className={`${(index==0 || index==6)?"weekDays":""}
                                            ${(days==(new Date().getDate()) && date.getMonth()== (new Date().getMonth()))?"today":""} day`}>{days}</span>}
                                            {
                                                <div className='leaveLabel'><div className={`circle ${isLeave.circle}`}></div> {isLeave.label}</div>
                                            }
                                            
                                            </td>
    
                                    })}
                                </tr>
                        })}
                </table>
             </div>
            
            </div>
           
            <div className="res_btns">
                <Button
                  autoFocus
                  onClick={handleClickAddEvent}
                  className="event_btn"
                >
                  Add event
                </Button>

              </div>

              {openAddEvent && (
                <EventForm
                    open={openAddEvent}
                    handleClose={handleCloseAddEvent}
                    title="Add Event"
                />
            )}
        </div>
      )
    }
    
    
    export default Addevent