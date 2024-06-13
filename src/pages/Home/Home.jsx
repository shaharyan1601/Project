import React, { useState,useEffect } from "react";
import InfoNavbar from "components/InfoNavbar";
import LeftInfoNav from "components/LeftInfoNav";
import { TbCalendarTime } from "react-icons/tb";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FiArrowLeftCircle,FiArrowRightCircle } from "react-icons/fi";
import NavProfile from "components/NavProfile";
import teamData from "./teamList";
import ProfileBox from "components/ProfileBox/ProfileBox";
import './home.css'
import casualImg from './casualImg.png';
import sickImg from './sickImg.png';
import profilePic from './Picture1.png';
import RequestModal from "./RequestModal";
import SuggestionModal from "./SuggestionModal";
import Megaphone from "components/Megaphone.png";
import timeoff from "components/timeoff.png";
import framehome from "components/framehome.png";
import training from "components/training.png";
import axios from "axios";


export default function Home() {
  const [teamData, setTeamData] = useState([]);
  const [events, setEvents] = useState([]);
  const [upcomingHolidays, setUpcomingHolidays] = useState([]);
  const [OpenRequestOff, setOpenRequestOff] = useState(false);
  const [OpenSuggestionModal, setOpenSuggestionModal] = useState(false);
  const [trainings, setTrainings] = useState([]);

  const handleClickRequestOff = () => {
    setOpenRequestOff(true);
  };

  const handleCloseRequestOff = () => {
    setOpenRequestOff(false);
  };

  const handleClickSuggestionModal = () => {
    setOpenSuggestionModal(true);
  };

  const handleCloseSuggestionModal = () => {
    setOpenSuggestionModal(false);
  };

  const handleSubmit = (formData) => {
    // Handle form submission response data here
    console.log(formData);
  };

  useEffect(() => {
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
  }, []);
  

  return (
    <div className="home__container">
      <div className="home__header">
        <InfoNavbar currPath="home"/>
        <NavProfile />
      </div>
        <div className="home__body">
          <div className="home_left_side" style={{marginLeft:"20"}}>
              <div className="time__off__box">
                <h2 className="title_color"><img src={timeoff} alt="" /> Time Off</h2>
                <div className="boxes">
                  <div>
                    <p className="off_type">Casual</p>
                    <div className="img_container">
                      <img src={casualImg} alt="" />
                      <h2 className="count">8</h2>
                    </div>
                    <div className="available_day">Days Available</div>
                    <div className="scheduled_day">1 day scheduled</div>
                  </div>
                  <div className="line"></div>
                  <div>
                    <p className="off_type">Sick days</p>
                    <div className="img_container">
                      <img src={sickImg} alt="" />
                      <h2 className="count">8</h2>
                    </div>
                    <div className="available_day">Days Available</div>
                    <div className="scheduled_day">2 day scheduled</div>
                  </div>
                </div>
                <button className="bton" onClick={handleClickRequestOff }> Request Time Off</button>
              </div>
              <div className="upcoming__holiday">
                  <h2 className="title_color"><img src={timeoff} alt="" /> Upcoming Holiday</h2>
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
                <h2 className="title_color"><img src={training} alt="" /> Training</h2>
                <div className="training__list">
                  <p>2 active training</p>
                  <p>2 past due expired</p>
                </div>
              </div>
          </div>
          <div className="home_right_side">
        <div className="updates_axzora">
          <h2 className="title_color"><img src={Megaphone} alt="" /> What's happening at Axzora</h2>
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
            <h2 className="title_color"><img src={framehome} alt="" /> Team Axzora Overview</h2>
            <div className="profile__container">
              {teamData.map((item, index) => (
                <ProfileBox key={index} name={item.name} email={item.email} position={item.position} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {OpenRequestOff && (
        <RequestModal
          open={OpenRequestOff}
          handleClose={handleCloseRequestOff}
          title="Request Time Off"
          onSubmit={handleSubmit}
        />
      )}
      {OpenSuggestionModal && (
        <SuggestionModal
          open={OpenSuggestionModal}
          handleClose={handleCloseSuggestionModal}
          title=" Place Your Suggestion Here"
        />
      )}
    </div>
  );
}