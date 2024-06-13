import React, { Fragment, useState } from "react";
import InfoNavbar from "../../components/InfoNavbar";
import NavProfile from "../../components/NavProfile";
import LeftInfoNav from "../../components/LeftInfoNav";
import Loan from "../../components/loan";
import "./index.css";
import ToDoLeave from "../../components/ToDoLeave";
import EarlyGoing from "../../components/EarlyGoing";
import ToDoTaskEV from "../../components/ToDoTaskEV";
import ToDoResignation from "../../components/ToDoResignation";
import LetterRequestEV from "../../components/ToDoLetterEV";
import LeftInfoNavWithSubMenu from "../../components/LeftInfoNavWithSubMenu";
import ToDoSurveyForm from "../../components/ToDOSurveyForm";
import { IoIosArrowDown } from "react-icons/io";
import Addevent from "components/Info/Addevent";

export default function ToDo() {
  const [activeIdx, setActiveIdx] = useState("1");
  const [navOptions, setNavOptions] = useState([
    {
      id: "1",
      title: "Survey Form",
    },
    {
      id: "2",
      title: "Task",
    },
    {
      id: "3",
      title: "Add Event",
    },
    {
      id: "4",
      title: "Others",
    },
   
  ]);
  return (
    <div className="leave-container left-panel">
      <InfoNavbar currPath="todo" />
      <div className="leave-wrapper">
        <NavProfile />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LeftInfoNavWithSubMenu
            navOptions={navOptions}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
          />
          {activeIdx === "1" && <ToDoSurveyForm />}
          {activeIdx === "2" && <ToDoTaskEV />}
          {activeIdx === "3" && <Addevent />}
          {activeIdx === "4" && <LetterRequestEV />}
          
        </div>
      </div>
    </div>
  );
}
