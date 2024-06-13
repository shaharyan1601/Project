import React, { useState } from "react";
import InfoNavbarHR from "../../components/InfoNavbarHR";
import NavProfile from "../../components/NavProfile";
import LeftInfoNav from "../../components/LeftInfoNav";
import Loan from "../../components/loan";
import "./index.css";
import ToDoLeave from "../../components/ToDoLeave";
import EarlyGoing from "../../components/EarlyGoing";
import ToDoTask from "../../components/ToDoTask";
import ToDoResignation from "../../components/ToDoResignation";
import ToDoLetterRequest from "../../components/ToDoLetterRequest";
import LeftInfoNavWithSubMenu from "../../components/LeftInfoNavWithSubMenu";
import ToDoSurveyForm from "../../components/ToDOSurveyForm";
import { IoIosArrowDown } from "react-icons/io";
import HiringJobOpening from "../../components/hiringJobOpening";
import HiringJobOpeningList from "../../components/HiringJobOpeningList";
import HiringEmployeeTrack from "../../components/HiringEmployeeTrack";
import HiringOnBoarding from "../../components/HiringOnBoarding";
import HiringOffBoarding from "../../components/HiringOffBoarding";
import HiringTraining from "../../components/HiringTraining";
import HiringSignature from "../../components/HiringSignature";
import HiringEmployeeList from "../../components/HiringEmployeeTrack/HiringEmployeeList";
import TalentPool from "components/hiringTalentPool";

export default function HiringHR() {
  const [activeIdx, setActiveIdx] = useState("1");
  const [navOptions] = useState([
    {
      id: "1",
      title: "Job Opening",
      icon: <IoIosArrowDown />,
      subNav: [
        {
          id: "1-submenu1",
          title: "Add Job Opening",
        },
        {
          id: "1-submenu2",
          title: "Job Opening List",
        },
      ],
    },
    {
      id: "2",
      title: "Applicant Tracking system",
      icon: <IoIosArrowDown />,
      subNav: [
        {
          id: "2-submenu1",
          title: "Add Employee",
        },
        {
          id: "2-submenu2",
          title: "Employee List",
        },
      ],
    },
    {
      id: "3",
      title: "On Boarding",
    },
    {
      id: "4",
      title: "Off Boarding",
    },
    {
      id: "5",
      title: "Training",
    },
    {
      id: "6",
      title: "E-Signature",
    },
  ]);
  return (
    <div className="leave-container left-panel">
      <InfoNavbarHR currPath="hiringHR" />
      <div className="leave-wrapper">
        <NavProfile />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LeftInfoNavWithSubMenu
            navOptions={navOptions}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
          />
          {activeIdx === "1" && <HiringJobOpening />}
          {activeIdx === "1-submenu1" && <HiringJobOpening />}
          {activeIdx === "1-submenu2" && <HiringJobOpeningList />}
          {activeIdx === "2" && <HiringEmployeeTrack />}
          {activeIdx === "2-submenu1" && <HiringEmployeeTrack />}
          {activeIdx === "2-submenu2" && <HiringEmployeeList />}
          {activeIdx === "3" && <HiringOnBoarding />}
          {activeIdx === "4" && <HiringOffBoarding />}
          {activeIdx === "5" && <HiringTraining />}
          {activeIdx === "6" && <HiringSignature />}
         
        </div>
      </div>
    </div>
  );
}
