import React, { useState } from "react";
import InfoNavbarHR from "components/InfoNavbarHR";
import "./styles/infoHR.css";
import LeftInfoNav from "components/LeftInfoNav";
import NavProfile from "components/NavProfile";
import { PersonalInfo, Leaves, Documents, Trainings } from "components/Info";
import EmployeeAttendence from "components/Info/Attendence";
import LeftInfoNavWithSubMenu from "components/LeftInfoNavWithSubMenu";
import { IoIosArrowDown } from "react-icons/io";
import SessionDetails from "components/Info/SessionDetails";
import { Overtime } from "components/Info/Overtimeinfo";


// const navOptions = ["Personal Info", "Leave", "Documents", "Training"];

const navOptions = [
  {
    id: "1",
    title: "Personal Info",
  },
  {
    id: "2",
    title: "Leave",
  },
  {
    id: "3",
    title: "Documents",
  },
  {
    id: "4",
    title: "trainings",
  },
];

export default function InfoHR() {

  const [activeIdx, setActiveIdx] = useState("1");

  const getPage = () => {
    switch (activeIdx) {
      case "1":
        return <PersonalInfo />;
      case "2":
        return <Leaves />;
      case "3":
        return <Documents />;
      case "4":
        return <Trainings />;
      default:
        return null;
    }
  };

  return (
    <div className="info-container">
      <InfoNavbarHR currPath="infoHR" />
      <div className="info-wrapper">
        <NavProfile />
        <LeftInfoNavWithSubMenu
          navOptions={navOptions}
          activeIdx={activeIdx}
          setActiveIdx={setActiveIdx}
        />
        {getPage()}
      </div>
    </div>
  );
}


