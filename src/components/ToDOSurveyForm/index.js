import React, { useState } from "react";
import "./index.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Questions from "./Questions";
import { Button } from "react-bootstrap";
import SurveyModal from "./SurveyModal";
import surveyform from "components/surveyform.png";

export default function ToDoSurveyForm() {
  const [open, setOpen] = useState(false);
  const [surveyId, setSurveyId] = useState(null);

  const handleModal = (id) => {
    setSurveyId(id); // Set the survey ID
    setOpen(true);
  };

  const questions = [
    {
      id: 1,
      title: "Overall, how satisfied are you working with this company?",
      options: [
        "Very Disappinted",
        "Dissatisfied",
        "Neutral",
        "Satisfied",
        "Delighted",
      ],
    },
    {
      id: 2,
      title:
        "Do you agree that there is an opportunity for career growth and development with our company?",
      options: [
        "Stronly Disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree",
      ],
    },
    {
      id: 3,
      title:
        "Do you look forward to working for the same organization in the next two years?",
      options: ["No", "May be", "Yes"],
    },
    {
      id: 4,
      title:
        "After joining our company, are you able to strike the right balance between your professional and personal life?",
      options: [
        "Stronly Disagree",
        "Diagree",
        "Neutral",
        "Agree",
        "Strongly Agree",
      ],
    },
  ];

  return (
    <div className='leave__history__container loan_list'>
      <div style={{ position: "relative", display: "inline-block" }}>
        <h3 className="section-title"><img src={surveyform} alt="" /> EMPLOYEE SATISFACTION SURVEY FORM</h3>
        <span style={{ cursor: "pointer" }}>
          {/* Add any additional content here */}
        </span>
      </div>
      <div className="leave__history__header">
        <p classname="faq-paragraph" style={{marginLeft:32}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </p>
      </div>
      <Questions questions={questions} />
      <Button onClick={() => handleModal(surveyId)} className="modal_btn change_btn" style={{marginLeft:"12vw"}}>
        Submit
      </Button>
      {open && (
        <SurveyModal
          open={open}
          title="Survey Form"
          handleClose={() => setOpen(false)}
          surveyId={surveyId} // Pass the surveyId to SurveyModal
        />
      )}
    </div>
  );
}
