import React, { Fragment, useState } from "react";
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
import LoanRequest from "components/loan/LoanRequest";
import Addevent from "components/Info/Addevent";

export default function ToDoHR() {
  const [activeIdx, setActiveIdx] = useState("1");
  const [navOptions, setNavOptions] = useState([
    {
      id: "1",
      title: "Task",
      icon: <IoIosArrowDown />,
      subNav: [
        {
          id: "1-submenu1",
          title: "Survey Form",
          path: "/Countrystatecity",
        },
        {
          id: "1-submenu2",
          title: "Add Event",
        }
      ],
    },
    {
      id: "2",
      title: "Leave",
    },
    {
      id: "3",
      title: "Early Going",
    },
    {
      id: "4",
      title: "Resignation",
    },
    {
      id: "5",
      title: "Letter request",
    },
    {
      id: "6",
      title: "Loan",
      icon: <IoIosArrowDown />,
      subNav: [
        {
          id: "6-submenu1",
          title: "Loan Request",
         
        },
      ],
    },
  ]);
  return (
    <div className="leave-container left-panel">
      <InfoNavbarHR currPath="todoHR" />
      <div className="leave-wrapper">
        <NavProfile />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LeftInfoNavWithSubMenu
            navOptions={navOptions}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
          />
          {activeIdx === "1" && <ToDoTask />}
          {activeIdx === "1-submenu1" && <ToDoSurveyForm />}
          {activeIdx === "1-submenu2" &&<Addevent />}
          {activeIdx === "2" && <ToDoLeave />}
          {activeIdx === "3" && <EarlyGoing />}
          {activeIdx === "4" && <ToDoResignation />}
          {activeIdx === "5" && <ToDoLetterRequest />}
          {activeIdx === "6" && <Loan />}
          {activeIdx === "6-submenu1" && <LoanRequest />}
        </div>
      </div>
    </div>
  );
}
