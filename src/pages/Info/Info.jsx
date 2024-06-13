import React, { useState } from "react";
import InfoNavbar from "components/InfoNavbar";
import "./styles/info.css";
import LeftInfoNav from "components/LeftInfoNav";
import NavProfile from "components/NavProfile";
import { PersonalInfo, Leaves, Documents, Trainings } from "components/Info";
import EmployeeAttendence from "components/Info/Attendence";
import LeftInfoNavWithSubMenu from "components/LeftInfoNavWithSubMenu";
import { IoIosArrowDown } from "react-icons/io";
import SessionDetails from "components/Info/SessionDetails";
import { Overtime } from "components/Info/Overtimeinfo";
import Addevent from "components/Info/Addevent";

// const navOptions = ["Personal Info", "Leave", "Documents", "Training"];

const navOptions = [
  {
    id: "1",
    title: "Personal Info",
  },
  {
    id: "2",
    title: "Leaves",
  },
  
  {
    id: "3",
    title: "Documents",
  },
  {
    id: "4",
    title: "Trainings",
  },
];

function Info() {
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
      <InfoNavbar currPath="info" />
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

export default Info;
