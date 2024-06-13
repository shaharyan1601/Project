import React from "react";
import Groupt from "components/Groupt.png";
import Myabsenteeism from "./Myabsenteeism";

export default function Absenteeism() {
return (
    <div className="leave__history__container loan_list">
        
      <h3> <img src={Groupt} alt="" /> EMPLOYEE ABSENTEEISM RATE</h3>
      <div className="leave__history__header">
        <p className="faq-paragraph">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </p>
      </div>
      <div className="absent_container">
        <Myabsenteeism />
      </div>
    </div>
)
}