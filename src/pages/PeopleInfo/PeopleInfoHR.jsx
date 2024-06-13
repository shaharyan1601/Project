import React, { useState } from "react";
import InfoNavbarHR from "components/InfoNavbarHR";
import "./styles/infoHR.css";
import LeftInfoNav from "components/LeftInfoNav";
import NavProfileHR from "components/NavProfileHR";
import { PersonalInfo, Leaves, Documents, Trainings } from "components/Info";
import PersonalInfoHR from "components/Info/PersonalInfoHR";
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
    title: "Leave",
  },
  {
    id: "3",
    title: "Attendence",
    icon: <IoIosArrowDown />,
    subNav: [
      { id: "3-attendence-1", title: "Session Details" },
      { id: "3-attendence-2", title: "Overtime Info" },
    ],
  },
  {
    id: "4",
    title: "Documents",
  },
  {
    id: "5",
    title: "trainings",
  },
];

export default function PeopleInfoHR() {

  const [activeIdx, setActiveIdx] = useState("1");

  const getPage = () => {
    switch (activeIdx) {
      case "1":
        return <PersonalInfoHR />;
      case "2":
        return <Leaves />;
      case "3":
        return <EmployeeAttendence />;
      case "3-attendence-1":
      return <SessionDetails />;
      case "3-attendence-2":
        return <Overtime />;
      case "4":
        return <Documents />;
      case "5":
        return <Trainings />;
      default:
        return null;
    }
  };

  return (
    <div className="info-container">
      <InfoNavbarHR currPath="peopleHR" />
      <div className="info-wrapper">
        <NavProfileHR />
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


