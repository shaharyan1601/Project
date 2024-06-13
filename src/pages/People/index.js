import React, { useState } from "react";
import InfoNavbar from "components/InfoNavbar";
import NavProfile from "components/NavProfile";
import "./index.css";
import {
  PeopleTeam,
  PeopleReports,
  PeopleEmployeeList,
  UpcomingBirthday,
  UpcomingAnniversary,
} from "components/People";
import LeftInfoNavWithSubMenu from "components/LeftInfoNavWithSubMenu";
import { IoIosArrowDown } from "react-icons/io";

const navOptions = [
  {
    id: "1",
    title: "Organisation Chart",
  },
 
];

export default function People() {
  const [activeIdx, setActiveIdx] = useState("1");

  const getPage = () => {
    switch (activeIdx) {
      case "1":
        return <PeopleEmployeeList />;
      
      default:
        return null;
    }
  };

  return (
    <div className="leave-container left-panel">
      <InfoNavbar currPath="people" />
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
