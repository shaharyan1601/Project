import React, { useState } from "react";
import NavProfile from "components/NavProfile";
import "./index.css";
import {
  PeopleTeam,
  PeopleReports,
  UpcomingBirthday,
  UpcomingAnniversary,
} from "components/People";
import PeopleEmployeeListHR from "components/People/EmployeeListHR";
import LeftInfoNavWithSubMenu from "components/LeftInfoNavWithSubMenu";
import { IoIosArrowDown } from "react-icons/io";
import InfoNavbarHR from "components/InfoNavbarHR";

const navOptions = [
  {
    id: "1",
    title: "Employee List",
  },
  {
    id: "2",
    title: "Team",
    icon: <IoIosArrowDown />,
    subNav: [
      { id: "2-axzora-it", title: "Axzora - IT" },
      { id: "2-axzora-education", title: "Axzora - Education" },
      { id: "2-axzora-resourcing", title: "Axzora - Resourcing" },
      { id: "2-axzora-sports", title: "Axzora - Sports" },
      { id: "2-axzora-gis", title: "Axzora - GIS" },
    ],
  },
  {
    id: "3",
    title: "Reports",
    icon: <IoIosArrowDown />,
    subNav: [
      { id: "3-upcomingBirthday", title: "Upcoming Birthday" },
      { id: "3-upcomingAnniversary", title: "Upcoming Anniversary" },
    ],
  },
];

export default function PeopleHR() {
  const [activeIdx, setActiveIdx] = useState("1");

  const getPage = () => {
    switch (activeIdx) {
      case "1":
        return <PeopleEmployeeListHR />;
      case "2":
        return <PeopleTeam />;
      case "2-axzora-it":
        return <PeopleTeam />;
      case "2-axzora-education":
        return <PeopleTeam />;
      case "2-axzora-resourcing":
        return <PeopleTeam />;
      case "2-axzora-sports":
        return <PeopleTeam />;
      case "2-axzora-gis":
        return <PeopleTeam />;
      case "3":
        return <PeopleReports />;
      case "3-upcomingBirthday":
        return <UpcomingBirthday />;
      case "3-upcomingAnniversary":
        return <UpcomingAnniversary />;
      default:
        return null;
    }
  };

  return (
    <div className="leave-container left-panel">
      <InfoNavbarHR currPath="peopleHR" />
      <div className="leave-wrapper">
        <NavProfile />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LeftInfoNavWithSubMenu
            navOptions={navOptions}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
          />
          {getPage()}
        </div>
      </div>
    </div>
  );
}
