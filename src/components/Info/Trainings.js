import React, { useState, useEffect } from "react";
import axios from "axios";
import OrganizationHeader from "components/Utils/OrganizationHeader";
import Vector from "components/Vector.png";

const Trainings = () => {
  const [trainingData, setTrainingData] = useState([]);

  useEffect(() => {
    fetchTrainingData();
  }, []);

  const fetchTrainingData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/myinfo/training`);
      setTrainingData(response.data.data);
    } catch (error) {
      console.error("Error fetching training data:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="leave__history__container loan_list" style={{ width: "auto" }}>
      <h3>
        {" "}
        <img src={Vector} alt="" /> TRAINING
      </h3>
      <p className="faq-paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas dolor saepe necessitatibus deserunt!
      </p>

      {trainingData.length > 0 && <TrainingBody trainingData={trainingData} />}
    </div>
  );
};

export default Trainings;

const TrainingBody = ({ trainingData }) => (
  <div>
    {trainingData.map((training, index) => (
      <TrainingData key={index} trainingName={training.trainingName} details={training.details} />
    ))}
  </div>
);

const TrainingData = ({ trainingName, details }) => (
  <div>
    <h4 style={{ fontWeight: "bold" }}>{trainingName}</h4>
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        border: "1px solid rgb(150, 145, 145, 0.5)",
        borderRadius: 10,
      }}
    >
      {details.map((detail, i) => (
        <div
          key={i}
          style={{
            color: "rgb(150, 145, 145)",
            border: "1px solid rgb(150, 145, 145, 0.5)",
            padding: 10,
            borderTopLeftRadius: i === 0 ? 10 : null,
            borderTopRightRadius: i === 0 ? 10 : null,
            borderBottomLeftRadius: i === details.length - 1 ? 10 : null,
            borderBottomRightRadius: i === details.length - 1 ? 10 : null,
          }}
        >
          {detail}
        </div>
      ))}
    </div>
  </div>
);
