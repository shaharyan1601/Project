import React, { useState, useEffect } from "react";
import Trainings from "./Trainings";
import axios from "axios";

const TrainingData = () => {
  const [trainingData, setTrainingData] = useState([]);

  useEffect(() => {
    // Fetch training data from the backend when the component mounts
    const fetchTrainingData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}\myinfo/training`);
        setTrainingData(response.data);
      } catch (error) {
        console.error("Error fetching training data:", error);
      }
    };

    fetchTrainingData();

     
    return () => {
      
    };
  }, []); 

  return (
    <div>
      <Trainings trainingData={trainingData} />
    </div>
  );
};

export default TrainingData;
