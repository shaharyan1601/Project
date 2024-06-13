import React, { useState } from "react";
import InfoNavbarHR from "components/InfoNavbarHR";
import "./styles/home2.css";
import LeftInfoNav from "components/LeftInfoNav";
import NavProfile from "components/NavProfile";
import LeftInfoNavWithSubMenu from "components/LeftInfoNavWithSubMenu";
import TenureGraph from "components/Home2/tenuregraph";
import Tenure from "components/Home2/employeetenure";
import NetPromoter from "components/Home2/netpromoter";
import Turnover from "components/Home2/turnover";
import Absenteeism from "components/Home2/absenteeism";

// const navOptions = ["Personal Info", "Leave", "Documents", "Training"];

const navOptions = [
  {
    id: "1",
    title: "Net Promoter Score",
  },
  {
    id: "2",
    title: "Turnover rate",
  },
  {
    id: "3",
    title: "Average Tunure Rate",
  },
  {
    id: "4",
    title: "Absenteeism Rate",
  },
  
];

function Home2() {
  const [activeIdx, setActiveIdx] = useState("1");

  const getPage = () => {
    switch (activeIdx) {
      case "1":
        return < NetPromoter />;
      case "2":
        return <Turnover />;
      case "3":
        return <Tenure />;
      case "4":
        return <Absenteeism />;
      default:
        return null;
    }
  };

  return (
    <div className="info-container">
      <InfoNavbarHR currPath="homehr" />
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

export default Home2;
