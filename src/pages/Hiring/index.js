import React, { useState } from "react";
import InfoNavbar from "../../components/InfoNavbar";
import NavProfile from "../../components/NavProfile";
import "./index.css";
import LeftInfoNavWithSubMenu from "../../components/LeftInfoNavWithSubMenu";
import HiringJobOpeningListEmp from "../../components/HiringJobOpeningListEmp";
import TalentPool from "components/hiringTalentPool";

export default function Hiring() {
  const [activeIdx, setActiveIdx] = useState("1");
  const [navOptions] = useState([
    {
      id: "1",
      title: "Job Opening",
    },

    {
      id: "2",
      title: "Talent Pool",
    },
  ]);
  return (
    <div className="leave-container left-panel">
      <InfoNavbar currPath="hiring" />
      <div className="leave-wrapper">
        <NavProfile />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LeftInfoNavWithSubMenu
            navOptions={navOptions}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
          />
          {activeIdx === "1" && <HiringJobOpeningListEmp />}
          {activeIdx === "2" && <TalentPool />}
        </div>
      </div>
    </div>
  );
}
