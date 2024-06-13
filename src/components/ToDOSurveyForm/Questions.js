import React, { useState } from "react";
import "./Questions.css";

function Questions({ questions }) {
  const [formValue, setFormValue] = useState({});

  const handleAnswerChange = (questionIndex, option) => {
    setFormValue((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };
  console.log({ formValue });
  return (
    <ol type="1" className="question-list">
      {questions.map((question, index) => (
        <li key={question.id} className="question-listItem">
          <p className="question">{question.title}</p>
          <ul className="choice-list">
            {question.options.map((option, choiceIndex) => (
              <li className="choice-listIem">
                <label key={choiceIndex} className="container">
                  <input
                    style={{
                      backgroundColor: "gray",
                      border: 0,
                    }}
                    type="radio"
                    name={`question-${index}`}
                    id={`question-${index}`}
                    value={option}
                    onChange={() => handleAnswerChange(index, option)}
                  />
                  <span class="checkmark">{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default Questions;
