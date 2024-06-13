import React, { useState, useEffect } from "react";
import InfoNavbarMV from "../../components/InfoNavbarMV";
import NavProfile from "../../components/NavProfile";
import LeftInfoNav from "../../components/LeftInfoNav";
import Loan from "../../components/loan";
import "./index.css";
import LeftInfoNavWithSubMenu from "../../components/LeftInfoNavWithSubMenu";
import { IoIosArrowDown } from "react-icons/io";
import HiringJobOpening from "../../components/hiringJobOpening";
import HiringJobOpeningList from "../../components/HiringJobOpeningList";
import HiringEmployeeTrack from "../../components/HiringEmployeeTrack";
import HiringOnBoarding from "../../components/HiringOnBoarding";
import HiringOffBoarding from "../../components/HiringOffBoarding";
import HiringTraining from "../../components/HiringTraining";
import HiringSignature from "../../components/HiringSignature";
import HiringEmployeeList from "../../components/HiringEmployeeTrack/HiringEmployeeList";


const navOptions = [
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
];

export default function HiringMV() {
  const [activeIdx, setActiveIdx] = useState("1");

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const getPage = () => {
    switch (activeIdx) {
      case "1":
        return <HiringJobOpening />;
      case "1-submenu1":
        return <HiringJobOpening />;
      case "1-submenu2":
        return <HiringJobOpeningList />;
      case "2":
        return <HiringEmployeeTrack />;
      case "2-submenu1":
        return <HiringEmployeeTrack />;
      case "2-submenu2":
        return <HiringEmployeeList />;
      case "3":
        return <HiringOnBoarding />;
      case "4":
        return <HiringOffBoarding />;
      case "5":
        return <HiringTraining />;
      case "6":
        return <HiringSignature />;
      default:
        return null;
    }
  };

  return (
    <div className="leave-container left-panel">
      <InfoNavbarMV currPath="hiringMv" />
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
