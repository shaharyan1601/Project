import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InfoNavbarHR from "components/InfoNavbarHR";
import LeftInfoNav from "components/LeftInfoNav";
import { TbCalendarTime } from "react-icons/tb";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FiArrowLeftCircle,FiArrowRightCircle } from "react-icons/fi";
import NavProfileHR from "components/NavProfileHR";
import teamData from "./teamList";
import ProfileBox from "components/ProfileBox/ProfileBox";
import './home.css'
import casualImg from './casualImg.png';
import sickImg from './sickImg.png';
import profilePic from './Picture1.png';
import graph  from './graph.png';
import timeoff from "components/timeoff.png";
import Megaphone from "components/Megaphone.png";
import training from "components/training.png";
import framehome from "components/framehome.png";
import tick from "components/tick.png";
import axios from "axios";


export default function HomeHr() {
  const [teamData, setTeamData] = useState([]);
  const [upcomingHolidays, setUpcomingHolidays] = useState([]);
  const [loginDate, setLoginDate] = useState("");
  const [pendingRequests, setPendingRequests] = useState([]);
  const [events, setEvents] = useState([]);
  const [trainings, setTrainings] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home2');
  };

  useEffect(() => {
    // Fetch data from the backend API
    axios.get(`${process.env.REACT_APP_NODE_URL}/home/team_axzora`)
    .then(response => {
      setTeamData(response.data.data);
    })
    .catch(error => {
      console.error("Error fetching team data:", error);
    });

  axios.get(`${process.env.REACT_APP_NODE_URL}/home/upcoming-holidays`)
    .then(response => {
      setUpcomingHolidays(response.data);
    })
    .catch(error => {
      console.error("Error fetching upcoming holidays:", error);
    });

  axios.get(`${process.env.REACT_APP_NODE_URL}/home/happening`)
    .then(response => {
      setEvents(response.data.data.event);
    })
    .catch(error => {
      console.error("Error fetching events data:", error);
    });

    axios.get(`${process.env.REACT_APP_NODE_URL}/home/training`)
      .then(response => {
        setTrainings(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching training data:", error);
      });

      axios.get(`${process.env.REACT_APP_NODE_URL}/pending_request`)
      .then(response => {
        setPendingRequests(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching pending requests:", error);
      });

      
  }, []); 

    

  return (
    <div className="home__container">
      <div className="home__header">
        <InfoNavbarHR currPath="homehr"/>
        <NavProfileHR />
      </div>
        <div className="home__body">
          <div className="home_left_side">
              <div className="time__off__box">
                <h4 className="title_color"><img src={timeoff} alt="" /> Statistics and Analysis</h4>
                <div className="boxes">
                  <div>
                    <img src={graph} alt="" height={120} style={{marginLeft:"1vw"}}/>
                  </div>
                </div>
                <button className="btn" style={{marginTop:20}} onClick={handleClick}>Know More</button>
                
              </div>
              <div className="upcoming__holiday">
                  <h4 className="title_color"><img src={timeoff} alt="" /> Upcoming Holiday</h4>
                  <div className="upcoming_list">
                    {upcomingHolidays.map((holiday, index) => (
                      <div key={index} className="list">
                        <TbCalendarTime className="calendarImg" />
                        <div className="date_container">
                          <p className="date">{holiday.date}</p>
                          <p className="occasion">{holiday.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              <div className="training">
                <h2 className="title_color"><img src={training} alt="" />Training</h2>
                <div className="training__list">
                  <p>2 active training</p>
                  <p>2 past due expired</p>
                </div>
              </div>
          </div>
          <div className="home_right_side">
          <div className="updates_axzora">
          <h2 className="title_color"><img src={Megaphone} alt="" />What's happening at Axzora</h2>
          <div className="update__list">
            {events.map((event, index) => ( 
              <div className="update_content" key={index}>
                <img src={profilePic} alt="" />
                <div className="update_desc">
                  <p>{event.name}</p>
                  <p className="day">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
            <div className="pending_request">
              <h2 className="title_color"><img src={tick} alt="" /> Pending Approval Request</h2>
              <div className="list">
              {pendingRequests.map((request, index) => (
          <div key={index} className="pending_content">
            <MdOutlinePermContactCalendar className="calenderImg"/>
            <div>
              <p className="content_title">{request.title}</p>
              <div className="time">{request.time}</div>
            </div>
          </div>
        ))}
              </div>
            </div>
          </div>
        </div>
        <div className="home__footer">
          <h4 className="title_color"><img src={framehome} alt="" /> Team Axzora Overview</h4>
          <div className="profile__container">
            <FiArrowLeftCircle className="arrow"/>
            <div className="profileWrapper">
              {teamData.map((item)=>{
                return <ProfileBox name={item.name} email={item.email} position={item.position} desc = {item.desc} />
              })}

            </div>
            <FiArrowRightCircle className="arrow"/>
          </div>
        </div>
        
    </div>
  )
}
