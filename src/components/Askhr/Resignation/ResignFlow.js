import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Button } from "react-bootstrap";
import "./index.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import CustomDatePicker from "../../CustomDatePicker/DatePicker";

const AskCard = ({ name, position, dates, dots, seen }) => (
  <div className="ask-card-1">
    <h3>{name}</h3>
    <p>{position}</p>
    <div className="ask-card-1-main">
      <div className="ask-card-1-date">
        {dates.map((date, index) => (
          <div key={index}>{date}</div>
        ))}
      </div>
      <div className="ask-card-3-dots">
        {dots.map((dot, index) => (
          <span key={index} className={`ask-card-dots${index + 1}`}></span>
        ))}
      </div>
      <span className="ask-card-dots"></span>
      <div className="ask-card-1-seen">
        {seen.map((status, index) => (
          <div key={index}>{status}</div>
        ))}
      </div>
    </div>
  </div>
);

const ResignForm = () => {
  return (
    <div className="leave__history__container loan_list">
      <div className="resig">
        <h4>RESIGNATION EXIT WORKFLOW</h4>

        <div className="resig-line-th">
          <div className="ask-container-line">
            <span></span>
          </div>
          <div>
            <p>1</p>
          </div>
          <div>
            <p>2</p>
          </div>
          <div>
            <p>3</p>
          </div>
        </div>

        <div className="ask-card">
          <AskCard
            name="Vivek Rane"
            position="TL (Technical Lead)"
            dates={["Mon, 10th, Nov 3:30pm", "Mon, 10th, Nov 3:30pm", "Mon, 10th, Nov 3:30pm"]}
            dots={[1, 2, 3]}
            seen={["Seen", "Processing", "Approved"]}
          />

          <AskCard
            name="Rasika Shinde"
            position="IT - Project Manager"
            dates={["Mon, 10th, Nov 2:30pm", "Mon, 10th, Nov 2:30pm", "Mon, 10th, Nov 2:30pm"]}
            dots={[1, 2, 3]}
            seen={["Seen", "Processing", "Rejected"]}
          />

          <div className="ask-card-1" id="ss">
            <h3>HR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResignForm;
