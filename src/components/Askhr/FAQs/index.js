import React, { useState } from "react";
import "./index.css";
import Questionsign from "components/Questionsign.png";

export default function FAQs() {
  const [question, setQuestion] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_NODE_URL}ask_hr/askquestion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ask: question }),
      });
      const data = await response.json();
      console.log(data.message);
      // Handle success, maybe show a success message to the user
    } catch (error) {
      console.error("Error submitting question:", error.message);
      // Handle error, maybe show an error message to the user
    }
  };

  const faqs = [
    "What is work? How is work time classified",
    "How is work time counted for salaried workers?",
    "Does on-call time count as work time?",
    "Do lectures, meetings, and training programs count as work time?",
    "Does sick leave count as work time? What about vacations?",
    "Is there an app to log in work hours?",
    "How to determine PTO amounts?"
  ];

  return (
    <div className="leave__history__container loan_list">
      <h3>
        <img src= {Questionsign} alt="" /> Frequently Asked Questions
      </h3>
      <div className="leave__history__header">
        <p className="faq-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </p>
      </div>
      <div className="ask-container-3">
        {faqs.map((faq, index) => (
          <div key={index} className="ask-container-3-child">
            <p>
              {index + 1}. {faq} <span> + </span>
            </p>
          </div>
        ))}
        <div className="ask-container-3-child-foot">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask your question here..."
          />
          <button className="first_btn"onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
